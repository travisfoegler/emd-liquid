import '../../components' // type definitions for type checks and intelliSense
import {
  Component,
  Element,
  h,
  Host,
  Event,
  Listen,
  Prop,
  State,
  Watch,
  EventEmitter,
} from '@stencil/core'
import Tether from 'tether'
import { LdOption } from '../ld-option/ld-option'
import { applyPropAliases } from '../../utils/applyPropAliases'

/**
 * @slot - the default slot contains the select options
 * @slot icon - replaces caret with custom trigger button icon
 */
@Component({
  tag: 'ld-select',
  styleUrl: 'ld-select.css',
  shadow: false,
})
export class LdSelect {
  @Element() el: HTMLElement

  private selectRef!: HTMLElement
  private triggerRef!: HTMLElement
  private popperRef!: HTMLElement
  private scrollContainerRef!: HTMLElement
  private shadowRef!: HTMLElement
  private btnClearRef: HTMLButtonElement
  private popper: Tether
  private observer: MutationObserver

  /**
   * Used as trigger button label in multiselect mode
   * and in single select mode if nothing is selected.
   */
  @Prop() placeholder: string

  /** Used to specify the name of the control. */
  @Prop() name: string

  /** Multiselect mode. */
  @Prop() multiple = false

  /** Disabled state of the component. */
  @Prop() disabled = false

  /** Set this property to `true` in order to mark the select visually as invalid. */
  @Prop() invalid = false

  /**
   * Prevents a state with no options selected after
   * initial selection in single select mode.
   */
  @Prop() preventDeselection = false

  // prettier-ignore
  /**
   * Display mode.
   */
  @Prop() mode?:
    // default
    | 'detached' // = default  + small gap between trigger button and popper
    | 'inline' //   = detached + minumum trigger button width
    | 'ghost' //    = inline   + transparent background and borders

  /** Size of the select trigger button. */
  @Prop() size?: 'sm' | 'lg'

  // TODO: implement compact mode
  // Constrain the display

  /** Attached as CSS class to the select popper element. */
  @Prop() popperClass: string

  /**
   * Stringified tether options object to be merged with the default options.
   */
  @Prop() tetherOptions = '{}'

  @State() initialized = false

  @State() expanded = false

  @State() selected: LdOption[] = []

  @State() themeCl: string

  @State() ariaDisabled = false

  @State() typeAheadQuery: string

  @State() typeAheadTimeout: number

  @Watch('selected')
  emitEvents(newSelection: LdOption[], oldSelection: LdOption[]) {
    if (!this.initialized) return

    const newValues = newSelection.map((option) => option.value)
    const oldValues = oldSelection.map((option) => option.value)
    if (JSON.stringify(newValues) === JSON.stringify(oldValues)) return

    this.input.emit(newValues)
    this.change.emit(newValues)
  }

  @Watch('typeAheadQuery')
  handleTypeAhead(newQuery?: string) {
    if (!newQuery) return

    const options = Array.from(this.popperRef.querySelectorAll('ld-option'))
    const values = options.map((option) => option.value)
    let index = values.findIndex(
      (value) => value.toLowerCase().indexOf(newQuery.toLowerCase()) === 0
    )
    if (index > -1) {
      options[index].focus()
      return
    }

    index = [newQuery, ...values]
      .sort()
      .findIndex(
        (value) => value.toLowerCase().indexOf(newQuery.toLowerCase()) === 0
      )
    if (index > 0) {
      options[index - 1].focus()
    }
  }

  /**
   * Emitted with an array of selected values when an alteration to the selection is committed by the user.
   */
  @Event() change: EventEmitter<string[]>

  /**
   * Emitted with an array of selected values when an alteration to the selection is committed by the user.
   */
  @Event() input: EventEmitter<string[]>

  /**
   * Emitted with an array of selected values when the select component looses focus.
   */
  @Event({ bubbles: false }) blur: EventEmitter<string[]>

  private updatePopperWidth() {
    this.popperRef.style.setProperty(
      'width',
      `${this.selectRef.getBoundingClientRect().width}px`
    )
  }

  private updatePopperShadowHeight() {
    this.shadowRef.style.setProperty(
      'height',
      `calc(100% + ${this.triggerRef.getBoundingClientRect().height}px)`
    )
  }

  private updatePopperTheme() {
    const themeEl = this.el.closest('[class*="ld-theme-"]')
    if (!themeEl) return

    setTimeout(() => {
      this.themeCl = Array.from(themeEl.classList).find(
        (cl) => cl.indexOf('ld-theme-') === 0
      )
    })
  }

