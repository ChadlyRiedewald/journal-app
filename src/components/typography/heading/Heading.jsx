import { css, styled } from 'stitches.config';

const heading = css({
  ls: '$sm',
  variants: {
    variant: {
      h1: {
        fs: '$7xl',
      },
      h2: {
        fs: '$6xl',
      },
      h3: {
        fs: '$5xl',
      },
      h4: {
        fs: '$4xl',
      },
      h5: {
        fs: '$3xl',
      },
      h6: {
        fs: '$2xl',
      },
    },
    weight: {
      regular: { fw: '$regular' },
      medium: { fw: '$medium' },
      semibold: { fw: '$semibold' },
      bold: { fw: '$bold' },
    },
  },
});

const Heading1 = styled('h1', { ...heading });
const Heading2 = styled('h2', { ...heading });
const Heading3 = styled('h3', { ...heading });
const Heading4 = styled('h4', { ...heading });
const Heading5 = styled('h5', { ...heading });
const Heading6 = styled('h6', { ...heading });

export const Heading = ({ variant, children, ...props }) => {
  switch (variant) {
    case 'h1':
      return (
        <Heading1 variant="h1" {...props}>
          {children}
        </Heading1>
      );
    case 'h2':
      return (
        <Heading2 variant="h2" {...props}>
          {children}
        </Heading2>
      );
    case 'h3':
      return (
        <Heading3 variant="h3" {...props}>
          {children}
        </Heading3>
      );
    case 'h4':
      return (
        <Heading4 variant="h4" {...props}>
          {children}
        </Heading4>
      );
    case 'h5':
      return (
        <Heading5 variant="h5" {...props}>
          {children}
        </Heading5>
      );
    case 'h6':
      return (
        <Heading6 variant="h6" {...props}>
          {children}
        </Heading6>
      );
  }
};
