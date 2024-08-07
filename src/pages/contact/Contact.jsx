import "./contact.scss";

const Contact = () => {
  return (
    <div className="Contact_Main">
      <div className="contact">
        <div className="texts">
          <div className="title">
            <h3>Vị trí cửa hàng</h3>
            <p>Hệ thống cửa hàng của LOGO trên địa bàn Thành phố Hồ Chí Minh</p>
          </div>
          <div className="diaChi">
            <div className="diaChi_Item">
              <b>Q. Tân Bình</b>
              <p>18, Bình Hưng Hoà</p>
              <p>0523874839</p>
            </div>
            <div className="diaChi_Item">
              <b>Quận 3</b>
              <p>356 Võ Thị Sáu</p>
              <p>0914914710</p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src="1x1_img_1.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
