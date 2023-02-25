import { styled } from 'stitches.config';
import { ReactComponent as Logo } from 'assets/icons/test-logo.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu-01.svg';
import { Button } from 'components/buttons';
import { Heading, Text } from 'components/typography';
import DesktopOnly from 'components/desktopOnly';
import MobileOnly from 'components/mobileOnly';
import { SignUp } from './SignUp';
import { Flex, flex } from 'components/layout';

const Container = styled('div', {
  w: '$full',
  px: '16px',
  maxW: '$6xl',
});

const Header = styled('header', {
  w: '$full',
  borderBottom: '1px solid $gray6',
  d: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  h: '$18',
  '@desktop': {
    h: '$20',
  },
});

const Wrapper = styled(Flex);
const Side = styled(Flex, { flex: 1 });
const Navigation = styled('nav', { ...flex });
const Hero = styled(Flex);
const HeroText = styled(Flex);

const Home = () => {
  return (
    <Wrapper
      direction="column"
      align="center"
      css={{
        gap: '$16',
        '@desktop': { gap: '$24' },
      }}
    >
      <Header>
        <Container>
          <Navigation align="center">
            <Logo />
            <Side />
            <MobileOnly>
              <MenuIcon />
            </MobileOnly>
            <DesktopOnly>
              <Flex css={{ gap: '$3' }}>
                <Button size="lg" variant="tertiaryGray">
                  Log in
                </Button>
                <SignUp />
              </Flex>
            </DesktopOnly>
          </Navigation>
        </Container>
      </Header>
      <Container>
        <Hero direction={{ '@initial': 'column', '@desktop': 'row' }}>
          <HeroText
            direction="column"
            css={{
              gap: '$4',
              '@tablet': { maxW: '$2xl', gap: '$6' },
            }}
          >
            <Heading
              size={{
                '@initial': 'md',
                '@tablet': 'xl',
              }}
              as="h1"
              weight="semibold"
              color="gray12"
            >
              Transform your life through the power of journaling
            </Heading>
            <Text
              size={{
                '@initial': 'lg',
                '@tablet': 'xl',
              }}
              weight="regular"
              color="gray11"
              css={{
                mb: '$4',
                '@tablet': { mb: 0 },
              }}
            >
              Capture your thoughts, reflect on your experiences, explore your
              emotions, and ignite your potential for personal growth and
              self-discovery, one entry at a time.
            </Text>
            <Button
              size={{
                '@initial': 'xl',
                '@tablet': '2xl',
              }}
              fluid={{
                '@initial': true,
                '@tablet': false,
              }}
              variant="primary"
            >
              Get started - It's free!
            </Button>
          </HeroText>
          <Side />
        </Hero>
      </Container>
    </Wrapper>
  );
};

export default Home;
