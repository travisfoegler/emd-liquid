/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const designTokens = require('./design-tokens.json')

function decToHex(value) {
  if (value > 255) {
    return 'FF'
  } else if (value < 0) {
    return '00'
  } else {
    return value.toString(16).padStart(2, '0')
  }
}
function rgbToHex(r, g, b) {
  return '#' + decToHex(r) + decToHex(g) + decToHex(b)
}
function colorValueToHex(colorValue: string) {
  const rgbRegex = /(\d{1,3}), (\d{1,3}), (\d{1,3})/g
  const extraction = rgbRegex.exec(colorValue)
  return rgbToHex(
    parseInt(extraction[1]),
    parseInt(extraction[2]),
    parseInt(extraction[3])
  )
}

// Extract colors
// Tailwind's background-opacity utility only works with hex color values, so we convert rgb to hex.
const colors = {}
Object.entries(designTokens.colors).forEach(([key, value]) => {
  const hex = colorValueToHex(value as string)

  const [, base, modifier, isDefault] =
    /^([a-z-]+)(\d)*(\/default)?$/.exec(key) || []

  if (!modifier) {
    colors[key] = hex
    return
  }

  if (!colors[base]) {
    colors[base] = {}
  }

  if (isDefault) {
    colors[base].DEFAULT = hex
  }
  colors[base][modifier.padEnd(3, '0')] = hex
})
Object.entries(designTokens.themes).forEach(([theme, themeColors]) => {
  colors[theme] = {}
  Object.entries(themeColors).forEach(([key, value]) => {
    colors[theme][key] = colorValueToHex(value)
  })
})

// Extract typography
const typography = {}
const fontSize = designTokens
Object.entries({
  ...designTokens.typography.display,
  ...designTokens.typography.body,
} as {
  fontSize: string
  lineHeight: string
  fontFamily: string
}[]).forEach(([key, value]) => {
  typography[`.typo-${key}`] = value
  fontSize[key] = value.fontSize
})

// Extract spacings
const spacing = {}
Object.entries(designTokens.spacings).forEach(([key, value]) => {
  spacing[`ld-${key}`] = value
})

const preset = {
  theme: {
    colors,
    borderRadius: {
      ...designTokens.borderRadii,
      none: '0px',
    },
    boxShadow: designTokens.shadows,
    dropShadow: designTokens.shadows,
    fontSize,
    fontFamily: {
      body: ['Lato', 'sans-serif'],
      display: ['MWeb', 'sans-serif'],
    },
    extend: {
      spacing,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(typography)
    }),
  ],
  corePlugins: {},
}

module.exports = preset