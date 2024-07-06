import "./home.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
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
        <div className="year">2024</div>
      </div>
      <div className="widget"></div>
    </>
  );
};

export default Home;
