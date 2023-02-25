import * as Dialog from '@radix-ui/react-dialog';
import { keyframes, styled } from 'stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  bgColor: '$blackA11',
  pos: 'fixed',
  inset: 0,
  animation: `${overlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  bgColor: '$gray1',
  br: '$xl',
  pos: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '$lg',
  w: 'calc(100% - 32px)',
  maxW: '480px',
  maxH: '85vh',
  p: 32,
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
  animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});
