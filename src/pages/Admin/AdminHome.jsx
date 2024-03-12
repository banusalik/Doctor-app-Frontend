import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import Navbar from '../../components/Admin/Navbar';
import { RiMenu2Fill } from 'react-icons/ri';

const AdminHome = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };
  return (
    <div className="flex h-screen">
      {showSidebar ? <Sidebar /> : ''}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="bg-adminBG h-[100vh]">{children}</div>
      </div>
    </div>
  );
};

export default AdminHome;
