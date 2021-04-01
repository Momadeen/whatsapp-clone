import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import styles from "../users.module.scss";
import useMessages from "../../../../../hooks/useMessages";

const UserRow = ({ user }) => {
  const { lastMessage } = useMessages();
  return (
    <Link to={user?.id} className={styles.user}>
      <Avatar src={user?.img} />
      <div className={styles.info}>
        <h2>{user?.name}</h2>
        <div className={styles.messageInfo}>
          <p className={styles.name}>{lastMessage?.name}:</p>
          <p className={styles.message}>{lastMessage?.message}</p>
        </div>
      </div>
    </Link>
  );
};

// UserRow.propTypes = {

// }

export default UserRow;
