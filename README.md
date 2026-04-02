# Veliq Games

ブラウザゲームプラットフォーム。PWA対応、モバイルファースト、自動収益化基盤付き。

**Veliq Games** is a browser game platform. PWA-ready, mobile-first, with built-in monetization infrastructure.

**Live:** https://shostako315.github.io/Logical-Detox-/

---

## Games

| # | Title | Description |
|---|-------|-------------|
| 001 | 天才指揮者になれ！ | リズムタップ系クソゲー。判定が理不尽に厳しい |
| 002 | この曲、誰の曲？クラシック検定 | クラシック音楽4択クイズ全20問 |
| 003 | 1万円を1億円にしろ！FXトレードゲーム | 仮想FXトレード、30ターン勝負 |

---

## Setup / セットアップ

### 1. AdSense IDの差し替え

全ファイル内の以下のプレースホルダーを実際のIDに一括置換してください：

```
ca-pub-XXXXXXXXXXXXXXXX → 実際のAdSenseパブリッシャーID
XXXXXXXXXX (data-ad-slot) → 実際の広告ユニットID
```

**対象ファイル:**
- `veliq-games/index.html`
- `veliq-games/template/index.html`
- `veliq-games/games/game-001/index.html`
- `veliq-games/games/game-002/index.html`
- `veliq-games/games/game-003/index.html`
- `veliq-games/shared/ads.js`

### 2. GA4 IDの差し替え

```
G-XXXXXXXXXX → 実際のGA4測定ID
```

**対象ファイル:**
- `veliq-games/index.html`
- `veliq-games/template/index.html`
- `veliq-games/games/game-001/index.html`
- `veliq-games/games/game-002/index.html`
- `veliq-games/games/game-003/index.html`
- `veliq-games/shared/analytics.js`

---

## Deploy / デプロイ

### GitHub Pages（現在使用中）

1. リポジトリの Settings → Pages を開く
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)` を選択して Save
4. 公開URL: `https://shostako315.github.io/Logical-Detox-/`

### itch.io 投稿手順

1. [itch.io](https://itch.io) にログイン → Dashboard → Create new project
2. Kind of project: **HTML**
3. 各ゲームフォルダ（`veliq-games/games/game-001/` 等）をZIP化してアップロード
4. 設定:
   - Viewport dimensions: 480 × 800
   - Mobile friendly: **Yes**
   - Fullscreen button: **Yes**
5. Publish

---

## Architecture / アーキテクチャ

```
├── index.html              # ルート（veliq-games/へリダイレクト）
├── manifest.json            # PWAマニフェスト
├── sw.js                    # Service Worker
└── veliq-games/
    ├── index.html           # ゲームポータル（ランディングページ）
    ├── template/index.html  # 共通テンプレート（新ゲーム作成のベース）
    ├── games/
    │   ├── game-001/        # 天才指揮者になれ！
    │   ├── game-002/        # クラシック検定
    │   └── game-003/        # FXトレードゲーム
    ├── shared/
    │   ├── analytics.js     # GA4モジュール
    │   ├── ads.js           # AdSenseモジュール
    │   └── share.js         # シェアモジュール
    ├── manifest.json        # PWAマニフェスト（ゲーム用）
    ├── sw.js                # Service Worker（ゲーム用）
    ├── robots.txt           # SEO
    └── sitemap.xml          # SEO
```

---

## License

All rights reserved. Veliq Games.
