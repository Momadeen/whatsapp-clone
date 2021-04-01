import React from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Users from "./components/Users";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Header />
      <SearchInput />
      <Users />
    </div>
  );
};

export default Sidebar;
