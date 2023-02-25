import { styled } from 'stitches.config';
import { Text } from '../typography';

const Wrapper = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: 6,
});

const InputStyled = styled('input', {
  color: '$gray12',
  fs: '$md',
  fw: '$regular',
  border: '1px solid $gray6',
  px: 14,
  py: 8,
  br: '$lg',
  bgColor: '$gray1',
  transition: '0.2s ease-in-out',
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
    <Wrapper>
      <Text size="sm" weight="medium">
        {label}
      </Text>
      <InputStyled {...props} />
      {hint && (
        <Text size="sm" weight="regular" color="gray11">
          {hint}
        </Text>
      )}
    </Wrapper>
  );
};
