import type { EChartsOption } from 'echarts';
import chinaMap from '@/assets/china.json';
import { MAP_NAME } from '@/config/variable.config';
import { BarChart, LineChart, MapChart, PieChart, ScatterChart } from 'echarts/charts';
import { GridComponent, LegendComponent, MarkLineComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';

// 加载组件
echarts.use([
	ScatterChart,
	BarChart,
	LineChart,
	PieChart,
	MapChart,
	TooltipComponent,
	LegendComponent,
	GridComponent,
	MarkLineComponent,
	VisualMapComponent,
	SVGRenderer,
]);

// 加载地图
echarts.registerMap(MAP_NAME, chinaMap as SecondParamType);

export default defineComponent({
	name: 'PrintChart',
	props: {
		option: {
			type: Object as PropType<EChartsOption>,
			required: true,
		},
	},
	setup(props, { attrs, expose }) {
		const VChartEl = useTemplateRef('VChartRef');

		expose({
			VChartEl,
		});

		return () => <VChart ref='VChartRef' autoresize option={props.option} {...attrs} />;
	},
});
