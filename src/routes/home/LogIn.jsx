import * as Dialog from '@radix-ui/react-dialog';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { Flex } from 'components/layout';
import { Checkbox, Form, Input } from 'components/form';
import { Heading, Text } from 'components/typography';
import { Button } from 'components/button';
import { Link } from './Link';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { useUserAuth } from 'app/context';

const initialValues = {
  email: '',
  password: '',
  rememberPassword: false,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email(`Please enter a valid email address`)
    .required(`Can't be empty`),
  password: Yup.string().required(`Can't be empty`),
  rememberPassword: Yup.boolean(),
});

const LogInForm = ({ setDialogState }) => {
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  function handleError(errorCode) {
    switch (errorCode) {
      case 'auth/user-not-found':
        return {
          ['email']: 'User not found',
        };
      case 'auth/wrong-password':
        return {
          ['password']: 'Wrong password',
        };
      default:
        return '';
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors, setSubmitting }) => {
        try {
          await logIn(values.email, values.password);
          navigate('/dashboard');
        } catch (error) {
          setErrors(handleError(error.code));
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty, setFieldValue, values }) => (
        <Form>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Input
              label="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <Input
              label="password"
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
            <Flex spaced align="center">
              <Checkbox
                label="Remember me"
                id="rememberPassword"
                checked={values.rememberPassword}
                name="rememberPassword"
                onClick={() =>
                  setFieldValue('rememberPassword', !values.rememberPassword)
                }
              />
              <Link
                onClick={() => setDialogState('forgotPassword')}
                type="button"
              >
                Forgot password
              </Link>
            </Flex>
          </Flex>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Button
              size="lg"
              fluid
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              loading={isSubmitting}
            >
              Sign in
            </Button>
            <Button
              variant="secondaryGray"
              size="lg"
              fluid
              iconLeading={<GoogleIcon style={{ height: 24, width: 24 }} />}
              type="button"
              onClick={async () => {
                try {
                  await googleSignIn();
                  navigate('/dashboard');
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              Sign in with Google
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export const LogIn = ({ setDialogState }) => {
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
          <Text size={{ '@initial': 'sm', '@tablet': 'md' }} color="gray">
            Welcome back! Please enter your details
          </Text>
        </Flex>
      </Flex>
      <LogInForm setDialogState={setDialogState} />
      <Text size="sm" weight="regular" color="gray">
        Don't have an account?{' '}
        <Link type="button" onClick={() => setDialogState('signup')}>
          Sign up
        </Link>
      </Text>
    </>
  );
};
