import { styled } from 'stitches.config';

const MobileOnly = styled('div', {
  '@desktop': {
    display: 'none',
  },
});

export default MobileOnly;
