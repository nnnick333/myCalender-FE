import React from 'react';

import ProfileButton from '../ProfileButton/ProfileButton';

import pageIcon from '../../assets/icon.png';

export default function NavBar() {
  return (
    <div className="bg-white border-b border-gray-200 text-gray-800 h-16 flex items-center px-4">
      <img src={pageIcon} alt="Page Icon" className="h-16 w-16 rounded-full" />
      <ProfileButton className="ml-auto" />
    </div>
  );
}
