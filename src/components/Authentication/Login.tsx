"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import signup from "@/assets/signup.jpg";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { matchEmail } from "@/Validations/Auth";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [userState, setUserState] = useState({
        email: false,
        password: false,
    })
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = () => {
        
    };

    useEffect(() => {
        setButtonDisabled(userState.email && userState.password ? false : true)
    })

    const router = useRouter();
    return (
        <div className="flex flex-col text-gray-800">
            <div className="flex justify-center items-center m-3 p-3 bg-white shadow-xl rounded-2xl">
                <span className="text-4xl italic font-semibold">
                    {" "}
                    Connec<span className="text-sky-600 font-bold">TO</span>
                </span>
            </div>
            <div className="flex flex-col m-3 p-3 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center p-4 md:py-8 md:px-14 lg:min-w-[470px] md:bg-sky-200 bg-white rounded-2xl">
                    <div className="text-4xl font-semibold mb-3 mt-8 md:mt-0">
                        Login
                    </div>
                    <span className="font-semibold mb-8 italic">
                        Greetings! Please enter your details...
                    </span>
                    <div className="flex flex-col relative">
                        <input
                            className="w-full py-2 pl-10 mt-4 font-semibold text-sky-700 placeholder:text-sky-700 md:border-none border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your email"
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => {
                                setUser({ ...user, email: e.target.value });
                                const emailError =
                                    document.getElementById("emailError");
                                if (emailError) {
                                    const { message } = matchEmail(e.target.value);
                                    setUserState({ ...userState, email: message ? false : true });
                                    emailError.innerHTML = message;
                                }
                            }}
                        />
                        <div className="h-1 mb-2 text-[13px] text-semibold bg-transparent text-red-500" id="emailError"></div>
                        <input
                            className="w-full py-2 pl-10 mt-4 font-semibold text-sky-700 placeholder:text-sky-700 md:border-none border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => {
                                setUser({ ...user, password: e.target.value });
                                const passwordError =
                                    document.getElementById("passwordError");
                                if (passwordError) {
                                    setUserState({ ...userState, password: e.target.value.length===0 ? false : true });
                                    passwordError.innerHTML = e.target.value.length>0 ? "" : "Password cannot be empty";
                                }
                            }}
                        />
                        <div className="h-1 mb-2 text-[13px] text-semibold bg-transparent text-red-500" id="passwordError"></div>
                        <MdEmail className=" text-lg absolute top-[28px] left-2 text-sky-400" />
                        <FaLock className=" text-lg absolute top-[95px] left-2 text-sky-400" />
                    </div>
                    <div className="flex justify-between w-full mt-8">
                        <div className="md:mr-24 mr-3 flex justify-between items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="md:w-5 w-4 md:h-5 h-4 mr-2 cursor-pointer"
                            />
                            <span className="text-md">Remember me</span>
                        </div>
                        <div className="font-bold cursor-pointer hover:text-sky-400 transition-all duration-300 ease-in-out">
                            Forgot password?
                        </div>
                    </div>
                    <div
                        className={`flex items-center justify-center w-full p-2 mt-8 text-white text-xl font-semibold uppercase rounded-2xl ${
                            buttonDisabled
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-sky-400 cursor-pointer hover:bg-sky-700 transition-all duration-300 ease-in-out"
                        } `}
                    >
                        Login
                    </div>
                    <div className="text-md text-center mt-8">
                        Don&apos;t have an account?{" "}
                        <span
                            className="font-bold ml-2 cursor-pointer hover:text-sky-400 transition-all duration-300 ease-in-out"
                            onClick={() => router.push("/signup")}
                        >
                            Sign up
                        </span>
                    </div>
                </div>
                <div className="md:flex items-center hidden">
                    <Image src={signup} alt="login" width={450} height={450} />
                </div>
            </div>
        </div>
    );
};

export default Login;
