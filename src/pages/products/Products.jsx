import { useState, useCallback } from 'react';
import ProductsList from './ProductsList';
import ProductsDetail from './ProductsDetail';
import FilterBar from './FilterBar';
// import Cart from './Cart';
import Cart from '../../components/header/cart/Cart.jsx';
import productsData from '../../Data/products.json';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleFilter = useCallback((filters) => {
    let filtered = productsData;

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.color) {
      filtered = filtered.filter(product => product.color === filters.color);
    }

    if (filters.size) {
      filtered = filtered.filter(product => product.size === filters.size);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    setFilteredProducts(filtered);
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <FilterBar onFilter={handleFilter} />
      <ProductsList products={filteredProducts || []} onProductClick={setSelectedProduct} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      {selectedProduct && (
        <ProductsDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Products;
