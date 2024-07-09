import "./blackLine.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const BlackLine = () => {
  return (
    <div className="container">
      <div className="account">
        <a href="#">Tài khoản</a>
      </div>
      <div className="blackLine_text">
        <p>Chương trình giảm giá theo mùa đã bắt đầu! Giảm tới 50%! Mua ngay</p>
      </div>
      <div className="language">
        <div className="items">
          <div className="vn">
            <p>Việt Nam</p>
            <span className="lg-span">
              <KeyboardArrowDownIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackLine;
