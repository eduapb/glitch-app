module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "mocha": true,
        "es6": true,
        "node": true
    },
    "globals": {
        "sqlTools": true,
        "mySqlPool": true,
        "mysql": true,
        "_": true,
        "debugLogger": true,
        "mdw": true,
        "cf": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2017
    },
    "rules": {
        "array-bracket-spacing": ["error", "never"],
        "arrow-body-style": ["error", "as-needed"],
        //"arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
        "block-spacing": "error",
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "curly": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "func-names": ["error", "never"],
        "generator-star-spacing": ["error", "after"],
        "indent": ["error", "tab", { "SwitchCase": 1 }],
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "new-parens": "error",
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-catch-shadow": "error",
				"no-confusing-arrow": ["error", { "allowParens": true }],
				"no-console": "warn",
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "no-eval": "error",
        "no-extend-native": "error",
        "no-implied-eval": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-return-await": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": ["error", { "args": "after-used" }],
        "no-useless-escape": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-spacing": ["error", "always"],
        "operator-assignment": ["error", "always"],
        "prefer-const": ["error", { "destructuring": "all", "ignoreReadBeforeAssign": true }],
        "quotes": ["error", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],
        "radix": "error",
        "require-yield": "off",
        "semi": ["error", "always"],
        "space-before-blocks" : ["error", "always"],
        "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { "words": true, "nonwords": false, "overrides": { "!": true } }],
        "valid-typeof": "error",
        "yoda": "error"
    }
};
