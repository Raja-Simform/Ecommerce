import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { loginSchema } from "../../Schema/LoginSchema";
import { useState } from "react";

const loginApi = (data: { username: string; password: string }) => {
  return axios
    .post("https://playx.onrender.com/api/v1/log-in", data)
    .then((res) => res.data);
};

type FormFields = z.infer<typeof loginSchema>;

export default function Login() {
  const { mutate } = useFetch({
    fn: loginApi,
    enabled: false,
  });
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      setLoginError(null);
      const response = await mutate(data);
      console.log("Login success:", response);

      localStorage.setItem("token", response.accessToken);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      // setLoginError(err?.message || "Login failed");
    }
  };
  const handleToggle = () => {
    navigate("/signup");
  };

  return (
    <div className="flex  flex-col items-center justify-start min-h-screen bg-[#3F5EFB] ">
      <img
        src="/Colorful Abstract Online Shop Free Logo.png"
        alt="Logo"
        className=" h-60 mb-2"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col items-center p-8 bg-white rounded-md shadow-md"
        noValidate
      >
        <h2 className="block mb-1 font-semibold text-gray-700 text-2xl">
          Login
        </h2>
        <div className="mb-4">
          <label
            className="block mb-1 font-semibold text-gray-700"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            id="username"
            type="text"
            {...register("username")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block mb-1 font-semibold text-gray-700"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-[#3F5EFB] text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Login
        </button>
        <div className=" flex gap-4 p-2 mt-3">
          <span>Don't have an account ?</span>
          <button
            type="button"
            className="text-[#3F5EFB] hover:underline cursor-pointer"
            onClick={handleToggle}
          >
            SignUp
          </button>
        </div>
      </form>
      {loginError && (
        <p className="mt-2 text-red-600 font-semibold">{loginError}</p>
      )}
    </div>
  );
}
