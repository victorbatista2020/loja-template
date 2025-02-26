import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/loja-template/'
    : '/'
}

export default defineConfig({
 
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    open: true,
  },
  build: {
    target: 'esnext',  // Certifica que o código seja transpilado para ESNext.
    sourcemap: true,   // Adiciona map de origem para facilitar o debug.
  },

   

})
