import { useState } from "react";

export const useForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return { email, setEmail, pass, setPass };
};
