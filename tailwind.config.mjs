/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'orange': '#ff5500',
			'red': '#ff0000',
			'green': '#1db954',
			'pink': '#d80d23',
			'purple': '#a238ff',
			'white': '#ffffff',
			'black': '#000000'
		},
		extend: {
			backgroundImage: {
				'noise': "url('noise.svg')"
			},
			keyframes: {
				hover: {
					'0%': {
						transform: 'translate(0, 0)'
					  },
					  '25%': {
						transform: 'translate(5px, 5px)'
					  },
					  '50%': {
						transform: 'translate(0, 0)'
					  },
					  '75%': {
						transform: 'translate(-5px, -5px'
					  },
					  '100%': {
						transform: 'translate(0, 0)'
					  },
				}
			}
		},
	},
	plugins: [],
}
