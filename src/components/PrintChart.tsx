import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { ScatterChart, BarChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, GridComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts';

use([TooltipComponent, LegendComponent, GridComponent, ScatterChart, BarChart, SVGRenderer]);

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
			VChartEl: VChartEl,
		});

		return () => <VChart ref='VChartRef' autoresize option={props.option} {...attrs} />;
	},
});
