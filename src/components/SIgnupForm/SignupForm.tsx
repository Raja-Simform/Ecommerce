import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { signupSchema } from "../../Schema/SignupSchema";
import { z } from "zod";
import SignupField from "../InputField/SingupInputFeild";
export type SignupFormFeilds = z.infer<typeof signupSchema>;
interface SignupFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<SignupFormFeilds>;
  errors: FieldErrors<SignupFormFeilds>;
  isLoading: boolean;
  isSubmitting: boolean;
  onToggleSignup: () => void;
  errorMessage?: string;
}

export default function SignForm({
  onSubmit,
  register,
  errors,
  isLoading,
  isSubmitting,
  onToggleSignup,
  errorMessage,
}: SignupFormProps) {
  return (
    <form
      onSubmit={onSubmit}
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
      <SignupField
        id="name"
        type="text"
        register={register("username")}
        error={errors.username?.message}
        label="UserName:"
      />
      <SignupField
        id="email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
        label="Email:"
      />
      <SignupField
        id="Password"
        type="password"
        register={register("password")}
        error={errors.password?.message}
        label="Password:"
      />
      <SignupField
        id="callName"
        type="text"
        register={register("callName")}
        error={errors.callName?.message}
        label="What should we call you:"
      />
      <SignupField
        id="phoneNumber"
        type="text"
        register={register("phoneNumber")}
        error={errors.phoneNumber?.message}
        label="PhoneNo:"
      />
      <button
        type="submit"
        disabled={isLoading || isSubmitting}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
      <div className=" flex gap-4 p-2 mt-3">
        <span>Already have an account ?</span>
        <button
          type="button"
          className="text-[#3F5EFB] hover:underline cursor-pointer"
          onClick={onToggleSignup}
        >
          Login
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-600">{errorMessage || "An error occurred"}</p>
      )}
    </form>
  );
}
