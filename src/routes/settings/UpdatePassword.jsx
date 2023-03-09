import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useUserAuth } from 'app/context';
import { Card } from 'components/card';
import { Flex } from 'components/layout';
import { Text } from 'components/typography';
import { Form, Input } from 'components/form';
import { Button } from 'components/button';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/alert-circle.svg';

const UpdatePassword = () => {
  const { changePassword } = useUserAuth();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleError(errorCode) {
    if (errorCode === 'auth/requires-recent-login') {
      setError('In order to change your password, please sign in again.');
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
        validationSchema={Yup.object({
          newPassword: Yup.string()
            .min(8, `Must be at least 8 characters`)
            .required(`Can't be empty`),
          confirmNewPassword: Yup.string()
            .min(8, `Must be at least 8 characters`)
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required(`Can't be empty`),
        })}
        onSubmit={async (values, { resetForm, setErrors, setSubmitting }) => {
          try {
            await changePassword(values.confirmNewPassword);
            await setSuccess(true);
          } catch (error) {
            handleError(error.code);
            console.log(error);
            await setSuccess(false);
          } finally {
            setSubmitting(false);
            resetForm();
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <Input
              label="New password"
              id="newPassword"
              name="newPassword"
              placeholder="••••••••"
              type="password"
            />
            <Input
              label="Confirm password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              placeholder="••••••••"
              type="password"
            />
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
                    Your password has been updated.
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

export default UpdatePassword;
