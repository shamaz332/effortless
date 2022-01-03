import "../styles/global.css";

import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

import { Transition } from "@headlessui/react";
import arrow from "../assests/Arrow 3.svg";
import header_wallet from "../assests/header_wallet.svg";

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
              <button className="p-2 nav_btn inline-flex items-center">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home</span>
              </button>
              <button className="p-2 inline-flex items-center">
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
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                <span>Trade</span>
              </button>
              <div className="nav_pop cursor-pointer flex items-center space-x-2 rounded-full p-2">
                <MenuIcon className="h-6 " />
                <UserCircleIcon className="h-6" />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
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
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
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

      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <div className="absolute mt-20 w-full text-center header_body">
          <h3 class="text-blue-600 font-bold text-3xl text-center">
            Not sure where to go? Perfect
          </h3>
          <p className="md:text-3xl p-10 sm:text-small">
            effortless finds you the best prices across exchanges and combines
            them into one trade.
          </p>

          <button className="p-2 wallet_btn inline-flex items-center">
            <img
              className="hidden md:flex header_wallet "
              src={header_wallet}
            />
            <span className="header_wallet_text md:text-4xl sm:text-3xl">
              Start Trading
            </span>
            <img
              className="hidden md:flex pr-2 header_wallet_arrow"
              src={arrow}
            />
          </button><br/>
      <a href="/" class="text-center wallet_line">Buy crypto with credit or debit card →</a>
        
        </div>
        
      </div>
      
    </div>
  );
}

export default Nav;