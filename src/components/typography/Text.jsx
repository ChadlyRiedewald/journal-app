import { styled } from 'stitches.config';

export const Text = styled('p', {
  variants: {
    size: {
      xs: {
        fs: '$xs',
      },
      sm: {
        fs: '$sm',
      },
      md: {
        fs: '$md',
      },
      lg: {
        fs: '$lg',
      },
      xl: {
        fs: '$xl',
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
    size: 'md',
    weight: 'regular',
    color: 'gray12',
  },
});
