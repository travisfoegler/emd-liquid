module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-high-performance-animation',
    'stylelint-use-nesting',
  ],
  rules: {
    'block-no-empty': true,
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'csstools/use-nesting': true,
    'declaration-block-trailing-semicolon': null,
    'plugin/no-low-performance-animation-properties': true,
    'scale-unlimited/declaration-strict-value': [
      ['/color/', 'font-size'],
      {
        ignoreKeywords: 'transparent',
        disableFix: true,
      },
    ],
    'selector-no-qualifying-type': null,
  },
}
