import "../styles/global.css";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import Footer from "./Footer";
import { Line } from "react-chartjs-2";
import Navbar from "../components/Navbar"
import ethiriumLogo from "../assests/ethiriumLogo.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

//data set
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};
function CoinDetails() {
  return (
    <div className="">
       <Navbar/>
      <div className="py-8 sm:py-12 lg:px-40 sm:px-4">
        <div className="flex flex-wrap">
          {/* graph */}
          <div className="">
            <p className="text_color text-2xl font-medium">
              Ethereum <span className="span_clr"> (ETH) </span>
            </p>
            <p className="text_color text-3xl font-bold"> $5, 001.55 </p>
            <p className="neg_clr">
              -$53 .1234323(-1.55 % )
              <span className="text_color"> Past 24 Hours </span>
            </p>
          </div>
          <div className="lg:pl-20 sm:pl-0 ">
            <h2 className="text-lg pb-0 md:pb-0 font-medium inline-flex items-center">
              <span className="float-left mr-2 items-center eth_logo rounded-full">
                <a href="/">
                  <img
                    alt="ethiriumLogo"
                    className=" h-10 w-10"
                    src={ethiriumLogo}
                  />
                </a>
              </span>
              Ethereum
              <span>
                <button className="p-2 ml-2 nav_btn inline-flex items-center">
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7716 16.4299C15.9272 16.4299 15.1716 16.7612 14.5939 17.2803L6.67165 12.6969C6.7272 12.4429 6.77165 12.1889 6.77165 11.9238C6.77165 11.6588 6.7272 11.4048 6.67165 11.1508L14.505 6.6116C15.105 7.16381 15.8939 7.50618 16.7716 7.50618C18.6161 7.50618 20.105 6.02626 20.105 4.19293C20.105 2.3596 18.6161 0.879684 16.7716 0.879684C14.9272 0.879684 13.4383 2.3596 13.4383 4.19293C13.4383 4.45799 13.4828 4.71201 13.5383 4.96602L5.70498 9.50517C5.10498 8.95297 4.31609 8.6106 3.43831 8.6106C1.59387 8.6106 0.10498 10.0905 0.10498 11.9238C0.10498 13.7572 1.59387 15.2371 3.43831 15.2371C4.31609 15.2371 5.10498 14.8947 5.70498 14.3425L13.6161 18.9369C13.5605 19.1688 13.5272 19.4118 13.5272 19.6548C13.5272 21.4329 14.9828 22.8797 16.7716 22.8797C18.5605 22.8797 20.0161 21.4329 20.0161 19.6548C20.0161 17.8766 18.5605 16.4299 16.7716 16.4299ZM16.7716 3.08852C17.3828 3.08852 17.8828 3.5855 17.8828 4.19293C17.8828 4.80036 17.3828 5.29735 16.7716 5.29735C16.1605 5.29735 15.6605 4.80036 15.6605 4.19293C15.6605 3.5855 16.1605 3.08852 16.7716 3.08852ZM3.43831 13.0283C2.8272 13.0283 2.3272 12.5313 2.3272 11.9238C2.3272 11.3164 2.8272 10.8194 3.43831 10.8194C4.04943 10.8194 4.54943 11.3164 4.54943 11.9238C4.54943 12.5313 4.04943 13.0283 3.43831 13.0283ZM16.7716 20.7813C16.1605 20.7813 15.6605 20.2843 15.6605 19.6768C15.6605 19.0694 16.1605 18.5724 16.7716 18.5724C17.3828 18.5724 17.8828 19.0694 17.8828 19.6768C17.8828 20.2843 17.3828 20.7813 16.7716 20.7813Z"
                      fill="#635BFF"
                    />
                  </svg>
                  <span> Share </span>
                </button>
              </span>
            </h2>
          </div>
        </div>
        {/* chart & order card  */}
        <div className="flex flex-wrap items-center">
          <div className="lg:w-3/4 sm:w-full">
            {/* chart    */}
            <Line options={options} data={data} />
          </div>

          <div className="lg:w-1/4 sm:w-full ackTokens p-6">
            <div className="flex items-center justify-between border-b border-textClr p-2">
              <p>Market</p>
              <p>Limit</p>
              <button className="p-1 ml-2 eth_logo inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
            </div>
            <div>
              <p className="mt-2 text_color">You pay</p>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center w-full rounded-md shadow-sm py-2 bg-white text-xl font-medium text_color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Choose Token
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                {/* will have to  pass value to this dropdown  */}
              </div>

              <button className="p-1 mt-2 coinDetailsClr inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
              <p className="mt-2 text_color">You receive</p>
              <div>
                <button
                  type="button"
                  className="inline-flex items-center w-full rounded-md shadow-sm py-2 bg-white text-xl font-medium text_color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  ETH
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>
                    
                    <input
                      className="input_receive p-2"
                      id="inline-full-name"
                      type="text"
                    />
                  </span>
                </button>

                <button
                  type="button"
                  className="m-2 review_order_btn w-full rounded-md text-center py-2 bg-white text-xl font-medium text_color "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Review Order
                </button>
                {/* will have to  pass value to this dropdown  */}
              </div>
            </div>
          </div>
        </div>
        <p className="text-3xl text_color">Trending Pairs</p>

        <div className="flex flex-wrap w-2/3 p-4 mt-4 items-center">
          <div className="relative w-40">
            <div className="absolute eth_logo">
              
              <a href="/">
                <img alt="ethiriumLogo3" className=" h-10 w-10" src={ethiriumLogo} />
              </a>
            </div>
            <input className="input_pairs p-2" id="inline-full-name" type="text" />
          </div>
          <div className="relative w-40">
            <div className="absolute eth_logo">
              
              <a href="/">
                <img alt="ethiriumLogo4" className=" h-10 w-10" src={ethiriumLogo} />
              </a>
            </div>
            <input className="input_pairs p-2" id="inline-full-name" type="text" />
          </div>
          <div className="relative w-40">
            <div className="absolute eth_logo">
              
              <a href="/">
                <img alt="ethiriumLogo5" className=" h-10 w-10" src={ethiriumLogo} />
              </a>
            </div>
            <input className="input_pairs p-2" id="inline-full-name" type="text" />
          </div>
          <div className="relative w-40">
            <div className="absolute eth_logo">
              
              <a href="/">
                <img alt="ethiriumLogo2" className=" h-10 w-10" src={ethiriumLogo} />
              </a>
            </div>
            <input className="input_pairs p-2" id="inline-full-name" type="text" />
          </div>
          <div>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <p className="text-3xl text_color mt-8 p-2">About Ethereum</p>
        <p className="text-sm text_color mt-4 lg:w-3/4 sm:w-full p-2">
          Ethereum is a smart contract platform that enables developers to
          freely build decentralized applications. Ether (ETH) is Ethereum’s
          native token that is used to pay transaction fees to miners. In
          specific situations, for ETH to be exchanged with other Ethereum-based
          tokens, it needs to be wrapped into WETH. Wrapping ETH does not affect
          its value, 1 ETH = 1 WETH.
        </p>

        <div className="p-4 mt-10 lg:w-3/4 sm:w-full flex flex-wrap justify-between">
          <div className="w-1/4">
            <p>Market Cap Rank</p>
            <p className="font-bold">#2</p>
          </div>
          <div className="border-l-2 text_color"></div>
          <div className="w-1/4">
            <p>Market Cap Rank</p>
            <p className="font-bold">$487B USD</p>
          </div>
          <div className="border-l-2 text_color"></div>
          <div className="w-1/4">
            <p>Market Cap Rank</p>
            <p className="font-bold">118,392,748 ETH</p>
          </div>
        </div>
        <div className="p-4 mt-10 lg:w-3/4 sm:w-full flex flex-wrap justify-between">
          <div className="w-1/4">
            <p>All Time ROI</p>
            <p className="font-bold">#2</p>
          </div>
          <div className="border-l-2 text_color"></div>
          <div className="w-1/4">
            <p>24h Volume</p>
            <p className="font-bold">$487B USD</p>
          </div>
          <div className="border-l-2 text_color"></div>
          <div className="w-1/4">
            <p>24h L $4052.64 H $4365.62</p>
            <p className="font-bold">118,392,748 ETH</p>
          </div>
        </div>
        <div className="border-b-2 text_color mb-10 mt-10"></div>
        <p className="p-2 text_color">Network</p>
        <p className="p-2 text_color text-3xl">Ethereum (Chain 1)</p>
      </div>
      <Footer/>
    </div>
  );
}

export default CoinDetails;
