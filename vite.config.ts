import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
// import { visualizer } from 'rollup-plugin-visualizer';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        // base: mode === 'production' ? '/typing-jp/' : '/',
        base: env.VITE_BASE_URL,
        define: { __APP_VERSION__: JSON.stringify(pkg.version) },
        plugins: [
            react(),
            legacy({
                targets: ['defaults', 'not IE 11'],
            }),
            // visualizer({ open: true, brotliSize: true, filename: 'report.html' }),
        ],
        resolve: { alias: { '@': '/src' } },
        build: { target: 'es2015' },
    };
});
