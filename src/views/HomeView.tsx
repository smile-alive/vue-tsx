import qr from '@/assets/images/20241217-183633.png';
import PrintChart from '@/components/PrintChart';
import PrintCover from '@/components/PrintCover';
import PrintHeader from '@/components/PrintHeader';
import PrintSubTemplate from '@/components/PrintSubTemplate';
import PrintTemplate from '@/components/PrintTemplate';
import {
	barOption,
	closeShopBarOption,
	hAvgBarOption,
	hBarOption,
	lineBarOption,
	mapOption,
	openShopBarOption,
	pieOption,
	scatterOption,
	stackBarOption,
	top10Bar2023,
	top10Bar2024,
} from './options';

const list = [
	{
		text: '伯牙绝弦',
		count: '202546',
		bgColor: 'from-[rgba(237,185,48,0.15)] to-[rgba(237,185,48,0)]',
		orderColor: 'before:from-[#FFEE99] before:to-[#FFAB1A]',
		cover: 'https://mxsa-oss.mxbc.net/oss/product/20241022/2cd3aded815e42aab3502c7c36001a3a.jpg',
	},
	{
		text: '春日桃桃',
		count: '54823',
		bgColor: 'from-[rgba(167,168,179,0.2)] to-[rgba(167,168,179,0)]',
		orderColor: 'before:from-[#E3E9F3] before:to-[#ABB8C6]',
		cover: 'https://mxsa-oss.mxbc.net/oss/product/20241101/77fcf528f9ad46d39fd77cf7cbe89e71.jpg',
	},
	{
		text: '桂馥兰香',
		count: '46200',
		bgColor: 'from-[rgba(222,126,95,0.1)] to-[rgba(222,126,95,0)]',
		orderColor: 'before:from-[#FFDFC4] before:to-[#E28D61]',
		cover: 'https://mxsa-oss.mxbc.net/oss/product/20241105/f895e710d80742c99473087291371327.jpg',
	},
];

function AutoShowTipChart(props: any) {
	const PrintChartEl = useTemplateRef('PrintChartRef');

	const handleFinished = () => {
		// @ts-expect-error 暂时不知道该怎么添加类型
		PrintChartEl.value.VChartEl.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: 0,
			position: ([x, y]: number[]) => [Math.round(x) + 20, Math.round(y) - 20],
		});
	};

	return <PrintChart ref='PrintChartRef' {...props} onFinished={handleFinished} />;
}

