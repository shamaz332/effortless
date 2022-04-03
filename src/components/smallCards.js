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
      <div className="hidden lg:flex justify-center mt-5 ">
        <img src={elispse} alt="elispse" className="elipse" />
      </div>{" "}
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div>
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span className="float-right rounded-full eth_logo">
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span className="float-right eth_logo rounded-full">
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span className="float-right eth_logo rounded-full">
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
          </div>{" "}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="hidden lg:flex justify-center h-64 items-end">
              <img
                alt="Placeholder"
                className="h-40 absolute coins"
                src={coins}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div>
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span className="float-left mr-5 eth_logo rounded-full">
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span className="float-left mr-5 eth_logo rounded-full">
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
            </div>{" "}
            <div>
              <h2 className="text-lg p-4 md:p-6 pb-0 md:pb-0 font-bold">
                Ethereum{" "}
                <span className="float-left mr-5 eth_logo rounded-full">
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className=" h-12 w-12"
                      src={ethiriumLogo}
                    />{" "}
                  </a>{" "}
                </span>{" "}
              </h2>{" "}
              <h2 className="text-lg pl-6 md:pl-6"> Uniswap, SushiSwap, +20 </h2>{" "}
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
            <div className="binance_small h-20 w-20 float-left">
              <img alt="binance" src={binance} />{" "}
            </div>{" "}
            <div className="eth_logo h-20 w-20 absolute ml-14">
              <img alt="ethiriumLogo" src={ethiriumLogo} />{" "}
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
      <div className="m-12 flex flex-wrap justify-around ml-auto mr-auto mt-20 small_icons_end">
        <div className="flex flex-col items-center justify-center">
          <img alt="fire" className="fire p-3 h-20 w-20" src={fire} />
          <h1 className="font-semibold text-center text-small text_high_two">
            Better gas than going directly to the source{" "}
          </h1>{" "}
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <img alt="percentage" className="percentage p-3 h-20 w-20" src={percentage} />{" "}
          <h1 className="font-semibold text-center text-small text_high_two">
            We never collect any additional fees{" "}
          </h1>{" "}
        </div>{" "}
        <div className="flex flex-col items-center justify-center">
          <img alt="fire" className="eye p-3 h-20 w-20" src={fire} />{" "}
          <h1 className="font-semibold text-center text-small text_high_two">
            We always display all the costs up front{" "}
          </h1>{" "}
        </div>{" "}
      </div>{" "}
      <div className=" text-center not-italic font-semibold md:text-4xl sm:text-lg text_high_two">
        <h1> Your trading home </h1>{" "}
      </div>{" "}
      <div className="flex flex-wrap ml-auto mr-auto grid_tokens">
        <div className="w-full p-2 sm:w-1 md:w-1/2 tokens_sec">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col ackTokens">
            <div className="token_img">
              <img alt="ackTokens" src={ackTokens} />{" "}
            </div>{" "}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="mb-4 text-2xl text_high_two">
                Track your tokens and manage your positions{" "}
              </h3>
              <a href="/" className="text_high_toke wallet_line">
                See your portfolio{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-full p-2 sm:w-1 md:w-1/2 tokens_sec">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col ackTokens">
            <div className="token_img">
              <img alt="graph" src={graph} />{" "}
            </div>{" "}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="mb-4 text-2xl text_high_two">
                Market, limit or OTC for any sized trades{" "}
              </h3>
              <a href="/" className="text_high_toke wallet_line">
                Start Trading{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Trading directly from your account  */}
      <div className="ackTokens_outer">
        <div className="flex flex-wrap ackTokens">
          <div className="w-full">
            <article className="overflow-hidden">
              <header className="flex justify-between p-2 md:pt-10">
                <div>
                  <div className="md:text-4xl sm:text-lg text_high_two">
                    <h1> Trade directly from your own wallet </h1>{" "}
                  </div>
                  <div className="flex">
                    <div className="flex text_high_toke mt-4">
                      <img alt="vecter" src={vector} className="vecter hidden md:block" />
                      <h3 className="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div className="flex text_high_toke mt-4">
                    <img alt="vecter" src={vector} className="vecter hidden md:block" />
                      <h3 className="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex">
                    <div className="flex text_high_toke mt-4">
                    <img alt="vecter" src={vector} className="vecter hidden md:block" />
                      <h3 className="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div className="flex text_high_toke mt-4">
                    <img alt="vecter" src={vector} className="vecter hidden md:block" />
                      <h3 className="text_color ml-2">
                        Market, limit or OTC for any sized trades{" "}
                      </h3>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div>
                  <div>
                    <img alt="vecter" src={wallet} className="wallt_img" />
                  </div>{" "}
                </div>{" "}
              </header>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* end      */}{" "}

    </div>
  );
};

export default smallCards;
