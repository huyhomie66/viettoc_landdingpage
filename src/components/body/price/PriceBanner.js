import "./styles.css";
import rectangle from "../../../assets/rectangle.png";
import { Fragment } from "react";

const PriceBanner = ({
    className = "",
    price,
    title,
    description,
    button,
    promotion,
}) => {
    return (
        <div className={`price-item-bg col content-center ${className}`}>
            <div className={`price-item`}>
                <button
                    className="promotion"
                    style={{
                        backgroundColor: promotion
                            ? "hsla(36, 100%, 93%, 1)"
                            : "transparent",
                    }}
                >
                    {promotion && promotion.value}
                </button>

                <div
                    className="col"
                    style={{ minHeight: "200px", justifyContent: "flex-start" }}
                >
                    <div className="price row item-center">
                        {price && (
                            <Fragment>
                                <span className={price.className}>{price?.value}</span>
                                <h1 className={`unit ${price?.className}`}> đ</h1>
                                <p className={price?.unitClassName}>/năm</p>
                            </Fragment>
                        )}
                    </div>

                    <h1 className={`price-title ${title?.className} redPlum`}>
                        {title?.value}
                    </h1>
                </div>

                {description &&
                    description.map((e, i) => {
                        return (
                            <div key={i} className="description row item-center">
                                <img src={rectangle} alt="rectangle" />
                                <div className="row item-center" style={{ height: 40 }}>
                                    <h4 className={e?.className}>{e.bold}</h4>
                                    <p className={e?.className}>{e.normal}</p>
                                </div>
                            </div>
                        );
                    })}
                {button && (
                    <button className={`see-more ${button.className}`} onClick={button.onClick}>
                        {button.title}
                    </button>
                )}
            </div>
        </div>
    );
};

export default PriceBanner;
