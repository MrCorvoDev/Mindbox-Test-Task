import Color from 'color';

const createPaletteColor = (color: string) => {
   const baseColor = new Color(color);
   const SHADES_COUNT = 5;
   const dark = [];
   const light = [];
   const luminosity = baseColor.luminosity();
   const offset = luminosity > 0.98 || luminosity < 0.02 ? 2.5 : 0.15;

   for (let i = 1; i <= SHADES_COUNT; i++) {
      light.push(baseColor.lighten(i * offset).hex());
      dark.push(baseColor.darken(i * offset).hex());
   }

   return {
      color,
      dark,
      light,
   };
};

export default createPaletteColor;
