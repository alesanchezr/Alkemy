import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Muli', 'sans-serif'],
  bodyFontFamily: ['Droid Sans', 'sans-serif'],
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Muli',
      styles: [
        '400',  //Regular
        '600',  //Semi-bold
        '700',  //Bold
      ],
    },
    {
      name: 'Droid Sans',
      styles: [
        '400',  //Regular
        '700',  //Bold
      ],
    },
  ],
})

export default typography
