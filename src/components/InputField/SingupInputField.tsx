import type { UseFormRegisterReturn } from "react-hook-form";

interface SignupFieldProps {
  id: string;
  label: string;
  type?: string;
  error?: string;
  register: UseFormRegisterReturn;
}

export default function SignupField({
  id,
  label,
  type = "text",
  error,
  register,
}: SignupFieldProps) {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={id} className="block mb-1 font-light text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        className={`w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
