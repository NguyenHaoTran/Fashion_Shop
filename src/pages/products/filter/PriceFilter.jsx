
import Slider from '@mui/material/Slider';

const PriceFilter = ({ setPriceFilter }) => {
  const handlePriceChange = (event, newValue) => {
    setPriceFilter(newValue);
  };

  return (
    <div className="price">
      <b>GIÁ</b>
      <Slider
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={320000}
        max={9000000}
        step={10000}
      />
    </div>
  );
};

export default PriceFilter;
