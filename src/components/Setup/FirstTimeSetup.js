import Footer from "../Footer";
import { Link } from "react-router-dom";
import React from "react";
import vector from "../../assests/vector.svg";
import wallet from "../../assests/wallet.svg";

const FirstTimeSetup = () => {
  return (
    <div>
      <div className="head_bg">
        <header>
          {/* left      */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrapitems-center justify-between h-16">
              <div>
                <p className="logo">effortless</p>
              </div>
              {/* search bar */}
              <div className="flex-grow-1 bg-gray-800 ">
                <button className="p-2 inline-flex items-center ">
                <span className="welcome_btn mr-2">
                  <svg
                    className="welcome_btn mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    
                    color="white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg></span>
                  <span>Create Wallet</span>
                </button>
                <button className="p-2 inline-flex items-center ">
                  <p className="welcome_btn_2 mr-2"></p>
                  <span>Fund Wallet</span>
                </button>
              </div>
              <div className="flex items-center space-x-4 justify-end text-gray-500 text-xl">
                Skip Tutorial
              </div>{" "}
            </div>
          </div>
        </header>
        {/* header body  */}
      </div>
      {/* welcome body    */}

      <div className="flex flex-wrap justify-center items-center px-20 py-20">
        <div className="lg:w-3/5 sm:w-full flex flex-col lg:px-20">
          <img alt="wallet" src={wallet} className="w-64" />
          <p className="text_color lg:text-5xl sm:text-sm">
            Set up a wallet to store crypto
          </p>
          <div className="flex mt-4">
            <img alt="vecter" src={vector} className="vecter_yellow" />
            <h3 className="text_color ml-2">
              Only you have access to your funds{" "}
            </h3>{" "}
          </div>{" "}
          <div className="flex mt-4">
            <img alt="vecter2" src={vector} className="vecter_yellow" />
            <h3 className="text_color ml-2">
              You can use your crypto with any Dapp
            </h3>{" "}
          </div>{" "}
          <div className="flex mt-4">
            <img alt="vecter3" src={vector} className="vecter_yellow" />
            <h3 className="text_color ml-2">You can always switch wallets</h3>{" "}
          </div>{" "}
        </div>

        <div className="lg:w-2/5 sm:w-full ">
            <div className="welcome_cards flex flex-col px-7 py-7 lg:w-3/4 sm:w-full">          <p className="text_color text-xl font-bold welcome_border">
            Choose your Wallet
          </p>

          {/* smily   */}
          <div className="flex flex-wrap p-3 pt-5 justify-between items-center">
            <div className="flex">
              <div className="key">
                {/* icon    */}

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
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                {/* text    */}
                <p className="welcome_first_text text-sm">
                  Username & password
                </p>
                <p className="welcome_second_text text-xs">
                  5min setup • Matcha exclusive
                </p>
              </div>
            </div>
            <div>
              {/* arrow nev   */}
              <Link to="bitski">
              <button className="p-2 inline-flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="welcome_first_text"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button></Link>
            </div>
          </div>
          <div className="flex flex-wrap p-3 pt-5 justify-between items-center">
            <div className="flex">
              <div className="key">
                {/* icon    */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                {/* text    */}
                <p className="welcome_first_text text-sm">Mobile application</p>
                <p className="welcome_second_text text-xs">
                  8min setup - Works in most apps
                </p>
              </div>
            </div>
            <div>
              {/* arrow nev   */}
              <Link to="argantapp">
              <button className="p-2 inline-flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="welcome_first_text"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button></Link>
            </div>
          </div>
          <div className="flex flex-wrap p-3 pt-5 justify-between items-center">
            <div className="flex">
              <div className="key">
                {/* icon    */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="ml-3">
                {/* text    */}
                <p className="welcome_first_text text-sm">
                  Browser application
                </p>
                <p className="welcome_second_text text-xs">
                  8min setup - Works everywhere
                </p>
              </div>
            </div>
            <div>
              {/* arrow nev   */}
              <Link to="metamask">
              <button className="p-2 inline-flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="welcome_first_text"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button></Link>
            </div>
          </div>
        </div>
      </div></div>
      <Footer/>
    </div>
  );
};

export default FirstTimeSetup;
