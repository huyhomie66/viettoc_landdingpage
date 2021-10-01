import { useState } from "react";
import "./styles.css";
import back from "../../../assets/back.png";
import happyFamily from "../../../assets/happy-family.png";
import Fields from "../../Fields";
import Modal from './Modal'


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
      {
        type: "select",
        label: "Tỉnh",
        name: "provider",
        selectData: [{ value: "", text: "" }],
      },
      {
        type: "select",
        label: "Huyện",
        name: "provider",
        selectData: [{ value: "", text: "" }],
      },
      {
        type: "select",
        label: "Xã",
        name: "provider",
        selectData: [{ value: "", text: "" }],
      },
      {
        label: "Địa chỉ chi tiết",
        name: "address_detail",
        selectData: [{ value: "", text: "" }],
      },
    ],
    next: "Tiếp theo",
  },
  {
    title: "Thông Tin Người Quản Lý",
    fields: [
      { name: "full_name", label: "Họ và tên" },
      { name: "phone", label: "Số điện thoại" },
      { name: "email", label: "Email", type: "select", selectData: [] },
    ],
    next: "Hoàn tất đăng ký",
  },
  {
    frame: happyFamily,
    title: "Đăng ký thành công",
    description:
      "Cho phép người dùng thay đổi số điện thoại và email để đăng ký tài khoản khác.",

    next: "Trở về trang chủ",
  },
];

const Register = () => {
  const [currentStep, setStep] = useState(0);

  const onSubmit = (e) => {
    console.log(e);
    if (currentStep !== steps.length) {
      setStep(currentStep + 1);
    }

    e.preventDefault();
  };

  return (
    <div className="register-banner col item-center content-center ">
      <Modal>
        <div className="row modal-head item-center" onClick={() => setStep(currentStep - 1)}>
          <img src={back} alt="back" /> <h4>Bước {currentStep}/3</h4>
        </div>
        {steps[currentStep].frame && (
          <img alt="frame" src={steps[currentStep].frame} className="frame" />
        )}
        <h1 className="title redPlum"> {steps[currentStep].title} </h1>
        {steps[currentStep].description && (
          <p className="description"> {steps[currentStep].description}</p>
        )}
        <form
          onSubmit={onSubmit}
          className="form content-around  col item-center"
        >
          <Fields fields={steps[currentStep].fields} />
          <button type="submit" className="submit">
            {steps[currentStep].next}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
