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
})
