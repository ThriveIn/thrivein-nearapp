import React from "react";
import Link from "next/link";

const Login = () => {
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
        <div className='mt-10'>
          <button className='px-8 py-6 text-white text-xl leading-none font-semibold border-2 border-button bg-button rounded-full uppercase w-[322px] flex items-center justify-center'>
            Log in with Wallet
          </button>
        </div>
        <div className='mt-6'>
          <button className='px-8 py-6 text-black text-xl leading-none font-semibold border-2 border-button rounded-full uppercase w-[322px] flex items-center justify-center'>
            Log in With Email
          </button>
        </div>
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
