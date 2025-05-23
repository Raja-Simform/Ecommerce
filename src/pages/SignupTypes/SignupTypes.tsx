import type { signupSchema } from "../../Schema/SignupSchema";
import type { z } from "zod";
export type SignupInput = z.infer<typeof signupSchema>;
export type SignupApiPayload = {
  username: string;
  password: string;
  displayName: string;
  mobileNumber: number;
  email: string;
};
