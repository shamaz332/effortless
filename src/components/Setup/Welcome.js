import Footer from "../Footer";
import { Link } from "react-router-dom";
import React from "react";
import binance_wel from "../../assests/binance_wel.svg";
import coinbase from "../../assests/coinbase.svg";
import gimini from "../../assests/gimini.svg";
import smily from "../../assests/smily.svg";
import wallet from "../../assests/wallet.svg";

const Welcome = () => {
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
          <p className="text_color lg:text-3xl sm:text-sm">Welcome to DeFi</p>
          <p className="text_color ">
            We will guide you through the process of creating a wallet and
            funding your account, so you can start trading in no time!
          </p>
        </div>

        <div className="lg:w-2/5 sm:w-full ">
          <div className="lg:w-3/4 sm:w-full welcome_cards flex flex-col px-7 py-7">
          <p className="text_color text-xl font-bold">Choose your path</p>

          <div className="welcome_border">
            {/* smily   */}
            <div className="flex flex-wrap p-2 justify-between items-center">
              <div className="flex">
                <div>
                  {/* icon    */}
                  <img alt="smily" src={smily} className="smily" />
                </div>
                <div className="ml-3">
                  {/* text    */}
                  <p className="welcome_first_text text-sm">
                    It’s my first time
                  </p>
                  <p className="welcome_second_text text-xs">
                    You’ll set up a wallet
                  </p>
                </div>
              </div>
              <div>
                {/* arrow nev   */}
                <Link to="firsttime">
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
            </div>{" "}
          </div>
          {/* coinbase */}

          <div className="welcome_border">
            <div className="flex flex-wrap p-2 justify-between items-center">
              <div className="flex">
                <div>
                  {/* icon    */}
                  <img alt="coinbase" src={coinbase} className="smily_other" />
                </div>
                <div className="ml-3">
                  {/* text    */}
                  <p className="welcome_first_text text-sm">Coin base</p>
                  <p className="welcome_second_text text-xs">
                    Optimised experience{" "}
                  </p>
                </div>
              </div>
              <div>
                {/* arrow nev   */}
                <Link to="coinbase">
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

          {/* gimini    */}

          <div className="welcome_border">
            <div className="flex flex-wrap p-2 justify-between items-center">
              <div className="flex">
                <div>
                  {/* icon    */}
                  <img alt="gimini" src={gimini} className="smily_other" />
                </div>
                <div className="ml-3">
                  {/* text    */}
                  <p className="welcome_first_text text-sm">Gimini</p>
                  <p className="welcome_second_text text-xs">
                    Optimised experience{" "}
                  </p>
                </div>
              </div>
              <div>
                {/* arrow nev   */}
                <Link to="gimini">
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
          {/* binance   */}
          <div className="welcome_border">
            <div className="flex flex-wrap p-2 justify-between items-center">
              <div className="flex">
                <div>
                  {/* icon    */}
                  <img alt="binance" src={binance_wel} className="smily_other" />
                </div>
                <div className="ml-3">
                  {/* text    */}
                  <p className="welcome_first_text text-sm">
                    It’s my first time
                  </p>
                  <p className="welcome_second_text text-xs">
                    Optimised experience{" "}
                  </p>
                </div>
              </div>
              <div>
                {/* arrow nev   */}
                <Link to="binance">
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
        </div>
      </div></div> <Footer/>
    </div>
  );
};

export default Welcome;
