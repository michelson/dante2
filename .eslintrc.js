module.exports = {
    "extends": "standard",
    "parser": "babel-eslint",
    "rules": {
      "strict": 0,
      "indent": [2, 2, { "SwitchCase": 1 }],
      "quotes": [2, "single"],
      "linebreak-style": [2, "unix"],
      "semi": [2, "always"]
    },
    "env": {
      "es6": true,
      "browser": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
      "modules": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "plugins": [
      "react",
      "standard",
      "promise"
    ]

};