/* flow-include

declare module 'eslint' {
    declare module .exports: any
;
}
declare module 'eslint/bin/eslint' {
    declare module .exports: any
;
}
declare module 'eslint/conf/config-schema' {
    declare module .exports: any
;
}
declare module 'eslint/conf/default-cli-options' {
    declare module .exports: any
;
}
declare module 'eslint/conf/default-config-options' {
    declare module .exports: any
;
}
declare module 'eslint/conf/environments' {
    declare module .exports: any
;
}
declare module 'eslint/conf/eslint-all' {
    declare module .exports: any
;
}
declare module 'eslint/conf/eslint-recommended' {
    declare module .exports: any
;
}
declare module 'eslint/lib/api' {
    declare module .exports: any
;
}
declare module 'eslint/lib/ast-utils' {
    declare module .exports: any
;
}
declare module 'eslint/lib/cli-engine' {
    declare module .exports: any
;
}
declare module 'eslint/lib/cli' {
    declare module .exports: any
;
}
declare module 'eslint/lib/code-path-analysis/code-path-analyzer' {
    declare module .exports: any
;
}
declare module 'eslint/lib/code-path-analysis/code-path-segment' {
    declare module .exports: any
;
}
declare module 'eslint/lib/code-path-analysis/code-path-state' {
    declare module .exports: any
;
}
declare module 'eslint/lib/code-path-analysis/code-path' {
    declare module .exports: any
;
}
declare module 'eslint/lib/code-path-analysis/debug-helpers' {
    declare module .exports: any
;
}
declare module 'eslint/lib/code-path-analysis/fork-context' {
    declare module .exports: any
;
}
declare module 'eslint/lib/code-path-analysis/id-generator' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/autoconfig' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/config-cache' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/config-file' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/config-initializer' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/config-ops' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/config-rule' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/config-validator' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/environments' {
    declare module .exports: any
;
}
declare module 'eslint/lib/config/plugins' {
    declare module .exports: any
;
}
declare module 'eslint/lib/file-finder' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/checkstyle' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/codeframe' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/compact' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/html' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/jslint-xml' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/json' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/junit' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/stylish' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/table' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/tap' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/unix' {
    declare module .exports: any
;
}
declare module 'eslint/lib/formatters/visualstudio' {
    declare module .exports: any
;
}
declare module 'eslint/lib/ignored-paths' {
    declare module .exports: any
;
}
declare module 'eslint/lib/linter' {
    declare module .exports: any
;
}
declare module 'eslint/lib/load-rules' {
    declare module .exports: any
;
}
declare module 'eslint/lib/logging' {
    declare module .exports: any
;
}
declare module 'eslint/lib/options' {
    declare module .exports: any
;
}
declare module 'eslint/lib/report-translator' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/accessor-pairs' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/array-bracket-newline' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/array-bracket-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/array-callback-return' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/array-element-newline' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/arrow-body-style' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/arrow-parens' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/arrow-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/block-scoped-var' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/block-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/brace-style' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/callback-return' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/camelcase' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/capitalized-comments' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/class-methods-use-this' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/comma-dangle' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/comma-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/comma-style' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/complexity' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/computed-property-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/consistent-return' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/consistent-this' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/constructor-super' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/curly' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/default-case' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/dot-location' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/dot-notation' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/eol-last' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/eqeqeq' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/for-direction' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/func-call-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/func-name-matching' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/func-names' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/func-style' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/function-paren-newline' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/generator-star-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/getter-return' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/global-require' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/guard-for-in' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/handle-callback-err' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/id-blacklist' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/id-length' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/id-match' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/implicit-arrow-linebreak' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/indent-legacy' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/indent' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/init-declarations' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/jsx-quotes' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/key-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/keyword-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/line-comment-position' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/linebreak-style' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/lines-around-comment' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/lines-around-directive' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/lines-between-class-members' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/max-depth' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/max-len' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/max-lines' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/max-nested-callbacks' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/max-params' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/max-statements-per-line' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/max-statements' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/multiline-comment-style' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/multiline-ternary' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/new-cap' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/new-parens' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/newline-after-var' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/newline-before-return' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/newline-per-chained-call' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-alert' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-array-constructor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-await-in-loop' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-bitwise' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-buffer-constructor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-caller' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-case-declarations' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-catch-shadow' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-class-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-compare-neg-zero' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-cond-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-confusing-arrow' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-console' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-const-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-constant-condition' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-continue' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-control-regex' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-debugger' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-delete-var' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-div-regex' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-dupe-args' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-dupe-class-members' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-dupe-keys' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-duplicate-case' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-duplicate-imports' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-else-return' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-empty-character-class' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-empty-function' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-empty-pattern' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-empty' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-eq-null' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-eval' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-ex-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-extend-native' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-extra-bind' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-extra-boolean-cast' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-extra-label' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-extra-parens' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-extra-semi' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-fallthrough' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-floating-decimal' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-func-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-global-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-implicit-coercion' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-implicit-globals' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-implied-eval' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-inline-comments' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-inner-declarations' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-invalid-regexp' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-invalid-this' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-irregular-whitespace' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-iterator' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-label-var' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-labels' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-lone-blocks' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-lonely-if' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-loop-func' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-magic-numbers' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-mixed-operators' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-mixed-requires' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-mixed-spaces-and-tabs' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-multi-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-multi-spaces' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-multi-str' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-multiple-empty-lines' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-native-reassign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-negated-condition' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-negated-in-lhs' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-nested-ternary' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-new-func' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-new-object' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-new-require' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-new-symbol' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-new-wrappers' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-new' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-obj-calls' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-octal-escape' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-octal' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-param-reassign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-path-concat' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-plusplus' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-process-env' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-process-exit' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-proto' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-prototype-builtins' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-redeclare' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-regex-spaces' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-restricted-globals' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-restricted-imports' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-restricted-modules' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-restricted-properties' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-restricted-syntax' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-return-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-return-await' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-script-url' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-self-assign' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-self-compare' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-sequences' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-shadow-restricted-names' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-shadow' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-spaced-func' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-sparse-arrays' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-sync' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-tabs' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-template-curly-in-string' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-ternary' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-this-before-super' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-throw-literal' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-trailing-spaces' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-undef-init' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-undef' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-undefined' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-underscore-dangle' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unexpected-multiline' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unmodified-loop-condition' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unneeded-ternary' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unreachable' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unsafe-finally' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unsafe-negation' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unused-expressions' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unused-labels' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-unused-vars' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-use-before-define' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-useless-call' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-useless-computed-key' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-useless-concat' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-useless-constructor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-useless-escape' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-useless-rename' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-useless-return' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-var' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-void' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-warning-comments' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-whitespace-before-property' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/no-with' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/nonblock-statement-body-position' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/object-curly-newline' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/object-curly-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/object-property-newline' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/object-shorthand' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/one-var-declaration-per-line' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/one-var' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/operator-assignment' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/operator-linebreak' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/padded-blocks' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/padding-line-between-statements' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-arrow-callback' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-const' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-destructuring' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-numeric-literals' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-promise-reject-errors' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-reflect' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-rest-params' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-spread' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/prefer-template' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/quote-props' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/quotes' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/radix' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/require-await' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/require-jsdoc' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/require-yield' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/rest-spread-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/semi-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/semi-style' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/semi' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/sort-imports' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/sort-keys' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/sort-vars' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/space-before-blocks' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/space-before-function-paren' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/space-in-parens' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/space-infix-ops' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/space-unary-ops' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/spaced-comment' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/strict' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/switch-colon-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/symbol-description' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/template-curly-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/template-tag-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/unicode-bom' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/use-isnan' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/valid-jsdoc' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/valid-typeof' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/vars-on-top' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/wrap-iife' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/wrap-regex' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/yield-star-spacing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/rules/yoda' {
    declare module .exports: any
;
}
declare module 'eslint/lib/testers/rule-tester' {
    declare module .exports: any
;
}
declare module 'eslint/lib/timing' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/backward-token-comment-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/backward-token-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/cursors' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/decorative-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/filter-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/forward-token-comment-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/forward-token-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/index' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/limit-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/padded-token-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/skip-cursor' {
    declare module .exports: any
;
}
declare module 'eslint/lib/token-store/utils' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/ajv' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/apply-disable-directives' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/fix-tracker' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/glob-util' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/glob' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/hash' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/interpolate' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/keywords' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/module-resolver' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/naming' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/node-event-generator' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/npm-util' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/path-util' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/patterns/letters' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/rule-fixer' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/safe-emitter' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/source-code-fixer' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/source-code-util' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/source-code' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/traverser' {
    declare module .exports: any
;
}
declare module 'eslint/lib/util/xml-escape' {
    declare module .exports: any
;
}
declare module 'eslint/bin/eslint.js' {
    declare module .exports: $Exports<'eslint/bin/eslint'>
;
}
declare module 'eslint/conf/config-schema.js' {
    declare module .exports: $Exports<'eslint/conf/config-schema'>
;
}
declare module 'eslint/conf/default-cli-options.js' {
    declare module .exports: $Exports<'eslint/conf/default-cli-options'>
;
}
declare module 'eslint/conf/default-config-options.js' {
    declare module .exports: $Exports<'eslint/conf/default-config-options'>
;
}
declare module 'eslint/conf/environments.js' {
    declare module .exports: $Exports<'eslint/conf/environments'>
;
}
declare module 'eslint/conf/eslint-all.js' {
    declare module .exports: $Exports<'eslint/conf/eslint-all'>
;
}
declare module 'eslint/conf/eslint-recommended.js' {
    declare module .exports: $Exports<'eslint/conf/eslint-recommended'>
;
}
declare module 'eslint/lib/api.js' {
    declare module .exports: $Exports<'eslint/lib/api'>
;
}
declare module 'eslint/lib/ast-utils.js' {
    declare module .exports: $Exports<'eslint/lib/ast-utils'>
;
}
declare module 'eslint/lib/cli-engine.js' {
    declare module .exports: $Exports<'eslint/lib/cli-engine'>
;
}
declare module 'eslint/lib/cli.js' {
    declare module .exports: $Exports<'eslint/lib/cli'>
;
}
declare module 'eslint/lib/code-path-analysis/code-path-analyzer.js' {
    declare module .exports: $Exports<'eslint/lib/code-path-analysis/code-path-analyzer'>
;
}
declare module 'eslint/lib/code-path-analysis/code-path-segment.js' {
    declare module .exports: $Exports<'eslint/lib/code-path-analysis/code-path-segment'>
;
}
declare module 'eslint/lib/code-path-analysis/code-path-state.js' {
    declare module .exports: $Exports<'eslint/lib/code-path-analysis/code-path-state'>
;
}
declare module 'eslint/lib/code-path-analysis/code-path.js' {
    declare module .exports: $Exports<'eslint/lib/code-path-analysis/code-path'>
;
}
declare module 'eslint/lib/code-path-analysis/debug-helpers.js' {
    declare module .exports: $Exports<'eslint/lib/code-path-analysis/debug-helpers'>
;
}
declare module 'eslint/lib/code-path-analysis/fork-context.js' {
    declare module .exports: $Exports<'eslint/lib/code-path-analysis/fork-context'>
;
}
declare module 'eslint/lib/code-path-analysis/id-generator.js' {
    declare module .exports: $Exports<'eslint/lib/code-path-analysis/id-generator'>
;
}
declare module 'eslint/lib/config.js' {
    declare module .exports: $Exports<'eslint/lib/config'>
;
}
declare module 'eslint/lib/config/autoconfig.js' {
    declare module .exports: $Exports<'eslint/lib/config/autoconfig'>
;
}
declare module 'eslint/lib/config/config-cache.js' {
    declare module .exports: $Exports<'eslint/lib/config/config-cache'>
;
}
declare module 'eslint/lib/config/config-file.js' {
    declare module .exports: $Exports<'eslint/lib/config/config-file'>
;
}
declare module 'eslint/lib/config/config-initializer.js' {
    declare module .exports: $Exports<'eslint/lib/config/config-initializer'>
;
}
declare module 'eslint/lib/config/config-ops.js' {
    declare module .exports: $Exports<'eslint/lib/config/config-ops'>
;
}
declare module 'eslint/lib/config/config-rule.js' {
    declare module .exports: $Exports<'eslint/lib/config/config-rule'>
;
}
declare module 'eslint/lib/config/config-validator.js' {
    declare module .exports: $Exports<'eslint/lib/config/config-validator'>
;
}
declare module 'eslint/lib/config/environments.js' {
    declare module .exports: $Exports<'eslint/lib/config/environments'>
;
}
declare module 'eslint/lib/config/plugins.js' {
    declare module .exports: $Exports<'eslint/lib/config/plugins'>
;
}
declare module 'eslint/lib/file-finder.js' {
    declare module .exports: $Exports<'eslint/lib/file-finder'>
;
}
declare module 'eslint/lib/formatters/checkstyle.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/checkstyle'>
;
}
declare module 'eslint/lib/formatters/codeframe.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/codeframe'>
;
}
declare module 'eslint/lib/formatters/compact.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/compact'>
;
}
declare module 'eslint/lib/formatters/html.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/html'>
;
}
declare module 'eslint/lib/formatters/jslint-xml.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/jslint-xml'>
;
}
declare module 'eslint/lib/formatters/json.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/json'>
;
}
declare module 'eslint/lib/formatters/junit.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/junit'>
;
}
declare module 'eslint/lib/formatters/stylish.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/stylish'>
;
}
declare module 'eslint/lib/formatters/table.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/table'>
;
}
declare module 'eslint/lib/formatters/tap.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/tap'>
;
}
declare module 'eslint/lib/formatters/unix.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/unix'>
;
}
declare module 'eslint/lib/formatters/visualstudio.js' {
    declare module .exports: $Exports<'eslint/lib/formatters/visualstudio'>
;
}
declare module 'eslint/lib/ignored-paths.js' {
    declare module .exports: $Exports<'eslint/lib/ignored-paths'>
;
}
declare module 'eslint/lib/linter.js' {
    declare module .exports: $Exports<'eslint/lib/linter'>
;
}
declare module 'eslint/lib/load-rules.js' {
    declare module .exports: $Exports<'eslint/lib/load-rules'>
;
}
declare module 'eslint/lib/logging.js' {
    declare module .exports: $Exports<'eslint/lib/logging'>
;
}
declare module 'eslint/lib/options.js' {
    declare module .exports: $Exports<'eslint/lib/options'>
;
}
declare module 'eslint/lib/report-translator.js' {
    declare module .exports: $Exports<'eslint/lib/report-translator'>
;
}
declare module 'eslint/lib/rules.js' {
    declare module .exports: $Exports<'eslint/lib/rules'>
;
}
declare module 'eslint/lib/rules/accessor-pairs.js' {
    declare module .exports: $Exports<'eslint/lib/rules/accessor-pairs'>
;
}
declare module 'eslint/lib/rules/array-bracket-newline.js' {
    declare module .exports: $Exports<'eslint/lib/rules/array-bracket-newline'>
;
}
declare module 'eslint/lib/rules/array-bracket-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/array-bracket-spacing'>
;
}
declare module 'eslint/lib/rules/array-callback-return.js' {
    declare module .exports: $Exports<'eslint/lib/rules/array-callback-return'>
;
}
declare module 'eslint/lib/rules/array-element-newline.js' {
    declare module .exports: $Exports<'eslint/lib/rules/array-element-newline'>
;
}
declare module 'eslint/lib/rules/arrow-body-style.js' {
    declare module .exports: $Exports<'eslint/lib/rules/arrow-body-style'>
;
}
declare module 'eslint/lib/rules/arrow-parens.js' {
    declare module .exports: $Exports<'eslint/lib/rules/arrow-parens'>
;
}
declare module 'eslint/lib/rules/arrow-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/arrow-spacing'>
;
}
declare module 'eslint/lib/rules/block-scoped-var.js' {
    declare module .exports: $Exports<'eslint/lib/rules/block-scoped-var'>
;
}
declare module 'eslint/lib/rules/block-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/block-spacing'>
;
}
declare module 'eslint/lib/rules/brace-style.js' {
    declare module .exports: $Exports<'eslint/lib/rules/brace-style'>
;
}
declare module 'eslint/lib/rules/callback-return.js' {
    declare module .exports: $Exports<'eslint/lib/rules/callback-return'>
;
}
declare module 'eslint/lib/rules/camelcase.js' {
    declare module .exports: $Exports<'eslint/lib/rules/camelcase'>
;
}
declare module 'eslint/lib/rules/capitalized-comments.js' {
    declare module .exports: $Exports<'eslint/lib/rules/capitalized-comments'>
;
}
declare module 'eslint/lib/rules/class-methods-use-this.js' {
    declare module .exports: $Exports<'eslint/lib/rules/class-methods-use-this'>
;
}
declare module 'eslint/lib/rules/comma-dangle.js' {
    declare module .exports: $Exports<'eslint/lib/rules/comma-dangle'>
;
}
declare module 'eslint/lib/rules/comma-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/comma-spacing'>
;
}
declare module 'eslint/lib/rules/comma-style.js' {
    declare module .exports: $Exports<'eslint/lib/rules/comma-style'>
;
}
declare module 'eslint/lib/rules/complexity.js' {
    declare module .exports: $Exports<'eslint/lib/rules/complexity'>
;
}
declare module 'eslint/lib/rules/computed-property-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/computed-property-spacing'>
;
}
declare module 'eslint/lib/rules/consistent-return.js' {
    declare module .exports: $Exports<'eslint/lib/rules/consistent-return'>
;
}
declare module 'eslint/lib/rules/consistent-this.js' {
    declare module .exports: $Exports<'eslint/lib/rules/consistent-this'>
;
}
declare module 'eslint/lib/rules/constructor-super.js' {
    declare module .exports: $Exports<'eslint/lib/rules/constructor-super'>
;
}
declare module 'eslint/lib/rules/curly.js' {
    declare module .exports: $Exports<'eslint/lib/rules/curly'>
;
}
declare module 'eslint/lib/rules/default-case.js' {
    declare module .exports: $Exports<'eslint/lib/rules/default-case'>
;
}
declare module 'eslint/lib/rules/dot-location.js' {
    declare module .exports: $Exports<'eslint/lib/rules/dot-location'>
;
}
declare module 'eslint/lib/rules/dot-notation.js' {
    declare module .exports: $Exports<'eslint/lib/rules/dot-notation'>
;
}
declare module 'eslint/lib/rules/eol-last.js' {
    declare module .exports: $Exports<'eslint/lib/rules/eol-last'>
;
}
declare module 'eslint/lib/rules/eqeqeq.js' {
    declare module .exports: $Exports<'eslint/lib/rules/eqeqeq'>
;
}
declare module 'eslint/lib/rules/for-direction.js' {
    declare module .exports: $Exports<'eslint/lib/rules/for-direction'>
;
}
declare module 'eslint/lib/rules/func-call-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/func-call-spacing'>
;
}
declare module 'eslint/lib/rules/func-name-matching.js' {
    declare module .exports: $Exports<'eslint/lib/rules/func-name-matching'>
;
}
declare module 'eslint/lib/rules/func-names.js' {
    declare module .exports: $Exports<'eslint/lib/rules/func-names'>
;
}
declare module 'eslint/lib/rules/func-style.js' {
    declare module .exports: $Exports<'eslint/lib/rules/func-style'>
;
}
declare module 'eslint/lib/rules/function-paren-newline.js' {
    declare module .exports: $Exports<'eslint/lib/rules/function-paren-newline'>
;
}
declare module 'eslint/lib/rules/generator-star-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/generator-star-spacing'>
;
}
declare module 'eslint/lib/rules/getter-return.js' {
    declare module .exports: $Exports<'eslint/lib/rules/getter-return'>
;
}
declare module 'eslint/lib/rules/global-require.js' {
    declare module .exports: $Exports<'eslint/lib/rules/global-require'>
;
}
declare module 'eslint/lib/rules/guard-for-in.js' {
    declare module .exports: $Exports<'eslint/lib/rules/guard-for-in'>
;
}
declare module 'eslint/lib/rules/handle-callback-err.js' {
    declare module .exports: $Exports<'eslint/lib/rules/handle-callback-err'>
;
}
declare module 'eslint/lib/rules/id-blacklist.js' {
    declare module .exports: $Exports<'eslint/lib/rules/id-blacklist'>
;
}
declare module 'eslint/lib/rules/id-length.js' {
    declare module .exports: $Exports<'eslint/lib/rules/id-length'>
;
}
declare module 'eslint/lib/rules/id-match.js' {
    declare module .exports: $Exports<'eslint/lib/rules/id-match'>
;
}
declare module 'eslint/lib/rules/implicit-arrow-linebreak.js' {
    declare module .exports: $Exports<'eslint/lib/rules/implicit-arrow-linebreak'>
;
}
declare module 'eslint/lib/rules/indent-legacy.js' {
    declare module .exports: $Exports<'eslint/lib/rules/indent-legacy'>
;
}
declare module 'eslint/lib/rules/indent.js' {
    declare module .exports: $Exports<'eslint/lib/rules/indent'>
;
}
declare module 'eslint/lib/rules/init-declarations.js' {
    declare module .exports: $Exports<'eslint/lib/rules/init-declarations'>
;
}
declare module 'eslint/lib/rules/jsx-quotes.js' {
    declare module .exports: $Exports<'eslint/lib/rules/jsx-quotes'>
;
}
declare module 'eslint/lib/rules/key-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/key-spacing'>
;
}
declare module 'eslint/lib/rules/keyword-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/keyword-spacing'>
;
}
declare module 'eslint/lib/rules/line-comment-position.js' {
    declare module .exports: $Exports<'eslint/lib/rules/line-comment-position'>
;
}
declare module 'eslint/lib/rules/linebreak-style.js' {
    declare module .exports: $Exports<'eslint/lib/rules/linebreak-style'>
;
}
declare module 'eslint/lib/rules/lines-around-comment.js' {
    declare module .exports: $Exports<'eslint/lib/rules/lines-around-comment'>
;
}
declare module 'eslint/lib/rules/lines-around-directive.js' {
    declare module .exports: $Exports<'eslint/lib/rules/lines-around-directive'>
;
}
declare module 'eslint/lib/rules/lines-between-class-members.js' {
    declare module .exports: $Exports<'eslint/lib/rules/lines-between-class-members'>
;
}
declare module 'eslint/lib/rules/max-depth.js' {
    declare module .exports: $Exports<'eslint/lib/rules/max-depth'>
;
}
declare module 'eslint/lib/rules/max-len.js' {
    declare module .exports: $Exports<'eslint/lib/rules/max-len'>
;
}
declare module 'eslint/lib/rules/max-lines.js' {
    declare module .exports: $Exports<'eslint/lib/rules/max-lines'>
;
}
declare module 'eslint/lib/rules/max-nested-callbacks.js' {
    declare module .exports: $Exports<'eslint/lib/rules/max-nested-callbacks'>
;
}
declare module 'eslint/lib/rules/max-params.js' {
    declare module .exports: $Exports<'eslint/lib/rules/max-params'>
;
}
declare module 'eslint/lib/rules/max-statements-per-line.js' {
    declare module .exports: $Exports<'eslint/lib/rules/max-statements-per-line'>
;
}
declare module 'eslint/lib/rules/max-statements.js' {
    declare module .exports: $Exports<'eslint/lib/rules/max-statements'>
;
}
declare module 'eslint/lib/rules/multiline-comment-style.js' {
    declare module .exports: $Exports<'eslint/lib/rules/multiline-comment-style'>
;
}
declare module 'eslint/lib/rules/multiline-ternary.js' {
    declare module .exports: $Exports<'eslint/lib/rules/multiline-ternary'>
;
}
declare module 'eslint/lib/rules/new-cap.js' {
    declare module .exports: $Exports<'eslint/lib/rules/new-cap'>
;
}
declare module 'eslint/lib/rules/new-parens.js' {
    declare module .exports: $Exports<'eslint/lib/rules/new-parens'>
;
}
declare module 'eslint/lib/rules/newline-after-var.js' {
    declare module .exports: $Exports<'eslint/lib/rules/newline-after-var'>
;
}
declare module 'eslint/lib/rules/newline-before-return.js' {
    declare module .exports: $Exports<'eslint/lib/rules/newline-before-return'>
;
}
declare module 'eslint/lib/rules/newline-per-chained-call.js' {
    declare module .exports: $Exports<'eslint/lib/rules/newline-per-chained-call'>
;
}
declare module 'eslint/lib/rules/no-alert.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-alert'>
;
}
declare module 'eslint/lib/rules/no-array-constructor.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-array-constructor'>
;
}
declare module 'eslint/lib/rules/no-await-in-loop.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-await-in-loop'>
;
}
declare module 'eslint/lib/rules/no-bitwise.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-bitwise'>
;
}
declare module 'eslint/lib/rules/no-buffer-constructor.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-buffer-constructor'>
;
}
declare module 'eslint/lib/rules/no-caller.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-caller'>
;
}
declare module 'eslint/lib/rules/no-case-declarations.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-case-declarations'>
;
}
declare module 'eslint/lib/rules/no-catch-shadow.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-catch-shadow'>
;
}
declare module 'eslint/lib/rules/no-class-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-class-assign'>
;
}
declare module 'eslint/lib/rules/no-compare-neg-zero.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-compare-neg-zero'>
;
}
declare module 'eslint/lib/rules/no-cond-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-cond-assign'>
;
}
declare module 'eslint/lib/rules/no-confusing-arrow.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-confusing-arrow'>
;
}
declare module 'eslint/lib/rules/no-console.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-console'>
;
}
declare module 'eslint/lib/rules/no-const-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-const-assign'>
;
}
declare module 'eslint/lib/rules/no-constant-condition.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-constant-condition'>
;
}
declare module 'eslint/lib/rules/no-continue.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-continue'>
;
}
declare module 'eslint/lib/rules/no-control-regex.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-control-regex'>
;
}
declare module 'eslint/lib/rules/no-debugger.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-debugger'>
;
}
declare module 'eslint/lib/rules/no-delete-var.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-delete-var'>
;
}
declare module 'eslint/lib/rules/no-div-regex.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-div-regex'>
;
}
declare module 'eslint/lib/rules/no-dupe-args.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-dupe-args'>
;
}
declare module 'eslint/lib/rules/no-dupe-class-members.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-dupe-class-members'>
;
}
declare module 'eslint/lib/rules/no-dupe-keys.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-dupe-keys'>
;
}
declare module 'eslint/lib/rules/no-duplicate-case.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-duplicate-case'>
;
}
declare module 'eslint/lib/rules/no-duplicate-imports.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-duplicate-imports'>
;
}
declare module 'eslint/lib/rules/no-else-return.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-else-return'>
;
}
declare module 'eslint/lib/rules/no-empty-character-class.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-empty-character-class'>
;
}
declare module 'eslint/lib/rules/no-empty-function.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-empty-function'>
;
}
declare module 'eslint/lib/rules/no-empty-pattern.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-empty-pattern'>
;
}
declare module 'eslint/lib/rules/no-empty.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-empty'>
;
}
declare module 'eslint/lib/rules/no-eq-null.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-eq-null'>
;
}
declare module 'eslint/lib/rules/no-eval.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-eval'>
;
}
declare module 'eslint/lib/rules/no-ex-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-ex-assign'>
;
}
declare module 'eslint/lib/rules/no-extend-native.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-extend-native'>
;
}
declare module 'eslint/lib/rules/no-extra-bind.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-extra-bind'>
;
}
declare module 'eslint/lib/rules/no-extra-boolean-cast.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-extra-boolean-cast'>
;
}
declare module 'eslint/lib/rules/no-extra-label.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-extra-label'>
;
}
declare module 'eslint/lib/rules/no-extra-parens.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-extra-parens'>
;
}
declare module 'eslint/lib/rules/no-extra-semi.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-extra-semi'>
;
}
declare module 'eslint/lib/rules/no-fallthrough.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-fallthrough'>
;
}
declare module 'eslint/lib/rules/no-floating-decimal.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-floating-decimal'>
;
}
declare module 'eslint/lib/rules/no-func-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-func-assign'>
;
}
declare module 'eslint/lib/rules/no-global-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-global-assign'>
;
}
declare module 'eslint/lib/rules/no-implicit-coercion.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-implicit-coercion'>
;
}
declare module 'eslint/lib/rules/no-implicit-globals.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-implicit-globals'>
;
}
declare module 'eslint/lib/rules/no-implied-eval.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-implied-eval'>
;
}
declare module 'eslint/lib/rules/no-inline-comments.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-inline-comments'>
;
}
declare module 'eslint/lib/rules/no-inner-declarations.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-inner-declarations'>
;
}
declare module 'eslint/lib/rules/no-invalid-regexp.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-invalid-regexp'>
;
}
declare module 'eslint/lib/rules/no-invalid-this.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-invalid-this'>
;
}
declare module 'eslint/lib/rules/no-irregular-whitespace.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-irregular-whitespace'>
;
}
declare module 'eslint/lib/rules/no-iterator.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-iterator'>
;
}
declare module 'eslint/lib/rules/no-label-var.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-label-var'>
;
}
declare module 'eslint/lib/rules/no-labels.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-labels'>
;
}
declare module 'eslint/lib/rules/no-lone-blocks.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-lone-blocks'>
;
}
declare module 'eslint/lib/rules/no-lonely-if.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-lonely-if'>
;
}
declare module 'eslint/lib/rules/no-loop-func.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-loop-func'>
;
}
declare module 'eslint/lib/rules/no-magic-numbers.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-magic-numbers'>
;
}
declare module 'eslint/lib/rules/no-mixed-operators.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-mixed-operators'>
;
}
declare module 'eslint/lib/rules/no-mixed-requires.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-mixed-requires'>
;
}
declare module 'eslint/lib/rules/no-mixed-spaces-and-tabs.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-mixed-spaces-and-tabs'>
;
}
declare module 'eslint/lib/rules/no-multi-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-multi-assign'>
;
}
declare module 'eslint/lib/rules/no-multi-spaces.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-multi-spaces'>
;
}
declare module 'eslint/lib/rules/no-multi-str.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-multi-str'>
;
}
declare module 'eslint/lib/rules/no-multiple-empty-lines.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-multiple-empty-lines'>
;
}
declare module 'eslint/lib/rules/no-native-reassign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-native-reassign'>
;
}
declare module 'eslint/lib/rules/no-negated-condition.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-negated-condition'>
;
}
declare module 'eslint/lib/rules/no-negated-in-lhs.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-negated-in-lhs'>
;
}
declare module 'eslint/lib/rules/no-nested-ternary.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-nested-ternary'>
;
}
declare module 'eslint/lib/rules/no-new-func.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-new-func'>
;
}
declare module 'eslint/lib/rules/no-new-object.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-new-object'>
;
}
declare module 'eslint/lib/rules/no-new-require.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-new-require'>
;
}
declare module 'eslint/lib/rules/no-new-symbol.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-new-symbol'>
;
}
declare module 'eslint/lib/rules/no-new-wrappers.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-new-wrappers'>
;
}
declare module 'eslint/lib/rules/no-new.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-new'>
;
}
declare module 'eslint/lib/rules/no-obj-calls.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-obj-calls'>
;
}
declare module 'eslint/lib/rules/no-octal-escape.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-octal-escape'>
;
}
declare module 'eslint/lib/rules/no-octal.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-octal'>
;
}
declare module 'eslint/lib/rules/no-param-reassign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-param-reassign'>
;
}
declare module 'eslint/lib/rules/no-path-concat.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-path-concat'>
;
}
declare module 'eslint/lib/rules/no-plusplus.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-plusplus'>
;
}
declare module 'eslint/lib/rules/no-process-env.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-process-env'>
;
}
declare module 'eslint/lib/rules/no-process-exit.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-process-exit'>
;
}
declare module 'eslint/lib/rules/no-proto.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-proto'>
;
}
declare module 'eslint/lib/rules/no-prototype-builtins.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-prototype-builtins'>
;
}
declare module 'eslint/lib/rules/no-redeclare.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-redeclare'>
;
}
declare module 'eslint/lib/rules/no-regex-spaces.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-regex-spaces'>
;
}
declare module 'eslint/lib/rules/no-restricted-globals.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-restricted-globals'>
;
}
declare module 'eslint/lib/rules/no-restricted-imports.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-restricted-imports'>
;
}
declare module 'eslint/lib/rules/no-restricted-modules.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-restricted-modules'>
;
}
declare module 'eslint/lib/rules/no-restricted-properties.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-restricted-properties'>
;
}
declare module 'eslint/lib/rules/no-restricted-syntax.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-restricted-syntax'>
;
}
declare module 'eslint/lib/rules/no-return-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-return-assign'>
;
}
declare module 'eslint/lib/rules/no-return-await.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-return-await'>
;
}
declare module 'eslint/lib/rules/no-script-url.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-script-url'>
;
}
declare module 'eslint/lib/rules/no-self-assign.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-self-assign'>
;
}
declare module 'eslint/lib/rules/no-self-compare.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-self-compare'>
;
}
declare module 'eslint/lib/rules/no-sequences.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-sequences'>
;
}
declare module 'eslint/lib/rules/no-shadow-restricted-names.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-shadow-restricted-names'>
;
}
declare module 'eslint/lib/rules/no-shadow.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-shadow'>
;
}
declare module 'eslint/lib/rules/no-spaced-func.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-spaced-func'>
;
}
declare module 'eslint/lib/rules/no-sparse-arrays.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-sparse-arrays'>
;
}
declare module 'eslint/lib/rules/no-sync.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-sync'>
;
}
declare module 'eslint/lib/rules/no-tabs.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-tabs'>
;
}
declare module 'eslint/lib/rules/no-template-curly-in-string.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-template-curly-in-string'>
;
}
declare module 'eslint/lib/rules/no-ternary.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-ternary'>
;
}
declare module 'eslint/lib/rules/no-this-before-super.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-this-before-super'>
;
}
declare module 'eslint/lib/rules/no-throw-literal.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-throw-literal'>
;
}
declare module 'eslint/lib/rules/no-trailing-spaces.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-trailing-spaces'>
;
}
declare module 'eslint/lib/rules/no-undef-init.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-undef-init'>
;
}
declare module 'eslint/lib/rules/no-undef.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-undef'>
;
}
declare module 'eslint/lib/rules/no-undefined.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-undefined'>
;
}
declare module 'eslint/lib/rules/no-underscore-dangle.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-underscore-dangle'>
;
}
declare module 'eslint/lib/rules/no-unexpected-multiline.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unexpected-multiline'>
;
}
declare module 'eslint/lib/rules/no-unmodified-loop-condition.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unmodified-loop-condition'>
;
}
declare module 'eslint/lib/rules/no-unneeded-ternary.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unneeded-ternary'>
;
}
declare module 'eslint/lib/rules/no-unreachable.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unreachable'>
;
}
declare module 'eslint/lib/rules/no-unsafe-finally.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unsafe-finally'>
;
}
declare module 'eslint/lib/rules/no-unsafe-negation.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unsafe-negation'>
;
}
declare module 'eslint/lib/rules/no-unused-expressions.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unused-expressions'>
;
}
declare module 'eslint/lib/rules/no-unused-labels.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unused-labels'>
;
}
declare module 'eslint/lib/rules/no-unused-vars.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-unused-vars'>
;
}
declare module 'eslint/lib/rules/no-use-before-define.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-use-before-define'>
;
}
declare module 'eslint/lib/rules/no-useless-call.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-useless-call'>
;
}
declare module 'eslint/lib/rules/no-useless-computed-key.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-useless-computed-key'>
;
}
declare module 'eslint/lib/rules/no-useless-concat.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-useless-concat'>
;
}
declare module 'eslint/lib/rules/no-useless-constructor.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-useless-constructor'>
;
}
declare module 'eslint/lib/rules/no-useless-escape.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-useless-escape'>
;
}
declare module 'eslint/lib/rules/no-useless-rename.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-useless-rename'>
;
}
declare module 'eslint/lib/rules/no-useless-return.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-useless-return'>
;
}
declare module 'eslint/lib/rules/no-var.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-var'>
;
}
declare module 'eslint/lib/rules/no-void.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-void'>
;
}
declare module 'eslint/lib/rules/no-warning-comments.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-warning-comments'>
;
}
declare module 'eslint/lib/rules/no-whitespace-before-property.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-whitespace-before-property'>
;
}
declare module 'eslint/lib/rules/no-with.js' {
    declare module .exports: $Exports<'eslint/lib/rules/no-with'>
;
}
declare module 'eslint/lib/rules/nonblock-statement-body-position.js' {
    declare module .exports: $Exports<'eslint/lib/rules/nonblock-statement-body-position'>
;
}
declare module 'eslint/lib/rules/object-curly-newline.js' {
    declare module .exports: $Exports<'eslint/lib/rules/object-curly-newline'>
;
}
declare module 'eslint/lib/rules/object-curly-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/object-curly-spacing'>
;
}
declare module 'eslint/lib/rules/object-property-newline.js' {
    declare module .exports: $Exports<'eslint/lib/rules/object-property-newline'>
;
}
declare module 'eslint/lib/rules/object-shorthand.js' {
    declare module .exports: $Exports<'eslint/lib/rules/object-shorthand'>
;
}
declare module 'eslint/lib/rules/one-var-declaration-per-line.js' {
    declare module .exports: $Exports<'eslint/lib/rules/one-var-declaration-per-line'>
;
}
declare module 'eslint/lib/rules/one-var.js' {
    declare module .exports: $Exports<'eslint/lib/rules/one-var'>
;
}
declare module 'eslint/lib/rules/operator-assignment.js' {
    declare module .exports: $Exports<'eslint/lib/rules/operator-assignment'>
;
}
declare module 'eslint/lib/rules/operator-linebreak.js' {
    declare module .exports: $Exports<'eslint/lib/rules/operator-linebreak'>
;
}
declare module 'eslint/lib/rules/padded-blocks.js' {
    declare module .exports: $Exports<'eslint/lib/rules/padded-blocks'>
;
}
declare module 'eslint/lib/rules/padding-line-between-statements.js' {
    declare module .exports: $Exports<'eslint/lib/rules/padding-line-between-statements'>
;
}
declare module 'eslint/lib/rules/prefer-arrow-callback.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-arrow-callback'>
;
}
declare module 'eslint/lib/rules/prefer-const.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-const'>
;
}
declare module 'eslint/lib/rules/prefer-destructuring.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-destructuring'>
;
}
declare module 'eslint/lib/rules/prefer-numeric-literals.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-numeric-literals'>
;
}
declare module 'eslint/lib/rules/prefer-promise-reject-errors.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-promise-reject-errors'>
;
}
declare module 'eslint/lib/rules/prefer-reflect.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-reflect'>
;
}
declare module 'eslint/lib/rules/prefer-rest-params.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-rest-params'>
;
}
declare module 'eslint/lib/rules/prefer-spread.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-spread'>
;
}
declare module 'eslint/lib/rules/prefer-template.js' {
    declare module .exports: $Exports<'eslint/lib/rules/prefer-template'>
;
}
declare module 'eslint/lib/rules/quote-props.js' {
    declare module .exports: $Exports<'eslint/lib/rules/quote-props'>
;
}
declare module 'eslint/lib/rules/quotes.js' {
    declare module .exports: $Exports<'eslint/lib/rules/quotes'>
;
}
declare module 'eslint/lib/rules/radix.js' {
    declare module .exports: $Exports<'eslint/lib/rules/radix'>
;
}
declare module 'eslint/lib/rules/require-await.js' {
    declare module .exports: $Exports<'eslint/lib/rules/require-await'>
;
}
declare module 'eslint/lib/rules/require-jsdoc.js' {
    declare module .exports: $Exports<'eslint/lib/rules/require-jsdoc'>
;
}
declare module 'eslint/lib/rules/require-yield.js' {
    declare module .exports: $Exports<'eslint/lib/rules/require-yield'>
;
}
declare module 'eslint/lib/rules/rest-spread-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/rest-spread-spacing'>
;
}
declare module 'eslint/lib/rules/semi-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/semi-spacing'>
;
}
declare module 'eslint/lib/rules/semi-style.js' {
    declare module .exports: $Exports<'eslint/lib/rules/semi-style'>
;
}
declare module 'eslint/lib/rules/semi.js' {
    declare module .exports: $Exports<'eslint/lib/rules/semi'>
;
}
declare module 'eslint/lib/rules/sort-imports.js' {
    declare module .exports: $Exports<'eslint/lib/rules/sort-imports'>
;
}
declare module 'eslint/lib/rules/sort-keys.js' {
    declare module .exports: $Exports<'eslint/lib/rules/sort-keys'>
;
}
declare module 'eslint/lib/rules/sort-vars.js' {
    declare module .exports: $Exports<'eslint/lib/rules/sort-vars'>
;
}
declare module 'eslint/lib/rules/space-before-blocks.js' {
    declare module .exports: $Exports<'eslint/lib/rules/space-before-blocks'>
;
}
declare module 'eslint/lib/rules/space-before-function-paren.js' {
    declare module .exports: $Exports<'eslint/lib/rules/space-before-function-paren'>
;
}
declare module 'eslint/lib/rules/space-in-parens.js' {
    declare module .exports: $Exports<'eslint/lib/rules/space-in-parens'>
;
}
declare module 'eslint/lib/rules/space-infix-ops.js' {
    declare module .exports: $Exports<'eslint/lib/rules/space-infix-ops'>
;
}
declare module 'eslint/lib/rules/space-unary-ops.js' {
    declare module .exports: $Exports<'eslint/lib/rules/space-unary-ops'>
;
}
declare module 'eslint/lib/rules/spaced-comment.js' {
    declare module .exports: $Exports<'eslint/lib/rules/spaced-comment'>
;
}
declare module 'eslint/lib/rules/strict.js' {
    declare module .exports: $Exports<'eslint/lib/rules/strict'>
;
}
declare module 'eslint/lib/rules/switch-colon-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/switch-colon-spacing'>
;
}
declare module 'eslint/lib/rules/symbol-description.js' {
    declare module .exports: $Exports<'eslint/lib/rules/symbol-description'>
;
}
declare module 'eslint/lib/rules/template-curly-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/template-curly-spacing'>
;
}
declare module 'eslint/lib/rules/template-tag-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/template-tag-spacing'>
;
}
declare module 'eslint/lib/rules/unicode-bom.js' {
    declare module .exports: $Exports<'eslint/lib/rules/unicode-bom'>
;
}
declare module 'eslint/lib/rules/use-isnan.js' {
    declare module .exports: $Exports<'eslint/lib/rules/use-isnan'>
;
}
declare module 'eslint/lib/rules/valid-jsdoc.js' {
    declare module .exports: $Exports<'eslint/lib/rules/valid-jsdoc'>
;
}
declare module 'eslint/lib/rules/valid-typeof.js' {
    declare module .exports: $Exports<'eslint/lib/rules/valid-typeof'>
;
}
declare module 'eslint/lib/rules/vars-on-top.js' {
    declare module .exports: $Exports<'eslint/lib/rules/vars-on-top'>
;
}
declare module 'eslint/lib/rules/wrap-iife.js' {
    declare module .exports: $Exports<'eslint/lib/rules/wrap-iife'>
;
}
declare module 'eslint/lib/rules/wrap-regex.js' {
    declare module .exports: $Exports<'eslint/lib/rules/wrap-regex'>
;
}
declare module 'eslint/lib/rules/yield-star-spacing.js' {
    declare module .exports: $Exports<'eslint/lib/rules/yield-star-spacing'>
;
}
declare module 'eslint/lib/rules/yoda.js' {
    declare module .exports: $Exports<'eslint/lib/rules/yoda'>
;
}
declare module 'eslint/lib/testers/rule-tester.js' {
    declare module .exports: $Exports<'eslint/lib/testers/rule-tester'>
;
}
declare module 'eslint/lib/timing.js' {
    declare module .exports: $Exports<'eslint/lib/timing'>
;
}
declare module 'eslint/lib/token-store/backward-token-comment-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/backward-token-comment-cursor'>
;
}
declare module 'eslint/lib/token-store/backward-token-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/backward-token-cursor'>
;
}
declare module 'eslint/lib/token-store/cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/cursor'>
;
}
declare module 'eslint/lib/token-store/cursors.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/cursors'>
;
}
declare module 'eslint/lib/token-store/decorative-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/decorative-cursor'>
;
}
declare module 'eslint/lib/token-store/filter-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/filter-cursor'>
;
}
declare module 'eslint/lib/token-store/forward-token-comment-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/forward-token-comment-cursor'>
;
}
declare module 'eslint/lib/token-store/forward-token-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/forward-token-cursor'>
;
}
declare module 'eslint/lib/token-store/index.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/index'>
;
}
declare module 'eslint/lib/token-store/limit-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/limit-cursor'>
;
}
declare module 'eslint/lib/token-store/padded-token-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/padded-token-cursor'>
;
}
declare module 'eslint/lib/token-store/skip-cursor.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/skip-cursor'>
;
}
declare module 'eslint/lib/token-store/utils.js' {
    declare module .exports: $Exports<'eslint/lib/token-store/utils'>
;
}
declare module 'eslint/lib/util/ajv.js' {
    declare module .exports: $Exports<'eslint/lib/util/ajv'>
;
}
declare module 'eslint/lib/util/apply-disable-directives.js' {
    declare module .exports: $Exports<'eslint/lib/util/apply-disable-directives'>
;
}
declare module 'eslint/lib/util/fix-tracker.js' {
    declare module .exports: $Exports<'eslint/lib/util/fix-tracker'>
;
}
declare module 'eslint/lib/util/glob-util.js' {
    declare module .exports: $Exports<'eslint/lib/util/glob-util'>
;
}
declare module 'eslint/lib/util/glob.js' {
    declare module .exports: $Exports<'eslint/lib/util/glob'>
;
}
declare module 'eslint/lib/util/hash.js' {
    declare module .exports: $Exports<'eslint/lib/util/hash'>
;
}
declare module 'eslint/lib/util/interpolate.js' {
    declare module .exports: $Exports<'eslint/lib/util/interpolate'>
;
}
declare module 'eslint/lib/util/keywords.js' {
    declare module .exports: $Exports<'eslint/lib/util/keywords'>
;
}
declare module 'eslint/lib/util/module-resolver.js' {
    declare module .exports: $Exports<'eslint/lib/util/module-resolver'>
;
}
declare module 'eslint/lib/util/naming.js' {
    declare module .exports: $Exports<'eslint/lib/util/naming'>
;
}
declare module 'eslint/lib/util/node-event-generator.js' {
    declare module .exports: $Exports<'eslint/lib/util/node-event-generator'>
;
}
declare module 'eslint/lib/util/npm-util.js' {
    declare module .exports: $Exports<'eslint/lib/util/npm-util'>
;
}
declare module 'eslint/lib/util/path-util.js' {
    declare module .exports: $Exports<'eslint/lib/util/path-util'>
;
}
declare module 'eslint/lib/util/patterns/letters.js' {
    declare module .exports: $Exports<'eslint/lib/util/patterns/letters'>
;
}
declare module 'eslint/lib/util/rule-fixer.js' {
    declare module .exports: $Exports<'eslint/lib/util/rule-fixer'>
;
}
declare module 'eslint/lib/util/safe-emitter.js' {
    declare module .exports: $Exports<'eslint/lib/util/safe-emitter'>
;
}
declare module 'eslint/lib/util/source-code-fixer.js' {
    declare module .exports: $Exports<'eslint/lib/util/source-code-fixer'>
;
}
declare module 'eslint/lib/util/source-code-util.js' {
    declare module .exports: $Exports<'eslint/lib/util/source-code-util'>
;
}
declare module 'eslint/lib/util/source-code.js' {
    declare module .exports: $Exports<'eslint/lib/util/source-code'>
;
}
declare module 'eslint/lib/util/traverser.js' {
    declare module .exports: $Exports<'eslint/lib/util/traverser'>
;
}
declare module 'eslint/lib/util/xml-escape.js' {
    declare module .exports: $Exports<'eslint/lib/util/xml-escape'>
;
}

*/