  private updatePopper() {
    this.popper.position()
    this.updatePopperWidth()
    this.updatePopperShadowHeight()
    this.updatePopperTheme()
  }

  private initPopper() {
    let customTetherOptions = {}
    try {
      customTetherOptions = JSON.parse(this.tetherOptions)
    } catch (err) {
      console.error(
        'Failed parsing custom Tether options in ld-select component; using default options.',
        err
      )
    }

    this.popper = new Tether({
      classPrefix: 'ld-tether',
      element: this.popperRef,
      target: this.selectRef,
      attachment: 'top left',
      targetAttachment: 'bottom left',
      offset: this.mode ? '-4px 0' : '0 0',
      constraints: [
        {
          to: 'window',
          pin: true,
        },
      ],
      ...customTetherOptions,
    })

    this.popperRef.classList.add('ld-select__popper--initialized')
  }

  private initOptions() {
    const children = this.scrollContainerRef.children
    if (!children.length) {
      throw new TypeError(
        'ld-select requires at least one ld-option element as a child, but found none.'
      )
    }

    const childrenArr = Array.from(children)
    childrenArr.forEach((child) => {
      if (child === this.shadowRef) return
      const tag = child.tagName.toLowerCase()
      if (tag !== 'ld-option') {
        throw new TypeError(
          `ld-select accepts only ld-option elements as children, but found a "${tag}" element.`
        )
      } else if (this.multiple) {
        child.setAttribute('checkbox', 'true')
      } else if (this.preventDeselection) {
        child.setAttribute('prevent-deselection', 'true')
      }
    })

    setTimeout(() => {
      this.selected = ((childrenArr as unknown[]) as LdOption[]).filter(
        (child) => child.selected
      )
    })
  }

  private togglePopper() {
    this.expanded = !this.expanded

    if (this.expanded) {
      this.popper.enable()
    } else {
      this.popper.disable()
      this.triggerRef.focus()
    }
  }

  private handleSlotChange() {
    this.initOptions()
  }

  private clearSelection() {
    Array.from(this.popperRef.querySelectorAll('ld-option')).forEach(
      (option) => {
        option.selected = false
      }
    )
    this.selected = []
  }

  @Listen('resize', { target: 'window', passive: true })
  handleWindowResize() {
    if (this.disabled || this.ariaDisabled) return // this is for a minor performance optimization only

    this.updatePopperWidth()
    this.updatePopperShadowHeight()
  }

  @Listen('ldOptionSelect', { target: 'window', passive: true })
  handleSelect(ev: CustomEvent<boolean>) {
    if (
      (ev.target as HTMLElement).closest('[role="listbox"]') !== this.popperRef
    ) {
      return
    }

    if (this.multiple) {
      // Focus the option, that has been (de-)selected.
      ;(ev.target as HTMLElement).closest('ld-option').focus()
    } else {
      // Deselect currently selected option, if it's not the target option.
      Array.from(this.popperRef.querySelectorAll('ld-option')).forEach(
        (option) => {
          if (option !== (ev.target as HTMLElement).closest('ld-option')) {
            option.selected = false
          }
        }
      )
      this.togglePopper()
    }
    this.initOptions()
  }

  private expandAndFocus() {
    this.handleTriggerClick()
    setTimeout(() => {
      // If selected in single select mode, focus selected
      let optionToFocus
      if (!this.multiple) {
        optionToFocus = this.popperRef.querySelector(
          'ld-option[aria-selected="true"]'
        )
      }
      if (!optionToFocus) {
        optionToFocus = this.triggerRef
      }
      optionToFocus.focus()
    })
  }

  private handleHome(ev) {
    // Move focus to the first option.
    if (this.expanded) {
      ev.preventDefault()
      if (
        this.popperRef.classList.contains('tether-target-attached-top') ||
        this.popperRef.classList.contains('tether-pinned')
      ) {
        this.popperRef.querySelector('ld-option')?.focus()
      } else {
        this.triggerRef.focus()
      }
    }
  }

  private handleEnd(ev) {
    // Move focus to the last option.
    if (this.expanded) {
      ev.preventDefault()
      if (
        this.popperRef.classList.contains('tether-target-attached-top') ||
        this.popperRef.classList.contains('tether-pinned')
      ) {
        this.triggerRef.focus()
      } else {
        const options = this.popperRef.querySelectorAll('ld-option')
        options[options.length - 1]?.focus()
      }
    }
  }

