
import "./card.scss";

const Card = ({ imgUrl, name, price, id, onClick, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);  // Thêm sản phẩm vào giỏ hàng khi nhấp nút
  };
  return (
    <div className="card" key={id} onClick={onClick}>
      <img src={imgUrl} alt={name} />
      <h5>{name}</h5>
      <p className="price">{price} VNĐ</p>
      <p>
        <button onClick={handleAddToCart}>Thêm vào giỏ</button>
      </p>
    </div>
  );
}

export default Card;
