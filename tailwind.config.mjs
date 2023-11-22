/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				fadeOutWhite: {
					'0%': { color: "rgba(255, 255, 255, 0)" },
					'100%': { color: "rgba(255, 255, 255, 1)" },
				},

				// progress dots
				progress: {
					"0%, 60%": {
						transform: "translateY(0px)",
					},
					"30%": {
						transform: "translateY(-30px)",
					},
				},
				// three bounce
				"three-bounce": {
					"0%, 100%": {
						transform: "scale(0.5)",
						opacity: 0.5,
					},
					"50%": {
						transform: "scale(2)",
						opacity: 1,
					},
				},
				// rotate dot in circle
				circle: {
					"0%": {
						transform: "rotate(-360deg)translate(25px)rotate(360deg)",
					},
					"100%": {
						transform: "rotate(0deg)translate(25px)rotate(0deg)",
					},
				},
				// rotate two dots
				"rotate-in": {
					"0%, 100%": {
						transform: "scale(2)",
						opacity: 1,
					},
					"50%": {
						transform: "scale(1)",
						opacity: 0.5,
					},
				},
				"rotate-out": {
					"0%, 100%": {
						transform: "rotate(-360deg)translate(24px)rotate(0deg)scale(1.5)",
						opacity: 1,
					},
					"50%": {
						transform: "rotate(0deg)translate(24px)rotate(-360deg)scale(1)",
						opacity: 0.5,
					},
				},
				// square fill
				"square-fill": {
					"0%, 50%": {
						transform: "rotate(-360deg)",
					},
				},
				"square-fill-in": {
					"0%": {
						transform: "scaleY(0)",
						"transform-origin": "bottom",
					},
					"50%, 100%": {
						transform: "scaleY(1)",
						background: "rgb(219, 39, 119)",
					},
				},
				// rotate square and circle
				rotate: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotateY(-180deg)",
					},
					"100%": {
						transform: "rotate(-180deg)",
					},
				},
				// heart jumping
				"jump-heart": {
					"0%, 100%": {
						transform: "translateY(-30px)rotate(45deg) ",
					},
					"50%": {
						transform: "translateY(0px)rotate(45deg) ",
					},
				},
				line: {
					"0%, 100%": {
						transform: "scaleX(0.8)",
						opacity: 0.5,
					},
					"50%": {
						transform: "scaleX(1.5)",
						opacity: 1,
					},
				},
				// pacman
				pacman: {
					"0%, 100%": {
						"clip-path": "polygon(100% 74%, 44% 48%, 100% 21%)",
					},
					"25%, 75%": {
						"clip-path": "polygon(100% 60%, 44% 48%, 100% 40%)",
					},
					"50%": {
						"clip-path": "polygon(100% 50%, 44% 48%, 100% 50%)",
					},
				},
				//zoom
				zoom: {
					"0%, 100%": {
						transform: "scale(0.8)",
					},
					"50%": {
						transform: "scale(1.2)",
					},
				},
				//spin
				spin: {
					"0%": {
						transform: "rotate(-180deg)",
					},
					"100%": {
						transform: "rotate(180deg)",
					},
				},
				//wave
				wave: {
					"0%": {
						"box-shadow":
							"0 0 0 0 rgba(219, 39, 119, 0.3), 0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3),0 0 0 3em rgba(219, 39, 119, 0.3)",
					},
					"100%": {
						"box-shadow":
							"0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3), 0 0 0 3em rgba(219, 39, 119, 0.3), 0 0 0 4em rgba(219, 39, 119, 0)",
					},
				},
				//circle-left
				"circle-left": {
					"0%, 100%": {
						transform: "translateX(0px)scale(1)",
					},
					"50%": {
						transform: "translateX(-30px)scale(2)",
					},
					"70%": {
						transform: "translateX(30px)scale(2)",
					},
				},
				//circle-right
				"circle-right": {
					"0%, 100%": {
						transform: "translateX(0px)scale(1)",
					},
					"50%": {
						transform: "translateX(30px)scale(2)",
					},
					"70%": {
						transform: "translateX(-30px)scale(2)",
					},
				},
				// forwarding-left-right
				propel: {
					"0%": { transform: "translateX(0)" },
					"20%": { transform: "translateX(25%)" },
					"40%": { transform: "translateX(-25%)" },
					"60%": { transform: "translateX(25%)" },
					"100%": { transform: "translateX(-25%)" },
				},
				// rotate left right 90deg
				displace: {
					"0%": { transform: "rotate(0deg)" },
					"20%": { transform: "rotate(-90deg)" },
					"40%": { transform: "rotate(0deg)" },
					"60%": { transform: "rotate(0deg)" },
					"80%": { transform: "rotate(90deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
			},
			animation: {

				fade: 'fadeOutWhite 2s ease-in-out',

				// progress dots
				progress: "progress 1s linear",

				//three-bounce
				"three-bounce": "three-bounce 1s ease-in-out",

				// rotate dot in circle
				circle: "circle 2s ease-in-out",

				// rotate two dots
				"rotate-in": "rotate-in 2s ease-in-out",
				"rotate-out": "rotate-out 2s ease-in-out",

				// square fill
				"square-fill": "square-fill 2s ease-in-out",
				"square-fill-in": "square-fill-in 2s ease-in-out",

				// rotate square and circle
				rotate: "rotate 1.5s linear",

				// heart jumping
				"jump-heart": "jump-heart 1.5s ease-out",
				line: "line 1.5s ease-out",

				// pacman
				pacman: "pacman 1s ease-out",

				// arc rotation
				"zoom-in": "zoom 1.5s ease-out", // zoom in
				spin: "spin 2s linear", // zoom in

				//clock
				"spin-fast": "spin 2s linear", // clock spin fast
				"spin-slow": "spin 12s linear", // clock spin slow

				// wave
				wave: "wave 1s linear",

				// twin-circle
				"circle-left": "circle-left 2s ease-in-out",
				"circle-right": "circle-right 2s ease-in-out",

				// forwarding-arrow
				"arrow-forwarding": "propel 5s",

				// rotating squares
				displace: "displace 5s",

				// progress dots
				"progress-infinite": "progress 1s linear infinite",

				//three-bounce
				"three-bounce-infinite": "three-bounce 1s ease-in-out infinite",

				// rotate dot in circle
				"circle-infinite": "circle 2s ease-in-out infinite",

				// rotate two dots
				"rotate-in-infinite": "rotate-in 2s ease-in-out infinite",
				"rotate-out-infinite": "rotate-out 2s ease-in-out infinite",

				// square fill
				"square-fill-infinite": "square-fill 2s ease-in-out infinite",
				"square-fill-in-infinite": "square-fill-in 2s ease-in-out infinite",

				// rotate square and circle
				"rotate-infinite": "rotate 1.5s linear infinite",

				// heart jumping
				"jump-heart-infinite": "jump-heart 1.5s ease-out infinite",
				"line-infinite": "line 1.5s ease-out infinite",

				// pacman
				"pacman-infinite": "pacman 1s ease-out infinite",

				// arc rotation
				"zoom-in-infinite": "zoom 1.5s ease-out infinite", // zoom in
				"spin-infinite": "spin 2s linear infinite", // zoom in

				//clock
				"spin-fast-infinite": "spin 2s linear infinite", // clock spin fast
				"spin-slow-infinite": "spin 12s linear infinite", // clock spin slow

				// wave
				"wave-infinite": "wave 1s linear infinite",

				// twin-circle
				"circle-left-infinite": "circle-left 2s ease-in-out infinite",
				"circle-right-infinite": "circle-right 2s ease-in-out infinite",

				// forwarding-arrow
				"arrow-forwarding-infinite": "propel 5s infinite",

				// rotating squares
				"displace-infinite": "displace 5s infinite",
			},
		},
	},
	plugins: [],
}
