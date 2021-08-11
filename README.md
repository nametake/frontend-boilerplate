# frontend-boilerplate

このプロジェクトはTypeScript + Reactでフロントエンドを書くときの個人的デフォルト設定をまとめているものです。

## Component

Compoenntの定義には[emotion](https://emotion.sh/docs/introduction)のstyled-componentを使用します。

## Configuration

### TypeScript

TypeScriptのバージョンは`esnext`にしています。適宜プロダクトごとに固定してください。

importのパスを`@/`から始まる絶対パスで指定できるように以下の設定をしています。詳細は[該当の記事](https://nametake.github.io/posts/2019/10/07/typescript-absolute-imports/)を参照してください。

```jsonc
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
```

その他の設定は強く意志を持って設定していないため、適宜変更してください。

### eslint

`airbnb`の設定をベースにしています。

意志を持って変更をしているルールを以下に記述します。

-   `"react-hooks/rules-of-hooks": "error"`

-   `"react-hooks/exhaustive-deps": "error"`

    Hooksのdepsの指定はバグになりやすいためどちらもerrorを指定しています。

-   `"import/extensions": ["error", "ignorePackages", {"ts": "never", "tsx": "never", "js": "never", "mjs": "never", "jsx": "never"}]`

    airbnbの設定がTypeScriptに対応していないため、拡張子を追加しています。

-   `"import/prefer-default-export": "off"`

-   `"import/no-default-export": "error"`

    [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/main-1/defaultisbad)で`export deault`を禁止することを推奨しているため上記2つを設定しています。

-   `"import/no-relative-parent-imports": "error"`

    親を指定した相対パスのimportを禁止するために設定しています。

-   `"react/jsx-filename-extension": [ 1, { "extensions": [ ".tsx" ] } ]`

    JSXを含むファイルの拡張子を`.tsx`に限定したいため設定しています。

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
