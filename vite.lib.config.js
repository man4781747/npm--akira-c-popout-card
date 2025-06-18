/**
 * Vite 庫模式構建配置
 * Vite Library Mode Build Configuration
 * 
 * 此配置用於構建可發布的 npm 包
 * This configuration is used to build a publishable npm package
 * 
 * https://cn.vite.dev/config/shared-options.html
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import fs from 'fs'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  // 插件配置
  // Plugin Configuration
  plugins: [
    // Vue 3 支持插件
    // Vue 3 Support Plugin
    // 選項：
    // - template: { compilerOptions: { ... } } - 自定義模板編譯選項
    // - jsx: { ... } - JSX 編譯選項
    vue(),
    {
      name: 'inject-css-content',
      transform(code, id) {
        // 只在入口文件添加 CSS 內容
        // Only add CSS content to entry file
        if (id.endsWith('packages/index.js')) {
          // 讀取 CSS 文件內容
          // Read CSS file content
          const cssPath = path.resolve(__dirname, 'lib/popout-card.css')
          const cssContent = fs.existsSync(cssPath) 
            ? fs.readFileSync(cssPath, 'utf-8')
            : ''

          return {
            code: code.replace(
              'export { PopoutCard, install }',
              `// 注入 CSS 內容
// Inject CSS content
const style = document.createElement('style')
style.textContent = \`${cssContent}\`
document.head.appendChild(style)

export { PopoutCard, install }`
            ),
            map: null
          }
        }
      }
    }
  ],

  css: {
    // PostCSS 配置
    // PostCSS Configuration
    postcss: { // https://cn.vite.dev/config/shared-options.html#css-postcss
      plugins: [
        postcssNesting
      ],
    },
  },

  /**
   * https://vite.dev/config/build-options
   * 構建配置
   * Build Configuration
   */
  build: {
    // 指定輸出目錄
    // Output Directory
    outDir: 'lib',
    cssCodeSplit: false,
    /**
     * https://cn.vite.dev/config/build-options#build-lib
     * 庫模式配置 若希望輸出成一個模組時，會需要導入 build.lib 設定
     * Library Mode Configuration
     * { 
     *    entry: string | string[] | { [entryAlias: string]: string }, 
     *    name?: string, 
     *    formats?: ('es' | 'cjs' | 'umd' | 'iife')[], 
     *    fileName?: string | ((format: ModuleFormat, entryName: string) => string), 
     *    cssFileName?: string 
     * }
     */
    lib: {
      // 入口文件
      // Entry File
      entry: './packages/index.js',

      // 庫的名稱 用於 UMD 格式輸出
      // Library Name Used for UMD format output
      name: 'PopoutCard',

      // 輸出文件名 不包含擴展名
      // Output File Name Without extension
      fileName: 'popout-card',
    },

    /**
     * https://cn.rollupjs.org/configuration-options/
     * Rollup 特定配置
     * Rollup Specific Configuration
     */
    rollupOptions: {
      // 外部依賴
      // External Dependencies
      // 這些模組不會被打包進庫中
      // These modules will not be bundled into the library
      external: ['vue'],

      // 輸出配置
      // Output Configuration
      output: {
        // 導出模式
        // Export Mode
        // 'named' - 使用命名導出
        // 'default' - 使用默認導出
        // 'none' - 不導出
        exports: 'named',

        // 全局變量名稱映射
        // Global Variable Name Mapping
        // 用於 UMD 格式
        // Used for UMD format
        globals: {
          vue: 'Vue'
        },
      }
    },

    // 其他可選配置：
    // - minify: boolean | 'terser' | 'esbuild' - 是否/如何壓縮代碼
    // - sourcemap: boolean | 'inline' | 'hidden' - 是否生成 sourcemap
    // - target: string | string[] - 目標環境
    // - cssCodeSplit: boolean - 是否分割 CSS
    // - reportCompressedSize: boolean - 是否報告壓縮後的大小
    // - chunkSizeWarningLimit: number - 塊大小警告限制
  },
})
