import type { EChartsOption, SeriesOption, TooltipComponentOption } from 'echarts';
import { MAP_NAME } from '@/config/variable.config';
import { extractKeyValuePairs } from '@/utils/index';
import { toMerged as merge } from 'es-toolkit';

const atom_text_style = {
	color: '#646566',
	fontFamily: 'Alibaba-PuHuiTi-R',
	fontSize: 10,
	lineHeight: 18,
};

const atom_name = {
	nameGap: 6,
	nameTextStyle: {
		...atom_text_style,
		color: '#323233',
		fontFamily: 'Alibaba-PuHuiTi-M',
	},
};

const atom_legend = {
	selectedMode: false,
	itemGap: 20,
	itemWidth: 12,
	itemHeight: 8,
	top: -8,
	textStyle: {
		...atom_text_style,
	},
};

const atom_axis_Line = {
	axisLine: {
		show: true,
		lineStyle: {
			color: '#969799',
		},
	},
};

const atom_axis_label = {
	axisLabel: {
		margin: 4,
		color: '#646566',
		fontFamily: 'Alibaba-PuHuiTi-R',
		fontSize: 10,
		lineHeight: 12,
	},
};

const atom_axis_tick = {
	axisTick: {
		show: true,
		inside: true,
		alignWithLabel: true,
	},
};

const atom_label = {
	label: {
		show: true,
		fontFamily: 'Alibaba-PuHuiTi-B',
		fontSize: 10,
		lineHeight: 18,
	},
};

const atom_tooltip: TooltipComponentOption = {
	trigger: 'item',
	backgroundColor: '#EBEDF0',
	borderWidth: 0,
	borderRadius: 0,
	borderColor: 'transparent',
	padding: [2, 8],
	shadowBlur: 0,
	shadowOffsetX: 0,
	shadowOffsetY: 0,
	textStyle: {
		...atom_text_style,
		color: 'inherit',
		fontFamily: 'Alibaba-PuHuiTi-B',
	},
	className:
		'relative before:absolute before:left-0 before:top-1/2 before:h-0 before:w-0 before:-translate-x-full before:-translate-y-1/2 before:border-y-2 before:border-l-0 before:border-r-[3.5px] before:border-transparent before:border-r-print-200',
};

