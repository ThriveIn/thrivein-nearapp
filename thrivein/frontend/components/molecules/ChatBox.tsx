import React from "react";
import Layout from "components/Layout";
import ChatList from "components/molecules/ChatList";
import Chat from "components/atoms/Chat";

const ChatBox = () => {
  return (
    <div className='w-full flex flex-col bg-white rounded-[2rem]'>
      <div className='p-5 flex-shrink-0 flex items-start gap-1 border-b-2 border-[#D9D9D9]'>
        <img src='/assets/images/unsplash_mEZ3PoFGs_k.png' />
        <span className='text-input text-base font-medium'>Olga Wazny</span>
      </div>
      <div className='flex-grow flex flex-col gap-4 p-5'>
        <Chat message='Hi, Olga :)' incoming={false} />
        <Chat
          message='I checked out your profile and I love your music proiduction.'
          incoming={false}
        />
        <Chat message='Hey  :)' incoming={true} />
        <Chat message='Thank you so much. Means a lot to me.' incoming={true} />
      </div>
      <div className='px-4 py-6'></div>
    </div>
  );
};

export default ChatBox;