  private selectAndFocus(ev, option) {
    if (!option) return

    if (this.multiple && ev.shiftKey) {
      if (
        document.activeElement?.classList.contains('ld-option') &&
        document.activeElement.getAttribute('aria-selected') !== 'true'
      ) {
        document.activeElement.dispatchEvent(
          new KeyboardEvent('keydown', { key: ' ' })
        )
      }
      option.focus()
      if (option.getAttribute('aria-selected') !== 'true') {
        option.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
      }
    } else {
      option.focus()
    }
  }

  private typeAhead(key: string) {
    // Type a character: focus moves to the next item with a name that starts with the typed character.
    // Type multiple characters in rapid succession: focus moves to the next item with a name that starts
    // with the string of characters typed.
    window.clearTimeout(this.typeAheadTimeout)
    this.typeAheadQuery = (this.typeAheadQuery || '') + key
    this.typeAheadTimeout = window.setTimeout(() => {
      this.typeAheadQuery = ''
    }, 500)
  }

  @Listen('keydown', { passive: false, target: 'window' })
  handleKeyDown(ev: KeyboardEvent) {
    if (this.disabled || this.ariaDisabled) return

    if (
      document.activeElement.closest('[role="listbox"]') !== this.popperRef &&
      document.activeElement.closest('ld-select') !== this.el
    ) {
      return
    }

    if (
      document.activeElement === this.btnClearRef &&
      (ev.key === ' ' || ev.key === 'Enter')
    ) {
      return
    }

    if (
      document.activeElement.closest('[role="listbox"]') !== this.popperRef &&
      document.activeElement.classList.contains(
        'ld-select__btn-clear-single'
      ) &&
      (ev.key === ' ' || ev.key === 'Enter')
    ) {
      return
    }

    switch (ev.key) {
      case 'ArrowDown': {
        // If not expanded, expand popper.
        // If expanded, move focus to the next option.
        // If shift is pressed, select the next option.
        // Holding down the Shift key and then using the Down cursor keys
        // increases the range of items selected.
        ev.preventDefault()
        if (this.expanded) {
          if (ev.metaKey) {
            this.handleEnd(ev)
            return
          }

          let nextOption
          if (
            document.activeElement.nextElementSibling?.classList.contains(
              'ld-option'
            )
          ) {
            nextOption = document.activeElement.nextElementSibling
          } else {
            if (document.activeElement === this.triggerRef) {
              nextOption = this.popperRef.querySelector('ld-option')
            }
          }
          this.selectAndFocus(ev, nextOption)
        } else {
          this.expandAndFocus()
        }
        break
      }
      case 'ArrowUp':
        // If not expanded, expand popper.
        // If expanded, move focus to the previous option.
        // If the first option is focused, focus the trigger button.
        // Holding down the Shift key and then using the Up cursor keys
        // increases the range of items selected.
        ev.preventDefault()
        if (this.expanded) {
          if (ev.metaKey) {
            this.handleHome(ev)
            return
          }

          let prevOption
          if (
            document.activeElement.previousElementSibling?.classList.contains(
              'ld-option'
            )
          ) {
            prevOption = document.activeElement.previousElementSibling
          } else {
            if (document.activeElement === this.triggerRef && !this.expanded) {
              prevOption = this.popperRef.querySelector('ld-option')
            } else if (
              document.activeElement ===
              this.popperRef.querySelector('ld-option')
            ) {
              this.triggerRef.focus()
            }
          }
          this.selectAndFocus(ev, prevOption)
        } else {
          this.expandAndFocus()
        }
        break
      case 'Home':
        this.handleHome(ev)
        break
      case 'End':
        this.handleEnd(ev)
        break
      case ' ':
        // If expanded: Select focused option, close (if single select).
        // If not expanded: Toggle popper.
        ev.preventDefault()
        ev.stopImmediatePropagation()
        if (this.expanded) {
          if (document.activeElement === this.triggerRef) {
            this.handleTriggerClick()
          }
        } else {
          this.handleTriggerClick()
          setTimeout(() => {
            // If selected in single select mode, focus selected.
            let optionToFocus
            if (!this.multiple) {
              optionToFocus = this.popperRef.querySelector(
                'ld-option[aria-selected="true"]'
              )
            } else {
              optionToFocus = this.triggerRef
            }
            if (optionToFocus) optionToFocus.focus()
          })
        }
        break
      case 'Enter':
        // If expanded and trigger button is focused: Toggle popper.
        ev.preventDefault()
        if (this.expanded && document.activeElement === this.triggerRef) {
          this.togglePopper()
        }
        break
      case 'Escape':
        // If expanded: Toggle popper.
        if (this.expanded) {
          ev.preventDefault()
          ev.stopImmediatePropagation()
          this.togglePopper()
        }
        break
      case 'Tab': // Also covers Shift+Tab
        // If expanded: Prevent default.
        if (this.expanded) {
          ev.preventDefault()
          ev.stopImmediatePropagation()
        }
        break
      default:
        if (this.expanded) {
          ev.preventDefault()
          ev.stopImmediatePropagation()
          this.typeAhead(ev.key)
        }
    }
  }

