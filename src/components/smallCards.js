import React from "react";
import binance from "../assests/binance.svg";
import coins from "../assests/coins.svg";
import elispse from "../assests/elipse.png";
import ethiriumLogo from "../assests/ethiriumLogo.svg";

const smallCards = () => {
  return (
    <div>
      <div class="hidden lg:flex justify-center mt-5 ">
        <img src={elispse} className="elipse" />
      </div>
   <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div>
          <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
            Ethereum
            <span class="float-right rounded-full eth_logo">
              <a href="#">
                <img alt="Placeholder" class=" h-12 w-12" src={ethiriumLogo} />
              </a>
            </span>
          </h2>
          <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2></div>
          <div>
          <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
            Ethereum
            <span class="float-right eth_logo rounded-full">
              <a href="#">
                <img alt="Placeholder" class=" h-12 w-12" src={ethiriumLogo} />
              </a>
            </span>
          </h2>
          <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2></div>
          <div>
          <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
            Ethereum
            <span class="float-right eth_logo rounded-full">
              <a href="#">
                <img alt="Placeholder" class=" h-12 w-12" src={ethiriumLogo} />
              </a>
            </span>
          </h2>
          <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2></div>

        </div>
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="hidden lg:flex justify-center h-64 items-end">
        <img alt="Placeholder" className="h-40 absolute coins" src={coins} />
         </div>
     

        </div>  
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
 
          <div>
          <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
            Ethereum
            <span class="float-left mr-5 eth_logo rounded-full">
              <a href="#">
                <img alt="Placeholder" class=" h-12 w-12" src={ethiriumLogo} />
              </a>
            </span>
          </h2>
          <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2></div> <div>
          <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
            Ethereum
            <span class="float-left mr-5 eth_logo rounded-full">
              <a href="#">
                <img alt="Placeholder" class=" h-12 w-12" src={ethiriumLogo} />
              </a>
            </span>
          </h2>
          <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2></div> <div>
          <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
            Ethereum
            <span class="float-left mr-5 eth_logo rounded-full">
              <a href="#">
                <img alt="Placeholder" class=" h-12 w-12" src={ethiriumLogo} />
              </a>
            </span>
          </h2>
          <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2></div>

        </div>
        
  </div>
    </div>
    <div className=" text-center not-italic font-semibold md:text-4xl sm:text-lg text_high_two">
  <h1 >
  ... and merges them into one trade, so you save
 time and money

</h1>
</div>  

<div className="infoCard ml-auto mr-auto lg:m-11">
  <div className="flex flex-col">
<div className="h-20 lg:pl-12 sm:pl-5 lg:pt-12 sm:pt-5" >
<div className="eth_logo h-20 w-20 float-left"><img src={binance}/></div>
<div className="eth_logo h-20 w-20 absolute ml-14"><img src={ethiriumLogo}/></div>
</div><br/>
<div className="lg:pl-12 sm:pl-5 lg:pt-12 sm:pt-5">
<h1 className="text-2xl font-bold">
Sell 1,500 DAI for ETH
</h1></div>
</div>

</div>


     </div>
  );
};

export default smallCards;