function numberToChinese(num: number) {
	const chineseNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
	return String(num)
		.split('')
		.map(digit => chineseNums[Number.parseInt(digit, 10)])
		.join('');
}

export default defineComponent({
	name: 'PrintTemplate',
	props: {
		title: {
			type: String,
			required: true,
		},
		order: {
			type: Number,
			default: 1,
		},
		ui: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props, { slots }) {
		return () => (
			<div class={twMerge('space-y-6', props.ui.wrapper)}>
				<h1
					title={props.title}
					class={twMerge(
						'relative w-fit bg-print-700 pl-2 font-ph text-[2rem] text-white',
						'after:absolute after:bottom-0 after:right-0 after:translate-x-full after:whitespace-nowrap after:bg-print-200 after:px-2 after:font-pb after:text-2xl after:text-print-700 after:content-[attr(title)]',
						props.ui.title,
					)}
				>
					{numberToChinese(props.order)}、
				</h1>
				<div class={twMerge('space-y-6', props.ui.content)}>{slots.default?.()}</div>
			</div>
		);
	},
});
