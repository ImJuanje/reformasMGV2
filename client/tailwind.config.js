/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1B19',
        paper: '#EDEFEA',
        paperdim: '#E2E4DC',
        blueprint: {
          DEFAULT: '#1F3A4D',
          deep: '#152A38',
          line: '#7FA8BD',
        },
        copper: {
          DEFAULT: '#A9713F',
          light: '#C6935F',
        },
        stone: '#C9C2B3',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint: `linear-gradient(rgba(127,168,189,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(127,168,189,0.12) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '32px 32px',
      },
    },
  },
  plugins: [],
}
