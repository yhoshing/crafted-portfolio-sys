import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages 배포를 위한 base 경로 설정
  base: process.env.NODE_ENV === 'production' ? '/crafted-portfolio-sys/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 성능 최적화 설정
  build: {
    // 청크 크기 최적화
    rollupOptions: {
      output: {
        manualChunks: {
          // 벤더 라이브러리 분리
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-progress'],
          icons: ['lucide-react'],
        },
      },
    },
    // 소스맵 비활성화 (프로덕션)
    sourcemap: mode === 'development',
    // 최소화 설정
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production', // 프로덕션에서 console.log 제거
        drop_debugger: true,
      },
    },
    // 청크 크기 경고 임계값 증가
    chunkSizeWarningLimit: 1000,
  },
  // CSS 최적화
  css: {
    devSourcemap: mode === 'development',
  },
}));
