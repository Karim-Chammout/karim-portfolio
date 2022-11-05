const color = {
  floralWhite: '#FAF9F6',
  black: '#000000',
  schoolBusYellow: '#fbd90c',
  grey: '#595959',
  lightGrey: '#d3d3d3',

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
//   body: '#000000',
//   text: '#ffffff',
//   highlight: '#fbd90c',
//   dark: '#00072D',
//   secondaryText: '#c5c5c5',
//   lightGreyShadow: '#d3d3d3',
//   ...color,
// };
/* ---------------  WIP  ---------------- */

const theme = {
  body: color.floralWhite,
  text: color.black,
  highlight: color.schoolBusYellow,
  secondaryText: color.grey,
  lightGreyShadow: color.lightGrey,
  ...color,
};

export default theme;
export type ThemeType = typeof theme;
