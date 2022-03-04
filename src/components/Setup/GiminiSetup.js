import Footer from "../Footer";
import React from "react";
import argent from "../../assests/argent.svg";
import vector from "../../assests/vector.svg";
import wallet from "../../assests/wallet.svg";

const GiminiSetup = () => {
  return (
    <div>
      <div className="head_bg">
        <header>
          {/* left      */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between h-16">
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
            <img alt="vecter2" src={vector} className="vecter_yellow" />
            <h3 className="text_color ml-2">
              Only you have access to your funds{" "}
            </h3>{" "}
          </div>{" "}
          <div className="flex mt-4">
            <img alt="vecter3" src={vector} className="vecter_yellow" />
            <h3 className="text_color ml-2">
              You can use your crypto with any Dapp
            </h3>{" "}
          </div>{" "}
          <div className="flex mt-4">
            <img alt="vecter4" src={vector} className="vecter_yellow" />
            <h3 className="text_color ml-2">You can always switch wallets</h3>{" "}
          </div>{" "}
        </div>

        <div className="lg:w-2/5 sm:w-full ">
            <div className="welcome_cards flex flex-col px-7 py-7 lg:w-3/4 sm:w-full">          <p className="text_color text-xl font-bold welcome_border">
            Argent is a simple, self 
custody Ether wallet
          </p>

          {/* smily   */}
          <div className="welcome_border flex flex-wrap p-3 pt-5 justify-between items-center">
            <div className="flex">
            <div>
                  {/* icon    */}
                  <img alt="argent" src={argent} className="argent" />
                </div>
              <div className="ml-3">
                {/* text    */}
                <p className="welcome_first_text text-sm">
                Continue with Argent
                </p>
                <p className="welcome_second_text text-xs">
                8min setup - Works in most apps
                </p>
              </div>
            </div>
            <div>
              {/* arrow nev   */}
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
              </button>
            </div>
          </div>
          <div className="flex flex-wrap p-3 pt-5 justify-between items-center">
            <div className="flex">
                </div><div>
                  {/* icon    */}
                  
              <div className="ml-3">
                {/* text    */}
                <p className="welcome_first_text text-xl">
               Choose another wallet
                </p>
               
              </div>
            </div>
            <div>
              {/* arrow nev   */}
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
              </button>
            </div>
          </div>
        </div>
      </div></div>
      <Footer/>
    </div>
  );
};

export default GiminiSetup;
