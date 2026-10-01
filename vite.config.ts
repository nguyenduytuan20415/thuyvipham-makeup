import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages phục vụ site từ thư mục con /<repo>/, nên base chỉ đặt khi build trong CI.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/thuyvipham-makeup/' : '/',
})