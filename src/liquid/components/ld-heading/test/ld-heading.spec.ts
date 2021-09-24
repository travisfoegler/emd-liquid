import { newSpecPage } from '@stencil/core/testing'
import { LdHeading } from '../ld-heading'

describe('ld-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LdHeading],
      html: `<ld-heading level="1">Text</ld-heading>`,
    })
    expect(page.root).toEqualHtml(`
      <ld-heading level="1">
        <mock:shadow-root>
          <h1 class="ld-heading ld-heading--h1">
            <slot></slot>
          </h1>
        </mock:shadow-root>
        Text
      </ld-heading>
    `)
  })
  it('throws if no level is provided', async () => {
    expect.assertions(1)
    try {
      await newSpecPage({
        components: [LdHeading],
        html: `<ld-heading>Text</ld-heading>`,
      })
    } catch (err) {
      expect(err).toStrictEqual(
        TypeError('ld-heading level prop invalid; got undefined')
      )
    }
  })
  it('throws if invalid level is provided', async () => {
    try {
      await newSpecPage({
        components: [LdHeading],
        html: `<ld-heading level="7">Text</ld-heading>`,
      })
      expect(true).toBe(false)
    } catch (err) {
      expect(err).toStrictEqual(
        TypeError('ld-heading level prop invalid; got 7')
      )
    }
  })
  it('renders with visual level', async () => {
    const page = await newSpecPage({
      components: [LdHeading],
      html: `<ld-heading level="1" visual-level="h3">Text</ld-heading>`,
    })
    expect(page.root).toEqualHtml(`
      <ld-heading level="1" visual-level="h3">
        <mock:shadow-root>
          <h1 class="ld-heading ld-heading--h3">
            <slot></slot>
          </h1>
        </mock:shadow-root>
        Text
      </ld-heading>
    `)
  })
  it('renders with visual b level and explicit aria-label', async () => {
    const page = await newSpecPage({
      components: [LdHeading],
      html: `<ld-heading level="1" visual-level="b3" aria-label="Yolo">Text</ld-heading>`,
    })
    expect(page.root).toEqualHtml(`
      <ld-heading aria-label="Yolo" level="1" visual-level="b3">
        <mock:shadow-root>
          <h1 aria-label="Yolo" class="ld-heading ld-heading--b3">
            <slot></slot>
          </h1>
        </mock:shadow-root>
        Text
      </ld-heading>
    `)
  })
  it('renders with visual b level and implicit aria-label', async () => {
    const page = await newSpecPage({
      components: [LdHeading],
      html: `<ld-heading level="1" visual-level="b3">Text</ld-heading>`,
    })
    expect(page.root).toEqualHtml(`
      <ld-heading level="1" visual-level="b3">
        <mock:shadow-root>
          <h1 aria-label="Text" class="ld-heading ld-heading--b3">
            <slot></slot>
          </h1>
        </mock:shadow-root>
        Text
      </ld-heading>
    `)
  })
  it('throws with invalid visual level prop', async () => {
    let error: unknown

    try {
      await newSpecPage({
        components: [LdHeading],
        html: `<ld-heading level="1" visual-level="asdf" aria-label="Text">Text</ld-heading>`,
      })
    } catch (err) {
      error = err
    }

    expect(error).toStrictEqual(
      TypeError('ld-heading visualLevel prop invalid; got asdf')
    )
  })
})
