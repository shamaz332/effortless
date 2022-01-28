import "../styles/global.css";

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-1 bg-gray-100 py-8 sm:py-12 border-t">
        <div className="container mx-auto px-4">
          

          <div className="sm:flex justify-between sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 ">
            <div className="sm:w-full px-4 md:w-1/6">
              <div>
                <p className="logo">effortless</p>
              </div>
            </div>

            <div className="list-none flex justify-between sm:w-full px-4 md:w-1/2">
              <a href="/" className="text-2xl text_color">
                Buy Crypto
              </a>
              <a href="/" className="text-2xl text_color">
                Blog
              </a>
              <a href="/" className="text-2xl text_color">
                Help
              </a>
              <a href="/" className="text-2xl text_color">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
