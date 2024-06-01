import Cart from "@/components/customComponents/cart/Cart";
import Footer from "@/components/customComponents/footer/Footer";
import HomePage from "@/components/customComponents/landingPage/HomePage";
import ProductPage from "@/components/customComponents/landingPage/ProductPage";
import Navbar from "@/components/customComponents/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Home;
