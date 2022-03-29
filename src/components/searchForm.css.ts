import { style } from '@vanilla-extract/css';
import { designSystem } from '../design-system/index.css';

export const form = style({
  display: 'flex',
  gap: '8px',
});

export const input = designSystem({
  paddingX: 'md',
  paddingY: 'sm',
  borderColor: 'gray-200',
  borderWidth: 'sm',
  borderRadius: 'md',
  backgroundColor: 'gray-50',
});
