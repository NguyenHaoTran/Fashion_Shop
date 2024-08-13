// import React from 'react';
import './productsDetail.scss';

const ProductsDetail = ({ product, onClose, addToCart }) => {
  return (
    <div className="product-detail">
      <button onClick={onClose}>Đóng</button>
      <img src={product.imgUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Giá: {product.price} VNĐ</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductsDetail;
