import "../styles/global.css";

import React from "react";
import bitcoin from "../assests/bitcoin.svg";
import btc_icon from "../assests/btc_icon.svg";
import egg from "../assests/egg.svg";
import ethLogo from "../assests/ethLogo.svg";
import firstCardicon from "../assests/firstCardicon.png";
import secondcardIcon from "../assests/secondcardIcon.svg";
import thirdCardMainIcon from "../assests/thirdCardMainIcon.svg";
import thirdCardicon from "../assests/thirdCardIcon.svg";
import unicorn from "../assests/unicorn.svg";

const CryptoCards = () => {
  return (
    <div className="cards_container">
     <div className="container mx-auto px-4 md:px-12">
    <div className="flex flex-wrap justify-center -mx-2 lg:-mx-1">
          <div className="m-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-60 crypto_card1">
            <article className="overflow-hidden rounded-lg">
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                ETH
                <span className="float-right p-1 rounded-full bg-firstCardBg">
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className=" h-5 w-5"
                      src={firstCardicon}
                    />
                  </a>
                </span>
              </h2>
              <h2 className="font-bold text-lg pl-6 md:pl-6"> $4, 721.63 </h2>
              <p className="font-bold pl-6 md:pl-6"> +2.87 % </p>
              <header className="flex items-center justify-center">
                <img alt="ethLogo" className="h-40 w-40" src={ethLogo} />
              </header>
            </article>
          </div>

          {/* seconf card  */}
          <div className="test b-30 m-6 px-1 mb-10 w-full md:w-1/2 lg:px-4 lg:w-64 crypto_card2">
            <article className="overflow-hidden rounded-lg">
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                ETH
                <span className="float-right p-1 rounded-full bg-secondCardBg">
                  <a href="/">
                    <img
                      alt="Placeholder2"
                      className=" h-5 w-5"
                      src={secondcardIcon}
                    />
                  </a>
                </span>
              </h2>
              <h2 className="font-bold text-lg pl-6 md:pl-6"> $4, 721.63 </h2>
              <p className="font-bold pl-6 md:pl-6"> +2.87 % </p>
              <header className="flex items-center justify-center">
                <img alt="btc_icon" className="h-40 w-40" src={btc_icon} />
              </header>
            </article>
          </div>
          {/* third card    */}
          <div className="m-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-60 crypto_card3">
            <article className="overflow-hidden rounded-lg">
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                ETH
                <span className="float-right p-1 rounded-full bg-thirdCardBg">
                  <a href="/">
                    <img
                      alt="Placeholder3"
                      className=" h-5 w-5"
                      src={thirdCardicon}
                    />
                  </a>
                </span>
              </h2>
              <h2 className="font-bold text-lg pl-6 md:pl-6"> $4, 721.63 </h2>
              <p className="font-bold pl-6 md:pl-6"> +2.87 % </p>
              <header className="flex items-center justify-center">
                <img alt="ethLogo4" className="h-40 w-40" src={thirdCardMainIcon} />
              </header>
            </article>
          </div>
        </div>
        
      </div>
<div className="text-center font-normal text-2xl ">
  <h3 className="text-textClr hidden md:block">
Ethereum, Binance, Polygon tokens
</h3>
</div>
<div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap justify-center -mx-2 lg:-mx-1">
          <div className="m-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-60 crypto_card4">
            <article className="overflow-hidden rounded-lg">
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                ETH
                <span className="float-right p-1 rounded-full bg-firstCardBg">
                  <a href="/">
                    <img
                      alt="Placeholder4"
                      className=" h-5 w-5"
                      src={firstCardicon}
                    />
                  </a>
                </span>
              </h2>
              <h2 className="font-bold text-lg pl-6 md:pl-6"> $4, 721.63 </h2>
              <p className="font-bold pl-6 md:pl-6"> +2.87 % </p>
              <header className="flex items-center justify-center">
                <img alt="ethLogo2" className="h-40 w-40" src={unicorn} />
              </header>
            </article>
          </div>

          {/* fifth card  */}
          <div className="test b-30 m-6 px-1 mb-10 w-full md:w-1/2 lg:px-4 lg:w-64 crypto_card5">
            <article className="overflow-hidden rounded-lg">
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                ETH
                <span className="float-right p-1 rounded-full bg-secondCardBg">
                  <a href="/">
                    <img
                      alt="Placeholder6"
                      className=" h-5 w-5"
                      src={secondcardIcon}
                    />
                  </a>
                </span>
              </h2>
              <h2 className="font-bold text-lg pl-6 md:pl-6"> $4, 721.63 </h2>
              <p className="font-bold pl-6 md:pl-6"> +2.87 % </p>
              <header className="flex items-center justify-center">
                <img alt="btc_icon" className="h-40 w-40" src={bitcoin} />
              </header>
            </article>
          </div>
          {/* six card    */}
          <div className="m-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-60 crypto_card6">
            <article className="overflow-hidden rounded-lg">
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                ETH
                <span className="float-right p-1 rounded-full bg-thirdCardBg">
                  <a href="/">
                    <img
                      alt="Placeholder7"
                      className=" h-5 w-5"
                      src={thirdCardicon}
                    />
                  </a>
                </span>
              </h2>
              <h2 className="font-bold text-lg pl-6 md:pl-6"> $4, 721.63 </h2>
              <p className="font-bold pl-6 md:pl-6"> +2.87 % </p>
              <header className="flex items-center justify-center">
                <img alt="ethLogo3" className="h-40 w-40" src={egg} />
              </header>
            </article>
          </div>
        </div>
        
      </div>  
      <div className=" text-center not-italic font-semibold md:text-4xl sm:text-lg text_high text-textClr">
  <h1 className="text-textClr">
  Why use one exchange,
when you can use them all?

</h1>
</div>  
    </div>
  );
};

export default CryptoCards;
