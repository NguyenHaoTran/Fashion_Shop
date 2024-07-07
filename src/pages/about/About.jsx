import "./about.scss";
import ScrollReveal from "scrollreveal";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const About = () => {
  // ScrollReveal
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "1200",
    delay: 500,
  });

  sr.reveal(`.text`, { origin: "left" });
  sr.reveal(`.img`, { origin: "right" });
  sr.reveal(`.about_end_text`, { origin: "right" });
  sr.reveal(`.about_end_imgs`, { origin: "left" });
  sr.reveal(`.imgs`, { origin: "left" });

  return (
    <div className="about">
      <div className="banner">
        <div className="selection">
          <a href="">TRANG CHỦ</a>
          <span>|</span>
          <a href="">VỀ CHÚNG TÔI</a>
        </div>
        <p className="p_banner">VỀ CHÚNG TÔI</p>
      </div>
      <div className="about_content">
        <div className="imgs">
          <img
            src="http://monna.monamedia.net/wp-content/uploads/2023/11/ab_01.jpeg"
            alt=""
          />
        </div>
        <div className="text">
          <b className="b_text">CÂU CHUYỆN BRAND</b>
          <p className="p_text">
            Khách hàng có những trải nghiệm về các thương hiệu thời trang khác
            nhau. Thông qua việc kể chuyện, chúng tôi lưu lại những trải nghiệm
            này của khách hàng và gây ấn tượng với họ, thôi thúc họ quay lại
            trong tương lai. Chúng tôi cũng nhận được một lượng khách hàng mới
            nhờ vào lời giới thiệu của những khách hàng thân thiết.
          </p>
          <br />
          <p className="p_text">
            Bạn có nhớ ngày bạn mua đôi giày thể thao đầu tiên không? Bạn có thể
            nhớ cửa hàng nơi bạn đã mua nó, cảm giác mong chờ được mang nó về
            nhà để kết hợp với một bộ trang phục mới và toàn bộ trải nghiệm đó
            khiến bạn cảm thấy thế nào?
          </p>
          <div className="mpvc">
            <div className="icon">
              <LocalShippingIcon />
            </div>
            <div className="mpvc_text">
              <b>MIỄN PHÍ VẬN CHUYỂN</b>
              <p>Cho tất cả đơn hàng với hóa đơn trên 1 triệu đồng</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about_end">
        <div className="about_end_text">
          <b className="b_text">HÃY CHỌN LOGO</b>
          <p className="p_text">
            Lắng nghe câu chuyện của khách hàng, đồng hành cùng nhau xây dựng
            phong cách thời trang riêng biệt.
          </p>
          <br />
          <p className="p_text">
            * Sứ mệnh trở thành nhãn hàng dẫn đầu trong ngành <br />* Chúng tôi ứng dụng
            các công nghệ và quy trình tiên tiến <br/>* Nâng cao chất lượng sản phẩm,
            đẩy mạnh thương mại
          </p>
          <button className="about_end_btn">
            MUA NGAY
            <div className="icon">
              <LocalShippingIcon />
            </div>
          </button>
        </div>
        <div className="about_end_imgs">
          <img src="/imgs/thumb.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
