import { styled } from 'stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Label = styled(LabelPrimitive.Root, {
  fs: '$sm',
  fw: '$medium',
  color: '$gray12',
  textTransform: 'capitalize',
});
