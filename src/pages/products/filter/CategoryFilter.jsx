

const CategoryFilter = ({ setCategoryFilter }) => {
  const handleFilterClick = (event, category) => {
    event.preventDefault();
    setCategoryFilter(category);
  };

  return (
    <div className="category">
      <b>DANH MỤC SẢN PHẨM</b>
      <ul>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'Bộ sưu tập')}>Bộ sưu tập</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'Chân váy')}>Chân váy</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'Đồ nam')}>Đồ nam</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'Đồ nữ')}>Đồ nữ</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'Đầm maxi')}>Đầm maxi</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'Túi')}>Túi</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'Giày')}>Giày</a></li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
