import Cart from "@/components/customComponents/cart/Cart";
import Footer from "@/components/customComponents/footer/Footer";
import HomePage from "@/components/customComponents/landingPage/HomePage";
import ProductPage from "@/components/customComponents/landingPage/ProductPage";
import Navbar from "@/components/customComponents/navbar/Navbar";
import Products from "@/components/customComponents/Products/Products";
import { CartProvider } from "@/context/CartContext";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
};

export default Home;
