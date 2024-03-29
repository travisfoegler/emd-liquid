import { Component, Element, h, Method, Prop, State } from '@stencil/core'
import { getClassNames } from '../../utils/getClassNames'
import { cloneAttributes } from '../../utils/cloneAttributes'
import { registerAutofocus } from '../../utils/focus'
import { isAriaDisabled } from '../../utils/ariaDisabled'

type Mode =
  | 'highlight'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'danger-secondary'
  | 'danger-ghost'
  | 'neutral'
  | 'neutral-secondary'
  | 'neutral-ghost'

const modeMap = new Map([
  ['danger', 'ld-button--danger'],
  ['ghost', 'ld-button--ghost'],
  ['highlight', 'ld-button--highlight'],
  ['neutral', 'ld-button--neutral'],
  ['secondary', 'ld-button--secondary'],
  ['danger-ghost', 'ld-button--ghost ld-button--danger-ghost'],
  ['danger-secondary', 'ld-button--secondary ld-button--danger-secondary'],
  ['neutral-ghost', 'ld-button--ghost ld-button--neutral-ghost'],
  ['neutral-secondary', 'ld-button--secondary ld-button--neutral-secondary'],
])

/**
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 * @part button - Actual button or anchor element
 * @part progress-bar - Progress bar
 */
@Component({
  tag: 'ld-button',
  styleUrl: 'ld-button.css',
  shadow: true,
})
export class LdButton implements InnerFocusable, ClonesAttributes {
  @Element() el: HTMLElement
  private button: HTMLAnchorElement | HTMLButtonElement

  private attributesObserver: MutationObserver

  /** Align text. */
  @Prop({ mutable: true }) alignText?: 'left' | 'right'

  /** Alternative disabled state that keeps element focusable */
  @Prop() ariaDisabled: string

  /** Automatically focus the form control when the page is loaded. */
  @Prop({ reflect: true }) autofocus: boolean

  // `onBrandColor` is not possible, as Stencil expects `on*` props to be events.
  /** Style the button so that it looks good on the current theme's primary color. */
  @Prop() brandColor?: boolean

  /** Disabled state of the button. */
  @Prop() disabled?: boolean

  /** Causes the browser to treat the linked URL as a download. */
  @Prop() download?: boolean | string

  /** Associates the control with a form element. */
  @Prop() form?: string

  /** Overrides the `action` attribute of the button's form owner. */
  @Prop() formaction?: HTMLButtonElement['formAction']

  /** Overrides the `enctype` attribute of the button's form owner. */
  @Prop() formenctype?: HTMLButtonElement['formEnctype']

  /** Overrides the `method` attribute of the button's form owner. */
  @Prop() formmethod?: HTMLButtonElement['formMethod']

  /** Overrides the `novalidate` attribute of the button's form owner. */
  @Prop() formnovalidate?: HTMLButtonElement['formNoValidate']

  /** Overrides the `target` attribute of the button's form owner. */
  @Prop() formtarget?: HTMLButtonElement['formTarget']

  /**
   * Transforms the button to an anchor element.
   * See [mdn docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href)
   * for more information on the `href` attribute.
   */
  @Prop() href?: string

  /** Hints at the human language of the linked URL. */
  @Prop() hreflang?: string

  /** Justify content. */
  @Prop({ mutable: true }) justifyContent?: 'start' | 'end' | 'between'

  /** Tab index of the button. */
  @Prop() ldTabindex?: number

  /** Display mode. */
  @Prop() mode?: Mode

  /** Used to specify the name of the control. */
  @Prop() name?: string

  /** A space-separated list of URLs to ping on link follow. */
  @Prop() ping?: string

  /** Displays a progress bar at the bottom of the button. */
  @Prop() progress?: 'pending' | number

  /** A space-separated list of URLs to ping on link follow. */
  @Prop() referrerpolicy?: string

  /** Size of the button. */
  @Prop() size?: 'sm' | 'lg'

  /**
   * The `target` attributed can be used in conjunction with the `href` attribute.
   * See [mdn docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)
   * for more information on the `target` attribute.
   */
  @Prop() target?: '_blank' | '_self' | '_parent' | '_top'

  /** Specifies the default behavior of the button. */
  @Prop() type?: 'button' | 'reset' | 'submit' = 'submit'

