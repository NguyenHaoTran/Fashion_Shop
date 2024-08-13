import { useState } from 'react';
import './filterBar.scss';

const FilterBar = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000000]);

  const handleFilter = () => {
    onFilter({
      category,
      color,
      size,
      priceRange,
    });
  };

  return (
    <div className="filter-bar">
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">Chọn danh mục</option>
        <option value="Đồ nam">Đồ nam</option>
        <option value="Giày">Giày</option>
        <option value="Túi">Túi</option>
        <option value="Phụ kiện">Phụ kiện</option>
      </select>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="">Chọn màu sắc</option>
        <option value="xanh">Xanh</option>
        <option value="trắng">Trắng</option>
        <option value="đen">Đen</option>
        <option value="xám">Xám</option>
        <option value="vàng">Vàng</option>
      </select>
      <select onChange={(e) => setSize(e.target.value)} value={size}>
        <option value="">Chọn kích thước</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <input
        type="range"
        min="0"
        max="2000000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
      />
      <span>{priceRange[1]} VNĐ</span>
      <button onClick={handleFilter}>Lọc</button>
    </div>
  );
};

export default FilterBar;
