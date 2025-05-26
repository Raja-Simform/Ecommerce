import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../Schema/SignupSchema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import type { SignupApiPayload, SignupInput } from "../SignupTypes/SignupTypes";
import useMutate from "../../hooks/useMutate";
import { useForm, type SubmitHandler } from "react-hook-form";
import SignupForm from "../../components/SIgnupForm/SignupForm";
import { apiPaths } from "../../constants/apiPath";
import Concatenate from "../../utility/concatenate";

const signupApi = async (data: SignupApiPayload) => {
  const response = await axios.post(
    Concatenate(import.meta.env.VITE_API_DOMAIN, apiPaths.signup),
    data
  );
  console.log(response.data);
  return response.data;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const { mutate, error, isLoading } = useMutate({
    fn: signupApi,
    onSuccess: (response) => {
      localStorage.setItem("token", response.accessToken);
      navigate("/login");
    },
  });

  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    const apiData: SignupApiPayload = {
      username: data.username,
      password: data.password,
      displayName: data.callName,
      mobileNumber: Number(data.phoneNumber),
      email: data.email,
    };

    try {
      await mutate(apiData);
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  const handleToggle = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#3F5EFB]">
      <img
        src="/Colorful Abstract Online Shop Free Logo.png"
        alt="Logo"
        className="h-60 mb-1"
      />
      <SignupForm
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
        isSubmitting={isSubmitting}
        onToggleSignup={handleToggle}
        errorMessage={error?.message}
      />
    </div>
  );
}
