import { useUserAuth } from 'app/context';
import { useState } from 'react';
import { Card } from 'components/card';
import { Flex } from 'components/layout';
import { Text } from 'components/typography';
import { Formik } from 'formik';
import { Form, Input } from 'components/form';
import { Avatar } from 'components/avatar';
import { getInitials } from 'app/util';
import { FeaturedIcon } from 'components/featuredIcon';
import { Button } from 'components/button';
import { styled } from 'stitches.config';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert-circle.svg';
import { ReactComponent as UploadIcon } from 'assets/icons/upload-cloud-02.svg';
import * as Yup from 'yup';

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

const PersonalInfo = () => {
  const { user, changeInfo } = useUserAuth();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleError(errorCode) {
    if (errorCode === 'auth/requires-recent-login') {
      setError('Please sign in again to make such changes to your account');
    }
  }

  return (
    <Card
      direction="column"
      css={{
        p: 16,
        gap: 24,

        '@desktop': {
          p: 24,
          maxW: 640,
        },
      }}
    >
      <Flex direction="column">
        <Text size="lg" weight="semibold" as="h2">
          Personal info
        </Text>
        <Text size="sm" color="gray">
          Update your personal details
        </Text>
      </Flex>
      <Formik
        initialValues={{
          displayName: user.displayName,
          email: user.email,
        }}
        validationSchema={Yup.object({
          displayName: Yup.string().required(`Can't be empty`),
          email: Yup.string().email().required(`Can't be empty`),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await changeInfo(values);
            await setSuccess(true);
            resetForm({
              values: {
                displayName: values.displayName,
                email: values.email,
              },
            });
          } catch (error) {
            handleError(error.code);
            await setSuccess(false);
            resetForm();
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <Input label="name" id="displayName" name="displayName" />
            <Input label="Email" id="email" name="email" />
            <Flex
              css={{
                gap: 24,
              }}
              align="center"
              direction={{ '@initial': 'column', '@tablet': 'row' }}
            >
              <Avatar
                size="md"
                src={user.photoURL || ''}
                alt={user.displayName}
                fallback={user.displayName ? getInitials(user.displayName) : ''}
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
              direction={{
                '@initial': 'column',
                '@tablet': error || success ? 'row' : 'column',
              }}
              spaced={error || success === true}
              css={{
                borderTop: '1px solid $gray6',
                pt: 16,
                mx: '-16px',
                px: 16,
                gap: 16,

                '@desktop': {
                  px: 24,
                  mx: '-24px',
                  mb: '-8px',
                },
              }}
            >
              {success && (
                <Flex
                  align="center"
                  css={{
                    color: '$success11',
                    gap: 4,
                    flex: 1,
                    '& svg': { size: 16, flexShrink: 0 },
                  }}
                >
                  <CheckIcon />

                  <Text size="sm" weight="regular" color="success">
                    Your personal information has been updated.
                  </Text>
                </Flex>
              )}
              {error && (
                <Flex
                  align="center"
                  css={{
                    color: '$error11',
                    gap: 4,
                    flex: 1,
                    '& svg': { size: 16, flexShrink: 0 },
                  }}
                >
                  <AlertIcon />

                  <Text size="sm" weight="regular" color="error">
                    {error}
                  </Text>
                </Flex>
              )}
              <Button
                css={{
                  '@tablet': {
                    alignSelf: 'flex-end',
                  },
                }}
                size={{ '@initial': 'xl', '@tablet': 'md' }}
                variant="primary"
                fluid={{ '@initial': true, '@tablet': false }}
                disabled={!isValid || !dirty || isSubmitting}
                loading={isSubmitting}
                type="submit"
              >
                Save changes
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default PersonalInfo;
