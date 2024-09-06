// import React from 'react';
import "./productsDetail.scss";

const ProductsDetail = ({ product, addToCart }) => {
  return (
    <div className="product-detail">
      <div className="left">
        {/* <button onClick={onClose}>Đóng</button> */}
        <img src={product.imgUrl} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Giá: {product.price} VNĐ</p>
      </div>
      <div className="right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          quia dolorem eius unde veritatis laboriosam iure ducimus maxime
          maiores, quas praesentium, inventore rerum repellat quae odit veniam
          quisquam. Quibusdam, perspiciatis!
        </p>
        <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
};

export default ProductsDetail;
