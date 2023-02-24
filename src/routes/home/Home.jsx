import { styled } from 'stitches.config';
import { ReactComponent as Logo } from 'assets/icons/test-logo.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu-01.svg';
import { Button } from 'components/button';
import { Heading, Text } from 'components/typography';
import DesktopOnly from 'components/desktopOnly';
import MobileOnly from 'components/mobileOnly';

const Wrapper = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$16',

  '@desktop': {
    gap: '$24',
  },
});

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

const Navigation = styled('nav', {
  d: 'flex',
  alignItems: 'center',
});

const ButtonWrapper = styled('div', {
  d: 'flex',
  gap: '$3',
});

const Side = styled('div', {
  flex: 1,
});

const Hero = styled('div', {
  d: 'flex',
  flexDirection: 'column',

  '@desktop': {
    flexDirection: 'revert',
  },
});

const HeroText = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$6',

  '@tablet': {
    maxW: '$2xl',
  },
});

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <Navigation>
            <Logo />
            <Side />
            <MobileOnly>
              <MenuIcon />
            </MobileOnly>
            <DesktopOnly>
              <ButtonWrapper>
                <Button size="lg" variant="tertiaryGray">
                  Log in
                </Button>
                <Button size="lg" variant="primary">
                  Sign up
                </Button>
              </ButtonWrapper>
            </DesktopOnly>
          </Navigation>
        </Container>
      </Header>
      <Container>
        <Hero>
          <HeroText>
            <Heading
              size={{
                '@initial': 'md',
                '@tablet': 'xl',
              }}
              as="h1"
              weight="semibold"
            >
              Transform your life through the power of journaling
            </Heading>
            <Text
              size={{
                '@initial': 'lg',
                '@tablet': 'xl',
              }}
              weight="regular"
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
