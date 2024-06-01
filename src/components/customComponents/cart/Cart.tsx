import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = [
    {
      productImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d37da77f-07fb-4580-8b50-d68962e59043/air-max-90-shoes-K0mczj.png",
      name: "Nike Air Max 90",
      status: "Active",
      price: "12999",
      addedAt: "2023-07-12 10:42 AM",
      quantity: 1,
    },
    {
      productImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d37da77f-07fb-4580-8b50-d68962e59043/air-max-90-shoes-K0mczj.png",
      name: "Nike Air Max 90",
      status: "Active",
      price: "12999",
      addedAt: "2023-07-12 10:42 AM",
      quantity: 1,
    },
    {
      productImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d37da77f-07fb-4580-8b50-d68962e59043/air-max-90-shoes-K0mczj.png",
      name: "Nike Air Max 90",
      status: "Active",
      price: "12999",
      addedAt: "2023-07-12 10:42 AM",
      quantity: 1,
    },
    {
      productImg:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d37da77f-07fb-4580-8b50-d68962e59043/air-max-90-shoes-K0mczj.png",
      name: "Nike Air Max 90",
      status: "Active",
      price: "12999",
      addedAt: "2023-07-12 10:42 AM",
      quantity: 1,
    },
  ];
  return (
    <Card className="m-10">
      <CardHeader>
        <CardTitle className="text-gray-400">
          Cart{" "}
          <span className="text-blue-500 dark:text-blue-500">Products</span>
        </CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">img</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden md:table-cell">Quantity</TableHead>
              <TableHead className="hidden md:table-cell">Added at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      alt={data.name}
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={data.productImg}
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{data.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{data.status}</Badge>
                  </TableCell>
                  <TableCell>₹{data.price}</TableCell>
                  <TableCell className="hidden md:table-cell">25</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {data.addedAt}
                  </TableCell>
                  <TableCell>
                    <Link className="mr-2 mb-1" to={`/product/card/${index}`}>
                      <Button variant="outline">Remove</Button>
                    </Link>
                    <Link to={`/product/buy/${index}`}>
                      <Button>By Now</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Cart;
