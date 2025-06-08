import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProduction = process.env.ENVIROMENT === 'PROD'
const repoName = process.env.REPO_NAME || '';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isProduction ? `/${repoName}/` : '/',
})
