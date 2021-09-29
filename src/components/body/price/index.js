import "./styles.css";
import arrowLeft from "../../../assets/arrow-left.png";
import arrowRight from "../../../assets/arrow-right.png";
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
    <div className={`price-item col content-center ${className}`}>
      {promotion && <button className="promotion">{promotion.value}</button>}
      <div className="price row item-center">
        {price && (
          <Fragment>
            <span>{price}</span>
            <h1 className="unit">đ</h1>
            <p>/năm</p>
          </Fragment>
        )}
      </div>

      <h1>{title?.value}</h1>

      {description &&
        description.map((e, i) => {
          return (
            <div key={i} className="description row item-center">
              <img src={rectangle} alt="rectangle" />
              <div className="row item-center">
                <h4>{e.bold}</h4>
                <p>{e.normal}</p>
              </div>
            </div>
          );
        })}
      {button && (
        <button className="more" onClick={button.onClick}>
          {button.title}
        </button>
      )}
    </div>
  );
};

const Price = () => {
  const price = {
    normal: [
      {
        price: "0",
        title: {
          value: "Khởi đầu",
          className: "price-normal-title",
        },
        description: [
          {
            bold: "320 thành viên",
            normal: "trong cây gia phả",
          },
          {
            bold: "25 GB",
            normal: "dung lượng lưu trữ",
          },
        ],
        button: {
          title: "Xem thêm",
          onClick: () => {},
          className: "price-normal-button",
        },
      },
      {
        price: "4.000.000",
        title: {
          value: "Cơ bản",
          className: "price-normal-title",
        },
        description: [
          {
            bold: "200 thành viên",
            normal: "trong cây gia phả",
          },
          {
            bold: "20 GB",
            normal: "dung lượng lưu trữ",
          },
        ],
        button: {
          title: "Xem thêm",
          onClick: () => {},
          className: "price-normal-button",
        },
      },
      {
        promotion: { value: "Phổ biến nhất" },

        price: "5.000.000",
        title: {
          value: "Đoàn viên",
          className: "price-normal-title",
        },
        description: [
          {
            bold: "320 thành viên",
            normal: "trong cây gia phả",
          },
          {
            bold: "25 GB",
            normal: "dung lượng lưu trữ",
          },
        ],
        button: {
          title: "Xem thêm",
          className: "price-normal-button",
          onclick: () => {},
        },
      },
    ],
    special: [
      {
        className: "special-1",
        price: "15.000.000",
        title: {
          value: "ĐỒNG TÂM",
          className: "price-special-title",
        },
        description: [
          {
            bold: "1000 thành viên",
            normal: "trong cây gia phả",
          },
          {
            bold: "100 GB",
            normal: "dung lượng lưu trữ",
          },
        ],
        button: {
          title: "Xem thêm",
          className: "price-special-title",
          onClick: () => {},
        },
      },
      {
        className: "special-2",
        promotion: {
          value: "Phổ biến nhất",
          className: "price-special-promotion",
        },
        price: "50.000.000",
        title: {
          value: "THỊNH VƯỢNG",
          className: "price-special-title",
        },
        description: [
          {
            bold: "1000 thành viên",
            normal: "trong cây gia phả",
          },
          {
            bold: "100 GB",
            normal: "dung lượng lưu trữ",
          },
        ],
        button: {
          title: "Xem thêm",
          className: "price-special-title",
          onClick: () => {},
        },
      },
      {
        className: "special-3",
        promotion: {
          value: "Đặc biệt",
          className: "price-special-promotion",
        },
        title: {
          value: "BẢN SẮC",
          className: "price-special-title",
        },
        description: [
          {
            bold: "1000 thành viên",
            normal: "trong cây gia phả",
          },
          {
            bold: "100 GB",
            normal: "dung lượng lưu trữ",
          },
        ],
        button: {
          title: "Liên hệ",
          className: "price-special-button",
          onClick: () => {},
        },
      },
    ],
  };

  const BlockBackground = ({ children }) => (
    <div className="price-bg ">
      <div>{children}</div>
    </div>
  );

  const Title = () => (
    <div className="price-container-title row item-center">
      <img alt="arrow-left" src={arrowLeft} />
      <h1>{title}</h1>
      <img alt="arrow-right" src={arrowRight} />
    </div>
  );

  const Promotions = () => (
    <Fragment>
      <div className="price-normal row">
        {price.normal.map((props, key) => (
          <PriceBanner {...props} key={key} />
        ))}
      </div>
      <div className="price-special">
        <div className="row">
          {price.special.map((props, key) => (
            <PriceBanner {...props} key={key} />
          ))}
        </div>
      </div>
    </Fragment>
  );

  const title = "CÁC GÓI TẠI VIỆT TỘC";

  return (
    <div className="price-container  col item-center">
      <Title />
      <Promotions />
    </div>
  );
};

export default Price;
