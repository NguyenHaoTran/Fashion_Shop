
const SizeFilter = ({ setSizeFilter }) => {
  const handleFilterClick = (event, size) => {
    event.preventDefault();
    setSizeFilter(size);
  };

  return (
    <div className="size">
      <b>KÍCH THƯỚC</b>
      <ul>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'L')}>L</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'M')}>M</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'S')}>S</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'XL')}>XL</button></li>
        <li><button href="/" onClick={(e) => handleFilterClick(e, 'XS')}>XS</button></li>
      </ul>
    </div>
  );
};

export default SizeFilter;
