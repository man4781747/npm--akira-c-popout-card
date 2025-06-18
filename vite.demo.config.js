/**
 * 輸出 Demo 網頁用的設定
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import postcssNesting from 'postcss-nesting';
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [vue(),viteSingleFile(),],
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  },
  resolve: {
    alias: {
      // 根據環境變數決定使用打包後的模組還是本地組件
      // Use built module or local component based on environment variable
      'akira-c-popout-card': process.env.USE_BUILT_MODULE === 'true'
        ? () => {
          let targetPath = path.resolve(__dirname, 'lib/popout-card.js')
          console.log("[模擬正式使用] akira-c-popout-card 模組路徑導向至:", targetPath)
          return targetPath
        }
        : () => {
          let targetPath = path.resolve(__dirname, 'src/components/PopoutCard')
          console.log("[開發模式使用] akira-c-popout-card 模組路徑導向至:",targetPath)
          return targetPath
        },
    }
  },
  build: {
    outDir: 'dist', // 避免污染 lib/
    emptyOutDir: true,
  },
})
