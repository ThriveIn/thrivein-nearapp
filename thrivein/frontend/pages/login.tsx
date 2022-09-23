import React, { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

import { PublicAxios } from "api/Axios";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [loginMode, setLoginMode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const res = await PublicAxios.post("/api/auth/signin", data);
      console.log({ res });
    } catch (err) {
      setError(err?.message);
    }
  };

  return (
    <div
      className='w-full h-screen'
      style={{
        backgroundImage: "url(/assets/images/login_background.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className='max-w-3xl w-full h-screen mr-auto flex flex-col justify-center items-center bg-white'>
        <img className='' src='/assets/images/logo_lg.png' alt='ThriveIN' />
        <h1 className='mt-9 text-center text-[2.5rem]'>
          Welcome to <strong className='font-extrabold'>ThriveIN</strong>
        </h1>
        {!loginMode ? (
          <>
            <div className='mt-10 w-[400px]'>
              <button className='px-8 py-6 text-white text-xl leading-none font-semibold border-2 border-button bg-button rounded-full uppercase flex items-center justify-center w-full'>
                Log in with Wallet
              </button>
            </div>
            <div className='mt-6 w-[400px]'>
              <button
                className='px-8 py-6 text-black text-xl leading-none font-semibold border-2 border-button rounded-full uppercase flex items-center justify-center w-full'
                onClick={() => {
                  setLoginMode("EMAIL");
                }}
              >
                Log in With Email
              </button>
            </div>
          </>
        ) : null}
        {loginMode === "EMAIL" ? (
          <form className='mt-10 w-[400px]' onSubmit={handleSubmit(onSubmit)}>
            <input
              className={`px-5 py-[30px] text-input border-2 border-input border-opacity-50 rounded-full w-full ${
                error ? "border-[2.5px] border-error" : ""
              }`}
              placeholder='Email'
              {...register("email", { required: true })}
            />
            {error && (
              <p className='mt-2 text-xs font-semibold pl-6 text-error'>
                {error}
              </p>
            )}
            <div className='relative mt-6 px-5 py-[30px] border-2 border-input border-opacity-50 rounded-full w-full flex items-center gap-2'>
              <div className='flex-grow flex pr-2 gap-2 items-center'>
                <input
                  className='text-input outline-none flex-grow items-center'
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  {...register("password", { required: true })}
                />
                <img
                  src={`/assets/images/${
                    showPassword ? "hide_password.png" : "show_password.png"
                  }`}
                  className='cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div className='w-0 h-4 border border-input' />
              <span className='text-button text-base leading-none cursor-pointer'>
                Forgot?
              </span>
            </div>
            <button
              className='px-8 py-6 mt-6 text-white text-xl leading-none font-semibold border-2 border-button bg-button rounded-full uppercase flex items-center justify-center w-full cursor-pointer'
              type='submit'
            >
              Log in
            </button>
          </form>
        ) : null}
        <p className='mt-3 text-center text-sm font-light text-black'>
          Don't have an account?{" "}
          <Link href='signup'>
            <a className='text-button font-bold underline'>Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
