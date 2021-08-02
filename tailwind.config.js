const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			display: ['Roboto', 'sans-serif'],
			body: ['Muli', 'sans-serif'],
		},

		extend: {
			colors: {
				lightBlue: colors.lightBlue,
				steel: '#272343',
				pine: '#34a3a3',
				teal: '#bae8e8',
				iceberg: '#e3f6f5',
				alabaser: '#fafafa',
				steelBlue: '#4682B4',
				darkSalmon: '#e9967a',
			},
			backgroundColor: {
				skin: {
					'left-overlay': 'var(--left-overlay-fill)',
					'right-overlay': 'var(--right-overlay-fill)',
					'left-button-hover': 'var(--left-button-hover-color)',
					'right-button-hover': 'var(--right-button-hover-color)',
				},
			},
			borderColor: {
				skin: {
					'left-button': 'var(--left-button-hover-color)',
					'right-button': 'var(--right-button-hover-color)',
				},
			},
			width: {
				95: '95%',
			},
			zIndex: {
				'-1': '-1',
				'-2': '-2',
			},
			rotate: {
				'-20': '-20deg',
				'-70': '-70deg',
			},
			top: {
				26: '100px',
				'-26': '-100px',
			},
			translate: {
				'-150': '-150%',
				200: '200%',
				'-200': '-200%',
			},
		},
	},
	variants: {
		aspectRatio: ['responsive', 'hover'],
		extend: {
			backgroundColor: ['active'],
			filter: ['hover', 'focus'],
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
};
