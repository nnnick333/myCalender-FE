import React from 'react';
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';

type FormModelProps = {
  isPopoverOpen: boolean;
  setIsPopoverOpen: (bool: boolean) => void;
  formTitle: string;
  formDescription: string;
  submitFormProcedure?: (data: any) => void;
  children: React.ReactNode;
};
export default function FormModal({
  isPopoverOpen,
  setIsPopoverOpen,
  formTitle = '{Title}',
  formDescription = '{Description}',
  submitFormProcedure,
  children,
}: FormModelProps) {
  return (
    <Dialog open={isPopoverOpen} onClose={() => setIsPopoverOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="max-w-lg w-full space-y-4 border bg-white p-6 rounded-lg shadow-md">
          <DialogTitle className="text-lg font-bold">{formTitle}</DialogTitle>
          <Description className="text-sm text-gray-500">{formDescription}</Description>
          <form
            onSubmit={(e) => {
              if (submitFormProcedure) {
                submitFormProcedure(e);
              }

              setIsPopoverOpen(false);
            }}
          >
            {children}
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsPopoverOpen(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
