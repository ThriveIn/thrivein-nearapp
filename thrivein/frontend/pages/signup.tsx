import React from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <div
      className='w-full h-screen'
      style={{
        backgroundImage: "url(/assets/images/login_background.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className='max-w-3xl w-full h-screen ml-auto flex flex-col justify-center items-center bg-white'>
        <img className='' src='/assets/images/logo_lg.png' alt='ThriveIN' />
        <h1 className='mt-9 text-center text-[2.5rem]'>
          Welcome to <strong className='font-extrabold'>ThriveIN</strong>
        </h1>
        <div className='mt-10'>
          <button className='px-8 py-6 text-white text-xl leading-none font-semibold border-2 border-button bg-button rounded-full uppercase w-[322px] flex items-center justify-center'>
            Sign Up with Wallet
          </button>
        </div>
        <div className='mt-6'>
          <button className='px-8 py-6 text-black text-xl leading-none font-semibold border-2 border-button rounded-full uppercase w-[322px] flex items-center justify-center'>
            Sign up With Email
          </button>
        </div>
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
