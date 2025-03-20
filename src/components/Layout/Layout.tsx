import { LayoutContainer, OutletContainer } from './Layout.styled';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

export type MainContextType = {
  handleAuthSubmit: () => void;
};

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthSubmit = () => {
    setIsLoggedIn(true);
  };

  return (
    <LayoutContainer>
      <Header isLoggedIn={isLoggedIn} />
      <OutletContainer>
        <Suspense fallback={null}>
          <Outlet context={{ handleAuthSubmit }} />
        </Suspense>
      </OutletContainer>
    </LayoutContainer>
  );
};

export default Layout;
