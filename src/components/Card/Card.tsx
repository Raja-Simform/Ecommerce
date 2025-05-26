import { useState } from "react";

interface Product {
  id: number;
  username: string;
  email: string;
  mobileNumber: string;
}

interface CardProps<T extends Product> {
  Products: T[];
}

export default function Card<T extends Product>({ Products }: CardProps<T>) {
  const [toggle, setToggle] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col items-center p-2 w-full box-border">
      <div className="flex gap-2 m-3">
        <button
          className={`mt-1 right-1 z-10 border px-4 py-2 rounded  ${
            toggle === "grid" ? "bg-amber-300" : "bg-amber-50"
          }`}
          onClick={() => setToggle("grid")}
        >
          Grid
        </button>
        <button
          className={`mt-1 right-1 z-10 border px-4 py-2 rounded  ${
            toggle === "list" ? "bg-amber-300" : "bg-amber-50"
          }`}
          onClick={() => setToggle("list")}
        >
          List
        </button>
      </div>

      <div
        className={
          toggle === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"
            : "flex flex-col w-full"
        }
      >
        {Products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 mb-4  bg-white"
          >
            <h2 className="m-0 mb-2 text-lg text-gray-800">
              {product.username}
            </h2>
            <p className="m-0 mb-1 text-gray-500 text-sm">{product.email}</p>
            <p className="m-0 font-bold text-blue-600">
              Price: {product.mobileNumber.slice(-3)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
