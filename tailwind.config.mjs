/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--bg-primary)',
          deep: 'var(--bg-secondary)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          card: 'var(--bg-card)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          focus: 'var(--border-focus)',
          glow: 'var(--border-glow)',
        },
        accent: {
          light: 'var(--accent-light)',
          secondary: 'var(--accent-secondary)',
          blue: 'var(--accent-blue)',
          violet: 'var(--accent-violet)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-inverse)',
        },
        palette: {
          grey: {
            0: '#ffffff',
            10: '#f8f9fc',
            50: '#e6eaf0',
            100: '#e1e6ec',
            200: '#cdd4dc',
            300: '#b2bbc5',
            400: '#b7bfd9',
            800: '#45474d',
            900: '#2f3034',
            1000: '#212226',
            1100: '#18191d',
            1200: '#121317',
          },
          blue: {
            600: '#3279f9',
          }
        }
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '"Google Sans Flex"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'primary-gradient': 'var(--gradient-primary)',
        'accent-gradient': 'var(--gradient-accent)',
        'card-gradient': 'var(--gradient-card)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(113, 51, 237, 0.15), transparent 70%)',
        'radial-blue': 'radial-gradient(circle at 50% 0%, rgba(5, 47, 240, 0.12), transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(113, 51, 237, 0.3)',
        'glow-lg': '0 0 40px -10px rgba(5, 47, 240, 0.4)',
        'card': '0 4px 24px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
