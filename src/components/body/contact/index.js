import "./styles.css";
import Fields from "../../Fields";
import location from "../../../assets/location.png";
import mail from "../../../assets/mail.png";
import phone from "../../../assets/phone.png";
import facebook from "../../../assets/facebook.png";

const MessageBlock = () => {
  const contacts = [
    { icon: location, title: "Số 1 Nguyễn Thị Duệ, Yên Hòa, Cầu Giấy, Hà Nội" },
    { icon: mail, title: "xinchao@viettoc.com.vn" },
    { icon: phone, title: "(024) 626 024 57 - Giờ làm việc từ 8:30 đến 17:30" },
    { icon: facebook, title: "fb.com/viettoc" },
  ];
  return (
    <div className="col message-block">
      <h1>Liên hệ</h1>

      {contacts.map((e) => (
        <div className="row item-center content-around">
          <img alt="icon" src={e.icon} /> <p>{e.title}</p>
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
        className="content-around col item-center contact-form redPlum"
      >
        <h1>Để lại lời nhắn </h1>
        <p>
          Hãy nói với Việt Tộc mọi thắc mắc và góp ý của bạn tại đây. Chúng tôi
          trân trọng mọi góp ý giúp Việt Tộc đóng góp nhiều giá trị hơn cho cộng
          đồng.
        </p>
        <Fields fields={fields} />
        <button type="submit" className="submit"></button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact row item-center">
      <ContactBlock />
      <MessageBlock />
    </div>
  );
};

export default Contact;
