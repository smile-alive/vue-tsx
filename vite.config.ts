import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	plugins: [
		Vue(),
		VueJsx(),
		AutoImport({
			imports: ['vue', 'vue-router'],
			include: [/\.(jsx|tsx|vue)$/],
		}),
	],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		port: 8000,
	},
});
