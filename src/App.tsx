import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NoPage from './components/NoPage';
import Settings from './pages/Settings';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Settings />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
