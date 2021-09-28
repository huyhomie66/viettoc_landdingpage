import "./styles.css";
import logo from "../../../assets/logo.png";

const Banner = () => {
  const title = "GIA TỘC ĐOÀN VIÊN";
  const description =
    "Ứng dụng về dòng họ đầu tiên tại Việt Nam với sứ mệnh kết nối và bảo tồn văn hóa dòng họ truyền thống của người Việt.";

  return (
    <div className="banner col item-center">
      <div className="banner-content">
        <img alt="logo" src={logo} />
        <div className="col">
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
