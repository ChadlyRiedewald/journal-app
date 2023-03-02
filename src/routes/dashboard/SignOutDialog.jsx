import { useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';
import { DialogContent, DialogOverlay } from 'components/dialog';
import { Button, CloseButton } from 'components/buttons';
import { Flex } from 'components/layout';
import { FeaturedIcon } from 'components/featuredIcon';
import { Heading, Text } from 'components/typography';
import { navLink } from './NavLink';
import { ReactComponent as SignOutIcon } from 'assets/icons/log-out-01.svg';

const Trigger = styled(Dialog.Trigger, { ...navLink });

export const SignOutDialog = () => {
  const navigate = useNavigate();

  return (
    <Dialog.Root>
      <Trigger>
        <SignOutIcon />
        Sign out
      </Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <Dialog.Close asChild>
            <CloseButton css={{ pos: 'absolute', right: 16, top: 16 }} />
          </Dialog.Close>
          <Flex
            css={{ gap: '$4', w: '$full' }}
            direction="column"
            align="center"
          >
            <FeaturedIcon icon={<SignOutIcon />} />
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
                  Sign out
                </Heading>
              </Dialog.Title>
              <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray11">
                Are you sure you want to sign out?
              </Text>
            </Flex>
          </Flex>
          <Flex css={{ gap: 12, w: '100%' }}>
            <Dialog.Close asChild>
              <Button variant="secondaryGray" size="lg" fluid>
                Cancel
              </Button>
            </Dialog.Close>
            <Button
              variant="primary"
              size="lg"
              fluid
              onClick={() => navigate('/')}
            >
              Confirm
            </Button>
          </Flex>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