  /** Defines the value associated with the button’s `name` when it’s submitted with the form data. */
  @Prop() value?: string

  /**
   * Button contains only an icon and no text.
   * @internal
   */
  @Prop({ mutable: true }) iconOnly?: boolean

  @State() clonedAttributes

  /**
   * Sets focus on the button
   */
  @Method()
  async focusInner() {
    this.button?.focus()
  }

  connectedCallback() {
    this.el.addEventListener('click', this.handleClick, {
      capture: true,
    })
  }

  disconnectedCallback() {
    this.el.removeEventListener('click', this.handleClick, {
      capture: true,
    })
    /* istanbul ignore if */
    if (this.attributesObserver) this.attributesObserver.disconnect()
  }

  private clickHiddenButton() {
    const button = document.createElement('button')

    button.style.pointerEvents = 'none'
    button.style.position = 'absolute'
    button.style.visibility = 'hidden'

    if (this.form) button.setAttribute('form', this.form)
    if (this.formaction !== undefined) button.formAction = this.formaction
    if (this.formenctype !== undefined) button.formEnctype = this.formenctype
    if (this.formmethod !== undefined) button.formMethod = this.formmethod
    if (this.formnovalidate !== undefined)
      button.formNoValidate = this.formnovalidate
    if (this.formtarget !== undefined) button.formTarget = this.formtarget
    if (this.name !== undefined) button.name = this.name
    if (this.type !== undefined) button.type = this.type
    if (this.value !== undefined) button.value = this.value

    this.el.parentNode.append(button)
    button.click()
    button.remove()
  }

  private handleClick = (ev: MouseEvent) => {
    if (this.disabled || isAriaDisabled(this.el.ariaDisabled)) {
      ev.preventDefault()
      // Stopping propagation is important for clicks on child elements,
      // because otherwise event handlers attached to the ld-button
      // are still called (no matter if the event was prevented or not).
      ev.stopPropagation()
      return
    }

    if (!this.href && (this.type === 'reset' || this.type === 'submit')) {
      setTimeout(() => {
        if (!ev.defaultPrevented) {
          const form = this.el.closest('form')
          if (form || this.form) {
            this.clickHiddenButton()
          }
        }
      })
    }
  }

  componentWillLoad() {
    this.attributesObserver = cloneAttributes.call(this, [
      'align-text',
      'brand-color',
      'justify-content',
      'ld-tabindex',
      'mode',
      'progress',
      'size',
      this.type === 'submit' ? 'type' : undefined, // submit is default
    ])

    registerAutofocus(this.autofocus)

    if (this.iconOnly !== undefined) {
      return
    }

    const textInButton = this.el.textContent.trim()

    if (!textInButton) {
      this.iconOnly = true
    }
  }

  render() {
    const cl = getClassNames([
      'ld-button',
      this.alignText && `ld-button--align-text-${this.alignText}`,
      this.brandColor && `ld-button--brand-color`,
      this.iconOnly && `ld-button--icon-only`,
      this.justifyContent && `ld-button--justify-${this.justifyContent}`,
      this.mode && modeMap.get(this.mode),
      this.size && `ld-button--${this.size}`,
    ])

    const Tag = this.href ? 'a' : 'button'

    const hasProgress = this.progress !== undefined && this.progress !== null

    const styleProgress = !isNaN(parseFloat(this.progress + ''))
      ? { '--ld-button-progress': this.progress + '' }
      : undefined
    const clProgress = `ld-button__progress${
      this.progress === 'pending' ? ' ld-button__progress--pending' : ''
    }`

    return (
      <Tag
        {...this.clonedAttributes}
        href={this.href}
        target={this.target}
        aria-busy={hasProgress ? 'true' : undefined}
        aria-disabled={
          this.disabled || isAriaDisabled(this.el.ariaDisabled)
            ? 'true'
            : undefined
        }
        aria-live="polite"
        class={cl}
        disabled={this.disabled}
        part="button focusable"
        ref={(el: HTMLAnchorElement | HTMLButtonElement) => (this.button = el)}
        rel={this.target === '_blank' ? 'noreferrer noopener' : undefined}
        tabIndex={this.ldTabindex}
        value={this.value}
      >
        <slot />
        {hasProgress && (
          <span
            class={clProgress}
            part="progress-bar"
            style={styleProgress}
          ></span>
        )}
      </Tag>
    )
  }
}
