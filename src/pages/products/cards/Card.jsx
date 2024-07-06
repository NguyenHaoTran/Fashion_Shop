import "./card.scss";

const  Card = ({imgUrl, name, price, id}) => {
  return ( 
      <div className="card">
            <div key={id}>
              <img src={imgUrl} />
              <h5>{name}</h5>
              <p className="price">{price}</p>
              <p></p>
              <p>
                <button>Thêm vào giỏ</button>
              </p>
            </div>     
      </div> 
  );
}

export default Card;
