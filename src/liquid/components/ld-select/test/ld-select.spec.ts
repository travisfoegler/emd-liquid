import MutationObserver from 'mutation-observer'
import { newSpecPage } from '@stencil/core/testing'
import { LdSelect } from '../ld-select'
import { LdOption } from '../../ld-option/ld-option'
import { LdOptionInternal } from '../../ld-option/ld-option-internal'

global.MutationObserver = MutationObserver

async function triggerPopper(page) {
  const ldSelect = page.root
  const triggerButton = ldSelect.querySelector('.ld-select__btn-trigger')
  triggerButton.focus = jest.fn()
  await triggerButton.click()
  await page.waitForChanges()
  await new Promise((resolve) => setTimeout(resolve))
  await page.waitForChanges()
}

describe('ld-select', () => {
  it('renders popper element with copies of slotted options', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick a fruit" name="fruit">
          <ld-option value="apple">Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })
    await new Promise((resolve) => setTimeout(resolve))

    const ldSelect = page.root
    const triggerButton = ldSelect.querySelector('.ld-select__btn-trigger')

    expect(ldSelect.classList.contains('ld-select--expanded')).toBeFalsy()
    expect(triggerButton.getAttribute('aria-expanded')).toEqual('false')

    await triggerButton.dispatchEvent(new Event('click'))
    await page.waitForChanges()
    await new Promise((resolve) => setTimeout(resolve))

    const body = page.body
    const popper = await body.querySelector('.ld-select__popper')
    const slottedOptions = ldSelect.querySelectorAll('ld-option')
    const internalOptions = popper.querySelectorAll('ld-option-internal')

    expect(ldSelect.classList.contains('ld-select--expanded')).toBeTruthy()
    expect(slottedOptions.length).toEqual(2)
    expect(internalOptions.length).toEqual(2)
    expect(triggerButton.getAttribute('aria-expanded')).toEqual('true')
    expect(
      popper.classList.contains('ld-select__popper--expanded')
    ).toBeTruthy()
  })

  it('throws if no ld-option(s) are passed to the default slot', async () => {
    expect.assertions(1)
    try {
      const page = await newSpecPage({
        components: [LdSelect, LdOption, LdOptionInternal],
        html: '<ld-select placeholder="Pick a fruit" name="fruit"></ld-select>',
      })

      await triggerPopper(page)
    } catch (err) {
      expect(err).toStrictEqual(
        TypeError(
          'ld-select requires at least one ld-option element as a child, but found none.'
        )
      )
    }
  })

  // it('throws if something other than an ld-option is passed to the default slot', async () => {
  //   expect.assertions(1)
  //   try {
  //     const page = await newSpecPage({
  //       components: [LdSelect, LdOption, LdOptionInternal],
  //       html: `
  //         <ld-select placeholder="Pick a fruit" name="fruit">
  //           <ld-option value="apple">Apple</ld-option>
  //           <option value="banana">Banana</option>
  //         </ld-select>
  //       `,
  //     })
  //
  //     await triggerPopper(page)
  //   } catch (err) {
  //     expect(err).toStrictEqual(
  //       TypeError(
  //         'ld-select accepts only ld-option elements as children, but found a "option" element.'
  //       )
  //     )
  //   }
  // })

  // it('throws if it can not parse custom Tether options', async () => {
  //   expect.assertions(1)
  //   try {
  //     const page = await newSpecPage({
  //       components: [LdSelect, LdOption, LdOptionInternal],
  //       html: `
  //         <ld-select placeholder="Pick a fruit" name="fruit" tetherOptions="asdf">
  //           <ld-option value="apple">Apple</ld-option>
  //           <ld-option value="banana">Banana</ld-option>
  //         </ld-select>
  //       `,
  //     })
  //
  //     await triggerPopper(page)
  //   } catch (err) {
  //     expect(err.toString()).toEqual(
  //       'ld-select failed parsing custom Tether options with JSON.parse.'
  //     )
  //   }
  // })

  it('applies size prop', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick a fruit" name="fruit" size="sm">
          <ld-option value="apple">Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })

    await new Promise((resolve) => setTimeout(resolve))

    const ldSelect = page.root
    expect(ldSelect.classList.contains('ld-select--sm')).toBeTruthy()

    await triggerPopper(page)

    const body = page.body
    const popper = await body.querySelector('.ld-select__popper')
    expect(popper.classList.contains('ld-select__popper--sm')).toBeTruthy()
  })

  it('emits focus and blur event', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick a fruit" name="fruit" size="sm">
          <ld-option value="apple">Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })

    const ldSelect = page.root
    const triggerButton = ldSelect.querySelector('.ld-select__btn-trigger')

    const handlers = {
      onFocus() {
        return
      },
      onBlur() {
        return
      },
    }

    const spyFocus = jest.spyOn(handlers, 'onFocus')
    ldSelect.addEventListener('focus', handlers.onFocus)
    await triggerButton.dispatchEvent(new Event('focus'))
    await new Promise((resolve) => setTimeout(resolve))
    expect(spyFocus).toHaveBeenCalledTimes(1)

    const spyBlur = jest.spyOn(handlers, 'onBlur')
    ldSelect.addEventListener('blur', handlers.onBlur)
    await triggerButton.dispatchEvent(new Event('blur', { bubbles: true }))
    await new Promise((resolve) => setTimeout(resolve))
    expect(spyBlur).toHaveBeenCalledTimes(1)
  })

  it('passes down prop selected option prop to internal options', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick a fruit" name="fruit">
          <ld-option value="apple">Apple</ld-option>
          <ld-option value="banana" selected='true'>Banana</ld-option>
        </ld-select>
      `,
    })

    await triggerPopper(page)

    const body = page.body
    const popper = await body.querySelector('.ld-select__popper')
    const internalOptions = popper.querySelectorAll('ld-option-internal')

    expect(internalOptions.length).toEqual(2)
    expect(internalOptions[0].getAttribute('selected')).toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).not.toEqual(null)
  })

  it('allows selecting and deselecting an option', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick a fruit" name="fruit">
          <ld-option value="apple">Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })

    await triggerPopper(page)

    const body = page.body
    const popper = await body.querySelector('.ld-select__popper')
    const internalOptions = popper.querySelectorAll('ld-option-internal')

    expect(internalOptions[0].getAttribute('selected')).toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)

    await internalOptions[0].click()
    await page.waitForChanges()
    await new Promise((resolve) => setTimeout(resolve))

    expect(internalOptions[0].getAttribute('selected')).not.toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)

    await internalOptions[0].click()
    await page.waitForChanges()
    await new Promise((resolve) => setTimeout(resolve))

    expect(internalOptions[0].getAttribute('selected')).toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)
  })

  it('deselects a selected option if another option is selected in single select mode', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick a fruit" name="fruit">
          <ld-option value="apple" selected>Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })

    await triggerPopper(page)

    const body = page.body
    const popper = await body.querySelector('.ld-select__popper')
    const internalOptions = popper.querySelectorAll('ld-option-internal')

    expect(internalOptions[0].getAttribute('selected')).not.toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)

    await internalOptions[1].click()
    await page.waitForChanges()
    await new Promise((resolve) => setTimeout(resolve))

    expect(internalOptions[0].getAttribute('selected')).toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).not.toEqual(null)
  })

  it('does not deselect a selected option if another option is selected in multiple select mode', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick some fruits" name="fruits" multiple>
          <ld-option value="apple" selected>Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })

    await triggerPopper(page)

    const body = page.body
    const popper = await body.querySelector('.ld-select__popper')
    const internalOptions = popper.querySelectorAll('ld-option-internal')

    expect(internalOptions[0].getAttribute('selected')).not.toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)

    internalOptions[1].focus = jest.fn()
    await internalOptions[1].click()
    await page.waitForChanges()
    await new Promise((resolve) => setTimeout(resolve))

    expect(internalOptions[0].getAttribute('selected')).not.toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).not.toEqual(null)
  })

  it('sets prevent deselection class on popper element', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick a fruit" name="fruit" prevent-deselection>
          <ld-option value="apple">Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })

    await triggerPopper(page)

    const body = page.body
    const popper = await body.querySelector('.ld-select__popper')
    const internalOptions = popper.querySelectorAll('ld-option-internal')

    expect(internalOptions[0].getAttribute('selected')).toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)

    await internalOptions[0].click()
    await page.waitForChanges()
    await new Promise((resolve) => setTimeout(resolve))

    expect(internalOptions[0].getAttribute('selected')).not.toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)

    await internalOptions[0].click()
    await page.waitForChanges()
    await new Promise((resolve) => setTimeout(resolve))

    expect(internalOptions[0].getAttribute('selected')).not.toEqual(null)
    expect(internalOptions[1].getAttribute('selected')).toEqual(null)
  })

  it('sets multiple class on popper element', async () => {
    const page = await newSpecPage({
      components: [LdSelect, LdOption, LdOptionInternal],
      html: `
        <ld-select placeholder="Pick some fruits" name="fruits" multiple>
          <ld-option value="apple">Apple</ld-option>
          <ld-option value="banana">Banana</ld-option>
        </ld-select>
      `,
    })

    await triggerPopper(page)

    const body = page.body
    const popper = body.querySelector('.ld-select__popper')

    expect(
      popper.classList.contains('ld-select__popper--multiple')
    ).toBeTruthy()
  })
})