import { styled } from 'stitches.config';
import { ReactComponent as Icon } from 'assets/icons/x-close.svg';

const ButtonStyled = styled('button', {
  cursor: 'pointer',
  br: '$lg',
  maxW: '$fit',
  transition: '$ease',
  bg: 'none',
  border: 'none',

  '& svg': {
    size: '$5',
  },

  '&:focus': {
    outline: 'none',
  },

  variants: {
    size: {
      sm: {
        p: 8,
      },
      md: {
        p: 10,
      },
      lg: {
        p: 10,

        '& svg': {
          size: '$6',
        },
      },
    },
    color: {
      primary: {
        color: '$primary11',

        '&:hover': {
          bgColor: '$primary3',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },
      },
      gray: {
        color: '$gray11',

        '&:hover': {
          bgColor: '$gray3',
        },

        '&:focus': {
          boxShadow: '$xsGray',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'gray',
  },
});

export const CloseButton = ({ ...props }) => {
  return (
    <ButtonStyled {...props} aria-label="Close">
      <Icon />
    </ButtonStyled>
  );
};
