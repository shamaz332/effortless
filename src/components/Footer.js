import "../styles/global.css";

import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
        <div class="container mx-auto px-4">
          <div class="sm:flex sm:flex-wrap justify-center sm:-mx-4 md:py-4">
            <div class="px-10 sm:w-1/2 md:w-1/2 xl:w-1/2">
              <h5 class="text-4xl font-bold mb-6 footer_heading">Help</h5>
              <ul class="list-none footer-links">
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Getting Started
                  </a>
                </li>
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Frequently asked questions
                  </a>
                </li>
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Tokens
                  </a>
                </li>
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Wallets
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/2 xl:w-1/2 mt-8 sm:mt-0">
              <h5 class="text-4xl font-bold mb-6 footer_heading">Community</h5>
              <ul class="list-none footer-links">
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Getting Started
                  </a>
                </li>
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Frequently asked questions
                  </a>
                </li>
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Tokens
                  </a>
                </li>
                <li class="mb-8">
                  <a href="#" class="text-2xl text_color">
                    Wallets
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sm:flex justify-between sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div class="sm:w-full px-4 md:w-1/6">
              <div>
                <p className="logo">effortless</p>
              </div>
            </div>

            <div class="list-none flex justify-between sm:w-full px-4 md:w-1/2">
              <a href="#" class="text-2xl text_color">
                Buy Crypto
              </a>
              <a href="#" class="text-2xl text_color">
                Blog
              </a>
              <a href="#" class="text-2xl text_color">
                Help
              </a>
              <a href="#" class="text-2xl text_color">
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
