# Veliq Games

ブラウザゲームプラットフォーム。PWA対応、モバイルファースト、自動収益化基盤付き。

**Veliq Games** is a browser game platform. PWA-ready, mobile-first, with built-in monetization infrastructure.

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
- `template/index.html`
- `games/game-001/index.html`
- `games/game-002/index.html`
- `games/game-003/index.html`
- `shared/ads.js`

### 2. GA4 IDの差し替え

```
G-XXXXXXXXXX → 実際のGA4測定ID
```

**対象ファイル:**
- `template/index.html`
- `games/game-001/index.html`
- `games/game-002/index.html`
- `games/game-003/index.html`
- `shared/analytics.js`

### 3. ドメインの差し替え

`sitemap.xml` と `robots.txt` 内の `yourdomain.com` を実際のドメインに置換。

---

## Deploy / デプロイ

### GitHub Pages

1. リポジトリの Settings → Pages を開く
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)` を選択して Save
4. `veliq-games/` 以下が `https://<username>.github.io/<repo>/veliq-games/` で公開される

### itch.io 投稿手順

1. [itch.io](https://itch.io) にログイン → Dashboard → Create new project
2. Kind of project: **HTML**
3. 各ゲームフォルダ（`games/game-001/` 等）をZIP化してアップロード
4. 設定:
   - Viewport dimensions: 480 × 800
   - Mobile friendly: **Yes**
   - Fullscreen button: **Yes**
5. Publish

---

## Architecture / アーキテクチャ

```
veliq-games/
├── template/index.html    # 共通テンプレート（新ゲーム作成のベース）
├── games/
│   ├── game-001/          # 指揮者クソゲー
│   ├── game-002/          # クラシック検定
│   └── game-003/          # FXトレードゲーム
├── shared/
│   ├── analytics.js       # GA4モジュール
│   ├── ads.js             # AdSenseモジュール
│   └── share.js           # シェアモジュール
├── manifest.json          # PWAマニフェスト
├── sw.js                  # Service Worker
├── robots.txt             # SEO
├── sitemap.xml            # SEO
└── README.md
```

### Design Principles / 設計方針

- **1ゲーム1ファイル**: 各ゲームは単一HTMLファイルで完結（外部依存なし、Chart.jsのみ例外）
- **プレースホルダー設計**: AdSense・GA4のIDは一括検索置換で差し替え可能
- **テンプレート駆動**: `template/index.html` をコピーして新ゲームを量産
- **ブランド統一**: 黒×ゴールド（#C9A84C）、Noto Sans JP

---

## License

All rights reserved. Veliq Games.
