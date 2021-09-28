import React from "react";
import HeadBanner from "./head-banner";
import Intro from "./intro";
import FamilyBanner from "./family-banner";

const Body = () => {
  return (
    <React.Fragment>
      <HeadBanner />
      <Intro />
      <FamilyBanner />
    </React.Fragment>
  );
};

export default Body;
