import antfu from '@antfu/eslint-config';

export default antfu({
	stylistic: false,
	typescript: true,
	vue: true,
	rules: {
		'no-irregular-whitespace': 'off',
	},
});
