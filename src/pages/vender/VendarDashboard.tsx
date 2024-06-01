import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  SIdeNav,
  SIdeNavMobile,
} from "@/components/customComponents/sideNav/SIdeNav";
import AddProduct from "@/components/customComponents/addProduct/AddProduct";
import Orders from "@/components/customComponents/Oders/Orders";
import ProductList from "@/components/customComponents/productList/ProductList";
import { Route, Routes } from "react-router-dom";
import EditProduct from "@/components/customComponents/editProduct/EditProduct";

const VendarDashboard = () => {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SIdeNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <SIdeNavMobile />
          <main className="flex-1 space-y-4 p-4 pt-6 sm:overflow-hidden md:p-8">
            <Routes>
              <Route path="/" element={<AddProduct />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<EditProduct />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>

            {/* <Orders />
            <ProductList /> */}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default VendarDashboard;
