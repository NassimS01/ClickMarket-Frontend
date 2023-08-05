import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;