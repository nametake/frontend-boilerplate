# frontend-boilerplate

このプロジェクトはTypeScript + Reactでフロントエンドを書くときの個人的デフォルト設定をまとめているものです。

## Component

Compoenntの定義には[emotion](https://emotion.sh/docs/introduction)のstyled-componentを使用します。

## Configuration

### TypeScript

TypeScriptのバージョンは`esnext`にしています。適宜プロダクトごとに固定してください。

importのパスを`@/`から始まる絶対パスで指定できるように以下の設定をしています。詳細は[こちらの記事](https://nametake.github.io/posts/2019/10/07/typescript-absolute-imports/)を参照してください。

```jsonc
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
```

その他の設定はプロジェクトに合わせて適宜変更してください。

### eslint

`airbnb`の設定をベースにしています。

意図的に変更をしているルールを以下に記述します。

-   `'no-console': ['error']`

    consoleに文字列が出力されないようにしています。

-   `'no-restricted-imports': ['error', { patterns: ['../*'] }]`

    親を指定した相対パスのimportを禁止するために設定しています。

-   `'import/prefer-default-export': 'off'`

-   `'import/no-default-export': 'error'`

    [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/main-1/defaultisbad)で`export deault`を禁止することを推奨しているため上記2つを設定しています。

-   `'import/order': ['error', { ... }]`

    import順で差分が発生しないように指定しています。

-   `'react/prop-types': 'off'`

-   `'react/require-default-props': 'off'`

    TypeScriptで型チェックをしているためoffにしています。

### Webpack

Webpackでは、TypeScriptで書かれたコードをbabelを使って変換するための基本的な設定をしています。

importのパスを`@/`から始まる絶対パスで指定できるように以下の設定をしています。詳細は[該当の記事](https://nametake.github.io/posts/2019/10/07/typescript-absolute-imports/)を参照してください。

```ts
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
```
