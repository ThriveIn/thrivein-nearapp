import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import { PublicAxios } from "../api/Axios";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [signupMode, setSignupMode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await PublicAxios.post("/api/users", data);
  };

  return (
    <div
      className='w-full h-screen'
      style={{
        backgroundImage: "url(/assets/images/login_background.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className='max-w-3xl w-full h-screen ml-auto flex flex-col justify-center items-center bg-white'>
        <div className='flex flex-col justify-center items-center'>
          <img className='' src='/assets/images/logo_lg.png' alt='ThriveIN' />
          <h1 className='mt-9 text-center text-[2.5rem]'>
            Welcome to <strong className='font-extrabold'>ThriveIN</strong>
          </h1>
        </div>
        {!signupMode ? (
          <>
            <div className='mt-10 w-[400px]'>
              <button
                className='px-8 py-6 text-white text-xl leading-none font-semibold border-2 border-button bg-button rounded-full uppercase flex items-center justify-center w-full'
                onClick={() => setSignupMode("WALLET")}
              >
                Sign Up with Wallet
              </button>
            </div>
            <div className='mt-6 w-[400px]'>
              <button
                className='px-8 py-6 text-black text-xl leading-none font-semibold border-2 border-button rounded-full uppercase flex items-center justify-center w-full'
                onClick={() => setSignupMode("EMAIL")}
              >
                Sign up With Email
              </button>
            </div>
          </>
        ) : null}
        {signupMode === "EMAIL" ? (
          <form
            className='mt-10 flex flex-col gap-8 w-[400px]'
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className='px-5 py-[30px] text-input border-2 border-input border-opacity-50 rounded-full'
              placeholder='Full name'
              {...register("fullName", { required: true })}
            />
            <input
              className='px-5 py-[30px] text-input border-2 border-input border-opacity-50 rounded-full'
              placeholder='Email'
              {...register("email", { required: true })}
            />
            <div className='relative w-full'>
              <input
                className='px-5 py-[30px] text-input border-2 border-input border-opacity-50 rounded-full w-full'
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                {...register("password", { required: true })}
              />
              <img
                src={`/assets/images/${
                  showPassword ? "hide_password.png" : "show_password.png"
                }`}
                className='absolute right-[30px] top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <button
              className='px-8 py-6 text-white text-xl leading-none font-semibold border-2 border-button bg-button rounded-full uppercase flex items-center justify-center w-full cursor-pointer'
              type='submit'
            >
              Sign Up
            </button>
          </form>
        ) : null}
        <p className='mt-3 text-center text-sm font-light text-black'>
          Already have an account?{" "}
          <Link href='login'>
            <a className='text-button font-bold underline'>Log in</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
