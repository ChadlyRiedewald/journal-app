import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'stitches.config';
import { Flex } from 'components/layout';
import { Button } from 'components/button';
import { Sidebar } from './Sidebar';
import DesktopOnly from 'components/desktopOnly';
import MobileOnly from 'components/mobileOnly';
import { ReactComponent as Logo } from 'assets/logo-text.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu-01.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/x-close.svg';

const Topbar = styled('div', {
  w: '$full',
  h: 72,
  bgColor: '$gray1',
  borderBottom: 'solid 1px $gray6',
  pos: 'fixed',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: 16,

  '@desktop': {
    w: 'calc(100% - 280px)',
    flexDirection: 'row-reverse',
    h: 64,
    ml: 280,
  },
});

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Topbar>
        <MobileOnly>
          <Logo />
        </MobileOnly>
        <MobileOnly>
          {isOpen ? (
            <CloseIcon onClick={toggleMenu} />
          ) : (
            <MenuIcon onClick={toggleMenu} />
          )}
        </MobileOnly>
        <DesktopOnly>
          <Button size="md" variant="primary" iconLeading={<PlusIcon />}>
            New entry
          </Button>
        </DesktopOnly>
      </Topbar>
      <MobileOnly>{isOpen && <Sidebar />}</MobileOnly>
      <DesktopOnly>
        <Sidebar />
      </DesktopOnly>
      <Flex
        direction="column"
        css={{
          pt: 72,
          h: '100vh',
          bgColor: '$gray2',
          '@desktop': {
            ml: 280,
            pt: 64,
          },
        }}
      >
        <Outlet />
      </Flex>
    </>
  );
};

export default Dashboard;
