import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay, DialogContent } from 'components/dialog';
import { Button, CloseButton } from 'components/buttons';
import { styled } from 'stitches.config';
import { Heading, Text } from 'components/typography';
import { Input } from 'components/form';
import { ReactComponent as Google } from 'assets/icons/google.svg';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

const Title = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$1',
  maxW: '$fit',
  textAlign: 'center',
});

const FormWrapper = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$6',
  w: '$full',
});

const Wrapper = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const Link = styled('button', {
  fs: '$sm',
  fw: '$semibold',
  color: '$primary11',
  cursor: 'pointer',
  textDecoration: 'none',
  bg: 'none',
  border: 'none',
  p: 0,
  m: 0,
  outline: 'none',

  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
});

export const SignUp = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size="lg" variant="primary">
          Sign up
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent aria-describedby={undefined}>
          <Dialog.Close asChild>
            <CloseButton css={{ pos: 'absolute', right: 16, top: 16 }} />
          </Dialog.Close>
          <Logo />
          <Title>
            <Dialog.Title asChild>
              <Heading size="sm" weight="semibold" color="gray12">
                Create an account
              </Heading>
            </Dialog.Title>
            <Text size="md" color="gray11">
              Start your journaling journey
            </Text>
          </Title>
          <FormWrapper>
            <Wrapper>
              <Input label="Name*" placeholder="Enter your name" />
              <Input label="Email*" placeholder="Enter your email" />
              <Input
                label="Password*"
                hint="Must be at least 8 characters."
                placeholder="Create a password"
                type="password"
              />
            </Wrapper>
            <Wrapper>
              <Button size="lg" fluid>
                Get started
              </Button>
              <Button
                variant="secondaryGray"
                size="lg"
                fluid
                iconLeading={<Google style={{ height: 24, width: 24 }} />}
              >
                Sign up with Google
              </Button>
            </Wrapper>
          </FormWrapper>
          <Text size="sm" weight="regular" color="gray11">
            Already have an account? <Link>Log in</Link>
          </Text>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
