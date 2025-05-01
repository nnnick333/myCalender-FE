import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import defaultProfileIcon from '../../assets/defaultProfile.png';

type ProfileButtonProps = {
  className?: string;
};

export default function ProfileButton({ className }: ProfileButtonProps) {
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
  const { logout } = useAuth();
  const toggleProfileDropDown = () => {
    setOpenProfileDropDown((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <button
        onClick={toggleProfileDropDown}
        className={`rounded-full border-2 border-blue-300 bg-white p-1 hover:shadow-lg transition-shadow cursor-pointer ${openProfileDropDown}`}
      >
        <img
          src={defaultProfileIcon}
          alt="Profile Icon"
          className="h-10 w-10 rounded-full object-cover"
        />
      </button>
      {openProfileDropDown && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              onClick={() => {
                setOpenProfileDropDown(false);
                logout();
              }}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
