import { styled } from 'stitches.config';
import { Flex } from 'components/layout';
import { Heading, Text } from 'components/typography';
import { Card } from 'components/card';
import { Form, Input } from 'components/form';
import { Formik } from 'formik';
import { useUserAuth } from 'app/context';
import { Button } from 'components/button';
import { Avatar } from 'components/avatar';
import { getInitials } from 'app/util';
import { FeaturedIcon } from 'components/featuredIcon';
import { ReactComponent as UploadIcon } from 'assets/icons/upload-cloud-02.svg';

const UploadWrapper = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  px: 24,
  py: 16,
  br: '$xl',
  border: '1px solid $gray6',
  w: '$full',
  cursor: 'pointer',
});

export const Settings = () => {
  const { user } = useUserAuth();

  return (
    <Flex
      direction="column"
      css={{
        p: 32,
        gap: 24,
      }}
    >
      <Flex direction="column">
        <Heading size="sm" weight="semibold" as="h1">
          Settings
        </Heading>
        <Text size="sm" color="gray">
          Update your account settings
        </Text>
      </Flex>
      <Card
        direction="column"
        css={{
          p: 24,
          gap: 24,
          maxW: 640,
        }}
      >
        <Flex direction="column">
          <Text size="lg" weight="semibold" as="h2">
            Personal info
          </Text>
          <Text size="sm" color="gray">
            Update your personal details and profile picture
          </Text>
        </Flex>
        <Formik
          initialValues={{
            displayName: user.displayName,
            email: user.email,
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input label="name" id="displayName" name="displayName" />
              <Input label="Email" id="email" name="email" />
              <Flex
                css={{
                  gap: 24,
                }}
                align="center"
              >
                <Avatar
                  size="md"
                  src={user.photoURL || ''}
                  alt={user.displayName}
                  fallback={
                    user.displayName ? getInitials(user.displayName) : ''
                  }
                />
                <UploadWrapper>
                  <FeaturedIcon color="gray" size="sm" icon={<UploadIcon />} />
                  <Flex css={{ gap: 4 }}>
                    <Text weight="semibold" color="primary" size="sm">
                      Click to upload
                    </Text>
                    <Text size="sm">or drag and drop</Text>
                  </Flex>
                  <Text size="xs">SVG, PNG, JPG or GIF (max. 800x400px)</Text>
                </UploadWrapper>
              </Flex>
              <Flex
                direction="column"
                css={{
                  borderTop: '1px solid $gray6',
                  pt: 16,
                  mx: '-24px',
                  mb: '-8px',
                  px: 24,
                }}
              >
                <Button
                  css={{ alignSelf: 'flex-end' }}
                  size="md"
                  variant="primary"
                >
                  Save changes
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Card>
      <Card
        direction="column"
        css={{
          p: 24,
          gap: 24,
          maxW: 640,
        }}
      >
        <Flex direction="column">
          <Text size="lg" weight="semibold" as="h2">
            Change password
          </Text>
          <Text size="sm" color="gray">
            Update your password
          </Text>
        </Flex>
        <Formik
          initialValues={{
            newPassword: '',
            confirmNewPassword: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input
                label="New password"
                id="newPassword"
                name="newPassword"
                placeholder="••••••••"
              />
              <Input
                label="Confirm password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="••••••••"
              />

              <Flex
                direction="column"
                css={{
                  borderTop: '1px solid $gray6',
                  pt: 16,
                  mx: '-24px',
                  mb: '-8px',
                  px: 24,
                }}
              >
                <Button
                  css={{ alignSelf: 'flex-end' }}
                  size="md"
                  variant="primary"
                >
                  Save changes
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Card>
    </Flex>
  );
};
