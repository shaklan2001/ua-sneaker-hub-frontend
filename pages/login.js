import AuthApi from "@/components/AuthApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner"
import { useRouter } from "next/router";




const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();

    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt');
        if (jwt) {
            router.push('/')
        }
    }, [])


    const onSignIn = () => {
        AuthApi.SignIn(email, password).then(resp => {
            console.log(resp.data.user)
            console.log(resp.data.jwt)
            sessionStorage.setItem('user', JSON.stringify(resp.data.user));
            sessionStorage.setItem('jwt', resp.data.jwt);
            toast(" Login Successfully ")
            router.push('/')

        }, (e) => {
            console.log(e);
            toast(e?.response?.data?.error.message)
        })
    }


    return (
        <div className="w-full lg:w-[100%] p-8 md:p-14 flex items-center justify-center lg:justify-center">
            <div className="p-8 w-[600px]">
                <h1 className="text-6xl font-semibold">Login</h1>
                <p className="mt-6 ml-1">
                    Don't have an account ?{" "}
                    <Link href="/register">
                        <span className="underline hover:text-blue-400 cursor-pointer ">
                            Sign Up
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
                    onClick={() => onSignIn()}
                >
                    Sign in
                </button>

            </div>
        </div>
    );
};

export default LoginForm;