import { twMerge } from 'tailwind-merge';
import PrintHeader from '@/components/PrintHeader';
import PrintTemplate from '@/components/PrintTemplate';
import PrintSubTemplate from '@/components/PrintSubTemplate';
import PrintChart from '@/components/PrintChart';
import { scatterOption, barOption, stackBarOption, top10Bar2024, top10Bar2023 } from './options';

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

const ShowTipBar = (props: any) => {
	const PrintChartEl = useTemplateRef('PrintChartRef');

	const handleFinished = () => {
		// @ts-ignore
		PrintChartEl.value.VChartEl.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: 0,
			position: [80, 0],
		});
	};

	// @ts-ignore
	return <PrintChart ref='PrintChartRef' {...props} onFinished={handleFinished} />;
};

export default defineComponent({
	name: 'HomeView',
	setup(_) {
		return () => (
			<>
				<div class='space-y-6 px-11 py-6'>
					<PrintHeader />
					<PrintTemplate title='品牌概述' order={1} ui={{ wrapper: 'break-after-page' }}>
						<PrintSubTemplate title='品牌简介' ui={{ content: 'indent-[2em]' }}>
							霸王茶姬是新中式国风茶饮品牌，以原叶鲜奶茶为主打。首店于2017年11月17日开设于云南省昆明市五一路，自此之后开店足迹一路从云南进入国内其他省份，并在2019年成功出海，在马来西亚、新加坡和泰国开设门店，成为国内为数不多带着鲜明中式文化特色出海的茶饮品牌。
						</PrintSubTemplate>

						<PrintSubTemplate title='数据概况'>
							<p>霸王茶姬自2017年成立至今，已经营7.39年，远高于茶饮品类品牌的平均成立年限（5.69年）。</p>
							<br />
							<p>
								截至2024年11月30日，霸王茶姬的在营门店数达到了5439家（不含已闭店和即将开业的门店），近一年门店净增长率为52.55%，这一增速超过了98.67%的茶饮品牌，展示出强劲的扩张势头。
							</p>
							<br />
							<p>霸王茶姬的人均消费为18.56元，明显高于茶饮品类的平均人均消费（13.27元）显示其定位在市场中属于中高端消费水平。</p>
						</PrintSubTemplate>
					</PrintTemplate>
				</div>

				<div class='space-y-6 px-11 py-6'>
					<PrintTemplate title='产品菜单' order={2} ui={{ wrapper: 'break-after-page' }}>
						<PrintSubTemplate title='消费者推荐TOP3' ui={{ wrapper: 'space-y-4', content: 'flex' }}>
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
										<span>{item.count}次推荐</span>
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
							<p class='text-center text-[8px] text-[#969799]'>
								SKU，全称为Stock Keeping
								Unit，是库存量单位的意思，通常被译为“最小库存单位”或简化为“单品”。每个SKU都对应着一种具体的商品，这种商品具有独特的属性组合，如颜色、尺寸、款式等。
								<br />
								数据截至2024年11月；数据来源：窄门餐眼
							</p>

							<div class='flex gap-x-2'>
								{[1, 2].map(_ => (
									<table key={_} class='flex-1 font-pr text-xs'>
										<thead class='bg-[#286FFF]/10 text-[#323233]'>
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
										<tbody class='text-[#646566]'>
											<tr class='h-11 divide-x divide-white text-right even:bg-[#F7F8FA]'>
												<th scope='row' class='w-3/5 p-2 text-left'>
													蜜雪冰城
												</th>
												<td class='w-1/5 p-2'>32364</td>
												<td class='w-1/5 p-2'>20</td>
											</tr>
											<tr class='h-11 divide-x divide-white text-right even:bg-[#F7F8FA]'>
												<th scope='row' class='w-3/5 p-2 text-left'>
													古茗
												</th>
												<td class='w-1/5 p-2'>9675</td>
												<td class='w-1/5 p-2'>29</td>
											</tr>
											<tr class='h-11 divide-x divide-white text-right even:bg-[#F7F8FA]'>
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
							<ul class='leading-5'>
								<li>2024年，霸王茶姬仅在3、4、5、7、8、9六个月份有上新，总共上架了8款新品。</li>
								<li>上新高峰：集中在5月和7月，各推出2款新品，占全年新品的50%。</li>
								<li>上新时间呈阶段性分布，可能与市场需求高峰（如夏季饮品需求）或品牌营销活动有关。</li>
								<li>年底（10月-12月）没有新品上架，可能是为规避市场疲软或优化现有产品线。</li>
								<li>新品平均定价为16元，低于历史产品平均价格（18元），说明该年度整体销售倾向为下沉市场。</li>
								<li>其中新品伯牙绝弦，累计销售量破6亿杯，表明其受欢迎程度较高，有较大市场认可度。</li>
							</ul>

							<div>
								<PrintChart option={barOption} class='h-28' />
								<p class='py-2 text-center text-[8px] text-[#969799]'>数据截至2024年11月；数据来源：窄门餐眼</p>
								<div class='space-y-6'>
									<div class='space-y-2'>
										<div class='custom-label'>3月新品</div>
										<div class='grid grid-cols-2 gap-x-4'>
											<div class='grid grid-rows-[20px_1fr] gap-x-2 gap-y-1 font-pr'>
												<img
													src='https://mxsa-oss.mxbc.net/oss/product/20241101/77fcf528f9ad46d39fd77cf7cbe89e71.jpg'
													alt={`New product of 伯牙绝弦`}
													width={80}
													height={80}
													class='row-span-2 aspect-square rounded'
												/>
												<p class='col-start-2 text-xs leading-5 text-[#646566]'>
													伯牙绝弦 <span class='text-[#FF2E2E]'>¥16</span>
												</p>
												<p class='col-start-2 text-[8px] text-[#969799]'>
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

					<PrintTemplate title='市场覆盖' order={3}>
						<PrintSubTemplate title='2024城市分布' ui={{ wrapper: 'space-y-4' }}>
							<PrintChart option={stackBarOption} class='h-[532px]' />
							<p class='text-center text-[8px] text-[#969799]'>
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
								<div class='custom-label'>2024年门店数量前十城市</div>
								<ShowTipBar option={top10Bar2024} class='h-52' />
							</div>

							<div class='space-y-4'>
								<div class='custom-label'>2023年门店数量前十城市</div>
								<ShowTipBar option={top10Bar2023} class='h-52' />

								<p class='tex text-center text-[8px] text-[#969799]'>数据截至2024年11月；数据来源：窄门餐眼</p>
							</div>
						</PrintSubTemplate>
					</PrintTemplate>
				</div>
			</>
		);
	},
});
