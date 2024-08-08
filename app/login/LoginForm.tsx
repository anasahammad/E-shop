'use client'

import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { AiOutlineGoogle } from "react-icons/ai";
import Input from "../components/inputs/Input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface LoginFormProps{
    currentUser : SafeUser | null;
}
const LoginForm : React.FC<LoginFormProps> = ({currentUser}) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        email : "",
        password: ""
    })

    useEffect(()=>{
        if(currentUser){
            router.push("/cart")
            router.refresh()
        }
    }, [])
    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true)
        
        signIn('credentials', {
            ...data, 
            redirect: false

        }).then((callback)=>{
            if(callback?.ok){
                router.push('/cart')
                router.refresh();
                toast.success("Logged In")
                
            }
            if(callback?.error){
                toast.error(callback.error)
            }
        })
           
    
        
    }
    if(currentUser){
        return <p className="text-center"> Logged in. Redirecting....</p>
    }
    return (
        <>
        <Heading title="Sign in to E~shop"/> 

        <Button label="Continue with Google" icon={AiOutlineGoogle} outline onClick={()=>{}}/>
        <hr className="bg-slate-300 w-full h-px"/>
       


        <Input  id="email" label="Email"  disabled={isLoading} register={register} errors={errors} required type="email"/>

        <Input  id="password" label="Password"  disabled={isLoading} register={register} errors={errors} required type="password"/>

        <Button label={isLoading? 'Loading' : 'Login'} onClick={handleSubmit(onSubmit)}/>

        <p className="text-sm">Don't have an account? <Link className="underline" href="/register">Sign Up</Link></p>
     </>
    );
};

export default LoginForm;