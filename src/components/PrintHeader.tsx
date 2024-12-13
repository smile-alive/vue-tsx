import logo from '@/assets/icons/logo.svg';

export default defineComponent({
	name: 'PrintHeader',
	setup() {
		return () => (
			<div class='flex items-center gap-x-2'>
				<span class='text-[12px] text-[#c8c9cc]'>查餐饮数据，上窄门餐眼</span>
				<div class='h-0.5 flex-1 bg-[#dcdee0]' />
				<img src={logo} alt='logo' class='h-6 w-6 rounded border border-[#ebedf0]' />
			</div>
		);
	},
});
