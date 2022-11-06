const color = {
  floralWhite: '#FAF9F6',
  black: '#000000',
  schoolBusYellow: '#fbd90c',
  grey: '#595959',
  lightGrey: '#d3d3d3',
  cardDarkBackground: 'rgba(255, 255, 255, 0.1)',
  cardLightBackground: 'rgba(0, 0, 0, 0.1)',
  lightBlack: '#424242',
  raisinBlack: '#232323',
  silver: '#c5c5c5',

  /* ______________ */
  darkBlue: '#55198b',
  successGreen: '#07bc0c',
  white: '#ffffff',

  /* ---------------  WIP  ---------------- */
  /* -- new Light theme WIP
    yellow: '#fbd90c',
    black: '#000000',
    grey: '#595959',
    white: '#ffffff'
    https://dribbble.com/shots/19619582-Web-UI-Light
    ---------------
  -- new Dark theme WIP
    purple: '#8277fe',
    black: '#000000',
    darkGrey: '#282828',
    white: '#ffffff'
    https://dribbble.com/shots/19618722-Web-Dark-UI
    */
  /* ---------------  WIP  ---------------- */
};

/* ---------------  WIP  ---------------- */
// const darkTheme = {
//   body: color.raisinBlack,
//   text: '#ffffff',
//   highlight: '#fbd90c',
//   dark: '#00072D',
//   secondaryText: '#c5c5c5',
//   darkGrey: '#282828',
//   lightGreyShadow: '#d3d3d3',
//   cardBgColor: color.lightBlack,
//   commentBgColor: color.lightBlack,
//   textHover: color.raisinBlack,
//   ...color,
// };
/* ---------------  WIP  ---------------- */

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
export type ThemeType = typeof darkTheme | typeof darkTheme;
