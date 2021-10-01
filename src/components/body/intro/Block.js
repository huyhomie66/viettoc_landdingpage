import "./styles.css";
import intro from "../../../assets/intro.png";
import flower from "../../../assets/flower.png";
import React from "react";

const Block = ({ description, buttonTitle }) => {
    return (
        <div className="block-container">
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
            <div className="block-footer" />
        </div>
    );
};


export default Block;
