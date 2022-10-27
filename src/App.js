import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import About from "./Pages/About.jsx";
import Category from "./Pages/Category";
import NeoBath from "./Pages/NeoBath.jsx";
import NeoPro from "./Pages/NeoPro.jsx";
import NeoSink from "./Pages/NeoSink.jsx";
import ContactUs from "./Pages/ContactUs";
import Visualiser from "./Pages/Visualiser";
import ProductDetails from "./Pages/ProductDetails"
import { useEffect } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about"  element={<About />} />
        <Route path="/Category"  element={<Category />} />
        <Route path="/NeoBath"  element={<NeoBath />} />
        <Route path="/NeoPro"  element={<NeoPro />} />
        <Route path="/NeoSink"  element={<NeoSink />} />
        <Route path="/NeoBath/:id"  element={<NeoBath />} />
        <Route path="/NeoPro/:id"  element={<NeoPro />} />
        <Route path="/NeoSink/:id"  element={<NeoSink />} />
        <Route path="/ContactUs"  element={<ContactUs />} />
        <Route path="/Visualiser"  element={<Visualiser />} />
        <Route path="/ProductDetails"  element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
