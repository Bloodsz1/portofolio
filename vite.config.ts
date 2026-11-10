import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * Mengganti %SITE_URL% di index.html dengan nilai VITE_SITE_URL
 * (mis. https://farros.vercel.app) untuk canonical, og:url, dan og:image.
 * Jika belum diisi, hasilnya path relatif ("/og-image.png"), situs tetap jalan.
 */
function siteUrlPlugin(siteUrl: string): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.split('%SITE_URL%').join(siteUrl),
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  const siteUrl = (env.VITE_SITE_URL ?? '').replace(/\/+$/, '');

  return {
    plugins: [react(), siteUrlPlugin(siteUrl)],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
