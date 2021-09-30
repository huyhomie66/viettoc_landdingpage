import { useState } from "react";
import "./styles.css";
import back from "../../../assets/back.png";

const Modal = ({ children }) => {
  return <div className="modal col  ">{children}</div>;
};

const steps = [
  {
    title: "Khởi tạo tài khoản dòng họ",
    description:
      "Để đưa dòng họ của mình lên Việt Tộc, vui lòng nhập các thông tin sau để tạo một tài khoản quản lý",
    fields: [
      { name: "family_name", label: "Tên dòng họ *" },
      { name: "family_level", label: "Dòng họ của bạn có bao nhiêu đinh *" },
    ],
    next: "Tiếp theo",
  },
  {
    title: "Khởi tạo tài khoản dòng họ",

    fields: [
      { name: "provider", label: "Tỉnh" },
      { name: "district", label: "Huyện" },
      { name: "commune", label: "Xã" },
      { name: "address_detail", label: "Địa chỉ chi tiết" },
    ],
    next: "Tiếp theo",
  },
  {
    title: "Thông Tin Người Quản Lý",
    fields: [
      { name: "full_name", label: "Họ và tên" },
      { name: "phone", label: "Số điện thoại" },
      { name: "email", label: "Email" },
    ],
    next: "Hoàn tất đăng ký",
  },
  {
    title: "Đăng ký thành công",
    description:
      "Cho phép người dùng thay đổi số điện thoại và email để đăng ký tài khoản khác.",

    next: "Trở về trang chủ",
  },
];

const Register = () => {
  const [currentStep, setStep] = useState(0);
  return (
    <div className="register-banner col item-center content-center ">
      <Modal>
        <div className="row modal-head item-center">
          <img src={back} alt="back" /> <h4>Bước {currentStep}/3</h4>
        </div>

        <button>{steps[currentStep].next}</button>
      </Modal>
    </div>
  );
};

export default Register;
