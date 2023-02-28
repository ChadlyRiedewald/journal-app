import { styled } from 'stitches.config';
import { Text } from 'components/typography';
import { Flex } from 'components/layout';
import { Label } from './Label';

const InputStyled = styled('input', {
  color: '$gray12',
  fs: '$md',
  fw: '$regular',
  border: '1px solid $gray6',
  px: 14,
  py: 8,
  br: '$lg',
  bgColor: '$gray1',
  transition: '$ease',
  boxShadow: '$xs',

  '&::placeholder': {
    color: '$gray8',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '$xsPrimary',
  },
});

export const Input = ({ label, hint, ...props }) => {
  return (
    <Flex direction="column" css={{ gap: 6 }}>
      <Label htmlFor={label}>{label}</Label>
      <InputStyled {...props} id={label} />
      {hint && (
        <Text size="sm" weight="regular" color="gray11">
          {hint}
        </Text>
      )}
    </Flex>
  );
};
