import { toMerged as merge } from 'es-toolkit';
import type { EChartsOption, SeriesOption, TooltipComponentOption } from 'echarts';

const atom_name = {
	nameGap: 6,
	nameTextStyle: {
		color: '#323233',
		fontFamily: 'Alibaba-PuHuiTi-M',
		fontSize: 10,
		lineHeight: 18,
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
		color: 'inherit',
		fontFamily: 'Alibaba-PuHuiTi-B',
		fontSize: 10,
	},
	className:
		'relative before:absolute before:left-0 before:top-1/2 before:h-0 before:w-0 before:-translate-x-full before:-translate-y-1/2 before:border-y-2 before:border-l-0 before:border-r-[3.5px] before:border-transparent before:border-r-[#EBEDF0]',
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
		legend: {
			itemGap: 20,
			itemWidth: 12,
			itemHeight: 8,
		},
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
			type: 'bar',
			color: '#1B0DD9',
			barWidth: 24,
			label: {
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
				color: 'inherit',
				position: 'top',
			},
			data: [100, 64, 60, 55, 53, 41, 39, 39, 36, 20],
		},
	},
);
