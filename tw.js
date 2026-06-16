// Config Tailwind partagée — à charger avant cdn.tailwindcss.com
window.tailwind = {
  config: {
    safelist: ['font-noto'],
    theme: {
      extend: {
        colors: {
          sand: {
            DEFAULT: '#f7f1ea',
            50: '#fef7ee',
            200: '#f2e5db',
          },
          brown: {
            main: '#3d2c2a',
            muted: '#8c7571',
            soft: '#b19991',
          },
          accent: {
            DEFAULT: '#e1a68a',
            strong: '#c9825e',
          },
          chip: '#f8e0d2',
          'chip-strong': '#e8c0a5',
        },
        fontFamily: {
          sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
          serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
          noto: ['"Noto Serif"', 'Georgia', 'serif'],
        },
        boxShadow: {
          soft: '0 18px 45px rgba(40, 22, 12, 0.18)',
          card: '0 10px 24px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
};
