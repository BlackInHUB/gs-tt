const theme = {
  fontFamily: {
    main: 'Helvetica, sans-serif',
  },
  colors: {
    dark: {
      background: '#000000',
      containers: '#20242C',
      elements: '#111419',
      fontLight: '#FFFFFF',
      fontDark: '#000000',
    },

    backdrop: 'rgba(0, 0, 0, 0.8)',
    transparent: 'transparent',
  },
  fontSizes: {
    mobile: {
      s: '12px',
      m: '16px',
      l: '20px',
    },
    desktop: {
      s: '14px',
      m: '18px',
      l: '22px',
    },
  },
  fontWeights: {
    regular: '400',
    bold: '600',
  },
  radii: {
    xs: '16px',
    s: '20px',
    m: '24px',
    l: '32px',
    round: '50%',
  },
  transition: {
    all150: 'all 150ms linear',
  },
};

export default theme;

document.body.style.backgroundColor = theme.colors.dark.background;
document.body.style.fontFamily = theme.fontFamily.main;
