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
  },
  defaultVariants: {
    size: 'md',
    weight: 'regular',
  },
});
