import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../Schema/LoginSchema";
import type { z } from "zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

type SignupInput = z.infer<typeof signupSchema>;
type SignupApiPayload = {
  username: string;
  password: string;
  displayName: string;
  mobileNumber: number;
  email: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  });
  const navigate=useNavigate();
  const signupApi = async (data: SignupApiPayload) => {
    return axios
      .post("https://playx.onrender.com/api/v1/sign-up", data)
      .then((response) => response.data);
  };
  const { mutate } = useFetch({
    fn: signupApi,
    enabled: false,
  });
  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    try {
   
      const apiData = {
        username: data.username,
        password: data.password,
        displayName: data.callName,
        mobileNumber: Number(data.phoneNumber),
        email: data.email,
      };
  
      const response = await mutate(apiData);
      console.log("Signup success:", response);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  const handleToggle=()=>{
    navigate("/login");
  }

  return (
    <div className="flex  flex-col items-center justify-start min-h-screen  bg-[#3F5EFB] ">
      <img
        src="/Colorful Abstract Online Shop Free Logo.png"
        alt="Logo"
        className=" h-60 mb-1"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className=" flex flex-col items-center w-[30rem] mx-auto p-4 bg-white rounded-md shadow-md"
      >
        {" "}
        <label
          className="block mb-2 text-2xl font-bold text-gray-700"
          htmlFor="name"
        >
          Signup
        </label>
        <div className="mb-3 w-full">
          <label className="block mb-1 font-light text-gray-700" htmlFor="name">
            UserName:
          </label>
          <input
            id="name"
            type="text"
            {...register("username")}
            className={`w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-3 w-full">
          <label
            className="block mb-1 font-light text-gray-700"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3 w-full">
          <label
            className="block mb-1 font-light text-gray-700"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className={`w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-3 w-full">
          <label
            className="block mb-1 font-light text-gray-700"
            htmlFor="callName"
          >
            What should we call you:
          </label>
          <input
            id="callName"
            type="text"
            {...register("callName")}
            className={`w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.callName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.callName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.callName.message}
            </p>
          )}
        </div>
        <div className="mb-3 w-full">
          <label
            className="block mb-1 font-light text-gray-700"
            htmlFor="phoneNumber"
          >
            PhoneNo:
          </label>
          <input
            id="phoneNumber"
            type="text"
            {...register("phoneNumber")}
            className={`w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Signup
        </button>
        <div className=" flex gap-4 p-2 mt-3">
          <span>Already have an account ?</span>
          <button
            type="button"
            className="text-[#3F5EFB] hover:underline cursor-pointer"
            onClick={handleToggle}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
