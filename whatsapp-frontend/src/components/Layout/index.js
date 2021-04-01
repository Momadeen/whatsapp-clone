import React from "react";
import Sidebar from "../Sidebar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  </div>
);

export default Layout;
