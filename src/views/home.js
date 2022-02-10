import CryptoCards from '../components/CryptoCards'
import Navbar from '../components/Navbar'
import React from 'react'
import SmallCards from '../components/smallCards.js'
import arrow from "../assests/Arrow 3.svg";
import header_wallet from "../assests/header_wallet.svg";

const home = () => {
    return (
        <div >
           <Navbar/>
              <div className="header_bg h-[400px] sm:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[450px]">
        <div className="mt-20 w-full text-center header_body">
          <p className="font-bold lg:text-3xl sm:text-xl text-center">
            Not sure where to go? Perfect
          </p>
          <p className="md:text-2xl p-10 sm:text-sm">
            effortless finds you the best prices across exchanges and combines
            them into one trade.
          </p>

          <button className="p-2 wallet_btn inline-flex items-center">
            <img
            alt="header_wallet"
              className="hidden md:flex header_wallet "
              src={header_wallet}
            />
            <span className="header_wallet_text md:text-4xl sm:text-3xl">
              Start Trading
            </span>
            <img
            alt="arrow"
              className="hidden md:flex pr-2 header_wallet_arrow"
              src={arrow}
            />
          </button><br/>
      <a href="/" className="text-center wallet_line">Buy crypto with credit or debit card →</a>
        
        </div>
        
      </div>
      
            <CryptoCards/>
            <SmallCards/>
{/* //footer on home page    */}
<footer className="footer-1 bg-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          
<div className="sm:flex sm:flex-wrap justify-center sm:-mx-4 md:py-4">
            <div className="px-10 sm:w-1/2 md:w-1/2 xl:w-1/2">
              <h5 className="text-4xl font-bold mb-6 footer_heading">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Getting Started
                  </a>
                </li>
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Frequently asked questions
                  </a>
                </li>
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Tokens
                  </a>
                </li>
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Wallets
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/2 xl:w-1/2 mt-8 sm:mt-0">
              <h5 className="text-4xl font-bold mb-6 footer_heading">Community</h5>
              <ul className="list-none footer-links">
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Getting Started
                  </a>
                </li>
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Frequently asked questions
                  </a>
                </li>
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Tokens
                  </a>
                </li>
                <li className="mb-8">
                  <a href="/" className="text-2xl text_color">
                    Wallets
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div></footer>

        </div>
    )
}

export default home
