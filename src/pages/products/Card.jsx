
import "./card.scss";

const Card = ({ imgUrl, name, price, id }) => {
  return (
    <div className="card" key={id}>
      <img src={imgUrl} alt={name} />
      <h5>{name}</h5>
      <p className="price">{price} VNĐ</p>
      <p>
        <button>Thêm vào giỏ</button>
      </p>
    </div>
  );
}

export default Card;
