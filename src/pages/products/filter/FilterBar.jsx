
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import PriceFilter from './PriceFilter';

const FilterBar = ({ setCategoryFilter, setPriceFilter, setColorFilter, setSizeFilter }) => {
  return (
    <div className="sidebar">
      <CategoryFilter setCategoryFilter={setCategoryFilter} />
      <PriceFilter setPriceFilter={setPriceFilter} />
      <ColorFilter setColorFilter={setColorFilter} />
      <SizeFilter setSizeFilter={setSizeFilter} />
      
    </div>
  );
};

export default FilterBar;
