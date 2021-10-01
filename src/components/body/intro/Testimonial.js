import "./styles.css";
import React from "react";

const Testimonial = ({ testimonial }) => {
    return (
        <React.Fragment>
            <div className="testimonial row ">
                {testimonial.data.map((e, i) => (
                    <div key={i} className="col item-center">
                        <img src={e.icon} alt="icon" />
                        <span>{e.count}</span>
                        <p>{e.title}</p>
                    </div>
                ))}
            </div>
            <button className="next-gen-button" onClick={testimonial.button.onClick}>
                {testimonial.button.title}
            </button>
        </React.Fragment>
    );
};

export default Testimonial;
