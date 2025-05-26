import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import { useState } from "react";
export default function Navbar() {
  const [logout,setLogout]=useState(false);
  const navigate=useNavigate();
  function handleClick(){
      setLogout((prev)=>!prev);
  }
  function handleLogout(){
         localStorage.removeItem('token');
         navigate('/login');
  }
  return (
    <div className="flex items-center justify-center bg-blue-600 ">
      <nav className="flex   items-center justify-center gap-6  p-8 text-2xl">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/product" className="hover:underline">
          Product
        </Link>
      </nav>
      <div className="ml-auto relative pr-3">
        <button onClick={handleClick} className="flex items-center">
          <img src={user} alt="User" className="h-10" />
        </button>

        {logout && (
          <button
            onClick={handleLogout}
            className="absolute top-full mt-1 right-1 z-10 border bg-amber-50 px-4 py-2 rounded shadow"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
