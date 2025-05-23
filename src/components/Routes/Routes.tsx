import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Product from "../../pages/Product/Product";
import SignupForm from "../../pages/Signup/SIgnup";
import Layout from "../Layout/Layout";

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
    element:SignupForm
  },
  {
    path:'*',
    element:()=><h2>Page Not Found</h2>
  }

]