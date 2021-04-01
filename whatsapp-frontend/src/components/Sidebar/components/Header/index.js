import React from "react";
// import PropTypes from 'prop-types'

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Link } from "react-router-dom";

import styles from "./header.module.scss";
import { IconButton, Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Avatar
          sizes="24px"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQG-_BDm0WazcA/profile-displayphoto-shrink_200_200/0/1615370680065?e=1622678400&v=beta&t=4h7eqVNOWhjQJJ-yV5NP6KP7Urds4tQfrIDLF0s4XvU"
        />
      </Link>
      <div className={styles.icons}>
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
