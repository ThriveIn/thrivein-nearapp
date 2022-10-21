import React from "react";
import Layout from "components/Layout";
import ChatList from "components/molecules/ChatList";
import Chat from "components/atoms/Chat";
import ChatBox from "components/molecules/ChatBox";

const Messaging = () => {
  return (
    <Layout>
      <div className='flex'>
        <div
          style={{
            height: "calc(100vh - 120px)",
          }}
          className='w-[400px] bg-white overflow-auto flex-shrink-0 xl:w-[300px]'
        >
          <ChatList />
        </div>
        <div className='flex-grow bg-main rounded-tl-[30px] p-10'>
          <div className='flex gap-10 h-full'>
            <ChatBox />
            <ChatBox />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messaging;
