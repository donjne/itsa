import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { FaDesktop, FaUsers, FaChartLine, FaTools, FaCog } from 'react-icons/fa';
import Organizationome from './OrganizationHome';

const OrganizationLayout: React.FC = function () {
  // const location = useLocation();
  return (
    <>
      <div className="flex h-full">
        {/* Desktop Sidebar */}
        <div className="w-64 bg-gray-100 h-screen p-5 hidden lg:flex flex-col fixed">
          <div className="mb-8">
            <div className="bg-gray-200 w-full h-16 md:flex items-center justify-center hidden lg:flex">Image</div>
          </div>
          <nav className="flex-grow">
            <ul>
              <li className="mb-4"><a href="#" className="flex items-center space-x-3 text-gray-700"><FaDesktop /><span>Dashboard</span></a></li>
              <li className="mb-4"><a href="#" className="flex items-center space-x-3 text-gray-700"><FaDesktop /><span>Device Inventory</span></a></li>
              <li className="mb-4"><a href="#" className="flex items-center space-x-3 text-gray-700"><FaUsers /><span>Staffs</span></a></li>
              <li className="mb-4"><a href="#" className="flex items-center space-x-3 text-gray-700"><FaChartLine /><span>Reports</span></a></li>
              <li className="mb-4"><a href="#" className="flex items-center space-x-3 text-gray-700"><FaTools /><span>Help and Support</span></a></li>
              <li className="mb-4"><a href="#" className="flex items-center space-x-3 text-gray-700"><FaCog /><span>Settings</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 p-5 bg-gray-50 overflow-y-scroll h-full lg:ml-64">
          <Routes>
            <Route path="/" element={<Organizationome />} />
          </Routes>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-5 lg:hidden flex justify-around">
        <a href="#" className="flex flex-col items-center text-gray-700"><FaDesktop /><span className="text-xs">Dashboard</span></a>
        <a href="#" className="flex flex-col items-center text-gray-700"><FaDesktop /><span className="text-xs">Inventory</span></a>
        <a href="#" className="flex flex-col items-center text-gray-700"><FaUsers /><span className="text-xs">Staffs</span></a>
        <a href="#" className="flex flex-col items-center text-gray-700"><FaChartLine /><span className="text-xs">Reports</span></a>
        <a href="#" className="flex flex-col items-center text-gray-700"><FaTools /><span className="text-xs">Help</span></a>
        <a href="#" className="flex flex-col items-center text-gray-700"><FaCog /><span className="text-xs">Settings</span></a>
      </div>
    </>
  );
}

export default OrganizationLayout;
