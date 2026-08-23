/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F1A',
        panel: '#0F1626',
        panel2: '#141D32',
        line: '#1E293D',
        line2: '#2A3650',
        text: '#E7EAF2',
        muted: '#8892A6',
        muted2: '#5B6478',
        accent: '#3ED9C0',
        accentDim: '#2A9C8B',
        warn: '#F0B65C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
}
