"use client";

import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import login from "@/assets/login.jpg";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useRouter } from "next/navigation";
import { matchEmail, matchPassword, matchUsername } from "@/Validations/Auth";

const Signup = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    });
    const [userState, setUserState] = useState({
        userName: false,
        email: false,
        password: false,
    })
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setButtonDisabled(userState.email && userState.password && userState.userName ? false : true)
    }, [user])

    return (
        <div className="flex flex-col text-gray-800">
            <div className="flex justify-center items-center m-3 p-3 bg-white shadow-xl rounded-2xl">
                <span className=" text-4xl italic font-semibold">
                    {" "}
                    Connec<span className="text-sky-600 font-bold">TO</span>
                </span>
            </div>
            <div className="flex flex-col m-3 p-3 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="items-center md:flex hidden">
                    <Image src={login} alt="login" width={450} height={450} />
                </div>
                <div className="flex flex-col justify-center p-4 md:px-14 lg:min-w-[480px] md:bg-sky-200 bg-white rounded-2xl">
                    <span className="text-4xl font-semibold mb-3">Sign Up</span>
                    <span className="font-semibold mb-4 italic">
                        Greetings! let&apos;s create your account...
                    </span>
                    <div className="flex flex-col relative">
                        <input
                            className="w-full py-2 pl-10 font-semibold text-sky-700 placeholder:text-sky-700 border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your name*"
                            type="text"
                            name="userName"
                            id="userName"
                            autoComplete="off"
                            value={user.userName}
                            onChange={(e) => {
                                setUser({ ...user, userName: e.target.value });
                                const userNameError =
                                    document.getElementById("userNameError");
                                if (userNameError) {
                                    const { message } = matchUsername(e.target.value);
                                    setUserState({ ...userState, userName: message ? false : true });
                                    userNameError.innerHTML = message;
                                }
                            }}
                        />
                        <div
                            className="h-1 mb-2 text-[13px] text-semibold bg-transparent text-red-500"
                            id="userNameError"
                        ></div>
                        <input
                            className="w-full py-2 pl-10 mt-4 font-semibold text-sky-700 placeholder:text-sky-700 border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your email*"
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
                        <div
                            className="h-1 mb-2 text-sm text-semibold bg-transparent text-red-500"
                            id="emailError"
                        ></div>
                        <input
                            className="w-full py-2 pl-10 mt-4 font-semibold text-sky-700 placeholder:text-sky-700 border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your password*"
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => {
                                setUser({ ...user, password: e.target.value });
                                const passwordError =
                                    document.getElementById("passwordError");
                                if (passwordError) {
                                    const { message } = matchPassword(e.target.value);
                                    setUserState({ ...userState, password: message ? false : true });
                                    passwordError.innerHTML = message;
                                }
                            }}
                        />
                        <div
                            className="h-1 mb-1 text-sm bg-transparent text-red-500"
                            id="passwordError"
                        ></div>
                        <IoMdPerson className=" text-lg absolute top-[11px] left-2 text-sky-400" />
                        <MdEmail className=" text-lg absolute top-[82px] left-2 text-sky-400" />
                        <FaLock className=" text-lg absolute top-[148px] left-2 text-sky-400" />
                    </div>
                    <div
                        className={`flex items-center justify-center w-full p-2 mt-8 text-white text-xl font-semibold uppercase rounded-2xl ${
                            buttonDisabled
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-sky-400 cursor-pointer hover:bg-sky-700 transition-all duration-300 ease-in-out"
                        } `}
                    >
                        signup
                    </div>
                    <div className="text-md text-center mt-8">
                        Already have an account?{" "}
                        <span
                            className="font-bold ml-2 cursor-pointer hover:text-sky-400 transition-all duration-300 ease-in-out"
                            onClick={() => router.push("/login")}
                        >
                            Login
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
