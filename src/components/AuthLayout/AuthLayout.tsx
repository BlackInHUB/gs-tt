import { Suspense } from 'react';
import { AuthOutletContainer, LayoutContainer } from './AuthLayout.styled';
import { Outlet } from 'react-router-dom';
import AuthNavBar from '../AuthNavBar/AuthNavBar';

const AuthLayout = () => {
  return (
    <LayoutContainer>
      <AuthOutletContainer>
        <AuthNavBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </AuthOutletContainer>
    </LayoutContainer>
  );
};

export default AuthLayout;
