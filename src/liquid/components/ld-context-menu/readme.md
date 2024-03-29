---
eleventyNavigation:
  key: Context Menu
  parent: Components
layout: layout.njk
title: Context Menu
permalink: components/ld-context-menu/
---

# ld-context-menu

The context menu is a pop-up menu that appears upon user interaction. It offers a limited set of choices that are available in the current state, or context.

<ld-notice headline="Note" mode="warning">
  If your application is mounted to a different element than the <code>body</code> element, or you have <em>z-order</em> related issues, you may need to configure the <code>bodyElement</code> option using the <code>tetherOptions</code> property. For more details check out the <a href="guides/troubleshooting/#popped-out-element-is-rendered-in-wrong-container">related troubleshooting section</a>.
</ld-notice>

## Examples

<ld-notice mode="warning">
  The <code>ld-context-menu</code> is not available as CSS component, because of it's tooltip functionality. To see CSS components examples for the menu without tooltip functionality, please take a look at the <a href="components/ld-context-menu/ld-menu"><code>ld-menu</code>-documentation</a>.
</ld-notice>

### Basic

{% example %}
<ld-context-menu>
  <ld-button slot="trigger">Open menu</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
  <ld-menuitem>Menu item 3</ld-menuitem>
</ld-context-menu>

<!-- React component -->

<LdContextMenu>
  <LdButton slot="trigger">Open menu</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
  <LdMenuitem>Menu item 3</LdMenuitem>
</LdContextMenu>
{% endexample %}

### Size

{% example %}
<ld-context-menu size="sm">
  <ld-button slot="trigger">Small</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
  <ld-menuitem>Menu item 3</ld-menuitem>
</ld-context-menu>

<ld-context-menu>
  <ld-button slot="trigger">Medium</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
  <ld-menuitem>Menu item 3</ld-menuitem>
</ld-context-menu>

<ld-context-menu size="lg">
  <ld-button slot="trigger">Large</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
  <ld-menuitem>Menu item 3</ld-menuitem>
</ld-context-menu>

<!-- React component -->

<LdContextMenu size="sm">
  <LdButton slot="trigger">Small</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
  <LdMenuitem>Menu item 3</LdMenuitem>
</LdContextMenu>

<LdContextMenu>
  <LdButton slot="trigger">Medium</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
  <LdMenuitem>Menu item 3</LdMenuitem>
</LdContextMenu>

<LdContextMenu size="lg">
  <LdButton slot="trigger">Large</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
  <LdMenuitem>Menu item 3</LdMenuitem>
</LdContextMenu>
{% endexample %}

### Item Groups

{% example %}
<ld-context-menu>
  <ld-button slot="trigger">Open menu</ld-button>
  <ld-menuitem-group>
    <ld-menuitem>Menu item 1</ld-menuitem>
    <ld-menuitem>Menu item 2</ld-menuitem>
    <ld-menuitem>Menu item 3</ld-menuitem>
  </ld-menuitem-group>
  <ld-menuitem-group>
    <ld-menuitem mode="highlight">
      <ld-icon name="repost"></ld-icon>
      Reset
    </ld-menuitem>
    <ld-menuitem mode="danger">
      <ld-icon name="bin"></ld-icon>
      Delete
    </ld-menuitem>
  </ld-menuitem-group>
</ld-context-menu>

<!-- React component -->

<LdContextMenu>
  <LdButton slot="trigger">Open menu</LdButton>
  <LdMenuitemGroup>
    <LdMenuitem>Menu item 1</LdMenuitem>
    <LdMenuitem>Menu item 2</LdMenuitem>
    <LdMenuitem>Menu item 3</LdMenuitem>
  </LdMenuitemGroup>
  <LdMenuitemGroup>
    <LdMenuitem mode="highlight">
      <LdIcon name="repost" />
      Reset
    </LdMenuitem>
    <LdMenuitem mode="danger">
      <LdIcon name="bin" />
      Delete
    </LdMenuitem>
  </LdMenuitemGroup>
</LdContextMenu>
{% endexample %}

### With custom width

{% example %}
<ld-context-menu style="width:18rem">
  <ld-button slot="trigger">Open menu</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
  <ld-menuitem>Menu item 3</ld-menuitem>
</ld-context-menu>

<!-- React component -->

<LdContextMenu style={ { width: '18rem' } }>
  <LdButton slot="trigger">Open menu</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
  <LdMenuitem>Menu item 3</LdMenuitem>
</LdContextMenu>
{% endexample %}

### Position

{% example %}
<ld-context-menu position="top right">
  <ld-button slot="trigger">Top right</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
  <ld-menuitem>Menu item 3</ld-menuitem>
</ld-context-menu>

