import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Product from "../../pages/Product/Product";
import Signup from "../../pages/Signup/Signup";
import Layout from "../Layout/Layout";
import NotFound from "../NotFound/NotFound";

export interface RouteItem {
  path: string;
  element: React.FC;
  children?: RouteItem[];
  isAuth?:boolean;
}
export const routes:RouteItem[]=[
  {
    path:'/',
    element:Layout,
    children:[
      {
        path:'',
        element:Home,
        isAuth:true,
        
      },
      {
        path:'product',
        element:Product,
        isAuth:true,
      }

    ]
  },
  {
    path:"/login",
    element:Login
  },
  {
    path:"/signup",
    element:Signup
  },
  {
    path:'*',
    element:()=><NotFound/>
  }

]