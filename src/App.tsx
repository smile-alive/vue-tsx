import type { DefineComponent } from 'vue';

export default defineComponent({
	setup() {
		return () => <RouterView>{({ Component }: { Component: DefineComponent }) => Component && <Component />}</RouterView>;
	},
});
