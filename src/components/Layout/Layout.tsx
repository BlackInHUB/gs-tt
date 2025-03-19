import { LayoutContainer, OutletContainer } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </OutletContainer>
    </LayoutContainer>
  );
};

export default Layout;
