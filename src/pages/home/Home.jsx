import "./home.scss";
import ProductsList from "../products/ProductsList";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import ScrollReveal from "scrollreveal";

const Home = () => {
  // ScrollReveal
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "1200",
    delay: 500,
  });

  sr.reveal(`.text`, { origin: "left" });
  sr.reveal(`.img`, { origin: "right" });

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
        <div className="home_list_products">
          <ProductsList />
        </div>
      </div>
      {/* Home_about */}
      <div className="home_about">
        <div className="title">
          <h5>VỀ LOGO</h5>
          <p>Đón đầu xu hướng, bức phá khỏi vùng an toàn</p>
        </div>
        <div className="about_items">
          <div className="item">
            <SquareIcon color="black" className="icon rotate" />
            <b>TOP TRENDING</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
          <div className="item">
            <CircleIcon color="black" className="icon" />
            <b>SẢN PHẨM CHẤT LƯỢNG</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
          <div className="item">
            <SquareOutlinedIcon color="black" className="icon" />
            <b>MIỄN PHÍ VẬN CHUYỂN</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
          <div className="item">
            <Brightness7Icon color="black" className="icon" />
            <b>HỖ TRỢ ONLINE</b>
            <p>
              Thời trang có thể phai tàn nhưng phong cách sẽ tồn tại mãi mãi. Để
              không ai có thể thay thế, bạn phải luôn luôn khác biệt
            </p>
          </div>
        </div>
        <div className="home_note"></div>
      </div>
    </>
  );
};

export default Home;
