export default defineComponent({
	name: 'PrintHeader',
	setup() {
		return () => (
			<div class='flex items-center gap-x-2'>
				<span class='text-[12px] text-print-400'>查餐饮数据，上窄门餐眼</span>
				<div class='h-px flex-1 bg-print-300' />
				<img src='/favicon.svg' alt='logo' class='h-6 w-6 rounded border border-print-200' />
			</div>
		);
	},
});
