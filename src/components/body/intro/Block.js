import "./styles.css";
import intro from "../../../assets/intro.png";
import flower from "../../../assets/flower.png";
import React from "react";

const BlockDesktop = ({ description, buttonTitle }) => {
  return (
    <React.Fragment>
      <div className="flower">
        <img alt="flower" src={flower} />
      </div>
      <div className="block-body row">
        <div className="title col item-center content-center">
          <img src={intro} alt="intro" />
        </div>
        <div className="col">
          <p>{description}</p>
          <button>{buttonTitle}</button>
        </div>
      </div>
    </React.Fragment>
  );
};

const BlockMobile = () => {
  return (
    <React.Fragment>
      <div className="block-mobile col">
        <div className="bg-blue "></div>
      </div>
    </React.Fragment>
  );
};

const Block = ({ description, buttonTitle }) => {
  return (
    <div className="block-container">
      {/* <BlockDesktop description={description} buttonTitle={buttonTitle} /> */}
      <BlockMobile />
      <div className="block-footer" />
    </div>
  );
};

export default Block;
