import "./styles.css";
import arrowLeft from "../../../assets/arrow-left.png";
import arrowRight from "../../../assets/arrow-right.png";
import rectangle from "../../../assets/rectangle.png";

const PriceBanner = ({ price, title, description, button }) => {
  return (
    <div className={"price-normal-item"}>
      <div className="price">
        <span>{price}</span>
        <h1 className="unit">đ</h1>
        <p>/năm</p>
      </div>

      <h1>{title?.value}</h1>
      {description &&
        description.map((e, i) => {
          return (
            <div key={i}>
              <h5>{e.bold}</h5>
              <p>{e.normal}</p>
              <img src={rectangle} alt="rectangle" />
            </div>
          );
        })}
      {button && (
        <button onClick={button.onClick} className={button.className}>
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
        promotion: { className: "price-normal-promotion" },
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
        price: "15.000.000",
        title: {
          value: "Đồng tâm",
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
        promotion: {
          value: "Phổ biến nhất",
          className: "price-special-promotion",
        },
        price: "50.000.000",
        title: {
          value: "Đồng tâm",
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
        promotion: {
          value: "Phổ biến nhất",
          className: "price-special-promotion",
        },
        price: "50.000.000",
        title: {
          value: "Đồng tâm",
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

  const title = "CÁC GÓI TẠI VIỆT TỘC";
  return (
    <div className="price-container">
      <div className="title">
        <img alt="arrow-left" src={arrowLeft} />
        <h1>{title}</h1>
        <img alt="arrow-right" src={arrowRight} />
      </div>
      <div className="price-normal">
        {price.normal.map((props, key) => (
          <PriceBanner {...props} key={key} />
        ))}
      </div>
      <div className="price-special">
        {price.special.map((props, key) => (
          <PriceBanner {...props} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Price;
