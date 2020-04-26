import React, { Fragment } from "react";
import Link from "next/link";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <h1>Header</h1>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
