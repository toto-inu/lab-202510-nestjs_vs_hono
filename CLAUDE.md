# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト構成

このリポジトリはNestJSとHonoフレームワークの比較プロジェクトです：

- `hono_app/` - TypeScriptを使用したHonoフレームワークの実装
- `nestjs_app/` - （将来のNestJS実装用の空ディレクトリ）

## Honoアプリのアーキテクチャ

Honoアプリケーションはモジュール構造に従っています：
- エントリーポイント: `hono_app/src/index.ts`
- `src/modules/`内にモジュール式コントローラーを配置
- 各モジュールには: controller、service、およびexport用のindex.tsが含まれる
- ルートは`/api/`プレフィックス付き（例: `/api/users`, `/api/posts`）
- TypeScriptファイル内で`.js`インポートを使用するESモジュール形式

## よく使用するコマンド

### 開発
```bash
cd hono_app
npm install
npm run dev          # ホットリロード付き開発サーバー起動
```

### ビルドと本番環境
```bash
cd hono_app
npm run build        # TypeScriptをdist/にコンパイル
npm start            # コンパイルされたJavaScriptを実行
```

### サーバーアクセス
- 開発サーバーは `http://localhost:3000` で動作
- APIエンドポイントは `/api/users` と `/api/posts` で利用可能

## TypeScript設定

- ESモジュール使用（package.jsonの`"type": "module"`）
- 厳密なTypeScript設定が有効
- 出力ディレクトリ: `dist/`
- ESモジュール互換性のためインポートパスに`.js`拡張子を使用