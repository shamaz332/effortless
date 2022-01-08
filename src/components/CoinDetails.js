import "../styles/global.css";

import ethiriumLogo from "../assests/ethiriumLogo.svg";

function CoinDetails() {
  return (
    <div className="">
      <div class="py-8 sm:py-12 px-40">
        <div className="flex flex-wrap">
          {/* graph */}
          <div>
            <p className="text_color text-2xl font-medium">
              Ethereum <span className="span_clr">(ETH)</span>
            </p>
            <p className="text_color text-3xl font-bold">$5,001.55 </p>
            <p className="neg_clr">
              -$53.1234323(-1.55%)
              <span className="text_color"> Past 24Hours</span>
            </p>
          </div>
          <div className="lg:pl-20 sm:pl-0 sm:text-center">
            <h2 class="text-lg pb-0 md:pb-0 font-medium inline-flex items-center">
              <span class="float-left mr-2 items-center eth_logo rounded-full">
                <a href="#">
                  <img
                    alt="Placeholder"
                    class=" h-10 w-10"
                    src={ethiriumLogo}
                  />{" "}
                </a>{" "}
              </span>{" "}
              Ethereum{" "}
              <span>
                <button className="p-2 ml-2 nav_btn inline-flex items-center">
                
<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7716 16.4299C15.9272 16.4299 15.1716 16.7612 14.5939 17.2803L6.67165 12.6969C6.7272 12.4429 6.77165 12.1889 6.77165 11.9238C6.77165 11.6588 6.7272 11.4048 6.67165 11.1508L14.505 6.6116C15.105 7.16381 15.8939 7.50618 16.7716 7.50618C18.6161 7.50618 20.105 6.02626 20.105 4.19293C20.105 2.3596 18.6161 0.879684 16.7716 0.879684C14.9272 0.879684 13.4383 2.3596 13.4383 4.19293C13.4383 4.45799 13.4828 4.71201 13.5383 4.96602L5.70498 9.50517C5.10498 8.95297 4.31609 8.6106 3.43831 8.6106C1.59387 8.6106 0.10498 10.0905 0.10498 11.9238C0.10498 13.7572 1.59387 15.2371 3.43831 15.2371C4.31609 15.2371 5.10498 14.8947 5.70498 14.3425L13.6161 18.9369C13.5605 19.1688 13.5272 19.4118 13.5272 19.6548C13.5272 21.4329 14.9828 22.8797 16.7716 22.8797C18.5605 22.8797 20.0161 21.4329 20.0161 19.6548C20.0161 17.8766 18.5605 16.4299 16.7716 16.4299ZM16.7716 3.08852C17.3828 3.08852 17.8828 3.5855 17.8828 4.19293C17.8828 4.80036 17.3828 5.29735 16.7716 5.29735C16.1605 5.29735 15.6605 4.80036 15.6605 4.19293C15.6605 3.5855 16.1605 3.08852 16.7716 3.08852ZM3.43831 13.0283C2.8272 13.0283 2.3272 12.5313 2.3272 11.9238C2.3272 11.3164 2.8272 10.8194 3.43831 10.8194C4.04943 10.8194 4.54943 11.3164 4.54943 11.9238C4.54943 12.5313 4.04943 13.0283 3.43831 13.0283ZM16.7716 20.7813C16.1605 20.7813 15.6605 20.2843 15.6605 19.6768C15.6605 19.0694 16.1605 18.5724 16.7716 18.5724C17.3828 18.5724 17.8828 19.0694 17.8828 19.6768C17.8828 20.2843 17.3828 20.7813 16.7716 20.7813Z" fill="#635BFF"/>
</svg>

                  <span>Share</span>
                </button>
              </span>
            </h2>{" "}
          </div>{" "}
        </div>
        <div>{/* card */}</div>
      </div>
    </div>
  );
}

export default CoinDetails;
