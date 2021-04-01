import React from "react";
// import PropTypes from "prop-types";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import styles from "./search.module.scss";

const SearchInput = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchContainer}>
        <SearchOutlinedIcon className={styles.icon} />
        <input placeholder="Search or start new chat" type="text" />
      </div>
    </div>
  );
};

// SearchInput.propTypes = {};

export default SearchInput;
