import { Route, Routes } from "react-router-dom";

import ArgantMobile from "./components/Setup/ArgantMobile";
import BinancePath from "./components/Setup/BinancePath";
import Bitski from "./components/Setup/Bitski";
import CoinBasePath from "./components/Setup/CoinBasePath";
import CoinDetails from "./components/CoinDetails";
import FirstTimeSetup from "./components/Setup/FirstTimeSetup";
import GiminiSetup from "./components/Setup/GiminiSetup";
import Home from "./views/home";
import MetaMask from "./components/Setup/MetaMask";
import Register from "./components/Register";
import Welcome from "./components/Setup/Welcome";

function App() {
  return (
    <div className="">

<Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="coindetail" element={<CoinDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="welcome/firsttime" element={<FirstTimeSetup />} />
        <Route path="welcome/gimini" element={<GiminiSetup />} />
        <Route path="welcome/binance" element={<BinancePath />} />
        <Route path="welcome/coinbase" element={<CoinBasePath />} />
        <Route path="welcome/firsttime/bitski" element={<Bitski />} />
        <Route path="welcome/firsttime/argantapp" element={<ArgantMobile />} />
        <Route path="welcome/firsttime/metamask" element={<MetaMask />} />
      </Routes>
     
    </div>
  );
}

export default App;
