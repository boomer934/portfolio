import axios from "axios";
import { SetStateAction } from "react";
export default async function handleSubmit({email,message,setEmail,setMessage}:{email:string,message:string|undefined,setEmail:React.Dispatch<SetStateAction<string>>,setMessage:React.Dispatch<SetStateAction<string|undefined>>}){
    setEmail("")
    setMessage("")
    if(message?.trim() !== ""){
        try {
            const res = await axios.post("/api/information",{email,message})
            return res.data
        } catch (error) {
            console.error(error)
        }
    }
    try {
        const res = await axios.post("/api/information",{email})
        return res.data
    } catch (error) {
        console.error(error)
    }
}