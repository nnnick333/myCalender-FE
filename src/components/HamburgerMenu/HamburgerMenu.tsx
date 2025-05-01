import React from 'react';

type HamburgerMenuProps = {
  onClick: () => void;
};
export default function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  return (
    <div>
      <button
        type="button"
        title="Open Menu"
        aria-label="Open Menu"
        className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer hover:bg-gray-200 rounded-full"
        onClick={onClick}
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>
    </div>
  );
}
