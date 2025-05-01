type BasePopoverFormProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function BasePopoverForm({
  isOpen = true,
  onClose,
  title,
  children,
  onSubmit,
}: BasePopoverFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-center items-center">
      <div
        className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-md z-50"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
      >
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        <form onSubmit={onSubmit}>
          {children}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
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

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer hover:bg-gray-200 rounded-full p-1"
        >
          ✖️
        </button>
      </div>
    </div>
  );
}
