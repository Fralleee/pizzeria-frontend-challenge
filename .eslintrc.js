module.exports = {
  extends: ["react-app", "prettier"],
  rules: {
    semi: [1, "never"],
    quotes: [1, "double"],
    "max-len": [1, { code: 180 }],
    "comma-dangle": [1, "never"],
    "object-property-newline": [1, { allowAllPropertiesOnSameLine: true }],
    "object-curly-newline": [
      1,
      {
        ObjectExpression: {
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true
        },
        ExportDeclaration: {
          multiline: true,
          consistent: true
        }
      }
    ]
  }
}
