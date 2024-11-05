import React from 'react';
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