<ld-context-menu position="left middle">
  <ld-button slot="trigger">Left middle</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
  <ld-menuitem>Menu item 3</ld-menuitem>
</ld-context-menu>

<!-- React component -->

<LdContextMenu position="top right">
  <LdButton slot="trigger">Top right</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
  <LdMenuitem>Menu item 3</LdMenuitem>
</LdContextMenu>

<LdContextMenu position="left middle">
  <LdButton slot="trigger">Left middle</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
  <LdMenuitem>Menu item 3</LdMenuitem>
</LdContextMenu>
{% endexample %}

<ld-notice mode="warning">
  The <code>position</code> prop is identical to the one of the <code>ld-tooltip</code> component. Please refer to the <a href="components/ld-tooltip/#positioning"><code>ld-tooltip</code>-documentation</a> for a full example of all available positions.
</ld-notice>

### Prevent auto-closing

You can prevent auto-closing of the context menu on click, by attaching the `prevent-close` attribute to the `ld-menuitem` component.

{% example %}
<ld-context-menu>
  <ld-button slot="trigger">Open menu</ld-button>
  <ld-menuitem>Will close</ld-menuitem>
  <ld-menuitem prevent-close>Won&apos;t close</ld-menuitem>
</ld-context-menu>

<!-- React component -->

<LdContextMenu>
  <LdButton slot="trigger">Open menu</LdButton>
  <LdMenuitem>Will close</LdMenuitem>
  <LdMenuitem preventClose>Won&apos;t close</LdMenuitem>
</LdContextMenu>
{% endexample %}

### Use right-click

You can configure the context-menu to open on right-click instead of left-click by assigning the `rightClick` prop.

{% example %}
<ld-context-menu right-click>
  <ld-button slot="trigger">Open menu</ld-button>
  <ld-menuitem>Menu item 1</ld-menuitem>
  <ld-menuitem>Menu item 2</ld-menuitem>
</ld-context-menu>

<!-- React component -->

<LdContextMenu rightClick>
  <LdButton slot="trigger">Open menu</LdButton>
  <LdMenuitem>Menu item 1</LdMenuitem>
  <LdMenuitem>Menu item 2</LdMenuitem>
</LdContextMenu>
{% endexample %}

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                           | Type                                                                                                                                                                                                                                                                                                                                             | Default         |
| --------------- | ---------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `key`           | `key`            | for tracking the node's identity when working with lists                              | `string \| number`                                                                                                                                                                                                                                                                                                                               | `undefined`     |
| `position`      | `position`       | Position of the context menu relative to the trigger element.                         | `"bottom center" \| "bottom left" \| "bottom right" \| "left bottom" \| "left middle" \| "left top" \| "right bottom" \| "right middle" \| "right top" \| "top center" \| "top left" \| "top right"`                                                                                                                                             | `'bottom left'` |
| `ref`           | `ref`            | reference to component                                                                | `any`                                                                                                                                                                                                                                                                                                                                            | `undefined`     |
| `rightClick`    | `right-click`    | Use right-click.                                                                      | `boolean`                                                                                                                                                                                                                                                                                                                                        | `false`         |
| `size`          | `size`           | Size of the context menu.                                                             | `"lg" \| "sm"`                                                                                                                                                                                                                                                                                                                                   | `undefined`     |
| `tetherOptions` | `tether-options` | Tether options object to be merged with the default options (optionally stringified). | `string \| { attachment?: string; bodyElement?: HTMLElement; classes?: { [className: string]: string \| boolean; }; classPrefix?: string; constraints?: ITetherConstraint[]; element?: any; enabled?: boolean; offset?: string; optimizations?: any; target?: any; targetAttachment?: string; targetOffset?: string; targetModifier?: string; }` | `undefined`     |


## Events

| Event                | Description                              | Type               |
| -------------------- | ---------------------------------------- | ------------------ |
| `ldcontextmenuclose` | Emitted when the context menu is closed. | `CustomEvent<any>` |
| `ldcontextmenuopen`  | Emitted when the context menu is opened. | `CustomEvent<any>` |


## Methods

### `hideContextMenu() => Promise<void>`

Hide context menu

#### Returns

Type: `Promise<void>`



### `showContextMenu() => Promise<void>`

Show context menu

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part        | Description                                 |
| ----------- | ------------------------------------------- |
| `"menu"`    | `ld-menu` element wrapping the default slot |
| `"tooltip"` | `ld-tooltip` element                        |


## Dependencies

### Depends on

- [ld-tooltip](../ld-tooltip)
- [ld-menu](ld-menu)

### Graph
```mermaid
graph TD;
  ld-context-menu --> ld-tooltip
  ld-context-menu --> ld-menu
  ld-tooltip --> ld-sr-only
  ld-tooltip --> ld-tooltip-popper
  style ld-context-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
