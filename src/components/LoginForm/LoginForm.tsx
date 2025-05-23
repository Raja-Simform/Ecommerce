import type { FieldErrors, UseFormRegister } from "react-hook-form";

import { z } from "zod";
import { loginSchema } from "../../Schema/LoginSchema";
import InputField from "../InputField/LoginInputFeild";

export type LoginFormFields = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<LoginFormFields>;
  errors: FieldErrors<LoginFormFields>;
  isLoading: boolean;
  isSubmitting: boolean;
  onToggleSignup: () => void;
  errorMessage?: string;
}

export default function LoginForm({
  onSubmit,
  register,
  errors,
  isLoading,
  isSubmitting,
  onToggleSignup,
  errorMessage,
}: LoginFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center p-8 bg-white rounded-md shadow-md"
      noValidate
    >
      <h2 className="block mb-1 font-semibold text-gray-700 text-2xl">Login</h2>

      <InputField
        id="username"
        label="Username:"
        register={register("username")}
        error={errors.username?.message}
      />

      <InputField
        id="password"
        label="Password:"
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />

      <button
        type="submit"
        disabled={isLoading || isSubmitting}
        className="w-full py-2 px-4 bg-[#3F5EFB] text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>

      <div className="flex gap-4 p-2 mt-3">
        <span>Don't have an account ?</span>
        <button
          type="button"
          className="text-[#3F5EFB] hover:underline cursor-pointer"
          onClick={onToggleSignup}
        >
          SignUp
        </button>
      </div>

      {errorMessage && (
        <p className="text-red-600">{errorMessage || "An error occurred"}</p>
      )}
    </form>
  );
}
