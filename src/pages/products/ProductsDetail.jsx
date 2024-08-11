import "../products/productsDetail.scss";

const ProductDetail = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-modal">
        <div className="close-btn">
          <button onClick={onClose}>X</button>
        </div>
        <div className="product_detail">
          <img src={product.imgUrl} alt={product.name} />
          <div className="right">
            <h2>{product.name}</h2>
            <p>Giá: {product.price} VNĐ</p>
            <button onClick={() => addToCart(product)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
