<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/241376eb-e687-465b-9bc4-685cc3467d50

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Firebase Hosting Preview（PR確認用）

`main` にマージする前に実画面確認できるよう、PRごとに Firebase Hosting Preview Channel へデプロイするワークフローを追加しています。

### 事前設定（初回のみ）

1. Firebase サービスアカウントキー（JSON）を作成  
   - Firebase Console → プロジェクト設定 → サービスアカウント → 新しい秘密鍵を生成
2. GitHub リポジトリの Secrets に以下を登録  
   - `FIREBASE_SERVICE_ACCOUNT_PATROL_FLOW` : 上記 JSON の全文

### 使い方

1. ブランチで変更を push して PR を作成
2. `Firebase Hosting Preview` ワークフローが自動実行
3. PRコメントにプレビューURL（`https://<channel>--patrol-flow.web.app`）が投稿される

### このプレビューで確認する項目

1. field / safety で是正対応登録してもエラー表示が出ない
2. 是正対応履歴が保存される
3. admin / safety で是正確認へ進める
4. 確認履歴と status 遷移が正しい
