import { Button } from "@/components/ui/button";
import productService from "@/service/product.service";
import { Instagram, Linkedin, Twitter } from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface ProductData {
  productName: string;
  description: string;
  category: string;
  price: string;
  image: string;
  id: number;
}
const SingleProduct = () => {
  const [productData, setProductData] = useState<ProductData>({
    productName: "",
    description: "",
    category: "",
    price: "",
    image: "",
    id: 0,
  });

  const data = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await productService
        .getProductById(Number(data.id))
        .then((res) => {
          setProductData(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {productData ? (
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={productData.productName}
              className="lg:w-1/2 w-full lg:h-[28rem] h-56 object-cover object-center rounded"
              src={productData.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productData.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productData.productName}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a
                    href="https://www.instagram.com/_shantanu143_/"
                    className="m-2 text-indigo-500 dark:text-indigo-500"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://x.com/shantanu_96k"
                    className="m-2  text-indigo-500 dark:text-indigo-500"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shantanu-nirpal-056139239/"
                    className="m-2 text-indigo-500 dark:text-indigo-500"
                  >
                    <Linkedin />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{productData.description}</p>

              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{productData.price}
                </span>
                <div className="pl-10">
                <Link to={`/product/card/${productData.id}`} className="mr-3">
                  <Button variant="outline">Add To Card</Button>
                </Link>
                <Link to={`/product/buy/${productData.id}`}>
                  <Button>By Now</Button>
                </Link></div>
              </div>
            </div>
          </div>
        ) : (
          <h1>Product Not Found</h1>
        )}
      </div>
    </section>
  );
};

export default SingleProduct;
