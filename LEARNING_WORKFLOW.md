# Next.js + Go バックエンド開発 学習ワークフロー

## 現状確認
- **HTML/CSS**: 基礎一通り完了 ✓
- **JavaScript**: ほぼ未経験
- **TypeScript**: 完全未経験
- **バックエンド**: Go で実装予定
- **目標**: 効率よくフルスタック開発スキルを習得

---

## 学習ワークフロー（優先順位順）

### Phase 1: 環境構築と基本セットアップ（1-2日）
**目標**: Next.jsプロジェクトが動く状態まで**

#### 1-1. Node.js と npm の確認
```bash
node --version  # v18以上が推奨
npm --version
```

#### 1-2. TypeScript対応のNext.jsプロジェクト作成
```bash
npx create-next-app@latest frontend --typescript --tailwind
cd frontend
npm run dev
```
- **localhost:3000** でアプリが起動することを確認

#### 1-3. プロジェクト構成を理解
- `pages/` - ページコンポーネント（ファイルベースルーティング）
- `pages/api/` - APIエンドポイント
- `components/` - 再利用可能なコンポーネント
- `public/` - 静的ファイル
- `styles/` - スタイルシート

#### 1-4. 初期ファイルの確認
- `pages/index.tsx` - トップページ
- `pages/_app.tsx` - アプリケーション全体の設定
- `tsconfig.json` - TypeScript設定
- `next.config.js` - Next.js設定

---

### Phase 2: TypeScript/JavaScript 基礎を実装しながら学ぶ（3-5日）
**目標**: Next.jsでシンプルなページが作成できる状態**

#### 2-1. ページを複数作成して routing を理解
- `pages/about.tsx` - /about にアクセスすると表示
- `pages/posts/[id].tsx` - ダイナミックルーティング例：/posts/1

**学べること**: ファイルベースルーティング、動的パラメータの取得

#### 2-2. コンポーネント分割と props の理解
```typescript
// components/Header.tsx
interface HeaderProps {
  title: string;
}
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
```

**学べること**: TypeScriptの型定義、コンポーネント、propsの使い方

#### 2-3. State管理（useState）を体験
```typescript
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**学べること**: React Hooks（useState）、イベントハンドリング

#### 2-4. useEffect を学ぶ（ライフサイクル）
```typescript
import { useEffect, useState } from 'react';

export default function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // コンポーネントがマウントされたときに実行
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []); // 依存配列が空 = マウント時のみ実行

  return <div>{/* content */}</div>;
}
```

**学べること**: useEffect、依存配列、クリーンアップ処理

---

### Phase 3: API ルートの基本実装（2-3日）
**目標**: Next.jsからAPIエンドポイントを作成・呼び出しできる状態**

#### 3-1. シンプルなAPIエンドポイント作成
```typescript
// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from API' });
}
```

#### 3-2. フロントエンドから API を呼び出す
```typescript
// pages/test.tsx
import { useEffect, useState } from 'react';

export default function TestPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data && <p>{data.message}</p>}</div>;
}
```

**学べること**: fetch API、API通信、async/await

#### 3-3. GET/POST リクエスト処理
```typescript
// pages/api/users.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // POSTリクエスト処理
    const { name } = req.body;
    res.status(201).json({ id: 1, name });
  } else {
    // GETリクエスト処理
    res.status(200).json({ users: [] });
  }
}
```

**学べること**: HTTPメソッド、リクエストボディの処理

---

### Phase 4: Go バックエンド API の構築（3-5日）
**目標**: Goで簡単なREST APIサーバーを作成し、Next.jsから呼び出す**

#### 4-1. Go プロジェクトの初期化
```bash
mkdir backend
cd backend
go mod init github.com/yourusername/api
```

#### 4-2. シンプルな Hello API を作成
```go
// main.go
package main

import (
  "encoding/json"
  "fmt"
  "net/http"
)