  @Listen('click', {
    target: 'window',
    passive: true,
  })
  handleClickOutside(ev) {
    if (
      ev.target.closest('ld-select') !== this.el &&
      ev.target.closest('[role="listbox"]') !== this.popperRef
    ) {
      this.expanded = false
    }
  }

  // Mobile Safari in some cases does not react to click events on elements
  // which are not interactive. But it does to touch events.
  @Listen('touchend', {
    target: 'window',
    passive: true,
  })
  handleTouchOutside(ev) {
    this.handleClickOutside(ev)
  }

  @Listen('blur', {
    target: 'window',
    capture: true,
  })
  handleBlur(ev) {
    if (!ev.target?.closest) {
      return
    }

    // Ignore blur events outside the select component.
    const target = ev.target as HTMLElement
    if (
      target.closest('[role="listbox"]') !== this.popperRef &&
      target.closest('ld-select') !== this.el
    ) {
      return
    }

    // Stop event propagation if the related target / focus is within the select component.
    if (
      ev.relatedTarget &&
      ((ev.relatedTarget as HTMLElement).classList.contains('ld-option') ||
        (ev.relatedTarget as HTMLElement).closest('ld-select') === this.el)
    ) {
      ev.stopImmediatePropagation()
    }

    // Re-dispatch blur events emitted within popper on the select component.
    if (target.closest('[role="listbox"]') === this.popperRef) {
      const evRedispatched = new FocusEvent(ev.type, ev)
      this.el.dispatchEvent(evRedispatched)
    }
  }

  private handleTriggerClick(ev?: Event) {
    if (ev) ev.preventDefault()

    if (this.disabled || this.ariaDisabled) return

    if (!this.popper) this.initPopper()

    this.togglePopper()
  }

  private handleClearClick(ev: MouseEvent) {
    ev.preventDefault()
    ev.stopImmediatePropagation()

    if (this.disabled || this.ariaDisabled) return

    this.clearSelection()
    this.triggerRef.focus()
  }

  private handleClearSingleClick(ev: MouseEvent, option: LdOption) {
    ev.preventDefault()
    ev.stopImmediatePropagation()

    if (this.disabled || this.ariaDisabled) return
    ;((option as unknown) as HTMLElement).dispatchEvent(
      new KeyboardEvent('keydown', { key: ' ' })
    )
  }

  componentWillLoad() {
    applyPropAliases.apply(this)

    if (this.el.getAttribute('aria-disabled') === 'true') {
      this.ariaDisabled = true
    }
  }

  componentDidLoad() {
    this.initOptions()

    this.observer = new MutationObserver(this.handleSlotChange.bind(this))
    this.observer.observe(this.popperRef, {
      subtree: true,
      childList: true,
    })

    setTimeout(() => {
      this.initialized = true
    })
  }

  componentDidUpdate() {
    if (this.expanded) {
      this.updatePopper()
      setTimeout(() => {
        this.updatePopper()
      })
    }
  }

  disconnectedCallback() {
    window.clearTimeout(this.typeAheadTimeout)
    if (this.popper) this.popper.destroy()
    if (this.observer) this.observer.disconnect()
  }

