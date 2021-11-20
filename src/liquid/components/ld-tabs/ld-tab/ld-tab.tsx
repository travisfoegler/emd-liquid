import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Prop,
  Watch,
} from '@stencil/core'

/**
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 * @part button - Actual button element
 * @part content - Element wrapping the slot
 * @part spacer - Both spacer elements
 * @part spacer-left - Left spacer element
 * @part spacer-right - Right spacer element
 */
@Component({
  tag: 'ld-tab',
  styleUrl: 'ld-tab.css',
  shadow: true,
})
export class LdTab implements InnerFocusable {
  @Element() el: HTMLElement

  private btnRef: HTMLButtonElement

  /**
   * If present, this boolean attribute indicates that the tab is selected.
   */
  @Prop({ mutable: true, reflect: true }) selected?: boolean

  /**
   * Disables the tab.
   */
  @Prop() disabled?: boolean

  /**
   * Focuses the tab
   */
  @Method()
  async focusInner() {
    this.btnRef.focus({ preventScroll: true })
  }

  /**
   * Emitted with the id of the selected tab.
   */
  @Event() tabSelect: EventEmitter<string>

  private handleTabClick(event: MouseEvent) {
    event.preventDefault()

    this.select()
  }

  @Watch('selected')
  emitEvent(newSelected: boolean, oldSelected: boolean) {
    if (!newSelected || newSelected === oldSelected) return

    this.tabSelect.emit()
  }

  /** Set selected tab to a certain index */
  @Method()
  async select() {
    if (this.disabled) return

    if (this.btnRef.getAttribute('aria-selected')) return

    this.selected = true
  }

  render() {
    return (
      <button
        aria-disabled={this.disabled ? 'true' : undefined}
        aria-selected={this.selected ? 'true' : undefined}
        class="ld-tab"
        onClick={this.handleTabClick.bind(this)}
        part="button focusable"
        ref={(el) => (this.btnRef = el as HTMLButtonElement)}
        role="tab"
        tabindex={this.selected ? undefined : '-1'}
      >
        <span class="ld-tab__spacer" part="spacer spacer-left" />
        <span class="ld-tab__content" part="content">
          <slot />
        </span>
        <span class="ld-tab__spacer" part="spacer spacer-right" />
      </button>
    )
  }
}