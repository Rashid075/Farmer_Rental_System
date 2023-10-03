import React from "react";
import Loannav from "../components/Loan/Loannav";
import LoanHero from "./LoanHero";
import Section from "./Section";
import Footer from "../components/Footer/Footer";

const LoanHome = () => {
  return (
    <div>
      <Loannav />
      <LoanHero/>
      <Section/>
      <Footer/>
    </div>
  );
};

export default LoanHome;
