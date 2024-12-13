import { twMerge } from 'tailwind-merge';

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
						'flex items-center gap-x-2 font-pm text-lg text-[#323233]',
						'before:h-3 before:w-3 before:bg-[#286fff] before:shadow-[4px_4px_0_0_rgba(40,111,255,0.1)]',
						props.ui.title,
					)}
				>
					{props.title}
				</h2>
				<div class={twMerge('space-y-4 font-pr text-xs text-[#646566]', props.ui.content)}>{slots.default?.()}</div>
			</section>
		);
	},
});
