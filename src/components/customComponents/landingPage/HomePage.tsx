import Header from "../header/Header";
import Sales from "../Sales/Sales";
import Products from "../Products/Products";
import FeaturedProduct from "../featuredProduct/FeaturedProduct";

const HomePage = () => {
  return (
    <>
      <Header />
      <Sales />
      <Products />
      <FeaturedProduct />
    </>
  );
};

export default HomePage;
