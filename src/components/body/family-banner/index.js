import "./styles.css";
import tickit from '../../../assets/tickitFamily.png'
const FamilyBanner = () => {
  return (
    <div className="family-banner">
      <div className="family-info col content-around">
        <div className='family-container'>
          <div style={{display:'flex',alignSelf:'center'}}>
          <img className='family-tickit' src={tickit}/>
          <div>
          <h1 className='family-title'>Việt Tộc giúp dòng họ chúng tôi gắn kết hơn</h1>
          <p className='family-content'>
          Tôi rất vui vì có một ứng dụng dành riêng cho dòng họ. Việt Tộc đã và
          đang giúp ích chúng tôi rất nhiều trong việc kết nối anh em họ hàng,
          để mọi người có một không gian chung, đóng góp cho sự phát triển
          trường vinh của chi họ.
        </p>
        <h3 className='family-arthor'>Bác Lê Trường Sơn</h3>
        <p className='family-address'>Chi họ Lê - Thuận Thành, Bắc Ninh</p>
          </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default FamilyBanner;
