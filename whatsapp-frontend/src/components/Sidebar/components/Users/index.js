import React from "react";
import UserRow from "./UserRow";
// import PropTypes from 'prop-types'
import { users } from "./dummy";
import styles from "./users.module.scss";

const Users = () => {
  return (
    <div className={styles.users}>
      {users?.map((user) => (
        <UserRow user={user} />
      ))}
    </div>
  );
};

// Users.propTypes = {

// }

export default Users;
