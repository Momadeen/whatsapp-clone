import React from "react";
// import PropTypes from 'prop-types'
import styles from "../../chat.module.scss";

const Message = ({ message, type }) => {
  return (
    <p className={type === "reciever" ? styles.recieverMsg : styles.message}>
      <span className={styles.name}>{message?.name}</span>
      {message?.message}
      <span className={styles.timestamp}>{new Date().toUTCString()}</span>
    </p>
  );
};

Message.propTypes = {};

export default Message;
