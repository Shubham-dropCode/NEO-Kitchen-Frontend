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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/Category" exact element={<Category />} />
        <Route path="/NeoBath" exact element={<NeoBath />} />
        <Route path="/NeoPro" exact element={<NeoPro />} />
        <Route path="/NeoSink" exact element={<NeoSink />} />
        <Route path="/ContactUs" exact element={<ContactUs />} />
        <Route path="/Visualiser" exact element={<Visualiser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
