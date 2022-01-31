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

<svg class="docs-main__header-image" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 115">
  <title>Liquid Oxygen</title>
  <path d="M27.749 48.557H47.99c.856 0 1.33-.38 1.33-1.14V43.52c0-4.656-2.755-7.507-7.507-7.507H27.844c-8.363 0-13.684-7.318-13.684-15.3V7.599C14.16 2.942 11.404.09 6.652.09H1.996c-.76 0-1.14.475-1.14 1.33v19.577c0 15.585 11.308 27.559 26.893 27.559ZM61.686 48.557h13.02c.855 0 1.33-.38 1.33-1.14V37.152c0-.76-.475-1.14-1.33-1.14H71.76V15.58c0-1.995.95-2.946 2.945-2.946.856 0 1.33-.38 1.33-1.14V7.599c0-2.376-.664-4.182-1.995-5.512C72.71.757 70.904.09 68.53.09h-13.02c-.855 0-1.33.38-1.33 1.14v10.264c0 .76.475 1.14 1.33 1.14 1.996 0 2.946.95 2.946 2.946v20.432H55.51c-.856 0-1.331.38-1.331 1.14v3.896c0 2.376.665 4.182 1.996 5.512 1.33 1.33 3.136 1.996 5.511 1.996ZM108.603 48.557h19.291c.855 0 1.33-.38 1.33-1.14v-9.314c0-.76-.475-1.14-1.33-1.14h-3.611a14.406 14.406 0 0 0 3.801-4.942c.76-1.805 1.14-3.896 1.14-6.272 0-3.23-.855-6.367-2.471-9.503-1.615-3.136-3.801-5.891-6.367-8.267a32.502 32.502 0 0 0-8.932-5.702C108.128.852 104.706.091 101.38.091H81.9c-.761 0-1.141.475-1.141 1.33v19.292c0 3.706.76 7.317 2.376 10.643 1.52 3.326 3.61 6.272 6.177 8.838 2.565 2.566 5.606 4.656 8.932 6.082 3.326 1.52 6.748 2.28 10.359 2.28Zm-.19-12.45c-1.711 0-3.421-.474-5.037-1.425-1.711-.95-3.231-2.185-4.656-3.61-1.426-1.426-2.471-3.137-3.326-4.942-.856-1.806-1.33-3.707-1.33-5.512 0-2.376.664-4.276 2.09-5.702 1.425-1.425 3.23-2.186 5.416-2.186 1.616 0 3.327.476 5.037 1.426 1.711.95 3.231 2.185 4.657 3.61 1.33 1.426 2.47 3.137 3.326 4.943.855 1.9 1.33 3.706 1.33 5.511 0 2.28-.665 4.181-2.091 5.607-1.425 1.52-3.231 2.28-5.416 2.28ZM162.306 48.557h19.006c.761 0 1.141-.38 1.141-1.236V7.694c0-4.657-2.756-7.508-7.508-7.508h-4.656c-.76 0-1.14.475-1.14 1.33v26.42c0 4.75-2.851 8.172-7.793 8.172-8.173 0-14.064-7.603-14.064-16.25V7.694c0-4.657-2.756-7.508-7.508-7.508h-4.656c-.76 0-1.141.475-1.141 1.33v18.532c0 16.345 11.119 28.604 28.319 28.604v-.095ZM194.723 48.557h13.019c.856 0 1.331-.38 1.331-1.14V37.152c0-.76-.475-1.14-1.331-1.14h-2.945V15.58c0-1.995.95-2.946 2.945-2.946.856 0 1.331-.38 1.331-1.14V7.599c0-2.376-.665-4.182-1.996-5.512-1.33-1.33-3.136-1.996-5.512-1.996h-13.019c-.855 0-1.33.38-1.33 1.14v10.264c0 .76.475 1.14 1.33 1.14 1.996 0 2.946.95 2.946 2.946v20.432h-2.946c-.855 0-1.33.38-1.33 1.14v3.896c0 2.376.665 4.182 1.996 5.512 1.33 1.33 3.136 1.996 5.511 1.996ZM221.303 48.557h20.527c6.747 0 11.973-1.616 15.775-5.132 3.706-3.421 5.606-8.458 5.606-15.205 0-3.896-.76-7.507-2.375-10.928-1.616-3.421-3.802-6.367-6.462-8.933-2.756-2.566-5.797-4.562-9.313-5.987C241.545.947 237.933.186 234.227.186h-19.291c-.76 0-1.14.475-1.14 1.33v39.628c0 2.376.665 4.182 1.995 5.512 1.331 1.33 3.136 1.996 5.512 1.996v-.095Zm5.797-12.45V20.714c0-2.376.665-4.277 1.901-5.797 1.235-1.425 2.946-2.186 5.131-2.186 1.901 0 3.801.476 5.702 1.33a20.866 20.866 0 0 1 5.037 3.707c1.425 1.52 2.66 3.23 3.611 5.131.95 1.901 1.425 3.802 1.425 5.797 0 2.376-.76 4.182-2.281 5.417-1.615 1.33-3.516 1.996-5.701 1.996H227.1Z" fill="#2DBECD"/>
  <path d="M29.364 114.167c12.83 0 21.002-8.743 21.002-21.002 0-15.015-13.4-28.414-28.414-28.414H2.09c-.76 0-1.14.475-1.14 1.33v19.672c0 14.919 13.494 28.414 28.413 28.414Zm-.095-12.544c-7.032 0-15.015-8.933-15.015-16.156 0-4.751 3.136-8.172 7.793-8.172 7.222 0 15.015 8.743 15.015 16.155 0 4.847-2.946 8.173-7.793 8.173ZM55.224 113.216h4.467c2.375 0 4.18-.665 5.606-2.09l8.458-8.648c1.33-1.331 2.85-1.996 4.466-1.996s3.041.665 4.372 1.996l8.457 8.648c1.426 1.425 3.231 2.09 5.607 2.09h4.752c.76 0 1.14-.38 1.14-1.235v-4.562c0-2.375-.665-4.181-2.091-5.606l-13.209-12.83 13.209-12.923c1.426-1.426 2.091-3.231 2.091-5.607v-4.277c0-.855-.38-1.33-1.14-1.33h-4.467c-2.375 0-4.181.665-5.606 2.09l-8.458 8.648c-1.33 1.33-2.851 1.996-4.467 1.996-1.615 0-3.04-.665-4.371-1.996l-8.458-8.647c-1.425-1.426-3.23-2.091-5.606-2.091h-4.752c-.76 0-1.14.475-1.14 1.33v4.562c0 2.376.665 4.181 2.09 5.607l13.21 12.924-13.21 12.829c-1.425 1.425-2.09 3.231-2.09 5.607v4.276c0 .855.38 1.235 1.14 1.235ZM132.495 113.216h4.657c.76 0 1.14-.38 1.14-1.235v-17.77l15.395-17.866c1.425-1.71 2.186-3.326 2.186-5.417v-4.752c0-.855-.381-1.33-1.141-1.33h-4.466c-2.186 0-3.991.76-5.417 2.376l-8.553 10.168c-1.235 1.425-3.041 1.996-4.466 1.996-1.52 0-3.326-.856-4.371-1.996l-8.838-10.453c-1.236-1.426-3.041-2.091-5.607-2.091h-4.466c-.761 0-1.141.475-1.141 1.33v4.752c0 2.186 1.046 4.371 2.091 5.607l15.49 18.055v11.214c0 4.656 2.756 7.507 7.507 7.507v-.095ZM188.195 113.216h19.576c.855 0 1.33-.38 1.33-1.14V91.74c0-2.376-.665-4.182-1.995-5.512-1.331-1.33-3.136-1.996-5.512-1.996h-21.952c-.855 0-1.331.38-1.331 1.14 0 4.182 2.661 7.793 6.653 9.314 1.235.475 2.47.76 3.896.76h7.412v5.226h-7.982a12.45 12.45 0 0 1-5.797-1.425c-1.806-.855-3.421-2.09-4.847-3.611a18.633 18.633 0 0 1-3.421-5.132 13.838 13.838 0 0 1-1.235-5.797c0-2.375.76-4.276 2.28-5.511 1.521-1.236 3.422-1.901 5.702-1.901h25.848c.856 0 1.331-.38 1.331-1.14v-3.897c0-2.375-.665-4.181-1.996-5.511-1.33-1.33-3.136-1.996-5.512-1.996h-19.576c-3.136 0-5.987.475-8.552 1.425-2.566 1.046-4.847 2.376-6.748 4.182-1.9 1.805-3.421 3.896-4.466 6.367-1.045 2.566-1.615 5.321-1.615 8.457 0 3.897.76 7.508 2.28 10.929 1.521 3.421 3.611 6.367 6.272 8.933 2.566 2.566 5.607 4.561 9.123 5.987 3.421 1.425 7.032 2.185 10.834 2.185ZM241.423 113.216h18.626c.855 0 1.33-.38 1.33-1.14v-3.896c0-4.657-2.756-7.508-7.507-7.508h-12.354c-7.792 0-14.349-7.412-14.349-15.394 0-4.942 2.945-7.983 8.837-7.983 4.467 0 9.123 2.47 12.069 7.412h-14.254c-.856 0-1.331.38-1.331 1.14 0 5.797 5.227 10.074 10.359 10.074h13.589c4.561 0 6.367-2.566 6.367-6.367 0-12.64-13.78-24.803-27.654-24.803h-20.146c-.761 0-1.141.475-1.141 1.33v19.197c0 15.394 12.639 27.938 27.559 27.938ZM274.6 113.216h4.657c.76 0 1.14-.38 1.14-1.235V86.228l23.187 24.898c1.331 1.425 3.041 2.185 5.227 2.185h5.607c.76 0 1.14-.475 1.14-1.33V72.353c0-2.375-.665-4.18-1.995-5.511-1.331-1.33-3.136-1.996-5.512-1.996h-4.657c-.76 0-1.14.475-1.14 1.33v14.92c0 1.236-.285 2.28-.855 3.041-.665.855-1.521 1.236-2.756 1.236-1.426 0-2.756-.666-3.991-1.996l-15.205-16.345c-1.331-1.426-3.041-2.186-5.227-2.186h-5.987c-.76 0-1.14.475-1.14 1.33v39.628c0 2.376.665 4.181 1.996 5.512 1.33 1.33 3.135 1.995 5.511 1.995v-.095Z" fill="#EB3C96"/>
  <rect x="289" width="61" height="30" rx="4" fill="#FFC832"/>
  <path d="M300.021 20V9.878h3.493c.663 0 1.228.063 1.694.189.472.126.857.306 1.155.539.304.233.525.516.665.847.14.331.21.705.21 1.12 0 .238-.035.467-.105.686-.07.215-.179.418-.329.609a2.364 2.364 0 0 1-.56.51 3.308 3.308 0 0 1-.805.393c1.391.313 2.086 1.064 2.086 2.254 0 .43-.081.826-.245 1.19a2.65 2.65 0 0 1-.714.945 3.433 3.433 0 0 1-1.155.616c-.457.15-.98.224-1.568.224h-3.822Zm1.883-4.438v2.968h1.911c.35 0 .642-.042.875-.126.238-.084.427-.196.567-.336.145-.14.248-.303.308-.49.066-.187.098-.385.098-.595 0-.22-.035-.415-.105-.588a1.074 1.074 0 0 0-.329-.448 1.501 1.501 0 0 0-.574-.287 3.173 3.173 0 0 0-.847-.098h-1.904Zm0-1.302h1.505c.64 0 1.125-.117 1.456-.35.332-.233.497-.604.497-1.113 0-.527-.149-.903-.448-1.127-.298-.224-.765-.336-1.4-.336h-1.61v2.926ZM317.625 9.878v1.498h-4.487v2.807h3.535v1.449h-3.535v2.863h4.487V20h-6.384V9.878h6.384ZM328.485 9.878v1.547h-3.045V20h-1.883v-8.575h-3.059V9.878h7.987ZM339.65 20h-1.456a.664.664 0 0 1-.406-.12.731.731 0 0 1-.224-.307l-.756-2.065h-4.193l-.756 2.065a.652.652 0 0 1-.224.294.604.604 0 0 1-.399.133h-1.463l3.976-10.122h1.925L339.65 20Zm-6.552-3.822h3.227l-1.232-3.367c-.056-.15-.119-.324-.189-.525a17.312 17.312 0 0 1-.196-.665c-.065.238-.131.46-.196.665a6.537 6.537 0 0 1-.182.539l-1.232 3.353Z" fill="#091734"/>
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
