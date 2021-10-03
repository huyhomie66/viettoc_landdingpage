import React from "react";
import HeadBanner from "./head-banner";
import Intro from "./intro";
import FamilyBanner from "./family-banner";
import Price from "./price";
import Register from "./register";
import Contact from "./contact";

const Body = () => {
  return (
    <React.Fragment>
      <HeadBanner />
      <Intro />
      <FamilyBanner />
      {/* <Price /> */}
      <Register />
      <Contact />
    </React.Fragment>
  );
};

export default Body;