type Message struct {
  Message string `json:"message"`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")
  w.Header().Set("Access-Control-Allow-Origin", "*")
  json.NewEncoder(w).Encode(Message{Message: "Hello from Go API"})
}

func main() {
  http.HandleFunc("/api/hello", helloHandler)
  fmt.Println("Server running on http://localhost:8080")
  http.ListenAndServe(":8080", nil)
}
```

#### 4-3. CORS 対応
フロントエンド（localhost:3000）とバックエンド（localhost:8080）は異なるオリジンのため、CORS設定が必要

#### 4-4. Next.js から Go API を呼び出す
```typescript
// pages/api/proxy.ts
// または直接フロントエンドから fetch('http://localhost:8080/api/hello')
```

---

### Phase 5: Next.js API ルート vs Go バックエンドの使い分け（1-2日）
**目標**: どの処理をどちらに実装するかを判断できる状態**

| 用途 | 推奨先 | 理由 |
|------|--------|------|
| 簡単なデータ取得・変換 | Next.js API | シンプル、デプロイ簡単 |
| 複雑なビジネスロジック | Go API | パフォーマンス、再利用性 |
| 認証・セッション管理 | Go API | セキュリティ、複数クライアント対応 |
| データベース処理 | Go API | パフォーマンス |
| リアルタイム通信 | Go API | WebSocket対応 |

---

### Phase 6: 統合プロジェクト実装（1週間）
**目標**: 簡単な Todo アプリケーションで全体を統合**

#### 6-1. 要件定義
- [ ] Todo一覧の表示（GET）
- [ ] Todoの追加（POST）
- [ ] Todoの完了マーク（PUT）
- [ ] Todoの削除（DELETE）

#### 6-2. Go バックエンド実装
- Todo struct定義
- CRUD API エンドポイント実装
- リクエスト/レスポンスのJSON処理

#### 6-3. Next.js フロントエンド実装
- Todo一覧ページ作成
- フォーム（Todo追加）
- Go API との通信

#### 6-4. スタイル調整（Tailwind CSS）
- ページレイアウト
- UI コンポーネント

---

## 学習リソース・参考情報

### Next.js
- 公式ドキュメント: https://nextjs.org/docs
- 公式チュートリアル: https://nextjs.org/learn

### TypeScript
- 公式ハンドブック: https://www.typescriptlang.org/docs/
- React + TypeScript チートシート: 実装しながら google で都度検索

### Go
- 公式チュートリアル: https://go.dev/tour
- Go net/http パッケージ: https://golang.org/pkg/net/http/

### 推奨学習スタイル
1. **実装ベース学習**: 必要になった時点で、その技術について調べる
2. **小さく始める**: Todo アプリのような小規模プロジェクトで基本を定着させる
3. **試行錯誤を恐れない**: エラーメッセージを読んで、デバッグする習慣をつける
4. **公式ドキュメントを活用**: Stack Overflow よりも公式ドキュメントを優先

---

## 次のステップ

### 今すぐやる事
- [ ] Node.js がインストールされているか確認
- [ ] `npx create-next-app` でプロジェクト作成
- [ ] localhost:3000 でアプリが起動することを確認
- [ ] pages/ ディレクトリの構造を理解
- [ ] このドキュメントを参考に、Phase 1 を完了させる

### 問題が出たときは
- コンソールエラーメッセージをよく読む
- エラー内容を google で検索
- 公式ドキュメントを確認
- 必要に応じて ChatGPT に聞く（但し、公式ドキュメントの情報が最優先）

---

## 進捗チェックリスト

- [ ] Phase 1: Next.js 環境構築 ✓
- [ ] Phase 2: TypeScript/JavaScript 基礎
- [ ] Phase 3: Next.js API ルート
- [ ] Phase 4: Go バックエンド
- [ ] Phase 5: 使い分けの理解
- [ ] Phase 6: 統合プロジェクト（Todo アプリ）

---

**目安期間**: 2-3週間で基本スキル習得、その後は実装経験で深掘り
