import React from 'react';

interface SidebarProps {
  sideMenu?: boolean;
}

export default function Sidebar({ sideMenu = true }: SidebarProps) {
  return (
    <div
      className={`${
        sideMenu ? 'w-64' : 'w-0'
      } bg-blue-100 text-gray-800 h-full transition-all duration-300 overflow-hidden flex flex-col`}
    >
      {/* Logo / Header */}
      <div className="flex items-center justify-center h-16 bg-blue-200 border-b border-gray-300">
        <span className="text-lg font-bold text-gray-700">My Calendar</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        <a
          href="#"
          className="block px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-900 transition-colors"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-900 transition-colors"
        >
          Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-900 transition-colors"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded text-red-500 hover:bg-red-100 hover:text-red-700 transition-colors"
        >
          Logout
        </a>
      </nav>
    </div>
  );
}
