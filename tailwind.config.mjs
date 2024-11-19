/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'blob-one': 'blob-one 18s infinite ease-in-out',
        'blob-two': 'blob-two 22s infinite ease-in-out',
        'blob-three': 'blob-three 16s infinite ease-in-out',
        'blob-four': 'blob-four 16s infinite ease-in-out',
        'blob-five': 'blob-five 32s infinite ease-in-out',
        'blob-six': 'blob-six 12s infinite ease-in-out',
        'blob-seven': 'blob-seven 32s infinite ease-in-out',
        'wobble': 'wobble 4s ease-in-out alternate infinite',
      },
      keyframes: {
        'blob-one': {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-600%)' },
        },
        'blob-two': {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-420%)' },
        },
        'blob-three': {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-305%)' },
        },
        'blob-four': {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-465%)' },
        },
        'blob-five': {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-700%)' },
        },
        'blob-six': {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-700%)' },
        },
        'blob-seven': {
          '0%, 100%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(-300%)' },
        },
        'wobble': {
          '50%': { 'border-radius': '42% 58% 70% 30% / 45% 45% 55% 55%' },
          '100%': { 'border-radius': '38% 52% 75% 36% / 50% 40% 50% 60%' },
        },
      },
    },
  },
  plugins: [],
}