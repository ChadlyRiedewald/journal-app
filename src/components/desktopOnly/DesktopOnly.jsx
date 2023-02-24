import { styled } from 'stitches.config';

const DesktopOnly = styled('div', {
  display: 'none',

  '@desktop': {
    display: 'revert',
  },
});

export default DesktopOnly;
