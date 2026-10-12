/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1B1611',
          soft: '#2C251D',
          mute: '#6B5F50',
        },
        paper: {
          DEFAULT: '#F5EFE3',
          warm: '#EDE3D0',
          deep: '#E2D5BC',
        },
        saffron: {
          DEFAULT: '#E85D04',
          bright: '#F4842B',
          pale: '#FFD8A8',
        },
        teal: {
          DEFAULT: '#0E5F5B',
          deep: '#093F3D',
          bright: '#14807A',
        },
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        shell: '80rem',
      },
      transitionTimingFunction: {
        route: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
