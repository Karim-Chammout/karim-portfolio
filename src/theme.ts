const color = {
  black: '#000000',
  white: '#ffffff',
  grey: '#595959',
  silver: '#c5c5c5',
  floralWhite: '#FAF9F6',
  lightBlack: '#424242',
  lightGrey: '#d3d3d3',
  raisinBlack: '#232323',
  schoolBusYellow: '#fbd90c',
  successGreen: '#07bc0c',
  darkShadow: 'rgba(255, 255, 255, 0.1)',
  lightShadow: 'rgba(0, 0, 0, 0.2)',
  lighterShadow: 'rgba(0, 0, 0, 0.1)',
};

const lightTheme = {
  body: color.floralWhite,
  text: color.black,
  secondaryText: color.grey,
  highlight: color.schoolBusYellow,
  lightGreyShadow: color.lightGrey,
  cardBgColor: color.white,
  cardShadow: color.lighterShadow,
  commentBgColor: color.white,
  textHover: color.black,
  boxShadow: color.lightShadow,
  codeBg: color.lighterShadow,
  colors: {
    ...color,
  },
};

const darkTheme = {
  body: color.raisinBlack,
  text: color.white,
  secondaryText: color.silver,
  highlight: color.schoolBusYellow,
  lightGreyShadow: color.lightGrey,
  cardBgColor: color.lightBlack,
  cardShadow: color.lighterShadow,
  commentBgColor: color.lightBlack,
  textHover: color.raisinBlack,
  boxShadow: color.darkShadow,
  codeBg: color.darkShadow,
  colors: {
    ...color,
  },
};

export { lightTheme, darkTheme };
export type ThemeType = typeof lightTheme | typeof darkTheme;
