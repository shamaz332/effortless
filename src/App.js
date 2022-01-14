import { Link, Route, Routes } from "react-router-dom";

import BinancePath from "./components/Setup/BinancePath";
import CoinBasePath from "./components/Setup/CoinBasePath";
import CoinDetails from "./components/CoinDetails";
import FirstTimeSetup from "./components/Setup/FirstTimeSetup";
import Footer from "./components/Footer";
import GiminiSetup from "./components/Setup/GiminiSetup";
import Home from "./views/home";
import Register from "./components/Register";
import Welcome from "./components/Setup/Welcome";

function App() {
  return (
    <div className="">

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="coindetail" element={<CoinDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="welcome/firsttime" element={<FirstTimeSetup />} />
        <Route path="welcome/gimini" element={<GiminiSetup />} />
        <Route path="welcome/binance" element={<BinancePath />} />
        <Route path="welcome/coinbase" element={<CoinBasePath />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
