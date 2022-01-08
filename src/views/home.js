import CryptoCards from '../components/CryptoCards'
import React from 'react'
import SmallCards from '../components/smallCards.js'
import arrow from "../assests/Arrow 3.svg";
import header_wallet from "../assests/header_wallet.svg";

const home = () => {
    return (
        <div >
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
        </div>
    )
}

export default home
