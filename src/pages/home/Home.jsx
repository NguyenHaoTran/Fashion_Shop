import "./home.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ScrollReveal from "scrollreveal";

const Home = () => {
  // ScrollReveal
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "1200",
    delay: 500,
  });

  sr.reveal(`.text`, {origin: 'left'})
  sr.reveal(`.img`, {origin: 'right'})

  return (
    <>
      <div className="home">
        <div className="content">
          <div className="items">
            <div className="text">
              <h1>
                Đón xuân <br /> COLLECTION
              </h1>
              <button>
                Đến ngay
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src="/1x1_menu.webp" />
          </div>
        </div>
        <div className="year">2025</div>
      </div>
      <div className="widget">
        <div className="line">
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
          <p>Đón Xuân - Collection</p>
          <span>*</span>
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
          <p>Đón Xuân - Collection</p>
          <span>*</span>
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
          <p>Đón Xuân - Collection</p>
          <span>*</span>
          <p>ĐÓN XUÂN - COLLECTION</p>
          <span>*</span>
        </div>
      </div>
      {/* products */}
      <div className="home_products">
        <div className="home_title">
          <h5>* SẢN PHẨM BÁN CHẠY *</h5>
          <p>
            Bộ sưu tập mùa Xuân 2025 đa dạng mẫu mã, mua ngay nhận ưu đã lớn
          </p>
        </div>
        <div className="home_list_products"></div>
      </div>
    </>
  );
};

export default Home;
