/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html", // Include your root HTML file
	  "./src/**/*.{js,jsx}", // Include all JavaScript and JSX files in the src directory and subdirectories
	],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  // Add your custom colors here if needed
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  
