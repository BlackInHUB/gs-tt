import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';
import { lazy } from 'react';

const AuthLayout = lazy(() => import('./components/AuthLayout/AuthLayout'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="authentication" element={<AuthLayout />}>
          <Route index path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="orders" />
        <Route path="order/:id" />
      </Route>
    </Routes>
  );
};

export default App;
