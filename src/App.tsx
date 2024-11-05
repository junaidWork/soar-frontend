import Dashboard from './components/dashboard/Dashboard';
import NoPage from './components/NoPage';
import Settings from './components/settings/Settings';
import MainLayout from './layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
