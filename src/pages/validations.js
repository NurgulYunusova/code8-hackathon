import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
});
