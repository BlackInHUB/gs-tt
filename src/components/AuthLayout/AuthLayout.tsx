import { Suspense } from 'react';
import { AuthOutletContainer, LayoutContainer } from './AuthLayout.styled';
import { Outlet, useOutletContext } from 'react-router-dom';
import AuthNavBar from '../AuthNavBar/AuthNavBar';
import { MainContextType } from '../Layout/Layout';

export type UserAuthStateType = {
  email: string;
  password: string;
  confirm: string;
};

const AuthLayout = () => {
  const { handleAuthSubmit } = useOutletContext<MainContextType>();

  return (
    <LayoutContainer>
      <AuthOutletContainer>
        <AuthNavBar />
        <Suspense fallback={null}>
          <Outlet context={{ handleAuthSubmit }} />
        </Suspense>
      </AuthOutletContainer>
    </LayoutContainer>
  );
};

export default AuthLayout;
