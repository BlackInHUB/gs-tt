import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';
import { lazy } from 'react';

const AuthLayout = lazy(() => import('./components/AuthLayout/AuthLayout'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="authentication" element={<AuthLayout />}>
          <Route index path="register" />
          <Route path="login" />
        </Route>
        <Route path="orders" />
        <Route path="order/:id" />
      </Route>
    </Routes>
  );
};

export default App;
