import "./intro.css";
import intro from "../../assets/intro.png";
import flower from "../../assets/flower.png";
import hat from "../../assets/hat.png";
import vietnam from "../../assets/vietnam.png";
import comeinand from "../../assets/comeinand.png";
import React from "react";

const Block = ({ description, buttonTitle }) => {
  return (
    <div className="block-container">
      <div className="flower">
        <img alt="flower" src={flower} />
      </div>
      <div className="block-body">
        <div className="title">
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

const Testimonial = ({ testimonial }) => {
  return (
    <React.Fragment>
      <div className="testimonial">
        {testimonial.data.map((e) => (
          <div>
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

const Intro = () => {
  const description =
    "Việt Tộc là ứng dụng trên di động nhằm duy trì kết nối giữa các thành viên trong một dòng họ, từ đó củng cố và bảo tồn giá trị văn hóa dòng họ truyền thống quý báu của dân tộc Việt. Với những tính năng thiết thực như tạo và quản lý cây gia phả; thông báo và trao đổi việc dòng họ, gia đình; lưu giữ hình ảnh, công đức, Việt Tộc không chỉ tạo ra không gian để anh em họ hàng giao lưu đoàn tụ, mà còn là công cụ hỗ trợ đắc lực của hội đồng gia tộc trong việc quản lý công việc của dòng họ giữa bối cảnh ngày càng nhiều con cháu xa quê cha đất tổ cũng như dịch bệnh làm hạn chế tương tác trực tiếp giữa người với người. ";
  const buttonTitle = "Xem thêm";

  const testimonial = {
    data: [
      { icon: comeinand, title: "Dòng họ", count: 52 },
      { icon: hat, title: "Người dùng", count: 1252 },
      { icon: vietnam, title: "Tỉnh thành", count: 12 },
    ],
    button: {
      title: "Trở thành dòng họ tiếp theo",
      onClick: () => {},
    },
  };

  return (
    <div className="intro">
      <div>
        <Block description={description} buttonTitle={buttonTitle} />
        <Testimonial testimonial={testimonial} />
      </div>
    </div>
  );
};

export default Intro;
