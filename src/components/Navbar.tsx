"use client"
import React, { ReactNode, useState, isValidElement } from 'react';

interface DropDownInterface {
  Label: string; // Corrected type here
  children: ReactNode
}

type ChildrenProps = {
  className?: string;
  onClick?: () => void;
};

const Dropdown = ({ Label, children }: DropDownInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="hover:text-gray-300 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {Label}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`absolute ${isOpen ? 'block' : 'hidden'} bg-gray-800 text-white rounded-md shadow-lg py-2 z-50 min-w-[200px] mt-2`}
      >
        {React.Children.map(children, (child) => 
          isValidElement(child) ? 
            React.cloneElement(child as React.ReactElement<ChildrenProps>, {
              className: "px-4 py-2 hover:bg-gray-700 text-left w-full block",
              onClick: () => {
                setIsOpen(false);
                if (child.props.onClick) {
                  child.props.onClick();
                }
              }
            }) 
            : child // Return the child as is if it's not a valid React element
        )}
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <svg width="30" height="30" viewBox="0 0 30 30" className="fill-white">
            <rect x="0" y="0" width="15" height="15" />
            <rect x="15" y="15" width="15" height="15" />
          </svg>
          <a href="/" className="font-bold text-lg">
            Database on Carbohydrate & Protein Mimetic
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <a href="/home" className="hover:text-gray-300">
              Home
          </a>

          <Dropdown Label="Mimetic">
            <a href="/carbohydrate">Carbohydrate</a>
            <a href="/proteins">Protein / Peptide</a>
          </Dropdown>

          <Dropdown Label="Therapeutics Action">
            <a href="/diabetes">Diabetes</a>
            <a href="/cancer">Cancer</a>
          </Dropdown>

          <a href="/about" className="hover:text-gray-300">
            About
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}