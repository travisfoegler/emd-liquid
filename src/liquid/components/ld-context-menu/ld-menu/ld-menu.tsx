import {
  Component,
  Element,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core'
import { TypeAheadHandler } from '../../../utils/typeahead'
import { isElement, isMenuItem, isSlot } from '../../../utils/type-checking'

const getMenuItemOrNestedMenuItems = (node: Node) => {
  if (!isElement(node)) {
    return []
  }

  if (isMenuItem(node)) {
    return [node]
  }

  const items: HTMLLdMenuitemElement[] = []

  if (isSlot(node)) {
    node
      .assignedNodes()
      .forEach((node) => items.push(...getMenuItemOrNestedMenuItems(node)))
    return items
  }

  node.childNodes.forEach((node) =>
    items.push(...getMenuItemOrNestedMenuItems(node))
  )

  return items
}

/**
 * @virtualProp ref - reference to component
 * @virtualProp {string | number} key - for tracking the node's identity when working with lists
 * @part list - `ul` element wrapping the default slot
 */
@Component({
  tag: 'ld-menu',
  styleUrl: 'ld-menu.css',
  shadow: true,
})
export class LdMenu {
  @Element() el: HTMLLdMenuElement

  /** Size of the context menu. */
  @Prop() size?: 'sm' | 'lg'

  @State() initialized = false
  @State() typeAheadHandler: TypeAheadHandler<HTMLLdMenuitemElement>

  private initMenuItems = (element: Node, initial = false) => {
    if (!isElement(element)) {
      return
    }

    if (isMenuItem(element)) {
      element.size = this.size

      if (!initial) {
        return
      }

      element.ldTabindex = this.initialized ? -1 : 0

      if (!this.initialized) {
        this.initialized = true
      }

      return
    }

    if (isSlot(element)) {
      element.assignedNodes().forEach((node) => this.initMenuItems(node))
      return
    }

    element.childNodes.forEach((node) => this.initMenuItems(node))
  }

  /** Get the first menu item inside this menu. */
  @Method()
  async getFirstMenuItem(): Promise<HTMLLdMenuitemElement> {
    return this.getAllMenuItems()[0]
  }

  private getAllMenuItems = () => {
    const items: HTMLLdMenuitemElement[] = []

    this.el
      .querySelectorAll('slot, ld-menuitem')
      .forEach((node) => items.push(...getMenuItemOrNestedMenuItems(node)))

    return items
  }

  private focusFirst = (target: HTMLLdMenuitemElement) => {
    const allMenuItems = this.getAllMenuItems()
    const [first] = allMenuItems

    target.ldTabindex = -1
    first.ldTabindex = 0
    first.focusInner()
  }

  private focusLast = (target: HTMLLdMenuitemElement) => {
    const allMenuItems = this.getAllMenuItems()
    const last = allMenuItems[allMenuItems.length - 1]

    target.ldTabindex = -1
    last.ldTabindex = 0
    last.focusInner()
  }

  private focusNext = (target: HTMLLdMenuitemElement) => {
    const allMenuItems = this.getAllMenuItems()
    const index = allMenuItems.indexOf(target)
    const next =
      allMenuItems.length > index + 1
        ? allMenuItems[index + 1]
        : allMenuItems[0]

    target.ldTabindex = -1
    next.ldTabindex = 0
    next.focusInner()
  }

  private focusPrev = (target: HTMLLdMenuitemElement) => {
    const allMenuItems = this.getAllMenuItems()
    const index = allMenuItems.indexOf(target)
    const prev =
      index === 0
        ? allMenuItems[allMenuItems.length - 1]
        : allMenuItems[index - 1]

    target.ldTabindex = -1
    prev.ldTabindex = 0
    prev.focusInner()
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLLdMenuitemElement
    let focusedElement: HTMLLdMenuitemElement

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        if (event.metaKey) {
          this.focusFirst(target)
        } else {
          this.focusPrev(target)
        }
        break
      case 'ArrowDown':
        event.preventDefault()
        if (event.metaKey) {
          this.focusLast(target)
        } else {
          this.focusNext(target)
        }
        break
      case 'Home':
        event.preventDefault()
        this.focusFirst(target)
        break
      case 'End':
        event.preventDefault()
        this.focusLast(target)
        break
      default:
        focusedElement = this.typeAheadHandler.typeAhead(event.key, target)

        if (focusedElement) {
          target.ldTabindex = -1
          focusedElement.ldTabindex = 0
        }
    }
  }

  @Watch('size')
  handleSizeChange() {
    this.updateMenuItems()
  }

  private updateMenuItems = (initial = false) => {
    this.el
      .querySelectorAll('slot, ld-menuitem')
      .forEach((element) => this.initMenuItems(element, initial))
  }

  componentWillLoad() {
    this.updateMenuItems(true)
    this.typeAheadHandler = new TypeAheadHandler(this.getAllMenuItems())
  }

  disconnectedCallback() {
    this.typeAheadHandler?.clearTimeout()
  }

  render() {
    return (
      <Host onKeyDown={this.handleKeyDown}>
        <ul class="ld-menu" part="list" role="menu">
          <slot />
        </ul>
      </Host>
    )
  }
}
