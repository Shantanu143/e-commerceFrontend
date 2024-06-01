import { Route, Routes } from "react-router-dom";
import SignUp from "@/components/customComponents/auth/SignUp";
import LogIn from "@/components/customComponents/auth/LogIn";
import Login from "../vender/Login";
import Register from "../vender/Register";

const Authentication = () => {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <Routes>
          {/* auth routes for user */}
          <Route path="/user/signup" Component={SignUp} />
          <Route path="/user/login" Component={LogIn} />
          
          {/* auth routes for vender */}

          <Route path="/vender/login" Component={Login} />
          <Route path="/vender/login" Component={Register} />
          

          {/* auth routes for admin */}
        </Routes>
      </div>

      <div className="hidden bg-muted lg:block">
        <img
          src="https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Authentication;
