import Footer from "./Footer";
import React from "react";
import wallet from "../assests/wallet.svg";

const Register = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      <div className="lg:w-2/5 sm:w-full flex flex-col items-center">
        <img alt="wallet" src={wallet} className="w-64" />
        <p className="text_color lg:text-3xl sm:text-sm">New Here ?</p>
        <p className="text_color px-20 text-center">
          Welcome to DeFi! Create a crypto wallet to start trading on Matcha.
        </p>
        <button
          type="button"
          className="m-2 get_started w-40 text-center py-2 bg-white text-xl font-medium text_color "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Get Started
        </button>{" "}
      </div>
      <div className="border-l-2 hidden lg:block flex justify-center text-center h-64 text_color"></div>

      <div className="lg:w-2/5 sm:w-full flex flex-col justify-center items-center">
        <button
          type="button"
          className="m-2 register_btn w-full rounded-md text-center py-2 bg-white text-xl font-medium text_color "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Connect mobile wallet{" "}
        </button>{" "}
        <button
          type="button"
          className="m-2 register_btn w-full rounded-md text-center py-2 bg-white text-xl font-medium text_color "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Connect colnebase wallet{" "}
        </button>{" "}
        <button
          type="button"
          className="m-2 register_btn w-full rounded-md text-center py-2 bg-white text-xl font-medium text_color "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
       Connect Biskti wallet{" "}
        </button>
      </div> <Footer/>
    </div>
  );
};

export default Register;
