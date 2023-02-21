import { styled } from 'stitches.config';

const ButtonStyled = styled('button', {
  fw: '$semibold',
  cursor: 'pointer',
  br: '$lg',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  maxW: '$fit',
  boxShadow: '$xs',
  transition: '0.2s ease-in-out',

  '& svg': {
    size: '$5',
  },

  '&:disabled, &[disabled]': {
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      xs: {
        fs: '$sm',
        h: '36px',
        px: '14px',
        py: '8px',
      },
      sm: {
        fs: '$sm',
        h: '40px',
        px: '16px',
        py: '10px',
      },
      md: {
        fs: '$md',
        h: '44px',
        px: '18px',
        py: '10px',
      },
      lg: {
        fs: '$md',
        h: '48px',
        px: '20px',
        py: '12px',
      },
      xl: {
        fs: '$lg',
        h: '60px',
        px: '28px',
        py: '16px',
        gap: '$3',
      },
    },
    variant: {
      primary: {
        color: '$gray1',
        bgColor: '$primary9',
        border: '1px solid $primary9',

        '&:hover': {
          bgColor: '$primary10',
          borderColor: '$primary10',
        },

        '&:active': {
          bgColor: '$primary9',
          borderColor: '$primary9',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$primary5',
          borderColor: '$primary5',
        },
      },
      error: {
        color: '$gray1',
        bgColor: '$error9',
        border: '1px solid $error9',

        '&:hover': {
          bgColor: '$error10',
          borderColor: '$error10',
        },

        '&:active': {
          bgColor: '$error9',
          borderColor: '$error9',
        },

        '&:focus': {
          boxShadow: '$xsError',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$error5',
          borderColor: '$error5',
        },
      },
      secondaryGray: {
        color: '$gray12',
        bgColor: '$gray1',
        border: '1px solid $gray7',

        '&:hover': {
          bgColor: '$gray3',
        },

        '&:active': {
          bgColor: '$gray1',
        },

        '&:focus': {
          boxShadow: '$xsGray',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$gray1',
          borderColor: '$gray6',
          color: '$gray6',
        },
      },
      secondaryColor: {
        color: '$primary11',
        bgColor: '$primary3',
        border: '1px solid $primary3',

        '&:hover': {
          bgColor: '$primary4',
          borderColor: '$primary4',
        },

        '&:active': {
          bgColor: '$primary3',
        },

        '&:focus': {
          boxShadow: '$xsPrimary',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$primary2',
          borderColor: '$primary2',
          color: '$primary7',
        },
      },
      secondaryError: {
        color: '$error11',
        bgColor: '$error3',
        border: '1px solid $error3',

        '&:hover': {
          bgColor: '$error4',
          borderColor: '$error4',
        },

        '&:active': {
          bgColor: '$error3',
        },

        '&:focus': {
          boxShadow: '$xsError',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$error2',
          borderColor: '$error2',
          color: '$error7',
        },
      },
      tertiaryGray: {
        color: '$gray12',
        bgColor: '$transparent',
        border: '1px solid $transparent',
        boxShadow: 'none',

        '&:hover': {
          bgColor: '$gray3',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$gray1',
          color: '$gray6',
        },
      },
      tertiaryColor: {
        color: '$primary11',
        bgColor: '$transparent',
        border: '1px solid $transparent',
        boxShadow: 'none',

        '&:hover': {
          bgColor: '$primary3',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$primary1',
          color: '$primary6',
        },
      },
      tertiaryError: {
        color: '$error11',
        bgColor: '$transparent',
        border: '1px solid $transparent',
        boxShadow: 'none',

        '&:hover': {
          bgColor: '$error3',
        },

        '&:disabled, &[disabled]': {
          bgColor: '$error1',
          color: '$error6',
        },
      },
    },
    fluid: {
      true: {
        maxW: 'revert',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    variant: 'primary',
    fluid: 'false',
  },
});

export const Button = ({ iconLeading, iconTrailing, children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {iconLeading}
      {children}
      {iconTrailing}
    </ButtonStyled>
  );
};
