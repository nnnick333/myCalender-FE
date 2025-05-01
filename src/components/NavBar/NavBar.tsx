import React from 'react';

import api from '../../api/axios';
import ProfileButton from '../ProfileButton/ProfileButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import pageIcon from '../../assets/icon.png';
import CreateEvent from '../FormModal/FormModalChildren/CreateEvent';

type NavBarProps = {
  openSideMenu: () => void;
  invokePopUp: (
    formTitle: string,
    formDescription: string,
    onSubmitFormProcedure: (data: any) => void,
    formData: React.ReactNode
  ) => void;
};

export default function NavBar({ openSideMenu, invokePopUp }: NavBarProps) {
  const createEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    api
      .post('/event', {
        color: formObject.color,
        description: formObject.description,
        ends_at: formObject.ends_at,
        is_public: formObject.is_public === 'true' ? true : false,
        latitude: formObject.latitude === '' ? null : formObject.latitude,
        longitude: formObject.longitude === '' ? null : formObject.longitude,
        name: formObject.name,
        recurrence: formObject.recurrence === '' ? null : formObject.recurrence,
        starts_at: formObject.starts_at,
      })
      .catch((err) => {
        console.error('Event Creation Error:', err);
      });
  };

  const routeHome = () => {
    window.location.href = '/home';
  };

  return (
    <div className="bg-white border-b border-gray-200 text-gray-800 h-16 flex items-center px-4">
      <HamburgerMenu onClick={openSideMenu} />
      <img
        src={pageIcon}
        alt="Page Icon"
        className="h-16 w-16 rounded-full cursor-pointer"
        onClick={routeHome}
      />
      <button
        onClick={() =>
          invokePopUp('Create Event', 'Create a new event for User', createEvent, <CreateEvent />)
        }
        className="ml-auto mr-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Create Event
      </button>
      <ProfileButton />
    </div>
  );
}
