import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import { useState } from "react";

export default function Navbar() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setLogout((prev) => !prev);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="flex items-center justify-between bg-blue-600 text-blue-50 px-6 py-4 shadow-md">
      <nav className="flex items-center gap-8 text-lg font-semibold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/product" className="hover:underline">
          Product
        </Link>
      </nav>

      <input
        type="text"
        className="border border-blue-300 rounded-md px-3 py-1 text-black focus:outline-none focus:ring-2 "
        placeholder="Search Product"
      />

      <div className="relative ml-6">
        <button
          onClick={handleClick}
          className="flex items-center focus:outline-none focus:ring-2  rounded"
          aria-label="User menu"
        >
          <img
            src={user}
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />
        </button>

        {logout && (
          <button
            onClick={handleLogout}
            className="absolute right-0 mt-2 w-24 rounded-md border border-gray-300 bg-amber-50 px-4 py-2 text-center text-sm font-medium shadow hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
