import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import vueMacros from '@vue-macros/eslint-config/flat';

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,mjs,jsx,ts,mts,tsx,vue}'],
	},
	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/node_modules/**'],
	},
	...pluginVue.configs['flat/essential'],
	...vueTsEslintConfig(),
	skipFormatting,
	vueMacros,
	{
		name: 'close-rules',
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
];
