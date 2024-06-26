export const themes = {
  blue: {
    background: '#1b3a79',
    text: '#ffffff',
  },
  green: {
    background: '#3a791b',
    text: '#ffffff',
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
  },
  colorBlind: {
    background: '#ffffff',
    text: '#000000',
  },
};

export type Theme = typeof themes.blue;
