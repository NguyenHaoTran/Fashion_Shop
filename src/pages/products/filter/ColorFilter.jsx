

const ColorFilter = ({ setColorFilter }) => {
  const handleFilterClick = (event, color) => {
    event.preventDefault();
    setColorFilter(color);
  };

  return (
    <div className="color">
      <b>MÀU SẮC</b>
      <ul>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'đỏ')}>Đỏ</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'vàng')}>Vàng</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'xanh')}>Xanh</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'trắng')}>Trắng</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'đen')}>Đen</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'xám')}>Xám</button></li>
      </ul>
    </div>
  );
};

export default ColorFilter;
