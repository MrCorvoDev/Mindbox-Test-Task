import createPaletteColor from '../../utils/createPaletteColor';

// https://www.realtimecolors.com/?colors=ebf0ff-020713-709cf5-210b9d-6338f0
const paletteColors = {
   text: createPaletteColor('#ebf0ff'),
   background: createPaletteColor('#020713'),
   primary: createPaletteColor('#709cf5'),
   secondary: createPaletteColor('#210b9d'),
   accent: createPaletteColor('#6338f0'),
};

const HELPERS = {
   success: '#28a745',
   danger: '#dc3545',
   warning: '#ffc107',
};

const BASE = {
   white: '#fff',
   light: '#cecece',
   black: '#000',
   dark: '#333',
};

const palette = {
   ...paletteColors,
   base: BASE,
   helpers: HELPERS,
};

export default palette;
