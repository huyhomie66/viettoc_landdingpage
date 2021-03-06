import "./styles.css";
import logo from "../../../assets/logo.png";
import { getImages, getSlide } from "../../../service/api";
import { useEffect, useState } from "react";
import Slider from "../../slider";
import banner from "../../../assets/banner.png";
import tet from "../../../assets/tet.png";

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
  const arraySlides = [
    {
      img: banner,
    },
    {
      img: tet,
    },
    {
      img: tet,
    },
    {
      img: tet,
    },
  ];
  return <Slider arraySlides={arraySlides} />;
};

export default Banner;
