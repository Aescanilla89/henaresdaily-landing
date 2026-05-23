import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        henares: {
          blue:    '#1B3F7A',
          blueDark:'#0F2654',
          gold:    '#E8951C',
          goldDark:'#C47A12',
          cream:   '#F9F8F4',
          ink:     '#0F1923',
          muted:   '#6B7280',
          border:  '#E5E0D5',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
