import { defineConfig } from 'vite'
import {resolve} from 'path';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), reactRefresh()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
  build: {
    // lib entry and output settings
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      fileName: 'usual-ui',
      name: 'usual-ui'
    },
    // bundler options
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  }
})
