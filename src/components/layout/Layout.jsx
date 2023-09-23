import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/Header";

const Layout = ({ children, isLoading }) => {
  return (
    <>
      <Header/>
        <div>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
