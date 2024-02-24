"use client";

import Image from "next/image";
import React from "react";
import login from "@/assets/login.jpg";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useRouter } from "next/navigation";

const Signup = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col text-gray-800">
            <div className="flex justify-center items-center m-3 p-3 bg-white shadow-xl rounded-2xl">
                <span className=" text-4xl italic font-semibold">
                    {" "}
                    Connec<span className="text-sky-600 font-bold">TO</span>
                </span>
            </div>
            <div className="flex flex-col m-3 p-3 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="items-center md:flex hidden">
                    <Image src={login} alt="login" width={500} height={500} />
                </div>
                <div className="flex flex-col justify-center p-4 md:py-8 md:px-14 lg:min-w-[480px] md:bg-sky-200 bg-white rounded-2xl">
                    <span className="text-4xl font-semibold mb-3">
                        Sign Up
                    </span>
                    <span className="font-semibold mb-8 italic">
                        Greetings! let&apos;s create your account...
                    </span>
                    <div className="flex flex-col space-y-4 relative">
                        <input
                            className="w-full py-2 pl-10 font-semibold text-sky-700 placeholder:text-sky-700 border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your name"
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="off"
                        />
                        <input
                            className="w-full py-2 pl-10 font-semibold text-sky-700 placeholder:text-sky-700 border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your email"
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="off"
                        />
                        <input
                            className="w-full py-2 pl-10 font-semibold text-sky-700 placeholder:text-sky-700 border-sky-400 border-b-[1px] md:rounded-lg outline-none"
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <IoMdPerson className=" text-lg absolute top-[-4px] left-2 text-sky-400" />
                        <MdEmail className=" text-lg absolute top-[53px] left-2 text-sky-400" />
                        <FaLock className=" text-lg absolute top-[108px] left-2 text-sky-400" />
                    </div>
                    <div className="flex items-center justify-center w-full p-2 mt-8 bg-sky-400 text-white text-xl font-semibold uppercase rounded-2xl cursor-pointer hover:bg-sky-700 transition-all duration-300 ease-in-out">
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
