export default defineComponent({
	name: 'PrintHeader',
	setup() {
		return () => (
			<div class='space-y-5 bg-print-800 p-11 text-white print:h-screen print:w-screen'>
				<h1 class='font-ph text-6xl leading-none'>霸王茶姬</h1>
				<h2 class='w-fit bg-gradient-to-r from-white from-50% to-food bg-clip-text font-ph text-5xl leading-[64px] text-transparent'>
					2024品牌年终报告
				</h2>
				<h3 class='w-fit rounded-md rounded-br-[1px] bg-white px-2 font-pb text-lg leading-8 text-print-800'>窄门餐眼出品</h3>
				<p class='text-[10px] leading-[18px]'>
					统计数据时间范围：2024年1月-2024年11月
					<br />
					数据来源：窄门餐眼
				</p>

				<div class='flex-center relative mx-auto !mt-1 h-[480px] w-[480px]'>
					<img
						src='https://canyan.kp-static.com/uther-asset/images/20241217-183631.png'
						alt='Cover for Home'
						width={480}
						height={480}
						class='absolute inset-0'
					/>
					<img
						src='https://canyan.kp-static.com/logo/e60dde8867e811eeab2f00163e121ef1.jpg'
						alt='Logo'
						width={100}
						height={100}
						class='relative z-10 overflow-hidden rounded-full border-2 border-white'
					/>
				</div>
			</div>
		);
	},
});
