# frontend-boilerplate

## Configuration

### TypeScript

TypeScriptのバージョンは`esnext`にしています。適宜プロダクトごとに固定してください。

importのパスを`@/`から始まる絶対パスで指定できるように以下の設定をしています。詳細は [該当の記事](https://nametake.github.io/posts/2019/10/07/typescript-absolute-imports/)を参照してください。

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

### Webpack
