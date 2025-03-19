import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
