import React from "react";
import { AsideNews } from "./NewsletterStyles";

const Newsletter = () => {
  return (
  <AsideNews>
    <h2>Get special Discounts</h2>
    <p className="text">Input email address and complete your subscription to get our special offer.</p>
    <form className="form">
        <input type="email" placeholder="Agregue su email"/>
        <input type="submit" value="Suscribirse" />
    </form>
  </AsideNews>
  );
};

export default Newsletter;