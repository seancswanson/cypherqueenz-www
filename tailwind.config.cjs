/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				skinShadow: 'rgb(var(--color-shadow) / <alpha-value>)'
			},
			fontFamily: {
				skinDisplay: 'var(--font-family-skin-display), serif',
				skinMono: "'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",

			},
			backgroundColor: {
				skin: {
					base: 'var(--color-bg-base)',
					accent: 'var(--color-bg-accent)',
				}
			},
			backgroundImage: {
				skinPattern: 'var(--bg-image-skin-pattern)',
				rainbow: "url('./public/rainbow-bg.webp')"
			},
			backgroundSize: {
				skinPattern: 'var(--bg-image-skin-pattern-size)'
			},
			minHeight: {
				'50': '50px',
				'160': '160px'
			},
			maxHeight: {
				'160': '160px'
			},
			minWidth: {
				'475': '475px'
			},
			maxWidth: {
				'475': '475px'
			},
			boxShadow: {
				'test': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'
			},
			textColor:
			{
				skin: {
					base: 'var(--color-base)',
				}
			}
		},
	},
	plugins: [],
}
