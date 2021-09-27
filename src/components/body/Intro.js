import { Fragment } from "react";
import "./intro.css";
import intro from "../../assets/intro.png";
import flower from "../../assets/flower.png";

const Block = () => {
  const title = "Giới thiệu";
  const description =
    "Việt Tộc là ứng dụng trên di động nhằm duy trì kết nối giữa các thành viên trong một dòng họ, từ đó củng cố và bảo tồn giá trị văn hóa dòng họ truyền thống quý báu của dân tộc Việt. Với những tính năng thiết thực như tạo và quản lý cây gia phả; thông báo và trao đổi việc dòng họ, gia đình; lưu giữ hình ảnh, công đức, Việt Tộc không chỉ tạo ra không gian để anh em họ hàng giao lưu đoàn tụ, mà còn là công cụ hỗ trợ đắc lực của hội đồng gia tộc trong việc quản lý công việc của dòng họ giữa bối cảnh ngày càng nhiều con cháu xa quê cha đất tổ cũng như dịch bệnh làm hạn chế tương tác trực tiếp giữa người với người. ";
  const buttonTitle = "Xem thêm";

  return (
    <div>
      <div className="intro-block">
        <div className="title">
          <img src={intro} alt="intro" />
        </div>
        <div className="col">
          <p>{description}</p>
          <button>{buttonTitle}</button>
        </div>
      </div>
      <div className="block-footer"></div>
      <img alt="flower" src={flower} />
    </div>
  );
};
const Intro = () => {
  return (
    <div className="intro">
      <Block />
    </div>
  );
};

export default Intro;
