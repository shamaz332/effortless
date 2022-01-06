import React from "react";
import ackTokens from "../assests/ackTokens.png";
import binance from "../assests/binance.svg";
import coins from "../assests/coins.svg";
import elispse from "../assests/elipse.png";
import ethiriumLogo from "../assests/ethiriumLogo.svg";
import fire from "../assests/fire.svg";
import graph from "../assests/graph.png";
import percentage from "../assests/percentage.svg";
import vector from "../assests/vector.svg";
import wallet from "../assests/wallet.svg";

const smallCards = () => {
  return (
    <div>
      <div class="hidden lg:flex justify-center mt-5 ">
        <img src={elispse} className="elipse" />
      </div>{" "}
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div>
              <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span class="float-right rounded-full eth_logo">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span class="float-right eth_logo rounded-full">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span class="float-right eth_logo rounded-full">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
          </div>{" "}
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="hidden lg:flex justify-center h-64 items-end">
              <img
                alt="Placeholder"
                className="h-40 absolute coins"
                src={coins}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div>
              <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span class="float-left mr-5 eth_logo rounded-full">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span class="float-left mr-5 eth_logo rounded-full">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 class="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span class="float-left mr-5 eth_logo rounded-full">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 class="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className=" text-center not-italic font-semibold md:text-4xl sm:text-lg text_high_two">
        <h1> ...and merges them into one trade, so you save time and money </h1>{" "}
      </div>{" "}
      {/* Sell 1,500 DAI for ETH card  */}{" "}
      <div className="infoCard ml-auto mr-auto lg:m-11">
        <div className="flex flex-col">
          <div className="h-20 lg:pl-12 sm:pl-5 lg:pt-12 sm:pt-5">
            <div className="eth_logo h-20 w-20 float-left">
              <img src={binance} />{" "}
            </div>{" "}
            <div className="eth_logo h-20 w-20 absolute ml-14">
              <img src={ethiriumLogo} />{" "}
            </div>{" "}
          </div>{" "}
          <br />
          <div className="lg:pl-12 sm:pl-5 lg:pt-12 sm:pt-5">
            <h1 className="text-2xl font-bold"> Sell 1, 500 DAI for ETH </h1>{" "}
          </div>{" "}
          <div className="flex lg:pl-12 sm:pl-5 lg:pt-12 sm:pt-5">
            <div className="lineone"> </div> <div className="linetwo"> </div>{" "}
            <div className="linethree"> </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* small icons   part */}
      <div className="m-12 flex flex-wrap justify-around mt-20">
        <div className="flex flex-col items-center justify-center">
          <img className="fire p-3 h-20 w-20" src={fire} />
          <h1 className="font-semibold text-center text-small text_high_two">
            Better gas than going directly to the source{" "}
          </h1>{" "}
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <img className="percentage p-3 h-20 w-20" src={percentage} />{" "}
          <h1 className="font-semibold text-center text-small text_high_two">
            We never collect any additional fees{" "}
          </h1>{" "}
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <img className="eye p-3 h-20 w-20" src={fire} />{" "}
          <h1 className="font-semibold text-center text-small text_high_two">
            We always display all the costs up front{" "}
          </h1>{" "}
        </div>{" "}
      </div>{" "}
      <div className=" text-center not-italic font-semibold md:text-4xl sm:text-lg text_high_two">
        <h1> Your trading home </h1>{" "}
      </div>{" "}
      <div class="flex flex-wrap ml-auto mr-auto grid_tokens">
        <div class="w-full p-2 sm:w-1 md:w-1/2 tokens_sec">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col ackTokens">
            <div class="token_img">
              <img src={ackTokens} />{" "}
            </div>{" "}
            <div class="p-4 flex-1 flex flex-col">
              <h3 class="mb-4 text-2xl text_high_two">
                Track your tokens and manage your positions{" "}
              </h3>
              <a href="/" class="text_high_toke wallet_line">
                See your portfolio{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div class="w-full p-2 sm:w-1 md:w-1/2 tokens_sec">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col ackTokens">
            <div class="token_img">
              <img src={graph} />{" "}
            </div>{" "}
            <div class="p-4 flex-1 flex flex-col">
              <h3 class="mb-4 text-2xl text_high_two">
                Market, limit or OTC for any sized trades{" "}
              </h3>
              <a href="/" class="text_high_toke wallet_line">
                Start Trading{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Trading directly from your account  */}
      <div class="ackTokens_outer">
        <div class="flex flex-wrap ackTokens">
          <div class="w-full">
            <article class="overflow-hidden">
              <header class="flex justify-between p-2 md:pt-10">
                <div>
                  <div className="md:text-4xl sm:text-lg text_high_two">
                    <h1> Trade directly from your own wallet </h1>{" "}
                  </div>
                  <div className="flex">
                    <div className="flex text_high_toke mt-4">
                      <img src={vector} className="vecter" />
                      <h3 class="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div className="flex text_high_toke mt-4">
                      <img src={vector} className="vecter" />
                      <h3 class="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex">
                    <div className="flex text_high_toke mt-4">
                      <img src={vector} className="vecter" />
                      <h3 class="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div className="flex text_high_toke mt-4">
                      <img src={vector} className="vecter" />
                      <h3 class="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  <div>
                    <img src={wallet} className="wallt_img" />
                  </div>{" "}
                </div>{" "}
              </header>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* end      */}{" "}
      <div className=" mt-10 md:text-4xl sm:text-lg text_high_two">
        <h1>Need help with something ? </h1>{" "}
      </div>
    </div>
  );
};

export default smallCards;
