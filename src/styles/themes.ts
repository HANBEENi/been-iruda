export const light = {
  background: 'linear-gradient(180deg, #FFFFFF 0%, #EDEDED 100%)',
  text: '#000000',
  primary: '#3498db',
  secondary: '#2ecc71',

  themeButton: {
    backgroundImage: '/images/theme-button-background.png',
    icon: '/images/theme-button-icon.png',
  },

  marquee: {
    color: '#fff',
    background: '#000',
  },
};

export const dark = {
  background: '#000000',
  text: '#ffffff',
  primary: '#9b59b6',
  secondary: '#e74c3c',

  themeButton: {
    backgroundImage: '/images/theme-button-background-dark.png',
    icon: '/images/theme-button-icon-dark.png',
  },

  marquee: {
    color: '#000',
    background: '#fff',
  },
};

export const theme = { light, dark };
