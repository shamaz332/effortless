import { Link, Route, Routes } from "react-router-dom";

import CoinDetails from "./components/CoinDetails";
import FirstTimeSetup from "./components/Setup/FirstTimeSetup";
import Footer from "./components/Footer";
import Home from "./views/home";
import Navbar from './components/Navbar'
import Register from "./components/Register";
import Welcome from "./components/Setup/Welcome";

function App() {
  return (
    <div className="">
 <Navbar/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="coindetail" element={<CoinDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="firsttime" element={<FirstTimeSetup />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
