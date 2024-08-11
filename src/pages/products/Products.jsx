import { useState, useEffect, useCallback } from "react";
import "./products.scss";
import ProductsList from "./ProductsList";
import FilterBar from "./filter/FilterBar";
import ProductDetail from "../products/ProductsDetail.jsx"; // Import the new ProductDetail component
import allProducts from "../../Data/products.json";

const Products = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState([320000, 9000000]);
  const [colorFilter, setColorFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // New state for selected product

  const filterProducts = useCallback(() => {
    let filtered = allProducts;

    if (categoryFilter) {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }
    if (colorFilter) {
      filtered = filtered.filter((product) => product.color === colorFilter);
    }
    if (sizeFilter) {
      filtered = filtered.filter((product) => product.size === sizeFilter);
    }
    filtered = filtered.filter(
      (product) =>
        product.price >= priceFilter[0] && product.price <= priceFilter[1]
    );

    setFilteredProducts(filtered);
  }, [categoryFilter, priceFilter, colorFilter, sizeFilter]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  // clear filter
  const handleClearFilters = () => {
    setCategoryFilter("");
    setPriceFilter([320000, 9000000]);
    setColorFilter("");
    setSizeFilter("");
    setFilteredProducts(allProducts); // Reset to show all products
  };

  // Function to handle adding to cart
  const addToCart = (product) => {
    // Add logic to handle adding the product to the cart
    console.log("Added to cart:", product);
  };

  return (
    <div className="products">
      <div className="banner">
        <div className="selection">
          <a href="/">TRANG CHỦ</a>
          <span>|</span>
          <a href="/products">SẢN PHẨM</a>
        </div>
        <p className="p_banner">SẢN PHẨM</p>
      </div>
      <div className="products_section">
        <div className="sideBar">
          <div className="filter_bar">
            <FilterBar
              setCategoryFilter={setCategoryFilter}
              setPriceFilter={setPriceFilter}
              setColorFilter={setColorFilter}
              setSizeFilter={setSizeFilter}
            />
          </div>

          <button onClick={handleClearFilters}>Mặc định</button>
        </div>

        <div className="products_view">
          <div className="products_info">
            <b>DANH SÁCH SẢN PHẨM</b>
          </div>
          <div className="products_list">
            <ProductsList
              products={filteredProducts}
              onCardClick={setSelectedProduct} // Pass down the onCardClick handler
            />
          </div>
        </div>
      </div>

      {/* Render ProductDetail if a product is selected */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Products;
