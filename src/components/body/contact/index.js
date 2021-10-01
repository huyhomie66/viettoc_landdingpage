import "./styles.css";
import Fields from "../../Fields";
import location from "../../../assets/location.png";
import mail from "../../../assets/mail.png";
import phone from "../../../assets/phone.png";
import facebook from "../../../assets/facebook.png";
import logo from "../../../assets/logo.png";
import mailWhite from "../../../assets/mail-white.png";
import phoneWhite from "../../../assets/phone-white.png";
import locationWhite from "../../../assets/location-white.png";
import youtube from "../../../assets/youtube.png";
import zalo from "../../../assets/zalo.png";

import React from "react";

const MessageBlock = () => {
  const contacts = [
    { icon: location, title: "Số 1 Nguyễn Thị Duệ, Yên Hòa, Cầu Giấy, Hà Nội" },
    { icon: mail, title: "xinchao@viettoc.com.vn" },
    { icon: phone, title: "(024) 626 024 57 - Giờ làm việc từ 8:30 đến 17:30" },
    { icon: facebook, title: "fb.com/viettoc" },
  ];
  return (
    <div className="col message-block">
      <h1 className="contact-title ">Liên hệ</h1>

      {contacts.map((e) => (
        <div
          className="row item-center "
          style={{
            marginBottom: "20px",
          }}
        >
          <img
            alt="icon"
            src={e.icon}
            style={{
              marginRight: "10px",
              height: 25,
              width: 23,
            }}
          />
          <p>{e.title}</p>
        </div>
      ))}
    </div>
  );
};

const ContactBlock = () => {
  const fields = [
    {
      label: "Họ và tên",
      name: "full_name",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Số điện thoại",
      name: "phone",
    },
    {
      label: "Nội dung",
      name: "note",
      placeholder: "Để lại lời nhắn",
      type: "text-area",
    },
  ];
  const onSubmit = () => {};

  return (
    <div className="col contact-block">
      <form
        onSubmit={onSubmit}
        className="content-around col item-center contact-form "
      >
        <h1 className="redPlum contact-title ">Để lại lời nhắn </h1>
        <p>
          Hãy nói với Việt Tộc mọi thắc mắc và góp ý của bạn tại đây. Chúng tôi
          trân trọng mọi góp ý giúp Việt Tộc đóng góp nhiều giá trị hơn cho cộng
          đồng.
        </p>
        <Fields fields={fields} />
        <button type="submit" className="submit">
          Gửi
        </button>
      </form>
    </div>
  );
};

const Info = () => {
  return (
    <div className="row contact-intro content-around">
      <div className="col content-between">
        <img alt="logo" src={logo} />
        <h4>GIA TỘC ĐOÀN VIÊN</h4>
      </div>
      <div className="col content-around">
        <h3>CÔNG TY CP VIỆT TỘC</h3>
        <div className="row item-center content-between">
          <img alt="icon" src={locationWhite} />
          <p>Số 1 Nguyễn Thị Duệ, Yên Hòa, Cầu Giấy, Hà Nội</p>
        </div>
        <div className="row item-center content-between">
          <img alt="icon" src={mailWhite} />
          <p>xinchao@viettoc.com.vn</p>
        </div>
        <div className="row item-center content-between">
          <img alt="icon" src={phoneWhite} />
          <p>(024) 626 024 57</p>
        </div>
      </div>
      <div className="col content-between">
        <h3>CÔNG TY CP VIỆT TỘC</h3>
        <p>Trang chủ</p>
        <p>Chính sách</p>
        <p>Bài viết</p>
        <p>Liên hệ</p>
      </div>
      <div className="col content-between">
        <p>Đăng ký</p>
        <p>Follow Us</p>
        <div className="row item-center content-around">
          {[zalo, facebook, youtube].map((e) => (
            <img alt="icon" src={e} style={{ height: 20, width: 20 }} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact row item-center">
        <ContactBlock />
        <MessageBlock />
      </div>
      <Info />
    </React.Fragment>
  );
};

export default Contact;