export default defineComponent({
	name: 'HomeView',
	setup(_) {
		return () => (
			<>
				<PrintCover />

				<div class='space-y-6 px-11 py-6'>
					<PrintHeader />

					<PrintTemplate title='品牌概述' order={1} ui={{ wrapper: 'break-after-page' }}>
						<PrintSubTemplate title='品牌简介' ui={{ content: 'indent-[2em]' }}>
							霸王茶姬是新中式国风茶饮品牌，以原叶鲜奶茶为主打。首店于2017年11月17日开设于云南省昆明市五一路，自此之后开店足迹一路从云南进入国内其他省份，并在2019年成功出海，在马来西亚、新加坡和泰国开设门店，成为国内为数不多带着鲜明中式文化特色出海的茶饮品牌。
						</PrintSubTemplate>

						<PrintSubTemplate title='数据概况' ui={{ content: 'space-y-2' }}>
							<p>霸王茶姬自2017年成立至今，已经营7.39年，远高于茶饮品类品牌的平均成立年限（5.69年）。</p>
							<p>
								截至2024年11月30日，霸王茶姬的在营门店数达到了5439家（不含已闭店和即将开业的门店），近一年门店净增长率为52.55%，这一增速超过了98.67%的茶饮品牌，展示出强劲的扩张势头。
							</p>
							<p>霸王茶姬的人均消费为18.56元，明显高于茶饮品类的平均人均消费（13.27元）显示其定位在市场中属于中高端消费水平。</p>
						</PrintSubTemplate>
					</PrintTemplate>

					<PrintTemplate title='产品菜单' order={2} ui={{ wrapper: 'break-after-page' }}>
						<PrintSubTemplate title='消费者推荐TOP3' ui={{ wrapper: 'space-y-4', content: 'flex space-y-0' }}>
							<ol class='flex-1 space-y-1' style={{ counterReset: 'order-counter' }}>
								{list.map(item => (
									<li
										key={item.text}
										class={twMerge(
											'flex items-center gap-x-2 rounded bg-gradient-to-r px-3 py-1.5',
											'before:rhombus before:content-[counter(order-counter)]',
											item.bgColor,
											item.orderColor,
										)}
										style={{ counterIncrement: 'order-counter' }}
									>
										<span>{item.text}</span>
										<span>
											{item.count}
											次推荐
										</span>
									</li>
								))}
							</ol>
							<ol class='grid flex-1 grid-cols-3 items-center justify-center gap-x-2' style={{ counterReset: 'order-counter' }}>
								{list.map(item => (
									<li
										key={item.text}
										class={twMerge(
											'relative',
											'before:rhombus before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2 before:content-[counter(order-counter)]',
											item.orderColor,
										)}
										style={{ counterIncrement: 'order-counter' }}
									>
										<img src={item.cover} alt={`Cover image of ${item.text}`} class='aspect-square h-full w-full rounded' />
									</li>
								))}
							</ol>
						</PrintSubTemplate>

						<PrintSubTemplate title='门店规模TOP30茶饮品牌SKU与门店数的关系'>
							<p>
								霸王茶姬SKU数为28，门店5439家，门店规模榜排行第6。
								<br />
								门店规模TOP3的SKU分别是蜜雪冰城20、古茗29、沪上阿姨30。
							</p>

							<PrintChart option={scatterOption} class='mx-4 h-[340px]' />
							<p class='text-center text-[8px] leading-3 text-print-500'>
								SKU，全称为Stock Keeping
								Unit，是库存量单位的意思，通常被译为“最小库存单位”或简化为“单品”。每个SKU都对应着一种具体的商品，这种商品具有独特的属性组合，如颜色、尺寸、款式等。
								<br />
								数据截至2024年11月；数据来源：窄门餐眼
							</p>

							<div class='flex gap-x-2'>
								{[1, 2].map(_ => (
									<table key={_} class='flex-1 text-xs'>
										<thead class='bg-food/10 text-print-700'>
											<tr class='h-11 divide-x divide-white text-right'>
												<th scope='col' class='w-3/5 p-2 text-left'>
													品牌名
												</th>
												<th scope='col' class='w-1/5 p-2'>
													门店数
												</th>
												<th scope='col' class='w-1/5 p-2'>
													SKU
												</th>
											</tr>
										</thead>
										<tbody class='text-print-600'>
											<tr class='h-11 divide-x divide-white text-right even:bg-print-100'>
												<th scope='row' class='w-3/5 p-2 text-left'>
													蜜雪冰城
												</th>
												<td class='w-1/5 p-2'>32364</td>
												<td class='w-1/5 p-2'>20</td>
											</tr>
											<tr class='h-11 divide-x divide-white text-right even:bg-print-100'>
												<th scope='row' class='w-3/5 p-2 text-left'>
													古茗
												</th>
												<td class='w-1/5 p-2'>9675</td>
												<td class='w-1/5 p-2'>29</td>
											</tr>
											<tr class='h-11 divide-x divide-white text-right even:bg-print-100'>
												<th scope='row' class='w-3/5 p-2 text-left'>
													沪上阿姨
												</th>
												<td class='w-1/5 p-2'>8536</td>
												<td class='w-1/5 p-2'>30</td>
											</tr>
										</tbody>
									</table>
								))}
							</div>
						</PrintSubTemplate>

						<PrintSubTemplate title='产品上新情况'>
							<ul>
								<li>2024年，霸王茶姬仅在3、4、5、7、8、9六个月份有上新，总共上架了8款新品。</li>
								<li>上新高峰：集中在5月和7月，各推出2款新品，占全年新品的50%。</li>
								<li>上新时间呈阶段性分布，可能与市场需求高峰（如夏季饮品需求）或品牌营销活动有关。</li>
								<li>年底（10月-12月）没有新品上架，可能是为规避市场疲软或优化现有产品线。</li>
								<li>新品平均定价为16元，低于历史产品平均价格（18元），说明该年度整体销售倾向为下沉市场。</li>
								<li>其中新品伯牙绝弦，累计销售量破6亿杯，表明其受欢迎程度较高，有较大市场认可度。</li>
							</ul>

							<div>
								<PrintChart option={barOption} class='h-28' />
								<p class='py-2 text-center text-[8px] leading-3 text-print-500'>数据截至2024年11月；数据来源：窄门餐眼</p>
								<div class='space-y-6'>
									<div class='space-y-2'>
										<h3 class='custom-label'>3月新品</h3>
										<div class='grid grid-cols-2 gap-x-4'>
											<div class='grid grid-rows-[20px_1fr] gap-x-2 gap-y-1'>
												<img
													src='https://mxsa-oss.mxbc.net/oss/product/20241101/77fcf528f9ad46d39fd77cf7cbe89e71.jpg'
													alt='New product of 伯牙绝弦'
													width={80}
													height={80}
													class='row-span-2 aspect-square rounded'
												/>
												<p class='col-start-2 text-xs text-print-600'>
													伯牙绝弦 <span class='text-price'>¥16</span>
												</p>
												<p class='col-start-2 text-[8px] leading-3 text-print-500'>
													优选闽南乌龙茶底，自然拼配广西桂花，茶底0添加人工香精、牛乳0奶精、整杯0反式脂肪酸。自然桂花香搭配中焙火乌龙，醇厚清甜，口感细腻。稳居茶友喜爱度排名前5。
													主要成分:桂花乌龙、优质牛乳、冰勃朗非氢化基底乳
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</PrintSubTemplate>
					</PrintTemplate>

					<PrintTemplate title='市场覆盖' order={3} ui={{ wrapper: 'break-after-page' }}>
						<PrintSubTemplate title='2024城市分布' ui={{ wrapper: 'space-y-4' }}>
							<PrintChart option={stackBarOption} class='h-[532px]' />
							<p class='text-center text-[8px] leading-3 text-print-500'>
								城市分级来自于第一财经新一线城市研究所 2020 年发布的《2020 城市商业魅力排行榜》
								<br />
								在门店归属上，县镇下的门店会归属到其所在的地级市，地级市远郊的门店也会归属到该地级市
								<br />
								数据截至2024年11月；数据来源：窄门餐眼
							</p>
						</PrintSubTemplate>

						<PrintSubTemplate title='门店占比最高城市前十' ui={{ wrapper: 'space-y-4' }}>
							<p>
								重点反映了品牌在不同城市的布局策略和增长趋势。北京始终排名第一，门店从2023年的100家增至2024年的138家，占比提升至10.87%，显示出品牌在核心城市的竞争力和战略重心。哈尔滨的门店数从20家增至36家，增长显著，天津、长春等城市也有一定增长。而郑州和济南的门店数量保持不变，显示扩张放缓或市场趋于饱和。整体来看，新增门店集中在北方城市，品牌扩张偏向区域深耕策略。建议继续深挖重点城市潜力，同时关注门店稳定的地区，优化资源配置，提升整体增长效率。
							</p>

							<div class='space-y-4'>
								<h3 class='custom-label'>2024年门店数量前十城市</h3>
								<AutoShowTipChart option={top10Bar2024} class='h-52' />
							</div>

							<div class='space-y-4'>
								<h3 class='custom-label'>2023年门店数量前十城市</h3>
								<AutoShowTipChart option={top10Bar2023} class='h-52' />

								<p class='tex text-center text-[8px] leading-3 text-print-500'>数据截至2024年11月；数据来源：窄门餐眼</p>
							</div>
						</PrintSubTemplate>

						<PrintSubTemplate title='市场覆盖分析'>
							<p>
								重点反映了品牌在不同城市的布局策略和增长趋势。北京始终排名第一，门店从2023年的100家增至2024年的138家，占比提升至10.87%，显示出品牌在核心城市的竞争力和战略重心。哈尔滨的门店数从20家增至36家，增长显著，天津、长春等城市也有一定增长。而郑州和济南的门店数量保持不变，显示扩张放缓或市场趋于饱和。整体来看，新增门店集中在北方城市，品牌扩张偏向区域深耕策略。建议继续深挖重点城市潜力，同时关注门店稳定的地区，优化资源配置，提升整体增长效率。
							</p>

							<div class='space-y-6'>
								<div class='space-y-2'>
									<h3 class='custom-label'>2023年门店数量前十城市</h3>
									<p>
										重点反映了品牌在不同城市的布局策略和增长趋势。北京始终排名第一，门店从2023年的100家增至2024年的138家，占比提升至10.87%，显示出品牌在核心城市的竞争力和战略重心。哈尔滨的门店数从20家增至36家，增长显著，天津、长春等城市也有一定增长。而郑州和济南的门店数量保持不变，显示扩张放缓或市场趋于饱和。整体来看，新增门店集中在北方城市，品牌扩张偏向区域深耕策略。建议继续深挖重点城市潜力，同时关注门店稳定的地区，优化资源配置，提升整体增长效率。
									</p>
								</div>

								<div class='space-y-2'>
									<h3 class='custom-label'>总结</h3>
									<ol>
										<li>
											<span class='font-pb text-print-700'>（1）</span>
											当前品牌在门店规模上拥有5792家门店，接近行业平均规模（6016家），显著高于中位数品牌（76家），但与行业TOP1（35928家）仍有差距。
										</li>
										<li>
											<span class='font-pb text-print-700'>（2）</span>
											年度新增门店数达3785家，增长率远超行业TOP1的1892家和中位数品牌的76家，显示出强劲的扩张能力。
										</li>
									</ol>
								</div>
							</div>
						</PrintSubTemplate>
					</PrintTemplate>

					<PrintTemplate title='品牌发展' order={4} ui={{ wrapper: 'break-after-page' }}>
						<PrintSubTemplate title='2024年各月份开闭店情况' ui={{ wrapper: 'space-y-4' }}>
							<PrintChart option={lineBarOption} class='h-[344px]' />
						</PrintSubTemplate>

						<PrintSubTemplate title='平均经营年限' ui={{ wrapper: 'space-y-2', content: 'flex items-center gap-x-6 space-y-0' }}>
							<div class='w-3/5 space-y-5'>
								<p>
									0-1年门店542家，1-3年648家、占比达到了43.43%，
									<br />
									3-5年门店197家，5年以上门店105家。
								</p>
								<PrintChart option={hAvgBarOption} class='h-[132px]' />
								<p class='text-[8px] leading-3 text-print-500'>数据截至2024年11月；数据来源：窄门餐眼</p>
							</div>
							<div class='flex-center flex-1'>
								<PrintChart option={pieOption} class='h-[180px] w-[180px]' />
							</div>
						</PrintSubTemplate>

						<PrintSubTemplate title='2024年各省市开关店情况' ui={{ wrapper: 'space-y-6' }}>
							<div>
								<h3 class='custom-label'>各省门店净增长数</h3>
								<PrintChart option={mapOption} class='h-[350px]' />
							</div>
							<p class='text-center text-[8px] leading-3 text-print-500'>各省门店净增长数 = 该省份2024年总开店数 - 总闭店数</p>
							<div class='!mt-10 flex'>
								<div class='flex-1 space-y-5'>
									<h3 class='custom-label'>开店TOP3省份</h3>
									<AutoShowTipChart option={openShopBarOption} class='ml-6 h-[148px] w-[168px]' />
								</div>
								<div class='flex-1 space-y-5'>
									<h3 class='custom-label'>关店TOP3省份</h3>
									<AutoShowTipChart option={closeShopBarOption} class='ml-6 h-[148px] w-[168px]' />
								</div>
							</div>
							<p class='text-center text-[8px] leading-3 text-print-500'>数据截至2024年11月；数据来源：窄门餐眼</p>
						</PrintSubTemplate>

						<PrintSubTemplate title='品牌发展分析' ui={{ content: 'space-y-6' }}>
							<p>
								重点反映了品牌在不同城市的布局策略和增长趋势。北京始终排名第一，门店从2023年的100家增至2024年的138家，占比提升至10.87%，显示出品牌在核心城市的竞争力和战略重心。哈尔滨的门店数从20家增至36家，增长显著，天津、长春等城市也有一定增长。而郑州和济南的门店数量保持不变，显示扩张放缓或市场趋于饱和。整体来看，新增门店集中在北方城市，品牌扩张偏向区域深耕策略。建议继续深挖重点城市潜力，同时关注门店稳定的地区，优化资源配置，提升整体增长效率。
							</p>
							<div class='space-y-2'>
								<h3 class='custom-label'>开店TOP3省份</h3>
								<ol>
									<li>
										<span class='font-pb text-print-700'>（1）</span>
										当前品牌在门店规模上拥有5792家门店，接近行业平均规模（6016家），显著高于中位数品牌（76家），但与行业TOP1（35928家）仍有差距。
									</li>
									<li>
										<span class='font-pb text-print-700'>（2）</span>
										年度新增门店数达3785家，增长率远超行业TOP1的1892家和中位数品牌的76家，显示出强劲的扩张能力。
									</li>
								</ol>
							</div>
						</PrintSubTemplate>
					</PrintTemplate>

					<PrintTemplate title='行业对比' order={5} ui={{ wrapper: 'break-after-page' }}>
						<div class='space-y-2 text-xs leading-5 text-print-600'>
							<p>
								当前品牌在门店规模上拥有5792家门店，接近行业平均规模（6016家），显著高于中位数品牌（76家），但与行业TOP1（35928家）仍有差距。年度新增门店数达3785家，增长率远超行业TOP1的1892家和中位数品牌的76家，显示出强劲的扩张能力。
							</p>
							<p>
								在用户口碑方面，品牌得分89.6，高于行业平均（67.9）和中位数品牌（72.8），表现出较高的市场认可度，但与行业TOP1（100分）相比仍有提升空间。
							</p>
							<p>总体来看，品牌具备较强的竞争力，未来应继续扩大规模、优化增长策略，同时提升用户满意度，缩小与头部品牌的差距。</p>
						</div>

						<div class='space-y-4'>
							<h3 class='custom-label'>开店TOP3省份</h3>
							<PrintChart option={hBarOption} class='h-[100px]' />
						</div>
					</PrintTemplate>

					<PrintTemplate title='总结展望' order={6} ui={{ wrapper: '' }}>
						<div class='space-y-2 text-xs leading-5 text-print-600'>
							<p>
								霸王茶姬自2017年成立以来，以“原叶鲜奶茶”为核心定位，迅速崛起为新式茶饮行业的佼佼者，并展现出卓越的市场竞争力。截至2024年11月，品牌全球门店数已达到5439家，海外门店突破100家，显示出强劲的扩张能力。2023年，全年GMV（交易总额）达到108亿元，单日峰值销售杯数高达8687杯，门店月均销售2.4万杯，单店月毛利达15.3万元，回本周期仅需一年左右。这些数据充分表明，霸王茶姬已经成为该领域不可忽视的领军品牌​。
							</p>
							<p>
								品牌的成功主要源于以下三大战略。**第一，产品聚焦化与健康化定位。**霸王茶姬通过聚焦原叶鲜奶茶及少量单品，优化SKU数量，仅以少数明星产品如“伯牙绝弦”占据70%的销售额，大幅提升运营效率。同时，品牌推出低GI（低血糖生成指数）饮品，迎合消费者日益增长的健康需求​。**第二，生产标准化与数智化管理。**通过研发自动化制茶设备，品牌实现了制茶过程的高度标准化和精准化，单杯制作仅需8秒。智能化管理降低了人工成本，也确保了门店出品的稳定性和高效性​。**第三，全球化市场开拓。**品牌已在东南亚及欧美市场落地，积极传播中国茶文化，为未来发展创造更多增长空间​。
							</p>
							<p>
								然而，霸王茶姬也面临着竞争激烈、品类多样化需求提升等行业挑战。未来，品牌需进一步优化供应链布局，挖掘区域化产品创新的潜力，同时提升用户体验与品牌忠诚度。在新式茶饮赛道逐渐饱和的背景下，持续创新、精细化管理和市场全球化将是霸王茶姬维持增长的核心驱动力。作为新式茶饮头部品牌之一，其战略发展步伐值得关注，也为行业树立了典范。
							</p>
						</div>

						<div class='space-y-4'>
							<h3 class='custom-label'>窄门餐眼，是一款垂直于餐饮行业的多功能数据库</h3>
							<div class='space-y-2 text-xs leading-5 text-print-600'>
								<p>如果你正在找餐饮项目，需要做市场调研、品牌分析，这里有3万+ 优质餐饮品牌。</p>
								<p>
									历史2500万+线下餐饮门店的真实数据，可一键查看门店城市分布，口碑评价，增长趋势，不同省市的人均消费水平，支持导出品牌横向对比报告。
								</p>
								<p>在数据一目了然的同时，优选了一批具备一定规模、低关店率的可加盟品牌，为投资人提供加盟项目参考。</p>
								<p>
									如果你正在寻找更优质的供应链，这里有7900多家源头优质企业，直接查看供应商公司介绍，过往合作品牌清单，一键电话沟通的同时，还能在商城直接下单采购！信息全公开，拒绝不透明！
								</p>
								<p>你还能查看海量的餐饮新闻热点、投资事件、上市企业、行研报告、图表资料······</p>
								<p>窄门餐眼,满足你多种需求。</p>
							</div>

							<img
								src='https://canyan.kp-static.com/uther-asset/images/20241217-183708.jpeg'
								width='100%'
								height={273}
								class='mx-auto overflow-hidden rounded-lg'
							/>

							<div class='flex-center !mt-16 flex-col gap-y-4'>
								<img
									src={qr}
									width={100}
									height={100}
									class='h-[100px] w-[100px] overflow-hidden rounded-full border border-print-200 p-2'
								/>
								<p class='text-xs leading-5 text-print-400'>扫码体验</p>
							</div>
						</div>
					</PrintTemplate>
				</div>
			</>
		);
	},
});
