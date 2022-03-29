import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const spacing = {
  none: 0,
  sm: '8px',
  md: '16px',
  lg: '32px',
  xl: '64px',
  auto: 'auto',
};

const sizes = {
  sm: '1px',
  md: '3px',
  lg: '5px',
  xl: '7px',
};

const responsizeProperties = defineProperties({
  properties: {
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    borderWidth: sizes,
    borderRadius: sizes,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  }
});

// COLORS

const grays = {
  'gray-50': '#f9fafb',
  'gray-100': '#f3f4f6',
  'gray-200': '#e5e7eb',
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
};

const colors = {
  ...grays,
  'brand': '#d31245',
  'white': '#fff',
}

const colorProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' }
  },
  defaultCondition: 'default',
  properties: {
    color: colors,
    borderColor: colors,
    backgroundColor: colors,
  }
})

export const designSystem = createSprinkles(
  responsizeProperties,
  colorProperties,
);

export type DesignSystem = Parameters<typeof designSystem>[0];
