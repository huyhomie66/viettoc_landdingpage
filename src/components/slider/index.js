import AwesomeSlider from "react-awesome-slider";
import "./styles.css";

const Slider = ({ images = [] }) => (
    <AwesomeSlider>
        {images.map((img) => (
            <div data-src={img} />
        ))}
    </AwesomeSlider>
);

export default Slider;
