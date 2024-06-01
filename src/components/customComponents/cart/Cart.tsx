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
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

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
        {cart.length === 0 ? (
          <h1 className="text-center text-xl text-green-500 mb-5">
            Cart is empty
          </h1>
        ) : (
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
              {cart.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="hidden sm:table-cell">
                      <img
                        alt={data.productName}
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={data.image}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {data.productName}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{data.category}</Badge>
                    </TableCell>
                    <TableCell>₹{data.price}</TableCell>
                    <TableCell className="hidden md:table-cell">25</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {data.timestamp}
                    </TableCell>
                    <TableCell>
                      <span
                        className="mr-2 mb-1"
                        onClick={() => removeFromCart(data.id)}
                      >
                        <Button variant="outline">Remove</Button>
                      </span>
                      <Link to={`/product/buy/${data.id}`}>
                        <Button>By Now</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default Cart;
