
import { z } from "zod";
import { RuleMesseges } from "../constants/Rulemessege.constant";

export const loginSchema = z.object({
  username: z.string().min(1,RuleMesseges.UserNameRequired),
  password: z.string().min(6, RuleMesseges.PasswordRequired),
});




