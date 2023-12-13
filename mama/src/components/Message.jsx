import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isSender = message.senderId === currentUser.uid;

  return (
    <div
      ref={ref}
      className={`message ${isSender ? "owner bg-blue-500" : "recipient bg-gray-300"}`}
    >
      <div className="messageInfo">
        <img
          src={isSender ? currentUser.photoURL : data.user.photoURL}
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p className={isSender ? "text-white" : "text-gray-800"}>
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
