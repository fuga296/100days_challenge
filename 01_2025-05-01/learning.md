Dockerの重要点
  - 変更監視: vite.config.js
  - Dockerfile、docker-compose.yml、アプリ立ち上げ、コマンド

```bash
npm install
```

```json
"scripts": {
  "dev": "vite --host"
}
```

```ts
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
```

```bash
docker compose start app
docker compose stop app
docker compose exec murder-mystery-manager sh
```

```bash
mkdir my-repo
cd my-repo
npm create vite@latest app1 -- --template react-ts
cd app1
npm install
npm install react-router-dom
npm install --save-dev gh-pages
```

```ts
// myrepo/app1/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-repo/app1/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
});
```


```tsx
// my-repo/app1/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
```

```json
// my-repo/app1/package.json
"scripts": {
  "dev": "vite --host",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist -b gh-pages -r https://github.com/ユーザー名/my-repo.git -D app1"
}
```

```bash
cd app1
npm run deploy
```