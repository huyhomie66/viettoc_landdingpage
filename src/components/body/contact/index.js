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
import youtubeWhite from "../../../assets/youtube-white.png";
import zaloWhite from "../../../assets/zalo-white.png";
import facebookWhite from "../../../assets/facebook-white.png";

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

      {contacts.map((e, i) => (
        <div key={i} className="row item-center " style={{}}>
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
    <div className="row contact-info content-around">
      <div className="col content-between">
        <img alt="logo" src={logo} className="icon" />
        <h3 className="text-white">GIA TỘC ĐOÀN VIÊN</h3>
      </div>
      <div className="col content-between">
        <h1 className="text-gold">CÔNG TY CP VIỆT TỘC</h1>
        {[
          {
            icon: locationWhite,
            text: "Số 1 Nguyễn Thị Duệ, Yên Hòa, Cầu Giấy, Hà Nội",
          },
          { icon: mailWhite, text: "xinchao@viettoc.com.vn" },
          { icon: phoneWhite, text: "(024) 626 024 57" },
        ].map((e, i) => (
          <div className="row item-center" key={i}>
            <img alt="icon" src={e.icon} className="pd-right-30" />
            <p className="text-white ">{e.text}</p>
          </div>
        ))}
      </div>
      <div className="col content-between">
        <h1 className="text-gold">Menu</h1>

        {["Trang chủ", "Chính sách", "Bài viết", "Liên hệ"].map((e, i) => (
          <p className="text-white" key={i}>
            {e}
          </p>
        ))}
      </div>
      <div className="col content-between">
        <h1 className="text-gold">Liên hệ</h1>
        {["Đăng ký", "Follow Us"].map((e, i) => (
          <p key={i} className="text-white">
            {e}
          </p>
        ))}
        <div className="row item-center content-around">
          {[zaloWhite, facebookWhite, youtubeWhite].map((e, i) => (
            <img alt="icon" src={e} style={{ height: 20, width: 20 }} key={i} />
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
