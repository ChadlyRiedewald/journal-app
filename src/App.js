import { globalStyles } from 'stitches.config';
import { Heading, Text } from 'components/typography';

const App = () => {
  globalStyles();

  return (
    <>
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
    </>
  );
};

export default App;
