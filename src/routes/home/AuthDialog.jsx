import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';
import { DialogContent, DialogOverlay } from 'components/dialog';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-narrow-left.svg';
import { ReactComponent as KeyIcon } from 'assets/icons/key-01.svg';
import { button, Button, CloseButton } from 'components/buttons';
import { Flex } from 'components/layout';
import { Heading, Text } from 'components/typography';
import { Checkbox, Input } from 'components/form';
import { FeaturedIcon } from 'components/featuredIcon';
import { useNavigate } from 'react-router-dom';

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

const Trigger = styled(Dialog.Trigger, {
  ...button,
});

const LogInContent = ({ setDialogState }) => {
  const navigate = useNavigate();

  return (
    <>
      <Flex css={{ gap: '$4' }} direction="column" align="center">
        <Logo />
        <Flex
          direction="column"
          align="center"
          css={{
            gap: '$1',
            maxW: '$fit',
            textAlign: 'center',
          }}
        >
          <Dialog.Title asChild>
            <Heading
              size={{ '@initial': 'xs', '@tablet': 'sm' }}
              weight="semibold"
              color="gray12"
            >
              Log in to your account
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray11">
            Welcome back! Please enter your details
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" css={{ gap: '$6', w: '$full' }}>
        <Flex direction="column" css={{ gap: '$4' }}>
          <Input label="email" placeholder="Enter your email" />
          <Input label="password" placeholder="••••••••" type="password" />
          <Flex spaced align="center">
            <Checkbox label="Remember me" />
            <Link onClick={() => setDialogState('forgotPassword')}>
              Forgot password
            </Link>
          </Flex>
        </Flex>
        <Flex direction="column" css={{ gap: '$4' }}>
          <Button size="lg" fluid onClick={() => navigate('/dashboard')}>
            Sign in
          </Button>
          <Button
            variant="secondaryGray"
            size="lg"
            fluid
            iconLeading={<GoogleIcon style={{ height: 24, width: 24 }} />}
          >
            Sign in with Google
          </Button>
        </Flex>
      </Flex>
      <Text size="sm" weight="regular" color="gray11">
        Don't have an account?{' '}
        <Link onClick={() => setDialogState('signup')}>Sign up</Link>
      </Text>
    </>
  );
};

const SignUpContent = ({ setDialogState }) => {
  return (
    <>
      <Flex css={{ gap: '$4' }} direction="column" align="center">
        <Logo />
        <Flex
          direction="column"
          align="center"
          css={{
            gap: '$1',
            maxW: '$fit',
            textAlign: 'center',
          }}
        >
          <Dialog.Title asChild>
            <Heading
              size={{ '@initial': 'xs', '@tablet': 'sm' }}
              weight="semibold"
              color="gray12"
            >
              Create an account
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray11">
            Start your journaling journey
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" css={{ gap: '$6', w: '$full' }}>
        <Flex direction="column" css={{ gap: '$4' }}>
          <Input label="name" placeholder="Enter your name" />
          <Input label="email" placeholder="Enter your email" />
          <Input
            label="password"
            hint="Must be at least 8 characters."
            placeholder="Create a password"
            type="password"
          />
        </Flex>
        <Flex direction="column" css={{ gap: '$4' }}>
          <Button size="lg" fluid>
            Get started
          </Button>
          <Button
            variant="secondaryGray"
            size="lg"
            fluid
            iconLeading={<GoogleIcon style={{ height: 24, width: 24 }} />}
          >
            Sign up with Google
          </Button>
        </Flex>
      </Flex>
      <Text size="sm" weight="regular" color="gray11">
        Already have an account?{' '}
        <Link onClick={() => setDialogState('login')}>Log in</Link>
      </Text>
    </>
  );
};

const ForgotPasswordContent = ({ setDialogState }) => {
  return (
    <>
      <Flex css={{ gap: '$4' }} direction="column" align="center">
        <FeaturedIcon icon={<KeyIcon />} />
        <Flex
          direction="column"
          align="center"
          css={{
            gap: '$1',
            maxW: '$fit',
            textAlign: 'center',
          }}
        >
          <Dialog.Title asChild>
            <Heading
              size={{ '@initial': 'xs', '@tablet': 'sm' }}
              weight="semibold"
              color="gray12"
            >
              Forgot password?
            </Heading>
          </Dialog.Title>
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray11">
            No worries, we'll send you reset instructions
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" css={{ gap: '$6', w: '$full' }}>
        <Input label="email" placeholder="Enter your email" />
        <Flex direction="column" css={{ gap: '$4' }}>
          <Button size="lg" fluid>
            Reset password
          </Button>
          <Button
            variant="tertiaryGray"
            size="lg"
            fluid
            iconLeading={<ArrowLeftIcon />}
            onClick={() => setDialogState('login')}
          >
            Back to log in
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export const AuthDialog = ({
  dialog,
  triggerText,
  toggleMenu,
  isOpen,
  ...props
}) => {
  const [dialogState, setDialogState] = useState(dialog);

  return (
    <Dialog.Root
      onOpenChange={() => {
        setDialogState(dialog);
      }}
    >
      <Trigger {...props}>{triggerText}</Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <Dialog.Close asChild>
            <CloseButton css={{ pos: 'absolute', right: 16, top: 16 }} />
          </Dialog.Close>
          {dialogState === 'login' && (
            <LogInContent setDialogState={setDialogState} />
          )}
          {dialogState === 'signup' && (
            <SignUpContent setDialogState={setDialogState} />
          )}
          {dialogState === 'forgotPassword' && (
            <ForgotPasswordContent setDialogState={setDialogState} />
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
