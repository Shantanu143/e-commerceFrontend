import { MoreHorizontal } from "lucide-react";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import productService from "@/service/product.service";
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
const ProductList = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await productService
      .getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteProduct = async (id: number) => {
    await productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Product deleted successfully");
        init();
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
        <CardDescription>
          {msg && (
            <span className="text-center text-3xl my-5 text-red-500">{msg}</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">img</span>
              </TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>

              <TableHead className="hidden md:table-cell">Added at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      alt={product.image}
                      height="64"
                      src={product.image}
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {product.productName}{" "}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell>₹{product.price}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.timestamp}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Link to={`/vender/products/${product.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => deleteProduct(product.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default ProductList;
