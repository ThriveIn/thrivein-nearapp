import React from "react";

interface IChatProps {
  message: string;
  incoming?: boolean;
}

const Chat: React.FC<IChatProps> = ({ message, incoming = false }) => {
  return (
    <div className={`${incoming ? "text-left" : "text-right"}`}>
      <div
        className={`p-5 inline-block ${
          incoming
            ? "bg-white rounded-[35px] rounded-bl-none border-2 border-[#D1D1D1]"
            : "bg-[#EBEBEB] rounded-[35px] rounded-br-none"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default Chat;
