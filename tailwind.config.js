import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const fontSize = Object.fromEntries(
	Object.entries(defaultTheme.fontSize).map(([key, value]) => {
		if (Array.isArray(value)) {
			return [key, value[0]];
		} else {
			return [key, value];
		}
	}),
);

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize,
			fontFamily: {
				pb: 'Alibaba-PuHuiTi-B',
				ph: 'Alibaba-PuHuiTi-H',
				pl: 'Alibaba-PuHuiTi-L',
				pm: 'Alibaba-PuHuiTi-M',
				pr: 'Alibaba-PuHuiTi-R',
			},
			colors: {
				print: {
					100: '#f7f8fa',
					200: '#ebedf0',
					300: '#dcdee0',
					400: '#c8c9cc',
					500: '#969799',
					600: '#646566',
					700: '#323233',
					800: '#020626',
				},
				food: '#286fff',
				price: '#ff2e2e',
			},
		},
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.custom-label': {
					width: 'fit-content',
					borderRadius: '0.375rem',
					borderBottomRightRadius: '1px',
					backgroundColor: '#323233',
					paddingLeft: '0.5rem',
					paddingRight: '0.5rem',
					fontFamily: 'Alibaba-PuHuiTi-B',
					fontSize: '0.875rem',
					color: 'white',
				},
				'.rhombus': {
					'@apply flex-center': {},
					height: '1.25rem',
					width: '1.25rem',
					backgroundImage: 'linear-gradient(to top, var(--tw-gradient-stops))',
					fontFamily: 'Alibaba-PuHuiTi-H',
					color: 'white',
					'clip-path':
						'polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)',
				},
			});
		}),
	],
};
