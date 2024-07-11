import "./nav.scss";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Nav = () => {
  return (
    <nav>
      <div className="main_menu">
        <ul>
          <li>
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/about">VỀ CHÚNG TÔI</Link>
          </li>
          <li>
            <div className="btn_sub_menu">
              <Link to="/products">
                SẢN PHẨM
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </Link>
              <div className="sub_menu">
                <div className="sub_menu_items">
                  <div className="BoSuuTap">
                    <ul>
                      <h5>Bộ sưu tập</h5>
                      <li>
                        <a href="#">Bộ sưu tập xuân</a>
                      </li>
                      <li>
                        <a href="#">Bộ sưu tập thu</a>
                      </li>
                      <li>
                        <a href="#">Bộ sưu tập hè</a>
                      </li>
                      <li>
                        <a href="#">Bộ sưu tập đông</a>
                      </li>
                    </ul>
                  </div>
                  <div className="DoNam">
                    <ul>
                      <h5>Đồ Nam</h5>
                      <li>
                        <a href="#">Suit</a>
                      </li>
                      <li>
                        <a href="#">Áo sơ mi</a>
                      </li>
                      <li>
                        <a href="#">Quần tây</a>
                      </li>
                      <li>
                        <a href="#">Giày</a>
                      </li>
                    </ul>
                  </div>
                  <div className="DoNu">
                    <ul>
                      <h5>Đồ Nữ</h5>
                      <li>
                        <a href="#">Đầm maxi</a>
                      </li>
                      <li>
                        <a href="#">Váy liền</a>
                      </li>
                      <li>
                        <a href="#">Váy trùm</a>
                      </li>
                      <li>
                        <a href="#">Chân váy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="PhuKien">
                    <ul>
                      <h5>Phụ kiện</h5>
                      <li>
                        <a href="#">Hoa tai</a>
                      </li>
                      <li>
                        <a href="#">Đồng hồ</a>
                      </li>
                      <li>
                        <a href="#">Cà vạt</a>
                      </li>
                      <li>
                        <a href="#">Thắt lưng</a>
                      </li>
                    </ul>
                  </div>
                  <div className="submenu_img">
                    <img src="/1x1_menu.webp" alt="menuimg" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/news">TIN TỨC</Link>
          </li>
          <li>
            <Link to="/contact">LIÊN HỆ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
