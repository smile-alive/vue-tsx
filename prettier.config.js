// https://prettier.io/docs/en/options.html
export default {
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindAttributes: ['ui', ':ui'],
	tailwindFunctions: ['tw', 'clsx', 'ui', ':ui', 'twPrefix'],
	// 单行长度
	printWidth: 150,
	// 缩进长度
	tabWidth: 4,
	// 使用空格代替tab缩进
	useTabs: true,
	// 使用单引号
	singleQuote: true,
	// jsx中使用单引号
	jsxSingleQuote: true,
	// 单参数箭头函数参数周围是否使用圆括号
	arrowParens: 'avoid',
	// 不自动换行
	proseWrap: 'never',
	// 是否忽略HTML空白
	htmlWhitespaceSensitivity: 'ignore',
	// Vue 文件脚本和样式标签缩进
	vueIndentScriptAndStyle: true,
};
