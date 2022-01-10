import { Link, Route, Routes } from "react-router-dom";

import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Home from "./views/home";
import Navbar from './components/Navbar'
import Register from "./components/Register";

function App() {
  return (
    <div className="">
 <Navbar/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="coindetail" element={<CoinDetails />} />
        <Route path="register" element={<Register />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
