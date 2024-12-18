export default defineComponent({
	name: 'PrintSubTemplate',
	props: {
		title: {
			type: String,
			required: true,
		},
		ui: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props, { slots }) {
		return () => (
			<section class={twMerge('space-y-2', props.ui.wrapper)}>
				<h2
					class={twMerge(
						'flex items-center gap-x-2 font-pm text-lg text-print-700',
						'before:h-3 before:w-3 before:bg-food before:shadow-[4px_4px_0_0_rgba(40,111,255,0.1)]',
						props.ui.title,
					)}
				>
					{props.title}
				</h2>
				<div class={twMerge('space-y-4 text-xs leading-5 text-print-600', props.ui.content)}>{slots.default?.()}</div>
			</section>
		);
	},
});
