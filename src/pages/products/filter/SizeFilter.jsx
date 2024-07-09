

const SizeFilter = ({ setSizeFilter }) => {
  const handleFilterClick = (event, size) => {
    event.preventDefault();
    setSizeFilter(size);
  };

  return (
    <div className="size">
      <b>KÍCH THƯỚC</b>
      <ul>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'L')}>L</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'M')}>M</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'S')}>S</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'XL')}>XL</a></li>
        <li><a href="/" onClick={(e) => handleFilterClick(e, 'XS')}>XS</a></li>
      </ul>
    </div>
  );
};

export default SizeFilter;
