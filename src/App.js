import { Link, Route, Routes } from "react-router-dom";

import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Home from "./views/home";
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="">
 <Navbar/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="coindetail" element={<CoinDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
