import "./news.scss";

export const News = () => {
  return (
    <div className="News">
      <div className="banner">
        <div className="selection">
          <a href="/">TRANG CHỦ</a>
          <span>|</span>
          <a href="/products">TIN TỨC</a>
        </div>
        <p className="p_banner">TIN TỨC</p>
      </div>
      <div className="news_contents">
        {/* content_Items */}
        <div className="contents">
          <div className="news-item">
            <img src="../public/imgs/blog-009.jpg" alt="" />
            <h3>
              Express Yourself Through Fashion: Finding Your Signature Style
            </h3>
            <p>
              Movie production involve many different aspect, such spatial
              planning, materials selection, construction techniques, and
              environmental considerations. Architects must consider the
              practical requirements of a building, such as its intended use,
              structural integrity, and safety, as well as its aesthetic
              qualities, such as form, color, and texture. Now let’s set another
              scene — one that’s a bit less overwhelming. A workday…
            </p>
            <div className="end">
              LOGO
              <div className="date">21/11/2024</div>
            </div>
          </div>
          {/* temp Items */}
          <div className="news-item">
            <img src="../public/imgs/blog-009.jpg" alt="" />
            <h3>
              Express Yourself Through Fashion: Finding Your Signature Style
            </h3>
            <p>
              Movie production involve many different aspect, such spatial
              planning, materials selection, construction techniques, and
              environmental considerations. Architects must consider the
              practical requirements of a building, such as its intended use,
              structural integrity, and safety, as well as its aesthetic
              qualities, such as form, color, and texture. Now let’s set another
              scene — one that’s a bit less overwhelming. A workday…
            </p>
            <div className="end">
              LOGO
              <div className="date">21/11/2024</div>
            </div>
          </div>
          <div className="news-item">
            <img src="../public/imgs/blog-009.jpg" alt="" />
            <h3>
              Express Yourself Through Fashion: Finding Your Signature Style
            </h3>
            <p>
              Movie production involve many different aspect, such spatial
              planning, materials selection, construction techniques, and
              environmental considerations. Architects must consider the
              practical requirements of a building, such as its intended use,
              structural integrity, and safety, as well as its aesthetic
              qualities, such as form, color, and texture. Now let’s set another
              scene — one that’s a bit less overwhelming. A workday…
            </p>
            <div className="end">
              LOGO
              <div className="date">21/11/2024</div>
            </div>
          </div>
        </div>


        {/*  */}
        <div className="sideBar">
          <div className="searchBar"></div>
          <div className="category">
            <h3>CHUYÊN MỤC</h3>
            <ul>
              <li>Fashion</li>
              <li>Life Style</li>
              <li>News</li>
              <li>Travel</li>
              <li>Trending</li>
            </ul>
          </div>
          <div className="newBlog">
            <h3>BÀI VIẾT MỚI NHẤT</h3>
            <div className="item">
              <div className="imgs">
                <img src="../public/imgs/blog-009.jpg" alt="itemImg" />
              </div>
              <div className="texts">
                <p className="date_time">21/11/2024</p>
                <b>
                  Express Yourself Through Fashion: Finding Your Signature Style
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
