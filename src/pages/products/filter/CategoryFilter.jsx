

const CategoryFilter = ({ setCategoryFilter }) => {
  const handleFilterClick = (event, category) => {
    event.preventDefault();
    setCategoryFilter(category);
  };

  return (
    <div className="category">
      <b>DANH MỤC SẢN PHẨM</b>
      <ul>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'Bộ sưu tập')}>Bộ sưu tập</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'Chân váy')}>Chân váy</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'Đồ nam')}>Đồ nam</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'Đồ nữ')}>Đồ nữ</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'Đầm maxi')}>Đầm maxi</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'Túi')}>Túi</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'Giày')}>Giày</button></li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
