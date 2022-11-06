const color = {
  floralWhite: '#FAF9F6',
  black: '#000000',
  white: '#ffffff',
  schoolBusYellow: '#fbd90c',
  grey: '#595959',
  lightGrey: '#d3d3d3',
  cardDarkBackground: 'rgba(255, 255, 255, 0.1)',
  cardLightBackground: 'rgba(0, 0, 0, 0.1)',
  lightBlack: '#424242',
  raisinBlack: '#232323',
  silver: '#c5c5c5',
  successGreen: '#07bc0c',
};

const lightTheme = {
  body: color.floralWhite,
  text: color.black,
  secondaryText: color.grey,
  highlight: color.schoolBusYellow,
  lightGreyShadow: color.lightGrey,
  cardBgColor: color.white,
  commentBgColor: color.white,
  textHover: color.black,
  ...color,
};

const darkTheme = {
  body: color.raisinBlack,
  text: color.white,
  secondaryText: color.silver,
  highlight: color.schoolBusYellow,
  lightGreyShadow: color.lightGrey,
  cardBgColor: color.lightBlack,
  commentBgColor: color.lightBlack,
  textHover: color.raisinBlack,
  ...color,
};

export { lightTheme, darkTheme };
export type ThemeType = typeof lightTheme | typeof darkTheme;
