# Position プロパティ 学習用サンプル

各 `position` 値の挙動を視覚的に理解するためのサンプル集です。

## 使い方

1. `index.html` をブラウザで開く
2. 各セクションをスクロールして、position値の違いを観察する
3. ボックスがどのように動作するかを確認する

## 含まれるサンプル

### 1. position: static
- デフォルト値
- 通常のflowに従う（上から下へ流れる）
- left, top などの位置指定は効かない

### 2. position: relative
- 元の位置から相対的に移動
- **元の領域は占有したまま** ← 重要！
- 親の基準位置設定に使われることが多い

### 3. position: absolute
- DOM flowから外れる
- 親（position: relativeが必要）を基準に配置
- 元の領域を占有しない
- モーダル、ツールチップなどに使用

### 4. position: fixed
- ページ全体を基準に配置
- **スクロールしても位置が変わらない** ← 重要！
- navbar、サイドバーに最適
- z-indexで重ね順を制御

### 5. position: sticky
- 最初はnormal flow
- スクロール時に指定位置に「くっつく」
- テーブルヘッダー、セクションヘッダーに最適

## 重要なポイント

| 特性 | static | relative | absolute | fixed | sticky |
|------|--------|----------|----------|-------|--------|
| Flow内か | ✓ | ✓ | ✗ | ✗ | ✓(部分) |
| 領域占有 | ✓ | ✓ | ✗ | ✗ | ✓ |
| 基準位置 | - | 元位置 | 親 | viewport | 親/viewport |
| スクロール時 | 動く | 動く | 動く | 固定 | くっつく |

## CSS 主要プロパティ

各positionと組み合わせて使う主要プロパティ：

```css
/* 位置指定 */
top: 0;      /* 上からの距離 */
bottom: 0;   /* 下からの距離 */
left: 0;     /* 左からの距離 */
right: 0;    /* 右からの距離 */

/* 重ね順 */
z-index: 100;  /* 値が大きいほど前 */

/* animation */
transform: translateX(-100%);  /* 移動アニメーション */
transition: 0.3s;              /* アニメーション時間 */
```

## 参考資料

- [MDN - position](https://developer.mozilla.org/ja/docs/Web/CSS/position)
- [CSS-Tricks - The Position Property](https://css-tricks.com/almanac/properties/p/position/)

---

**このサンプルで position の挙動を完全に理解できます！** 
