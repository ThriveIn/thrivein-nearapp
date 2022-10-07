import React from "react";

const Header = () => {
  return (
    <div className='w-full py-8 flex items-center'>
      <div className='w-[400px] pl-10'>
        <div className='flex items-center gap-3'>
          <img src='/assets/images/logo.png' alt='ThriveIn' />
          <h1 className='text-3xl font-bold'>ThriveIN</h1>
        </div>
      </div>
      <div className='w-full flex justify-between pr-10 items-center'>
        <div className='w-96 flex items-center gap-4 px-5 py-3 rounded-full border-2 border-gray'>
          <img src='/assets/images/search.png' />
          <input
            className='w-full text-black outline-none'
            placeholder='Search'
          />
        </div>
        <div className='flex items-center gap-6'>
          <img src='/assets/images/home.png' />
          <img src='/assets/images/contact.png' />
          <img src='/assets/images/chat.png' />
          <img src='/assets/images/notification.png' />
          <div className='w-11 border-2 border-button rounded-full cursor-pointer'>
            <img src='/assets/images/default_avatar.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
