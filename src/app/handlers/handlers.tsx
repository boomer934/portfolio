import axios from "axios";
import { SetStateAction } from "react";

export default async function handleSubmit({
  email,
  message,
  setEmail,
  setMessage,
}: {
  email: string;
  message: string | undefined;
  setEmail: React.Dispatch<SetStateAction<string>>;
  setMessage: React.Dispatch<SetStateAction<string | undefined>>;
}) {
  if (!email || !message?.trim()) {
    console.error("Email o message mancanti");
    return { status: "error", message: "Email o message mancanti" };
  }

  try {
    const res = await axios.post("/api/information", { email, message });
    // Reset dopo la richiesta
    setEmail("");
    setMessage("");
    return res.data;
  } catch (error: any) {
    console.error("Errore API:", error.response?.data || error.message);
    return { status: "error", message: error.message };
  }
}
