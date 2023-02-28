import { styled } from 'stitches.config';

export const Heading = styled('h1', {
  ls: '$sm',
  lh: '$xs',
  variants: {
    size: {
      '2xl': {
        fs: '$7xl',
      },
      xl: {
        fs: '$6xl',
      },
      lg: {
        fs: '$5xl',
      },
      md: {
        fs: '$4xl',
      },
      sm: {
        fs: '$3xl',
      },
      xs: {
        fs: '$2xl',
      },
    },
    weight: {
      regular: { fw: '$regular' },
      medium: { fw: '$medium' },
      semibold: { fw: '$semibold' },
      bold: { fw: '$bold' },
    },
    color: {
      primary11: { color: '$primary11' },
      primary12: { color: '$primary12' },
      gray11: { color: '$gray11' },
      gray12: { color: '$gray12' },
    },
  },
  defaultVariants: {
    size: 'xl',
    weight: 'semibold',
    color: 'gray12',
  },
});
