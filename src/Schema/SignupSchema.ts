
import { z } from "zod";
import { RuleMesseges } from "../constants/Rulemessege.constant";

export const signupSchema = z
  .object({
    username: z.string().min(2, RuleMesseges.UserNameRequired),
    email: z.string().email(RuleMesseges.EmailRequired),
    password: z.string().min(6,RuleMesseges.PasswordRequired),
    callName: z.string().min(1, RuleMesseges.CallNameRequired),
    phoneNumber: z
      .string()
      .min(10, RuleMesseges.PhoneNumberLengthRequired)
      .regex(/^\d+$/, RuleMesseges.PhoneNumberDigitRequired),
  })