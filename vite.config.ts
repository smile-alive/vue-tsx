import { fileURLToPath, URL } from 'node:url';

import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		Vue(),
		VueJsx(),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				{
					'tailwind-merge': ['twMerge'],
				},
			],
			include: [/\.(jsx|tsx|vue)$/],
		}),
	],
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
