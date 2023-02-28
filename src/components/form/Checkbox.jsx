import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { styled } from 'stitches.config';
import { Flex } from 'components/layout';
import { Label } from './Label';

const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  size: '$4',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '$ease',
  '& svg': { size: '$3' },
  boxSizing: 'border-box',

  '&:focus': { boxShadow: '$xsPrimary' },

  '&[data-state=unchecked]': {
    bgColor: '$gray1',
    border: '1px solid $gray6',
  },

  '&:hover:not([data-disabled]), &[data-state=checked]': {
    bgColor: '$primary3',
    border: '1px solid $primary11',
  },

  '&[data-disabled]': {
    bgColor: '$gray3',
    cursor: 'not-allowed',
  },
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$primary11',
});

const LabelStyled = styled(Label, { textTransform: 'none' });

export const Checkbox = ({ label }) => {
  return (
    <Flex css={{ gap: '$2' }} align="center">
      <CheckboxRoot id="c1">
        <CheckboxIndicator asChild>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      {label && <LabelStyled htmlFor="c1">{label}</LabelStyled>}
    </Flex>
  );
};
