import { styled } from 'stitches.config';
import { Text } from 'components/typography';
import { Flex } from 'components/layout';
import { Label } from './Label';
import { useField } from 'formik';

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

  variants: {
    error: {
      true: {
        boxShadow: '$xsError',
      },
    },
  },
});

export const Input = ({ label, id, hint, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Flex direction="column" css={{ gap: 6 }}>
      <Label htmlFor={id}>{label}</Label>
      <InputStyled
        id={id}
        {...props}
        {...field}
        error={meta.touched && !!meta.error}
      />
      {meta.touched && !!meta.error ? (
        <Text size="sm" weight="regular" color="error11">
          {meta.error}
        </Text>
      ) : (
        hint && (
          <Text size="sm" weight="regular" color="gray11">
            {hint}
          </Text>
        )
      )}
    </Flex>
  );
};
