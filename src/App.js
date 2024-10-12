import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/NavbarComponent";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignup from "./Components/Pages/LoginSignup";
import FooterComponent from "./Components/Footer/FooterComponent";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Shop />} />

         
          <Route
            path="/Men"
            element={<ShopCategory banner={men_banner} category="Men" />}
          />

          
          <Route
            path="/Women"
            element={<ShopCategory banner={women_banner} category="Women" />}
          />

         
          <Route
            path="/Kids"
            element={<ShopCategory banner={kid_banner} category="Kids" />}
          />

         
          <Route path="/Product/:productId" element={<Product />} />

          
          <Route path="/Cart" element={<Cart />} />

          
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
