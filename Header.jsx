import React, { useState } from 'react';
import logo from '../../src/assets/logo.svg';
import arrowdown from '../assets/arrowdown.svg';
import arrowup from '../assets/arrowup.svg';
import iconcalendar from '../assets/iconcalendar.svg';
import iconplanning from '../assets/iconplanning.svg';
import iconreminders from '../assets/iconreminders.svg';
import icontodo from '../assets/icontodo.svg';

const Header = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="flex items-center justify-between p-6 bg-white">
     
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

   
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

     
      <nav
        className={`lg:flex items-center space-x-8 ${
          menuOpen ? 'block' : 'hidden'
        } lg:block`}
      >
       
        <div className="relative">
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setFeaturesOpen(!featuresOpen)}
          >
            <p
              className="text-[16px] font-medium"
              style={{ color: 'hsl(0, 0%, 41%)' }}
            >
              Features
            </p>
            <img
              src={featuresOpen ? arrowup : arrowdown}
              alt="Toggle Icon"
              className="h-2"
            />
          </div>
          {featuresOpen && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg">
              <ul className="py-2" style={{ color: 'hsl(0, 0%, 41%)' }}>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <img src={icontodo} alt="Todo Icon" className="mr-2 h-5 w-5" />
                  Todo List
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <img
                    src={iconcalendar}
                    alt="Calendar Icon"
                    className="mr-2 h-5 w-5"
                  />
                  Calendar
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <img
                    src={iconreminders}
                    alt="Reminders Icon"
                    className="mr-2 h-5 w-5"
                  />
                  Reminders
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <img
                    src={iconplanning}
                    alt="Planning Icon"
                    className="mr-2 h-5 w-5"
                  />
                  Planning
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Company */}
        <div className="relative">
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setCompanyOpen(!companyOpen)}
          >
            <p
              className="text-[16px] font-medium"
              style={{ color: 'hsl(0, 0%, 41%)' }}
            >
              Company
            </p>
            <img
              src={companyOpen ? arrowup : arrowdown}
              alt="Toggle Icon"
              className="h-2"
            />
          </div>
          {companyOpen && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg">
              <ul className="py-2" style={{ color: 'hsl(0, 0%, 41%)' }}>
                <li className="px-4 py-2 hover:bg-gray-100">History</li>
                <li className="px-4 py-2 hover:bg-gray-100">Our Team</li>
                <li className="px-4 py-2 hover:bg-gray-100">Blog</li>
              </ul>
            </div>
          )}
        </div>

        <p
          className="text-[16px] font-medium cursor-pointer"
          style={{ color: 'hsl(0, 0%, 41%)' }}
        >
          Careers
        </p>
        <p
          className="text-[16px] font-medium cursor-pointer"
          style={{ color: 'hsl(0, 0%, 41%)' }}
        >
          About
        </p>
      </nav>

    
      <div className="flex items-center space-x-4 hidden lg:flex">
        <button
          className="px-4 py-1 rounded-lg font-medium hover:bg-gray-100"
          style={{ color: 'hsl(0, 0%, 41%)' }}
        >
          Login
        </button>
        <button
          className="px-4 py-1 rounded-lg font-medium hover:bg-gray-100"
          style={{ color: 'hsl(0, 0%, 41%)' }}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
