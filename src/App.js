import Navbar from './Section/Navbar/navbar';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';
import Market from "./Pages/Market/market"
import { Routes, Route } from "react-router-dom"
import Market_test from "./Components/test_market/test_market"
import Nftdetailpage from './Pages/NFTDetailPage/nftdetailpage';
import Mintsection from './Section/MintSection/mintsection';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> }  key={document.location.href}/>
          <Route path="/market" element={<Market /> }  key={document.location.href}></Route>
          <Route path="/contact" element={<Contact /> }  key={document.location.href}></Route>
          {/* <Route path="/market_test" element={<Market_test/>} key={document.location.href}></Route> */}
          <Route path="/mint" element={<Mintsection/>} key={document.location.href}></Route>
        </Routes >
  
      </header>
    </div>
  );
}

export default App;