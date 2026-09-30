# 海可愛工作室網站

這個儲存庫保存從 [Manus 網站專案](https://manus.im/app/mpQFbB2ZDRlrzDlqgKnnY3) 於 2026-09-30 匯出的原始碼。現有網站位於 [sea-able-ai.com](https://sea-able-ai.com/)。GitHub 與 Manus 目前沒有自動同步；在其中一處修改後，需要另行更新另一處。

## 本機開發

專案使用 Node.js 與 pnpm（`package.json` 指定 pnpm 10.4.1）。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

開發伺服器預設使用 `http://localhost:3000`。建立正式版本：

```bash
pnpm build
```

前端產物位於 `dist/public`。部署到新的主機時，請依該主機的設定指定建置指令與產物目錄；若使用靜態主機，還需要讓 `/experiences`、`/artists`、`/about`、`/register` 等路徑回傳 `index.html`。

> 此儲存庫的建立不會變更目前 Manus 網站的網域或發布狀態。
