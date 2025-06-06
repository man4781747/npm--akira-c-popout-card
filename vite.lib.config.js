import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteSingleFile(),],
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ],
    },
  },

  build: {
    outDir: 'lib',
    lib: {
      // entry: resolve(__dirname, 'packages/index.js'),
      entry: './packages/index.js',
      name: 'PopoutCard',
      fileName: 'popout-card',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },

})
