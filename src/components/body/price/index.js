import "./styles.css";
import arrowLeft from "../../../assets/arrow-left.png";
import arrowRight from "../../../assets/arrow-right.png";
import Promotions from './Promotion'

const title = "CÁC GÓI TẠI VIỆT TỘC";


const Title = () => (
  <div className="price-container-title row item-center">
    <img alt="arrow-left" src={arrowLeft} />
    <h1>{title}</h1>
    <img alt="arrow-right" src={arrowRight} />
  </div>
);


const Price = () => {
  return (
    <div className="price-container  col item-center">
      <Title />
      <Promotions />
    </div>
  );
};

export default Price;
