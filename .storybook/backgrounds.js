import addonBackgrounds from '@storybook/addon-backgrounds';
import colors from './colors';

// For addon-backgrounds
export const backgrounds = addonBackgrounds([
  Object.entries(colors).map(([colorName, colorValue]) => {
    return {
      name: upperCaseFirstLetterInString(colorName),
      value: colorValue,
      default: colorName === 'mist' ? true : false
    };
  })
]);
