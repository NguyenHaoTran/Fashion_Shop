

const ColorFilter = ({ setColorFilter }) => {
  const handleFilterClick = (event, color) => {
    event.preventDefault();
    setColorFilter(color);
  };

  return (
    <div className="color">
      <b>MÀU SẮC</b>
      <ul>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'đỏ')}>Đỏ</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'vàng')}>Vàng</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'xanh')}>Xanh</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'trắng')}>Trắng</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'đen')}>Đen</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'xám')}>Xám</a></li>
      </ul>
    </div>
  );
};

export default ColorFilter;
