import "../styles/global.css";

import { Link, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";

import homeIcom from "../assests/home_icon.svg"
import tradeIcon from "../assests/trade icon 1.svg"

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="head_bg">
      <header>
        {/* left      */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <p className="logo">effortless</p>
            </div>
            {/* search bar */}
            <div className="flex-grow-1 bg-gray-800 hidden md:block">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <input
                  type="text"
                  name="q"
                  className="searchInput py-2 text-sm text-white bg-transparent pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search by token name symbol or address"
                  autoComplete="off"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                  <button className="p-1 focus:outline-none focus:shadow-outline">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 justify-end text-gray-500 ">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  background: isActive ? "#F1F2EC" : "",
                  boxShadow: isActive
                    ? "-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(0, 0, 0, 0.25)"
                    : "",
                  borderRadius: isActive ? " 8px" : "",
                })}
              >
                <button className="p-2 nav_btn active inline-flex items-center">
                 <img src={homeIcom} alt="gome icom" className="w-5 mr-1"/>
                  <span>Home</span>
                </button>
              </NavLink>

              <NavLink
            to="/coindetail"
            style={({ isActive }) => ({
              background: isActive ? "#F1F2EC" : "",
              boxShadow: isActive
                ? "-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(0, 0, 0, 0.25)"
                : "",
              borderRadius: isActive ? " 8px" : "",
            })}
          >
                <button className="p-2 nav_btn inline-flex items-center">
                <img src={tradeIcon} alt="gome icom" className="w-5 mr-1"/>
                  <span>Trade</span>
                </button>
              </NavLink>

              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <div className="nav_pop cursor-pointer flex items-center space-x-2 rounded-full p-2">
                      <MenuIcon className="h-6 " />
                      <UserCircleIcon className="h-6" />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="flex flex-col origin-top-right absolute right-0 mt-2 menu_home">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/welcome"> 
                        <button className="cursor-pointer menu_btn mb-5" >
                          Connect wallet
                        </button></Link>
                      )}
                    </Menu.Item>
                    <div className="border-b-2 text_color"></div>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="/" className="mt-4 mb-2">
                          Request New features
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="/" className="mt-2 mb-2">
                          Buy Crypto wiith Flat
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="/" className="mt-2 mb-2">
                          Help Centre
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="/" className="mt-2 mb-2">
                          Swiitch to Dark Mode
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>{" "}
          </div>
        </div>
        <div className="mr-2 flex justify-end align-middle md:hidden -mt-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Trade
                </a>
              </div>
            </div>
          )}
        </Transition>
      </header>
      {/* header body  */}
    </div>
  );
}

export default Nav;
