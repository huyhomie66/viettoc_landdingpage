import "./styles.css";
import hat from "../../../assets/hat.png";
import vietnam from "../../../assets/vietnam.png";
import comeinand from "../../../assets/comeinand.png";
import Testimonial from "./Testimonial";
import Block from "./Block";

import React, { useEffect, useState } from "react";
import { getDevelopmentIndex, getIntro } from "../../../service/api";
const initDescription =
  "Việt Tộc là ứng dụng trên di động nhằm duy trì kết nối giữa các thành viên trong một dòng họ, từ đó củng cố và bảo tồn giá trị văn hóa dòng họ truyền thống quý báu của dân tộc Việt. Với những tính năng thiết thực như tạo và quản lý cây gia phả; thông báo và trao đổi việc dòng họ, gia đình; lưu giữ hình ảnh, công đức, Việt Tộc không chỉ tạo ra không gian để anh em họ hàng giao lưu đoàn tụ, mà còn là công cụ hỗ trợ đắc lực của hội đồng gia tộc trong việc quản lý công việc của dòng họ giữa bối cảnh ngày càng nhiều con cháu xa quê cha đất tổ cũng như dịch bệnh làm hạn chế tương tác trực tiếp giữa người với người. ";

const initTestimonial = {
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

const Intro = ({}) => {
  const buttonTitle = "Xem thêm";
  const [description, setDescription] = useState();
  const [testimonial, setTestimonial] = useState(initTestimonial);

  async function init() {
    try {
      const intro = await getIntro();
      const devIndex = await getDevelopmentIndex();
      await setDescription(intro.result[0].gia_tri);
      await setTestimonial({
        ...testimonial,
        data: [
          { icon: comeinand, title: "Dòng họ", count: devIndex.family },
          { icon: hat, title: "Người dùng", count: devIndex.user },
          { icon: vietnam, title: "Tỉnh thành", count: devIndex.provider },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="intro">
      <div className="col item-center">
        <Block description={description} buttonTitle={buttonTitle} />
        <Testimonial testimonial={testimonial} />
      </div>
    </div>
  );
};

export default Intro;
