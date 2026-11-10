import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white:    '#FFFFFF',
        navy:     '#173B6C',
        'navy-dark': '#0F2847',
        gold:     '#C9A227',
        'gold-light': '#E8C85A',
        charcoal: '#1E293B',
        steel:    '#6B7280',
        divider:  '#E5E7EB',
        ink:      '#111827',
        slate:    '#6B7280',
        success:  '#15803D',
        danger:   '#DC2626',
        amber:    '#F59E0B',
      },
      fontFamily: {
        // Headlines — Times New Roman serif (authority, tradition)
        serif: ['"Times New Roman"', '"Times"', 'Georgia', 'serif'],
        // Body — Inter (readable, digital)
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Code — JetBrains Mono
        mono:  ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        button: '10px',
        card:   '14px',
        dialog: '18px',
      },
      boxShadow: {
        // Minimal, soft, large blur — from PDL
        card:  '0 4px 32px rgba(23, 59, 108, 0.06)',
        hover: '0 8px 48px rgba(23, 59, 108, 0.12)',
        gold:  '0 4px 24px rgba(201, 162, 39, 0.20)',
      },
      animation: {
        'fade-in':   'fadeIn 150ms ease-out',
        'slide-up':  'slideUp 250ms ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: '0' },              to: { opacity: '1' } },
        slideUp:   { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseSoft: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
      },
    },
  },
  plugins: [],
}
export default config
