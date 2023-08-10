import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer, postcssPresetEnv({ stage: 1 })],
    },
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, '/src/assets'),
    },
  },
});
