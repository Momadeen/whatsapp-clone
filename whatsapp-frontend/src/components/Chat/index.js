import React from "react";
import PropTypes from "prop-types";
import styles from "./chat.module.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import Input from "./components/Input";
import useMessages from "../../hooks/useMessages";

const Chat = () => {
  const { messages } = useMessages();

  return (
    <div className={styles.chat}>
      <Header />
      <Content messages={messages} />
      <Input />
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Chat;
