import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import Colors from './colors.css';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {},
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: Colors,
    background: Colors,
  },
});

export const designSystem = createSprinkles(
  responsiveProperties,
  colorProperties,
);

export type DesignSystem = Parameters<typeof designSystem>[0];
