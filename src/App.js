import { globalStyles } from 'stitches.config';
import { Heading, Text } from 'components/typography';
import { Button } from './components/button';
import { ReactComponent as Icon } from 'assets/icons/placeholder.svg';
import { ReactComponent as Google } from 'assets/icons/google.svg';

import { styled } from 'stitches.config';

const Box = styled('div', {
  size: '100px',
  bgColor: '#ffffff',
  boxShadow: '$3xl',
});

const Flex = styled('div', {
  d: 'flex',
  gap: '$4',
  alignItems: 'center',
});

const App = () => {
  globalStyles();

  return (
    <div style={{ padding: '4rem' }}>
      <Heading variant="h1" weight="semibold">
        Hello World!
      </Heading>
      <Heading variant="h2" weight="semibold">
        Hello World!
      </Heading>
      <Heading variant="h3" weight="semibold">
        Hello World!
      </Heading>
      <Heading variant="h4" weight="semibold">
        Hello World!
      </Heading>
      <Heading variant="h5" weight="semibold">
        Hello World!
      </Heading>
      <Heading variant="h6" weight="semibold">
        Hello World!
      </Heading>
      <Text size="xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, porro!
      </Text>
      <Text size="lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, porro!
      </Text>
      <Text size="md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, porro!
      </Text>
      <Text size="sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, porro!
      </Text>
      <Text size="xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, porro!
      </Text>
      <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <Flex>
          <Button
            variant="primary"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Primary
          </Button>
          <Button
            variant="primary"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Primary
          </Button>
          <Button
            variant="primary"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Primary
          </Button>
          <Button
            variant="primary"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Primary
          </Button>
          <Button
            variant="primary"
            disabled="true"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Primary
          </Button>
        </Flex>

        <Flex>
          <Button
            variant="error"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Error
          </Button>
          <Button
            variant="error"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Error
          </Button>
          <Button
            variant="error"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Error
          </Button>
          <Button
            variant="error"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Error
          </Button>
          <Button
            variant="error"
            disabled="true"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Error
          </Button>
        </Flex>

        <Flex>
          <Button
            variant="secondaryGray"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary gray
          </Button>
          <Button
            variant="secondaryGray"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary gray
          </Button>
          <Button
            variant="secondaryGray"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary gray
          </Button>
          <Button
            variant="secondaryGray"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary gray
          </Button>
          <Button
            disabled="true"
            variant="secondaryGray"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary gray
          </Button>
        </Flex>

        <Flex>
          <Button
            variant="secondaryColor"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary color
          </Button>
          <Button
            variant="secondaryColor"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary color
          </Button>
          <Button
            variant="secondaryColor"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary color
          </Button>
          <Button
            variant="secondaryColor"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary color
          </Button>
          <Button
            disabled="true"
            variant="secondaryColor"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary color
          </Button>
        </Flex>

        <Flex>
          <Button
            variant="secondaryError"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary error
          </Button>
          <Button
            variant="secondaryError"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary error
          </Button>
          <Button
            variant="secondaryError"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary error
          </Button>
          <Button
            variant="secondaryError"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary error
          </Button>
          <Button
            disabled="true"
            variant="secondaryError"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Secondary error
          </Button>
        </Flex>

        <Flex>
          <Button
            variant="tertiaryGray"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary gray
          </Button>
          <Button
            variant="tertiaryGray"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary gray
          </Button>
          <Button
            variant="tertiaryGray"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary gray
          </Button>
          <Button
            variant="tertiaryGray"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary gray
          </Button>
          <Button
            disabled="true"
            variant="tertiaryGray"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary gray
          </Button>
        </Flex>

        <Flex>
          <Button
            variant="tertiaryColor"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary color
          </Button>
          <Button
            variant="tertiaryColor"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary color
          </Button>
          <Button
            variant="tertiaryColor"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary color
          </Button>
          <Button
            variant="tertiaryColor"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary color
          </Button>
          <Button
            disabled="true"
            variant="tertiaryColor"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary color
          </Button>
        </Flex>
        <Flex>
          <Button
            variant="tertiaryError"
            size="xs"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary error
          </Button>
          <Button
            variant="tertiaryError"
            size="sm"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary error
          </Button>
          <Button
            variant="tertiaryError"
            size="md"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary error
          </Button>
          <Button
            variant="tertiaryError"
            size="lg"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary error
          </Button>
          <Button
            disabled="true"
            variant="tertiaryError"
            size="xl"
            iconLeading={<Icon />}
            iconTrailing={<Icon />}
          >
            Tertiary error
          </Button>
        </Flex>
        <Button variant="secondaryGray" size="md" iconLeading={<Google />}>
          Sign in with Google
        </Button>

        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default App;
