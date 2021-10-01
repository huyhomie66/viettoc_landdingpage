import "./styles.css";
import logo from "../../../assets/logo.png";
import { getImages, getSlide } from '../../../service/api'
import { useEffect } from "react";

const Banner = () => {
  const title = "GIA TỘC ĐOÀN VIÊN";
  const description =
    "Ứng dụng về dòng họ đầu tiên tại Việt Nam với sứ mệnh kết nối và bảo tồn văn hóa dòng họ truyền thống của người Việt.";

  async function init() {
    const slide = await getSlide()
    const images = await getImages(slide?.result)
    console.log({ images });
  }

  useEffect(() => {
    init()
  }, [])

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
