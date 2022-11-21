import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import About from "./Pages/About.jsx";
// import Category from "./Pages/Category";
import ProductListing from "./Components/Product/ProductListing";
import Faucet from "./Pages/Faucet"
import Cabinate from "./Pages/Cabinate"
import Accessories from "./Pages/Accessories"
import Sink from "./Pages/Sink"
import ContactUs from "./Pages/ContactUs";
import Visualiser from "./Pages/Visualiser";
import ProductDetails from "./Pages/ProductDetails"
import { useEffect } from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Category from "./Pages/Category";

function App() {
  return (
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about"  element={<About />} />
        <Route path="/ProductListing"  element={<ProductListing />} />
        <Route path= "/Faucet" element={<Faucet/>}/>
        <Route path= "/Cabinate" element={<Cabinate/>}/>
        <Route path= "/Category" element={<Category/>}/>
        <Route path= "/Accessories" element={<Accessories/>}/>
        <Route path= "/Sink" element={<Sink/>}/>
        <Route path= "/Sink/:Slug" element={<ProductDetails/>}/>
        <Route path= "/Faucet/:Slug" element={<ProductDetails/>}/>
        <Route path= "/Cabinate/:Slug" element={<ProductDetails/>}/>
        <Route path= "/Accessories/:Slug" element={<ProductDetails/>}/>
        <Route path="/ContactUs"  element={<ContactUs />} />
        <Route path="/Visualiser"  element={<Visualiser />} />
        {/* <Route path="/ProductDetails"  element={<ProductDetails />} />  */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
