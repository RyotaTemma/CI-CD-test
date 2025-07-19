# CI/CD Test Project 🚀

このプロジェクトは GitHub Actions を使用した CI/CD パイプラインのテスト用プロジェクトです。

## 機能

- 基本的な数学関数（足し算、引き算、掛け算、割り算）
- Jest を使用した単体テスト
- GitHub Actions による自動テスト・ビルド

## セットアップ

```bash
npm install
```

## 使用方法

### アプリケーションの実行
```bash
npm start
```

### テストの実行
```bash
npm test
```

### ビルドの実行
```bash
npm run build
```

## CI/CD

このプロジェクトは以下の GitHub Actions ワークフローを使用しています：

- **Push時**: Hello World ワークフローが実行
- **PR時**: テストとビルドが自動実行

### ワークフロー

1. `hello-world.yml`: Push時にHello Worldメッセージを表示
2. `pre-merge-buildi.yml`: PRの際にテストとビルドを実行

## プロジェクト構造

```
CI-CD-test/
├── .github/
│   └── workflows/
│       ├── hello-world.yml
│       └── pre-merge-buildi.yml
├── src/
│   ├── index.js      # メインアプリケーション
│   └── math.js       # 数学関数
├── test/
│   └── math.test.js  # テストファイル
├── package.json
└── README.md
```

## テスト

Jestを使用してテストを実行します：

- 数学関数の正常系テスト
- エラーハンドリングのテスト 