import * as Dialog from '@radix-ui/react-dialog';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Flex } from 'components/layout';
import { Form, Input } from 'components/form';
import { Button } from 'components/button';
import { FeaturedIcon } from 'components/featuredIcon';
import { Heading, Text } from 'components/typography';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-narrow-left.svg';
import { ReactComponent as KeyIcon } from 'assets/icons/key-01.svg';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email(`Please enter a valid email address`)
    .required(`Can't be empty`),
});

const ForgotPasswordForm = ({ setDialogState }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <Flex direction="column" css={{ gap: '$4' }}>
            <Input
              label="email*"
              id="email"
              name="email"
              placeholder="Enter your email"
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
              Reset password
            </Button>
            <Button
              variant="tertiaryGray"
              size="lg"
              fluid
              iconLeading={<ArrowLeftIcon />}
              onClick={() => setDialogState('login')}
              type="button"
            >
              Back to log in
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export const ForgotPassword = ({ setDialogState }) => {
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
      <ForgotPasswordForm setDialogState={setDialogState} />
    </>
  );
};
