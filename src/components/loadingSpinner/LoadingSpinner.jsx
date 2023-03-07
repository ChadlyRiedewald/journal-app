import { keyframes, styled } from 'stitches.config';

const loading = keyframes({
  to: { transform: 'rotate(1turn)' },
});

export const LoadingSpinner = styled('div', {
  d: 'flex',
  justifyContent: 'center',

  '&:after': {
    content: '',
    size: 24,
    border: '3px solid $gray1',
    borderTopColor: '$transparent',
    br: '$full',
    animation: `${loading} 0.8s linear infinite`,
  },
});
