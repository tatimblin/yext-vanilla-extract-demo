import { recipe } from '@vanilla-extract/recipes';

// Button

export const Button = recipe({
  variants: {
    color: {
      brand: {
        backgroundColor: 'red',
        color: 'white'
      },
    }
  }
})