export const scatterOption = merge<EChartsOption, EChartsOption>(
	{
		xAxis: {
			...atom_name,
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: {
			...atom_name,
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		series: {
			...atom_label,
		},
	},
	{
		xAxis: {
			name: '门店数',
			splitLine: {
				lineStyle: {
					type: 'dashed',
				},
			},
		},
		yAxis: {
			name: 'SKU',
			splitLine: {
				lineStyle: {
					type: 'dashed',
				},
			},
		},
		grid: {
			top: 30,
			right: 46,
			left: 0,
			bottom: 0,
			containLabel: true,
		},
		series: {
			data: [
				[28604, 49, '沪上阿姨'],
				[31163, 86, '古茗'],
				[1516, 85, '霸王茶姬'],
				[13670, 46, '蜜雪冰城'],
				[28599, 32],
				[29476, 95],
				[31476, 51],
				[28666, 42],
				[1777, 97],
				[29550, 78],
				[2076, 65],
				[12087, 20],
				[24021, 40],
				[43296, 38],
				[10088, 93],
				[19349, 71],
				[10670, 47],
				[26424, 3],
				[37062, 78],
			],
			itemStyle: {
				color: (param: any) => (param.data[2] === '霸王茶姬' ? '#FF2E2E' : '#286FFF'),
			},
			type: 'scatter',
			symbolSize: (param: any) => (param[2] ? 8 : 4),
			label: {
				formatter: (param: any) => param.data[2] ?? '',
				position: 'right',
				minMargin: 2,
				fontFamily: 'Alibaba-PuHuiTi-R',
			},
		},
	},
);

const month = Array.from({ length: 12 }, (_, i) => `${i + 1}月`);

export const barOption = merge<EChartsOption, EChartsOption>(
	{
		xAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: {
			...atom_name,
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
			type: 'value',
			name: '新品数',
			minInterval: 1,
			splitLine: {
				show: false,
			},
		},
		series: {
			...atom_label,
		},
	},
	{
		xAxis: {
			type: 'category',
			data: month,
		},
		yAxis: {
			type: 'value',
			name: '新品数',
			splitLine: {
				show: false,
			},
			minInterval: 1,
		},
		grid: {
			top: 26,
			left: 8,
			right: 0,
			bottom: 0,
			containLabel: true,
		},
		series: {
			data: [0, 0, 1, 1, 2, 0, 2, 1, 1, 0, 0, 0],
			type: 'bar',
			color: '#1B0DD9',
			barWidth: 24,
			label: {
				color: 'inherit',
				fontFamily: 'Alibaba-PuHuiTi-B',
				position: 'top',
				formatter: param => String(param.value || ''),
			},
		},
	},
);

const stackBarSeriesBase = merge<SeriesOption, SeriesOption>(
	{
		...atom_label,
	},
	{
		type: 'bar',
		barWidth: 24,
		stack: 'total',
		label: {
			show: true,
			fontFamily: 'Alibaba-PuHuiTi-M',
			fontSize: 10,
			lineHeight: 18,
		},
		emphasis: {
			focus: 'series',
		},
	},
);

export const stackBarOption = merge<EChartsOption, EChartsOption>(
	{
		legend: {
			...atom_legend,
		},
		xAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: {
			...atom_name,
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
	},
	{
		grid: {
			top: 32,
			left: 4,
			right: 16,
			bottom: 0,
			containLabel: true,
		},
		xAxis: {
			type: 'value',
			splitLine: {
				lineStyle: {
					type: 'dashed',
				},
			},
		},
		yAxis: {
			type: 'category',
			data: month,
		},
		series: [
			{
				name: '一线门店数',
				color: '#2100A2',
				data: [201, 140, 200, 201, 148, 129, 111, 150, 180, 170, 160, 190],
			},
			{
				name: '新一线门店数',
				color: '#1B0DD9',
				data: [200, 201, 190, 200, 201, 173, 150, 180, 170, 160, 190, 140],
			},
			{
				name: '二线门店数',
				color: '#286FFF',
				data: [220, 182, 191, 234, 290, 330, 150, 180, 170, 160, 190, 140],
			},
			{
				name: '三线门店数',
				color: '#5DABF9',
				data: [150, 212, 201, 154, 190, 330, 150, 180, 170, 160, 190, 140],
			},
			{
				name: '四线门店数',
				color: '#BFDEFD',
				data: [820, 832, 901, 934, 1290, 1330, 150, 180, 170, 160, 190, 140],
			},
		].map(item => merge(item, stackBarSeriesBase)),
	},
);

export const top10Bar2024 = merge<EChartsOption, EChartsOption>(
	{
		tooltip: {
			...atom_tooltip,
		},
		xAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		series: {
			...atom_label,
		},
	},
	{
		grid: {
			top: 8,
			left: 8,
			right: 8,
			bottom: 0,
			containLabel: true,
		},
		tooltip: {
			textStyle: {
				color: '#1B0DD9',
			},
			formatter: (params: any) => `占比${params.value}%`,
		},
		xAxis: {
			type: 'category',
			data: ['北京', '天津', '沈阳', '青岛', '大连', '长春', '上海', '郑州', '济南', '哈尔滨'],
		},
		yAxis: {
			type: 'value',
			splitLine: {
				show: false,
			},
			max: ({ max }) => Math.ceil(max / 50) * 50,
		},
		series: {
			silent: true,
			type: 'bar',
			color: '#1B0DD9',
			barWidth: 24,
			label: {
				offset: [0, 5],
				color: 'inherit',
				position: 'top',
			},
			data: [138, 78, 75, 60, 55, 53, 41, 39, 39, 36],
		},
	},
);

export const top10Bar2023 = merge<EChartsOption, EChartsOption>(
	{
		tooltip: {
			...atom_tooltip,
		},
		xAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		series: {
			...atom_label,
		},
	},
	{
		grid: {
			top: 8,
			left: 8,
			right: 8,
			bottom: 0,
			containLabel: true,
		},
		tooltip: {
			textStyle: {
				color: '#5DABF9',
			},
			formatter: (params: any) => `占比${params.value}%`,
		},
		xAxis: {
			type: 'category',
			data: ['北京', '天津', '沈阳', '青岛', '大连', '长春', '上海', '郑州', '济南', '哈尔滨'],
		},
		yAxis: {
			type: 'value',
			splitLine: {
				show: false,
			},
			max({ min, max }) {
				return Math.ceil(min + max);
			},
		},
		series: {
			type: 'bar',
			color: '#5DABF9',
			barWidth: 24,
			label: {
				offset: [0, 5],
				color: 'inherit',
				position: 'top',
			},
			data: [100, 64, 60, 55, 53, 41, 39, 39, 36, 20],
		},
	},
);

export const lineBarOption = merge<EChartsOption, EChartsOption>(
	{
		legend: {
			...atom_legend,
		},
		xAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: Array.from({ length: 2 }, () => ({
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		})),
	},
	{
		grid: {
			top: 6,
			bottom: 0,
			left: 4,
			right: 4,
			containLabel: true,
		},
		xAxis: {
			type: 'category',
			data: month,
		},
		yAxis: [
			{
				type: 'value',
				splitLine: {
					show: false,
				},
			},
			{
				type: 'value',
				min: ({ min }) => {
					const divisor = 10 ** (Math.floor(Math.log10(min)) - 1);
					return Math.floor(min / divisor) * divisor;
				},
				max: ({ max }) => {
					const divisor = 10 ** (Math.floor(Math.log10(max)) - 1);
					return Math.ceil(max / divisor) * divisor;
				},
				splitLine: {
					show: false,
				},
			},
		],
		series: [
			{
				name: '开店数',
				type: 'bar',
				yAxisIndex: 0,
				data: [48, 28, 4, 33, 76, 76, 72, 88, 47, 88, 72],
				color: '#1B0DD9',
				label: {
					color: 'inherit',
					position: 'top',
					show: true,
					fontFamily: 'Alibaba-PuHuiTi-B',
					fontSize: 10,
					lineHeight: 18,
				},
			},
			{
				name: '闭店数',
				type: 'bar',
				yAxisIndex: 0,
				data: [6, 5, 9, 9, 4, 18, 6, 2, 7, 8],
				color: '#5DABF9',
				label: {
					color: 'inherit',
					position: 'top',
					show: true,
					fontFamily: 'Alibaba-PuHuiTi-B',
					fontSize: 10,
					lineHeight: 18,
				},
			},
			{
				name: '存量门店数',
				type: 'line',
				yAxisIndex: 1,
				data: [1340, 1363, 1389, 1393, 1394, 1395, 1426, 1452, 1483, 1509, 1517],
				color: '#FFB609',
				label: {
					color: 'inherit',
					position: 'top',
					show: true,
					fontFamily: 'Alibaba-PuHuiTi-B',
					fontSize: 10,
					lineHeight: 18,
				},
			},
		],
	},
);

export const hAvgBarOption = merge<EChartsOption, EChartsOption>(
	{
		yAxis: {
			...atom_axis_label,
		},
		series: {
			...atom_label,
		},
	},
	{
		grid: {
			left: 0,
			top: 0,
			bottom: 0,
			containLabel: true,
		},
		xAxis: {
			type: 'value',
			show: false,
		},
		yAxis: {
			type: 'category',
			data: ['历史所有', '在营门店', '歇业门店'],
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: false,
			},
		},
		series: {
			type: 'bar',
			color: '#1B0DD9',
			barCategoryGap: 24,
			label: {
				color: 'inherit',
				position: 'right',
				formatter: '{c}年',
				offset: [-2, 0],
			},
			data: [1.9, 1.9, 2.9],
			markLine: {
				silent: true,
				precision: 1,
				symbol: 'none',
				lineStyle: {
					color: '#323233',
					width: 2,
					type: 'dotted',
					opacity: 0.5,
				},
				label: {
					...atom_label.label,
					position: 'start',
					formatter: '茶饮行业门店平均经营年限为{c}年',
					color: '#323233',
				},
				data: [
					{
						type: 'average',
					},
					{
						type: 'average',
					},
				],
			},
		},
	},
);

export const pieOption: EChartsOption = {
	series: {
		type: 'pie',
		radius: '100%',
		emphasis: {
			scale: false,
		},
		color: ['#1B0DD9', '#286FFF', '#5DABF9', '#BFDEFD'],
		data: [
			{
				value: 1048,
				name: '0-1年',
			},
			{
				value: 735,
				name: '1-3年',
			},
			{
				value: 580,
				name: '3-5年',
			},
			{
				value: 484,
				name: '5年以上',
			},
		],
		label: {
			show: true,
			position: 'inside',
			formatter: params => {
				if (params.color === '#BFDEFD') {
					return `{highPct|${params.percent}%}\n{highVal|${params.name}}`;
				}
				return `{normPct|${params.percent}%}\n{normVal|${params.name}}`;
			},
			rich: {
				normPct: {
					fontSize: 14,
					lineHeight: 16,
					fontFamily: 'Alibaba-PuHuiTi-B',
					color: '#FFFFFF',
				},
				normVal: {
					fontSize: 10,
					lineHeight: 12,
					fontFamily: 'Alibaba-PuHuiTi-M',
					color: '#FFFFFF',
				},
				highPct: {
					fontSize: 14,
					lineHeight: 16,
					fontFamily: 'Alibaba-PuHuiTi-B',
					color: '#323233',
				},
				highVal: {
					fontSize: 10,
					lineHeight: 12,
					fontFamily: 'Alibaba-PuHuiTi-M',
					color: '#323233',
				},
			},
		},
	},
};

const map_base_label = {
	fontSize: 10,
	lineHeight: 12,
	fontWeight: 500,
	color: '#323233',
};

const map_border_label = {
	textBorderColor: '#fff',
	textBorderWidth: 2,
};

const map_white_label = {
	...map_base_label,
	color: '#FFFFFF',
	fontWeight: 400,
};

export const mapOption: EChartsOption = {
	visualMap: {
		type: 'piecewise',
		splitNumber: 6,
		pieces: [
			// lt（小于）、gt（大于）、lte（小于等于）、gte（大于等于）
			{ gte: 150, label: '≥150', color: '#1B0DD9' },
			{ gte: 100, lt: 150, label: '100~149', color: '#286FFF' },
			{ gte: 50, lt: 100, label: '50~99', color: '#9DCEFF' },
			{ gte: 0, lt: 50, label: '0~49', color: '#E9F7FF' },
			{ lt: 0, gte: -49, label: '-1~49', color: '#FFDF75' },
			{ lte: -50, label: '≤-50', color: '#FFB609' },
		],
		itemWidth: 8,
		itemHeight: 8,
		textGap: 4,
		itemGap: 8,
		selectedMode: false,
		hoverLink: false,
		textStyle: {
			...atom_text_style,
		},
	},
	series: {
		type: 'map',
		map: MAP_NAME,
		zoom: 1.25,
		silent: true,
		labelLayout: params => {
			const { a, c, e } = extractKeyValuePairs(params.text);

			const city = a ?? c ?? e;
			if (['天津', '上海'].includes(city)) {
				return {
					dx: 10,
				};
			}
			return {};
		},
		label: {
			show: true,
			formatter: ({ color, value, name }) => {
				if (!value) return '';

				if (['海南', '北京', '天津', '上海'].includes(name)) {
					return `{e|${name}}\n{f|${value}}`;
				}
				if (['#1B0DD9', '#286FFF'].includes(color as string)) {
					return `{c|${name}}\n{d|${value}}`;
				}
				return `{a|${name}}\n{b|${value}}`;
			},
			rich: {
				a: {
					...map_base_label,
				},
				b: {
					...map_base_label,
				},
				c: {
					...map_white_label,
				},
				d: {
					...map_white_label,
				},
				e: {
					...map_base_label,
					...map_border_label,
				},
				f: {
					...map_base_label,
					...map_border_label,
				},
			},
		},
		itemStyle: {
			borderColor: '#BCC4D6',
			areaColor: '#FFFFFF',
		},
		data: [
			{ name: '安徽', value: 1813 },
			{ name: '河南', value: 776 },
			{ name: '河北', value: 711 },
			{ name: '山西', value: 400 },
			{ name: '江苏', value: 348 },
			{ name: '黑龙江', value: 286 },
			{ name: '辽宁', value: 267 },
			{ name: '山东', value: 181 },
			{ name: '内蒙古', value: 134 },
			{ name: '海南', value: 132 },
			{ name: '天津', value: 119 },
			{ name: '甘肃', value: 117 },
			{ name: '吉林', value: 105 },
			{ name: '陕西', value: 95 },
			{ name: '浙江', value: 93 },
			{ name: '湖北', value: 88 },
			{ name: '江西', value: 85 },
			{ name: '云南', value: 84 },
			{ name: '广东', value: 71 },
			{ name: '贵州', value: 58 },
			{ name: '湖南', value: 52 },
			{ name: '广西', value: 41 },
			{ name: '北京', value: 40 },
			{ name: '四川', value: 38 },
			{ name: '福建', value: 36 },
			{ name: '宁夏', value: 35 },
			{ name: '青海', value: 31 },
			{ name: '新疆', value: 28 },
			{ name: '上海', value: 14 },
			{ name: '西藏', value: 9 },
			{ name: '重庆', value: 7 },
		],
	},
};

export const openShopBarOption = merge<EChartsOption, EChartsOption>(
	{
		tooltip: {
			...atom_tooltip,
		},
		xAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		series: {
			...atom_label,
		},
	},
	{
		grid: {
			top: 8,
			left: 8,
			right: 8,
			bottom: 0,
			containLabel: true,
		},
		tooltip: {
			textStyle: {
				color: '#1B0DD9',
			},
			formatter: (params: any) => `占比${params.value}%`,
		},
		xAxis: {
			type: 'category',
			data: ['北京', '天津', '辽宁'],
		},
		yAxis: {
			type: 'value',
			max: 150,
			splitLine: {
				show: false,
			},
		},
		series: {
			type: 'bar',
			color: '#1B0DD9',
			barWidth: 24,
			label: {
				color: 'inherit',
				position: 'top',
				offset: [0, 5],
			},
			data: [138, 78, 75],
		},
	},
);

export const closeShopBarOption = merge<EChartsOption, EChartsOption>(
	{
		tooltip: {
			...atom_tooltip,
		},
		xAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		yAxis: {
			...atom_axis_Line,
			...atom_axis_label,
			...atom_axis_tick,
		},
		series: {
			...atom_label,
		},
	},
	{
		grid: {
			top: 12,
			left: 8,
			right: 8,
			bottom: 0,
			containLabel: true,
		},
		tooltip: {
			textStyle: {
				color: '#FFB609',
			},
			formatter: (params: any) => `占比${params.value}%`,
		},
		xAxis: {
			type: 'category',
			data: ['四川', '天津', '广东'],
		},
		yAxis: {
			type: 'value',
			max: 150,
			splitLine: {
				show: false,
			},
		},
		series: {
			type: 'bar',
			color: '#FFB609',
			barWidth: 24,
			label: {
				offset: [0, 5],
				color: 'inherit',
				position: 'top',
			},
			data: [57, 27, 9],
		},
	},
);

export const hBarOption = merge<EChartsOption, EChartsOption>(
	{
		yAxis: {
			...atom_axis_label,
		},
		series: {
			...atom_label,
		},
	},
	{
		grid: {
			left: 0,
			top: -10,
			bottom: -30,
			containLabel: true,
		},
		xAxis: {
			type: 'value',
			show: false,
		},
		yAxis: {
			type: 'category',
			data: ['当前品牌', '奶茶饮品TOP1', '品类平均规模', '中位数品牌规模'],
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			inverse: true,
		},
		series: {
			type: 'bar',
			color: '#5DABF9',
			barWidth: 14,
			label: {
				color: 'inherit',
				position: 'right',
				formatter: '{c}家',
				offset: [-2, 0],
			},
			data: [
				{
					value: 5792,
					itemStyle: {
						color: '#1B0DD9',
					},
				},
				35928,
				6016,
				76,
			],
		},
	},
);
