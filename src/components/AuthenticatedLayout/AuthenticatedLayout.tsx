import React, { useState } from 'react';
import { AuthenticatedContextProvider } from '../../contexts/AuthenticatedContext';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import FormModal from '../FormModal/FormModal';

type AuthenticatedLayoutProps = {
  children: React.ReactNode;
};

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const [sideMenu, setSideMenu] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [formContent, setFormContent] = useState<React.ReactNode | undefined>(undefined);
  const [submitFormProcedure, setSubmitFormProcedure] = useState<(data: any) => void>();
  const [formTitle, setFormTitle] = useState<string>('{Title}');
  const [formDescription, setFormDescription] = useState<string>('{Description}');

  const openSideMenu = () => {
    setSideMenu((prev) => !prev);
  };

  const invokePopUp = (
    formTitle: string,
    formDescription: string,
    submitFormProcedure: (data: any) => void,
    formContent: React.ReactNode | undefined
  ) => {
    setFormTitle(formTitle);
    setFormDescription(formDescription);
    setSubmitFormProcedure(() => submitFormProcedure);
    setFormContent(formContent);
    setIsPopoverOpen(true);
  };

  return (
    <AuthenticatedContextProvider>
      <div className="flex flex-col h-screen">
        <NavBar openSideMenu={openSideMenu} invokePopUp={invokePopUp} />
        <div className="flex flex-1">
          <Sidebar sideMenu={sideMenu} />
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
      </div>

      <FormModal
        isPopoverOpen={isPopoverOpen}
        setIsPopoverOpen={setIsPopoverOpen}
        formTitle={formTitle}
        formDescription={formDescription}
        submitFormProcedure={submitFormProcedure}
        children={formContent}
      />
    </AuthenticatedContextProvider>
  );
}
