import colors from './colors';

// For addon-knobs
// Use in any color prop in a select knob type
export const colorKnobsSelectObject = Object.keys(colors).reduce((colorObject, colorName) => {
  // Create object of identical key-value pairs { "mist": "mist" }
  colorObject[colorName] = colorName;

  return colorObject;
}, {});
