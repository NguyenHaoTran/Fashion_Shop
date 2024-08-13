// import React from 'react';
import './productsList.scss';

const ProductsList = ({ products =[], onProductClick, addToCart }) => {
  return (
    <div className="products-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imgUrl} alt={product.name} />
          <h5>{product.name}</h5>
          <p>{product.price} VNĐ</p>
          <button onClick={() => onProductClick(product)}>Chi tiết</button>
          <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
