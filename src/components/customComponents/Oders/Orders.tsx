import { Badge } from "@/components/ui/badge";
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

interface Orders {
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: number;
}
const Orders = () => {
  const orders: Orders[] = [
    {
      customer: "shantanu",
      email: "shantanu@gmail.com",
      type: "sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: 25000,
    },
    {
      customer: "shantanu",
      email: "shantanu@gmail.com",
      type: "sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: 25000,
    },
    {
      customer: "shantanu",
      email: "shantanu@gmail.com",
      type: "sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: 25000,
    },
    {
      customer: "shantanu",
      email: "shantanu@gmail.com",
      type: "sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: 25000,
    },
    {
      customer: "shantanu",
      email: "shantanu@gmail.com",
      type: "sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: 25000,
    },
  ];
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((data, index) => {
              return (
                <TableRow className="bg-accent" key={index}>
                  <TableCell>
                    <div className="font-medium"> {data.customer} </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {data.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {data.type}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      {data.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {data.date}
                  </TableCell>
                  <TableCell className="text-right">₹{data.amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Orders;
