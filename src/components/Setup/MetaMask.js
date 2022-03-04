import Footer from "../Footer";
import React from "react";
import metamaskpic from "../../assests/metamaskpic.svg";
import metamasksmll from "../../assests/metamasksmll.png";

const MetaMask = () => {
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
        <button className="bitski_btn w-60">Browse extension</button>
          <p className="text_color lg:text-4xl mt-5 sm:text-sm">
          Get MetaMask
         </p>
          <div className="flex mt-4">
            <h3 className="text_color ml-2">
            MetaMask lets you to store and send your
tokens from your browser extension. 
Only you have access to your accounts and data
            </h3>{" "}
          </div>{" "}
          <img alt="metamaskpic" src={metamaskpic} className="w-1/2 mt-10" />

      
        </div>

        <div className="lg:w-2/5 sm:w-full ">
          <div className="welcome_cards flex flex-col justify-center items-center px-7 py-7 lg:w-3/4 sm:w-full">
          <img alt="metamasksmll2" src={metamasksmll} className="w-10" />

            <div className="welcome_border">
            <p className="text_color text-xl text-center font-bold">
            Download MetaMask

            </p>
            <p classNam="text-center small_text">We will redirect you to 
the external flow</p></div>
            {/* smily   */}
         
            <button
                  type="button"
                  className="m-2 review_order_btn w-full rounded-md text-center py-2 bg-white text-xl font-medium text_color "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                 Download on Chrome Store
                </button>
                <button
                  type="button"
                  className="m-2 review_order_btn w-full rounded-md text-center py-2 bg-white text-xl font-medium text_red "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                Please authorize effortless
 to access your wallet.
                </button>
          </div>
        </div>
      </div> <Footer/>
    </div>
  );
};

export default MetaMask;
