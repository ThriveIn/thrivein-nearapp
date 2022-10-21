import React from "react";

const ChatList = () => {
  return (
    <div className='p-4 text-input'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl'>Chats</h1>
        <div className='flex items-center gap-3'>
          <img src='/assets/images/options.png' />
          <img src='/assets/images/new_chat.png' />
        </div>
      </div>
      <div className='mt-5 px-5 py-3 rounded-full border-2 border-input flex items-center gap-3'>
        <img src='/assets/images/search.png' />
        <input className='outline-none flex-grow' />
      </div>
      <div className='mt-4 flex flex-col gap-1.5'>
        {new Array(10).fill(0).map((v, index) => (
          <div
            className='flex gap-2 px-5 py-4 border-2 border-[#D1D1D1] rounded-3xl cursor-pointer'
            key={index}
          >
            <img
              className='w-20 h-20 rounded-full flex-shrink-0'
              src='/assets/images/unsplash_mEZ3PoFGs_k.png'
            />
            <div className='flex-grow'>
              <div className='flex justify-between w-full'>
                <h2 className='text-base font-medium text-ellipsis'>
                  Szilard Perenyi
                </h2>
                <span className='text-button text-xs font-medium'>1d</span>
              </div>
              <p className='mt-3 text-input text-opacity-60 text-sm font-medium leading-tight line-clamp-3'>
                You: It was pleasure working with you. I would love to work with
                you on future projects.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
