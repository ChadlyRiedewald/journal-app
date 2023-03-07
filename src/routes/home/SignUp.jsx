import * as Dialog from '@radix-ui/react-dialog';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Flex } from 'components/layout';
import { Form, Input } from 'components/form';
import { Button } from 'components/button';
import { Heading, Text } from 'components/typography';
import { Link } from './Link';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { signUpFirebase } from 'app/firebase';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email(`Please enter a valid email address`)
    .required(`Can't be empty`),
  password: Yup.string()
    .required(`Can't be empty`)
    .min(8, 'Must be at least 8 characters'),
});

const SignUpForm = () => {
  const navigate = useNavigate();

  function handleError(errorCode) {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return {
          ['email']: 'Email is already in use',
        };
      case 'auth/invalid-email':
        return {
          ['email']: 'Invalid email',
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
          await signUpFirebase(values.email, values.password);
          navigate('/dashboard');
        } catch (error) {
          setErrors(handleError(error.code));
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
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
              hint="Must be at least 8 characters"
            />
          </Flex>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Button
              size="lg"
              fluid
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              loading={isSubmitting}
            >
              Get started
            </Button>
            <Button
              variant="secondaryGray"
              size="lg"
              fluid
              iconLeading={<GoogleIcon style={{ height: 24, width: 24 }} />}
              type="button"
            >
              Sign up with Google
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export const SignUp = ({ setDialogState }) => {
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
      <SignUpForm />
      <Text size="sm" weight="regular" color="gray11">
        Already have an account?{' '}
        <Link type="button" onClick={() => setDialogState('login')}>
          Log in
        </Link>
      </Text>
    </>
  );
};
