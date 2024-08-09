import "./news.scss";
import { useState, useEffect } from "react";

export const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State để lưu trữ danh mục được chọn

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/src/Data/news.json")
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // dành cho phần filter ở category nếu cần ( dành cho "bài viết mới nhất")
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Thực hiện các thao tác xử lý dữ liệu hoặc UI khác tại đây
  };


  // Hàm xử lý khi chọn danh mục
  const filteredNewsData = selectedCategory
    ? newsData.filter((item) => item.category === selectedCategory)
    : newsData;

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
          {/* item */}
          {filteredNewsData.map((item) => (
            <div key={item.id} className="news-item">
              <img src={item.imgUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="end">
                LOGO
                <div className="date">{item.Date}</div>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
        <div className="sideBar">
          <div className="searchBar"></div>
          <div className="category">
            <h3>CHUYÊN MỤC</h3>
            <div className="filterButtons">
              <button
                className={selectedCategory === null ? "active" : ""}
                onClick={() => handleCategorySelect(null)}
              >
                Tất cả
              </button>
              <button
                className={selectedCategory === "Fashion" ? "active" : ""}
                onClick={() => handleCategorySelect("Fashion")}
              >
                Fashion
              </button>
              <button
                className={selectedCategory === "Life Style" ? "active" : ""}
                onClick={() => handleCategorySelect("Life Style")}
              >
                Life Style
              </button>
              <button
                className={selectedCategory === "News" ? "active" : ""}
                onClick={() => handleCategorySelect("News")}
              >
                News
              </button>
              <button
                className={selectedCategory === "Travel" ? "active" : ""}
                onClick={() => handleCategorySelect("Travel")}
              >
                Travel
              </button>
              <button
                className={selectedCategory === "Trending" ? "active" : ""}
                onClick={() => handleCategorySelect("Trending")}
              >
                Trending
              </button>
            </div>
          </div>
          <div className="newBlog">
            <h3>BÀI VIẾT MỚI NHẤT</h3>
            {/* items */}
            {newsData
              .map((item) => (
                <div key={item.id} className="item">
                  <div className="imgs">
                    <img src={item.imgUrl} alt="itemImg" />
                  </div>
                  <div className="texts">
                    <p className="date_time">21/11/2024</p>
                    <b>{item.name}</b>
                  </div>
                </div>
              ))}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
