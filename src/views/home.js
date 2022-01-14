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
              <div className="header_bg relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
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
      
            <CryptoCards/>
            <SmallCards/>
{/* //footer on home page    */}
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
          </div></footer>

        </div>
    )
}

export default home
