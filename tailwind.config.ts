import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	],
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#FFFFFF',
				secondary: '#1E633F',
				fade: '#878383',
			},
			backgroundColor: {
				primary: '#1E633F',
				secondary: '#FFFFFF',
				default: '#f5f3f2',
				alert: '#FF0F0F',
			},
			borderColor: {
				primary: '#1E633F',
				default: '#B8B5B5',
			},
			borderWidth: {
				thin: '1px',
			},
		},
	},
	plugins: [],
};
export default config;
