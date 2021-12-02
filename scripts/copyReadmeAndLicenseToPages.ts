/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile, writeFile } = require('fs').promises

const headerReadme = `---
eleventyNavigation:
  key: Introduction
  order: 1
layout: layout.njk
title: Introduction
---

[//]: # "autogenerated"

<svg class="docs-main__header-image" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 349 115">
  <title>Liquid Oxygen Alpha</title>
  <path fill="#2DBECD" d="M27.7 48.6H48c.8 0 1.3-.4 1.3-1.2v-3.9c0-4.6-2.7-7.5-7.5-7.5h-14c-8.3 0-13.6-7.3-13.6-15.3V7.6c0-4.7-2.8-7.5-7.5-7.5H2C1.2 0 .9.6.9 1.4V21a26.6 26.6 0 0 0 26.8 27.6ZM61.7 48.6h13c.9 0 1.3-.4 1.3-1.2V37.2c0-.8-.4-1.2-1.3-1.2h-3V15.6c0-2 1-3 3-3 .9 0 1.3-.3 1.3-1.1V7.6c0-2.4-.6-4.2-2-5.5a7.4 7.4 0 0 0-5.5-2h-13c-.8 0-1.3.4-1.3 1.1v10.3c0 .8.5 1.1 1.3 1.1 2 0 3 1 3 3V36h-3c-.8 0-1.3.4-1.3 1.2V41c0 2.4.6 4.2 2 5.6 1.3 1.3 3.1 2 5.5 2ZM108.6 48.6h19.3c.8 0 1.3-.4 1.3-1.2v-9.3c0-.8-.5-1.1-1.3-1.1h-3.6c1.7-1.5 3-3.2 3.8-5a16 16 0 0 0 1.1-6.3c0-3.2-.8-6.3-2.4-9.5A30 30 0 0 0 101.4.1H81.9c-.8 0-1.1.5-1.1 1.3v19.3c0 3.7.7 7.3 2.3 10.7a30.2 30.2 0 0 0 15.1 14.9c3.4 1.5 6.8 2.3 10.4 2.3Zm-.2-12.5c-1.7 0-3.4-.5-5-1.4-1.7-1-3.3-2.2-4.7-3.6a17.4 17.4 0 0 1-3.3-5 13 13 0 0 1-1.3-5.5c0-2.4.6-4.3 2-5.7a7.4 7.4 0 0 1 5.5-2.2c1.6 0 3.3.5 5 1.5 1.7 1 3.2 2.1 4.7 3.6 1.3 1.4 2.4 3.1 3.3 5 .8 1.8 1.3 3.6 1.3 5.4 0 2.3-.6 4.2-2 5.6a7.1 7.1 0 0 1-5.5 2.3ZM162.3 48.6h19c.8 0 1.2-.4 1.2-1.3V7.7c0-4.7-2.8-7.5-7.6-7.5h-4.6c-.8 0-1.2.5-1.2 1.3V28c0 4.8-2.8 8.2-7.7 8.2-8.2 0-14.1-7.6-14.1-16.2V7.7c0-4.7-2.8-7.5-7.5-7.5H135c-.7 0-1.1.5-1.1 1.3V20c0 16.4 11.1 28.7 28.3 28.7v-.1ZM194.7 48.6h13c.9 0 1.4-.4 1.4-1.2V37.2c0-.8-.5-1.2-1.4-1.2h-2.9V15.6c0-2 1-3 3-3 .8 0 1.3-.3 1.3-1.1V7.6c0-2.4-.7-4.2-2-5.5a7.4 7.4 0 0 0-5.5-2h-13c-1 0-1.4.4-1.4 1.1v10.3c0 .8.5 1.1 1.3 1.1 2 0 3 1 3 3V36h-3c-.8 0-1.3.4-1.3 1.2V41c0 2.4.7 4.2 2 5.6 1.3 1.3 3.1 2 5.5 2ZM221.3 48.6h20.5c6.8 0 12-1.7 15.8-5.2 3.7-3.4 5.6-8.4 5.6-15.2 0-3.9-.7-7.5-2.4-11a30.3 30.3 0 0 0-15.7-14.8A28.6 28.6 0 0 0 234.2.2H215c-.7 0-1.1.5-1.1 1.3v39.6c0 2.4.7 4.2 2 5.6 1.3 1.3 3.1 2 5.5 2v-.1Zm5.8-12.5V20.7c0-2.4.7-4.3 1.9-5.8 1.2-1.4 3-2.2 5.1-2.2 2 0 3.8.5 5.7 1.4 1.8 1 3.5 2.1 5 3.7 1.5 1.5 2.7 3.2 3.7 5.1 1 1.9 1.4 3.8 1.4 5.8 0 2.4-.8 4.2-2.3 5.4a8.7 8.7 0 0 1-5.7 2h-14.8Z"/>
  <path fill="#EB3C96" d="M29.4 114.2c12.8 0 21-8.8 21-21 0-15-13.4-28.4-28.4-28.4H2c-.7 0-1 .4-1 1.3v19.7c0 14.9 13.4 28.4 28.4 28.4Zm-.1-12.6c-7 0-15-9-15-16.1 0-4.8 3-8.2 7.7-8.2 7.3 0 15 8.7 15 16.2 0 4.8-2.9 8.1-7.7 8.1ZM55.2 113.2h4.5c2.4 0 4.2-.6 5.6-2l8.5-8.7c1.3-1.4 2.8-2 4.4-2a6 6 0 0 1 4.4 2L91 111c1.4 1.5 3.2 2.1 5.6 2.1h4.7c.8 0 1.1-.4 1.1-1.2v-4.6c0-2.4-.6-4.2-2-5.6L87.2 89l13.3-13c1.4-1.4 2-3.2 2-5.5v-4.3c0-.9-.3-1.4-1-1.4h-4.6c-2.3 0-4.1.7-5.6 2.1L83 75.6a6.2 6.2 0 0 1-4.5 2 6 6 0 0 1-4.4-2l-8.4-8.7a7.5 7.5 0 0 0-5.6-2h-4.8c-.7 0-1.1.4-1.1 1.3v4.5c0 2.4.6 4.2 2 5.6l13.3 13L56.2 102a7.5 7.5 0 0 0-2.1 5.6v4.3c0 .8.4 1.2 1.1 1.2ZM132.5 113.2h4.7c.7 0 1-.4 1-1.2V94.2l15.5-17.9a8 8 0 0 0 2.2-5.4v-4.7c0-.9-.4-1.4-1.2-1.4h-4.4c-2.2 0-4 .8-5.5 2.4l-8.5 10.2a6 6 0 0 1-4.5 2c-1.5 0-3.3-.9-4.3-2l-8.9-10.5c-1.2-1.4-3-2-5.6-2h-4.5c-.7 0-1 .4-1 1.3v4.7c0 2.2 1 4.4 2 5.6l15.5 18v11.3c0 4.7 2.7 7.5 7.5 7.5ZM188.2 113.2h19.6c.8 0 1.3-.4 1.3-1.1V91.7c0-2.3-.7-4.1-2-5.5a7.4 7.4 0 0 0-5.5-2h-22c-.8 0-1.3.4-1.3 1.2a10 10 0 0 0 6.7 9.3c1.2.5 2.4.7 3.9.7h7.4v5.3h-8a16.2 16.2 0 0 1-10.6-5 18.6 18.6 0 0 1-3.5-5.2c-.8-1.9-1.2-3.8-1.2-5.8 0-2.4.8-4.3 2.3-5.5a8.8 8.8 0 0 1 5.7-2h25.8c.9 0 1.4-.3 1.4-1v-4c0-2.3-.7-4.1-2-5.5a7.4 7.4 0 0 0-5.6-2h-19.5a21.3 21.3 0 0 0-15.3 5.6 18.8 18.8 0 0 0-4.5 6.4 22 22 0 0 0-1.6 8.5 28.1 28.1 0 0 0 17.7 25.8 28 28 0 0 0 10.8 2.2ZM241.4 113.2H260c.9 0 1.4-.4 1.4-1.1v-4c0-4.6-2.8-7.4-7.5-7.4h-12.4c-7.8 0-14.3-7.4-14.3-15.4 0-5 3-8 8.8-8 4.5 0 9.1 2.5 12 7.4h-14.2c-.8 0-1.3.4-1.3 1.1 0 5.8 5.2 10.1 10.3 10.1h13.6c4.6 0 6.4-2.5 6.4-6.3 0-12.7-13.8-24.8-27.6-24.8H215c-.8 0-1.1.4-1.1 1.3v19.2a28 28 0 0 0 27.5 28ZM274.6 113.2h4.7c.7 0 1.1-.4 1.1-1.2V86.2l23.2 25c1.3 1.4 3 2.1 5.2 2.1h5.6c.8 0 1.2-.5 1.2-1.3V72.4c0-2.4-.7-4.2-2-5.6a7.4 7.4 0 0 0-5.5-2h-4.7c-.8 0-1.1.5-1.1 1.4V81a5 5 0 0 1-.9 3c-.7.9-1.5 1.3-2.8 1.3-1.4 0-2.7-.7-4-2L279.5 67a6.8 6.8 0 0 0-5.2-2.2h-6c-.7 0-1.1.5-1.1 1.4v39.6c0 2.4.7 4.2 2 5.5 1.3 1.3 3.1 2 5.5 2Z"/>
  <rect width="70" height="30" x="279" fill="#FFC832" rx="4"/>
  <path fill="#091734" d="M298 20h-1.5l-.4-.1a.7.7 0 0 1-.3-.3l-.7-2h-4.2l-.8 2s0 .2-.2.3l-.4.1H288l4-10.1h2l4 10.1Zm-6.6-3.8h3.2l-1.2-3.4a24.8 24.8 0 0 1-.4-1.2 17.4 17.4 0 0 1-.4 1.2l-1.2 3.4ZM302.2 18.4h4.1V20h-6V9.9h2v8.5ZM311 16.4V20h-2V9.9h3.4c.6 0 1.2 0 1.7.2s1 .4 1.2.7c.4.3.6.6.8 1l.2 1.3c0 .5-.1 1-.3 1.4-.1.4-.4.7-.7 1-.3.3-.7.5-1.2.7-.5.2-1 .2-1.7.2h-1.5Zm0-1.4h1.4c.3 0 .6 0 .9-.2l.6-.3.4-.6a2.3 2.3 0 0 0 0-1.5l-.4-.6-.6-.3a3 3 0 0 0-1-.2H311V15ZM327.7 20h-2v-4.4H321V20h-1.9V9.9h2v4.3h4.7V10h1.9V20ZM340 20h-1.4l-.4-.1a.7.7 0 0 1-.3-.3l-.7-2H333l-.8 2s0 .2-.2.3l-.4.1h-1.5l4-10.1h2l4 10.1Zm-6.5-3.8h3.2l-1.2-3.4a24.8 24.8 0 0 1-.4-1.2 17.4 17.4 0 0 1-.4 1.2l-1.2 3.4Z"/>
</svg>
`

const footerReadme = `

<docs-page-nav prev-title="Why Liquid" prev-href="introduction/why-liquid/" next-title="Get Started" next-href="introduction/getting-started/">
  <docs-view-on-figma></docs-view-on-figma>
</docs-page-nav>
`

const headerLicense = `---
eleventyNavigation:
  key: Terms
layout: layout.njk
title: Terms
permalink: legal/license/
---

[//]: # "autogenerated"

# License

`

// eslint-disable-next-line @typescript-eslint/no-extra-semi
;(async () => {
  // README.md
  try {
    const readme = (await readFile('./README.md', { encoding: 'utf8' }))
      .split('\n')
      .splice(1)
      .join('\n')
    await writeFile('./src/index.md', headerReadme + readme + footerReadme)
  } catch (err) {
    console.error('error', err)
  }

  // LICENSE.md
  try {
    const license = await readFile('./LICENSE.md', { encoding: 'utf8' })
    await writeFile('./src/docs/pages/license.md', headerLicense + license)
  } catch (err) {
    console.error('error', err)
  }
})()
