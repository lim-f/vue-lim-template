/*
 * @Author: chenzhongsheng
 * @Date: 2024-07-12 22:08:25
 * @Description: Coding something
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueLim from 'vue-lim/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueLim(), vue()],
})
