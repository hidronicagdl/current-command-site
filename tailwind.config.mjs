/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'industrial-blue': '#006699', // El azul exacto de tu sitio original
        'industrial-dark': '#004d73',
        'steel-gray': '#475569',
        'steel-light': '#f1f5f9',
        'slate': {
            900: '#0f172a',
            800: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}