  render() {
    // Endable detached mode if any display mode is set.
    const detached = !!this.mode

    // Implicitly enable inline mode if ghost mode is enabled.
    const inline = this.mode === 'inline' || this.mode === 'ghost'

    // Disallow ghost in combination with multiple select mode.
    const ghost = !this.multiple && this.mode === 'ghost'

    let cl = 'ld-select'
    if (this.size) cl += ` ld-select--${this.size}`
    if (this.invalid) cl += ' ld-select--invalid'
    if (this.expanded) cl += ' ld-select--expanded'
    if (detached) cl += ' ld-select--detached'
    if (inline) cl += ' ld-select--inline'
    if (ghost) cl += ' ld-select--ghost'

    let triggerCl = 'ld-select__btn-trigger'
    if (this.invalid) triggerCl += ' ld-select__btn-trigger--invalid'
    if (detached) triggerCl += ' ld-select__btn-trigger--detached'
    if (inline) triggerCl += ' ld-select__btn-trigger--inline'
    if (ghost) triggerCl += ' ld-select__btn-trigger--ghost'

    let triggerIconCl = 'ld-select__icon'
    if (this.expanded) triggerIconCl += ' ld-select__icon--rotated'

    let popperCl = 'ld-select__popper'
    if (this.invalid) popperCl += ' ld-select__popper--invalid'
    if (detached) popperCl += ' ld-select__popper--detached'
    if (this.expanded) popperCl += ' ld-select__popper--expanded'
    if (this.size) cl += ` ld-select__popper--${this.size}`
    if (this.themeCl) popperCl += ` ${this.themeCl}`
    if (this.popperClass) popperCl += ` ${this.popperClass}`

    const triggerText = this.multiple
      ? this.placeholder
      : ((this.selected[0] as unknown) as HTMLElement)?.textContent ||
        this.placeholder

    return (
      <Host class={cl} disabled={this.disabled}>
        {this.name
          ? this.selected.map((selected) => (
              <input
                type="hidden"
                name={this.name}
                value={selected.value}
              ></input>
            ))
          : ''}
        <div
          class="ld-select__select"
          ref={(el) => (this.selectRef = el as HTMLElement)}
        >
          <div
            class={triggerCl}
            role="button"
            tabindex={this.disabled && !this.ariaDisabled ? undefined : '0'}
            aria-disabled={
              this.disabled || this.ariaDisabled ? 'true' : 'false'
            }
            aria-haspopup="listbox"
            aria-expanded={this.expanded ? 'true' : 'false'}
            onClick={this.handleTriggerClick.bind(this)}
            ref={(el) => (this.triggerRef = el as HTMLElement)}
          >
            {this.multiple && this.selected.length ? (
              <ul
                class="ld-select__selection-list"
                aria-label="Selected options"
              >
                {this.selected.map((option, index) => {
                  const labelText = ((option as unknown) as HTMLElement)
                    .textContent
                  return (
                    <li key={index} class="ld-select__selection-list-item">
                      <label class="ld-select__selection-label">
                        <span
                          class="ld-select__selection-label-text"
                          title={labelText}
                        >
                          {labelText}
                        </span>

                        <button
                          disabled={
                            this.disabled || this.ariaDisabled
                              ? true
                              : undefined
                          }
                          class="ld-select__btn-clear-single"
                          onClick={(ev) => {
                            this.handleClearSingleClick.call(this, ev, option)
                          }}
                        >
                          <svg
                            class="ld-select__btn-clear-single-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <title>Clear</title>
                            <path
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2 2l8 8M2 10l8-8"
                            />
                          </svg>
                        </button>

                        <span class="ld-select__selection-label-bg"></span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <span class="ld-select__btn-trigger-text" title={triggerText}>
                {triggerText}
              </span>
            )}

            {this.selected?.length && this.multiple ? (
              <button
                class="ld-select__btn-clear"
                disabled={this.disabled || this.ariaDisabled ? true : undefined}
                onClick={this.handleClearClick.bind(this)}
                ref={(el) => (this.btnClearRef = el as HTMLButtonElement)}
              >
                <svg
                  class="ld-select__btn-clear-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <title>Clear selection</title>
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M10 20a10 10 0 100-20 10 10 0 000 20z"
                    clip-rule="evenodd"
                  />
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6.67 6.67l6.67 6.66M6.67 13.33l6.67-6.66"
                  />
                </svg>
              </button>
            ) : (
              ''
            )}

            <slot></slot>
            <slot name="icon"></slot>
            <svg
              class={triggerIconCl}
              role={'presentation'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M3 6l5 4 5-4"
              />
            </svg>
          </div>
        </div>
        <div
          role="listbox"
          class={popperCl}
          ref={(el) => (this.popperRef = el as HTMLElement)}
        >
          <div
            class="ld-select__scroll-container"
            ref={(el) => (this.scrollContainerRef = el as HTMLElement)}
          >
            <slot></slot>
            <div
              class="ld-select__shadow"
              ref={(el) => (this.shadowRef = el as HTMLElement)}
            ></div>
          </div>
        </div>
      </Host>
    )
  }
}
