import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sx: '350px',
			sm: '480px',
			md: '640px',
			md2: '768px',
			lg: '1023px',
			xl: '1200px',
			'2xl': '1440px',
			'3xl': '1600px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2.5rem'
			}
		},
		borderRadius: {
			none: '0',
			sm: '.25rem',
			DEFAULT: '.75rem',
			lg: '1rem',
			full: '9999px'
		},
		fontSize: {
			us: ['10px', '12px'],
			sm: ['12px', '16px'],
			md: ['14px', '20px'],
			lg: ['17px', '24px'],
			xl: ['20px', '28px'],
			'2xl': ['28px', '36px'],
			'3xl': ['34px', '46px'],
			'3.5xl': ['5rem', '6rem'],
			'4xl': ['6rem', '8rem'],
			'5xl': ['8rem', '10rem']
		},
		colors: {
			transparent: 'hsl(0,0%,100%,0%)',
			white: 'hsl(0,0%,100%)',
			cyan: {
				25: 'hsl(180, 31%, 95%)',
				50: 'hsl(180, 52%, 96%)',
				100: 'hsl(180, 8%, 52%)',
				200: 'hsl(180, 29%, 50%)',
				300: 'hsl(180, 14%, 20%)'
			}
		},
		backgroundColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		textColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		borderColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		extend: {
			fontFamily: {
				sans: ['var(--font-league-spartan)']
			},
			backgroundImage: {
				desktop: "url('/images/bg-header-desktop.svg')",
				mobile: "url(''/images/bg-header-mobile.svg')"
			},
			boxShadow: {
				'3xl': '0px 0px 10px 80px hsl(0, 0.4%, 54%, 36%)'
			}
		}
	},
	plugins: []
}
export default config
