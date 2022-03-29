import { createTheme } from '@vanilla-extract/css';

/**
 * 1. Define a theme
 */

export const [theme] = createTheme({
  color: {
    brand: '#d31245',
  },
  font: {
    body: 'arial',
  },
});
