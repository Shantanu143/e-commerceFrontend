import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import productService from "@/service/product.service";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProductData {
  productName: string;
  description: string;
  category: string;
  price: string;
  image: string;
  id: number;
  timestamp: string;
}
const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<ProductData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      await productService
        .getAllProducts()
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-600">
        Our <span className="text-blue-500 dark:text-blue-500">Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`} key={index}>
            <Card className="w-[350px]">
              <img
                src={product.image}
                alt={product.productName}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{product.productName}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">MRP: ₹{product.price}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link to="/cart" onClick={() => addToCart(product)}>
                  <Button variant="outline">Add To Card</Button>
                </Link>
                <Link to={`/product/buy/${product.id}`}>
                  <Button>By Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Products;
