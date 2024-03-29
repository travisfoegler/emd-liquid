import { closest } from '../../../utils/closest'

export const toggleStackToTop = (el: HTMLElement, stacked: boolean) => {
  // const outerSlider = el.closest('ld-sidenav-slider')
  const outerSlider = closest('ld-sidenav-slider', el)
  if (!outerSlider) return

  // If not stacked, put everything back in place.
  if (!stacked) {
    el.style.removeProperty('--ld-sidenav-navitem-move-up')
    return
  }

  const sidenavPaddingY =
    parseInt(
      window
        .getComputedStyle(outerSlider)
        .getPropertyValue('--ld-sidenav-padding-y')
    ) * 16

  // Else, calculate how much vertical space is taken by stacked items above
  // and move the nav item up accordingly.
  let totalSpaceAbove = 0
  let totalSpaceOccupiedAbove = 0
  for (const elem of Array.from(el.parentElement?.children || [])) {
    if (el === elem) break

    if (
      elem.tagName === 'LD-SIDENAV-ACCORDION' ||
      elem.tagName === 'LD-SIDENAV-SEPARATOR' ||
      elem.tagName === 'LD-SIDENAV-SUBNAV' ||
      (elem.tagName === 'LD-SIDENAV-NAVITEM' &&
        !['secondary', 'tertiary'].includes(
          (elem as HTMLLdSidenavNavitemElement).mode
        ))
    ) {
      totalSpaceOccupiedAbove += elem.getBoundingClientRect().height
    } else {
      totalSpaceAbove += sidenavPaddingY
    }
    totalSpaceAbove += elem.getBoundingClientRect().height
  }

  const spaceToMoveUp = totalSpaceAbove - totalSpaceOccupiedAbove
  el.style.setProperty('--ld-sidenav-navitem-move-up', `-${spaceToMoveUp}px`)
}
