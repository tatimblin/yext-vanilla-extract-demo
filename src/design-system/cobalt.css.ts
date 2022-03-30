import { recipe } from '@vanilla-extract/recipes';
import { designSystem } from './index.css';

// Button

export const button = recipe({
  base: designSystem({
    paddingX: 'md',
    paddingY: 'sm',
    borderWidth: 'sm',
  }),
  variants: {
    color: {
      light: [
        designSystem({
          borderColor: 'brand',
          color: 'brand',
        }),
      ],
      dark: [
        designSystem({
          backgroundColor: 'brand',
          color: 'white',
        }),
      ],
    },
    size: {
      small: designSystem({
        paddingX: 'sm',
      }),
      full: {
        display: 'block',
        width: '100%',
      },
    }
  }
});

// Text

export const text = recipe({
  variants: {
    size: {
      large: designSystem({
        fontSize: 'lg',
        lineHeight: 'xl',
      }),
      small: designSystem({
        fontSize: 'sm',
        lineHeight: 'sm',
      }),
    },
    weight: {
      bold: designSystem({
        fontWeight: 'bold',
      }),
    }
  },
  compoundVariants: [
    {
      variants: {
        size: 'large',
        weight: 'bold',
      },
      style: designSystem({
        color: 'gray-500',
      }),
    },
  ],
});

export const heading = recipe({
  variants: {
    level: {
      '2': text({weight: 'bold'})
    }
  }
})