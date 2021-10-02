import "./styles.css";
import logo from "../../../assets/logo.png";
import { getImages, getSlide } from "../../../service/api";
import { useEffect, useState } from "react";
import SlideShow  from '../../../helper/SlideShow/index'

const Banner = () => {
  const title = "GIA TỘC ĐOÀN VIÊN";
  const description =
    "Ứng dụng về dòng họ đầu tiên tại Việt Nam với sứ mệnh kết nối và bảo tồn văn hóa dòng họ truyền thống của người Việt.";

  const [listImage, setListImage] = useState();

  async function init() {
    const slide = await getSlide();
    const imageResult = await Promise.all(
      slide.result.map((e) => e.anh_id && getImages(e.anh_id))
    );
    setListImage(imageResult.filter((e) => !!e));
  }

  useEffect(() => {
    init();
  }, []);

  return (
    // <SlideShow/>
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
