import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex   items-center justify-center gap-6 bg-green-600 p-8  text-2xl">
      <Link to="/" className="hover:underline" >Home</Link>
      <Link to="/product" className="hover:underline">Product</Link>
    </nav>
  );
}
