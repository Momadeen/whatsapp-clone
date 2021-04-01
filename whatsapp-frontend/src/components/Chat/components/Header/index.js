import React from "react";
import { Avatar, IconButton } from "@material-ui/core";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import styles from "../../chat.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Avatar />
      <div className={styles.headerInfo}>
        <h3>Mates</h3>
        <p>Last seen at...</p>
      </div>

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
