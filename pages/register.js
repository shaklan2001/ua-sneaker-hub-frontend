import React, { useState, useEffect } from "react";
import Link from "next/link";
import AuthApi from "@/components/AuthApi";
import { useRouter } from "next/router";
import { toast } from "sonner"



const RegisterForm = () => {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router=useRouter();

    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt');
        if (jwt) {
            router.push('/')
        }
    }, [])

    const onCreateAccount=()=>{
        AuthApi.registerUser(username, email, password).then(resp=>{
            console.log(resp.data.user)
            console.log(resp.data.jwt)
            sessionStorage.setItem('user', JSON.stringify(resp.data.user));
            sessionStorage.setItem('jwt', resp.data.jwt);
            toast("Account Created Successfully")
            router.push('/')
        },(e)=>{
            toast(e?.response?.data?.error.message)
        })
    }

    return (

        <div className="w-full lg:w-[100%] p-8 md:p-14 flex items-center justify-center lg:justify-center">
            <div className="p-8 w-[600px]">
                <h1 className="text-6xl font-semibold">Sign Up</h1>
                <p className="mt-6 ml-1">
                    Already have an account ?{" "}
                    <Link href="/login">
                        <span className="underline hover:text-blue-400 cursor-pointer">
                            Login
                        </span>
                    </Link>
                </p>

                {/* <div className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                </div> */}

                <div className="mt-10 pl-1 flex flex-col">
                    <label>Name</label>
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                    />
                </div>
                <div className="mt-10 pl-1 flex flex-col">
                    <label>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                    />
                </div>
                <div className="mt-10 pl-1 flex flex-col">
                    <label>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                    />
                </div>
                <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                    onClick={() => onCreateAccount()}
                    disabled={!(username||email||password)}
                >

                    Sign Up
                </button>
            </div>
        </div>

    );
};

export default RegisterForm;