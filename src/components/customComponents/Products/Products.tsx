import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/air-force-1-07-fresh-shoes-bBRnbq.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/air-force-1-07-fresh-shoes-bBRnbq.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/air-force-1-07-fresh-shoes-bBRnbq.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/air-force-1-07-fresh-shoes-bBRnbq.png",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/air-force-1-07-fresh-shoes-bBRnbq.png ",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/air-force-1-07-fresh-shoes-bBRnbq.png ",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-600">
        Our <span className="text-blue-500 dark:text-blue-500">Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((product, index) => (
          <Card className="w-[350px]" key={index}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">MRP: ₹10</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link to={`/product/card/${index}`}>
                <Button variant="outline">Add To Card</Button>
              </Link>
              <Link to={`/product/buy/${index}`}>
                <Button>By Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Products;
