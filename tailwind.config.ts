import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'purple': '#7C5DFA',
            'pale-purple': '#9277FF',
            'dark-navy': '#1E2139',
            'navy': '#252945',
            'slate-blue-gray': '#373B53',
            'pale-blue': '#DFE3FA',
            'blue-gray': '#888EB0',
            'pastel-blue': '#7E88C3',
            'blue-black': '#0C0E16',
            'black-rgba': 'rgba(0, 0, 0, 0.4984)',
            'red': '#EC5757',
            'pale-red': '#FF9797',
            'bg-light': '#F8F8FB',
            'bg-dark': '#141625',
            'border-dark': '#494E6E',
            'white': '#FFFFFF',
            'green': '#33D69F',
            'orange': '#FF8F00'
        }
    },
    plugins: [require("daisyui")],
}
export default config
