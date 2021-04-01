import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "../../chat.module.scss";
import Message from "./Message";

const Content = ({ messages }) => {
  const chatRef = useRef();
  console.log(chatRef.current);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatRef?.current?.scrollHeight]);

  return (
    <div ref={chatRef} className={styles.content}>
      {messages?.map((message) => (
        <Message message={message} type={message?.received ? "reciever" : ""} />
      ))}
    </div>
  );
};

Content.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Content;
