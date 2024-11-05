import React, { ReactNode, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import SmallScreenSidebar from '../components/sidebar/SmallScreenSidebar';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <SmallScreenSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
