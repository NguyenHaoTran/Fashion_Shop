import { useState } from "react";
import "./cart.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Cart = ({ cartItems, onRemove }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="cart-icon" onClick={toggleCart}>
        <ShoppingCartOutlinedIcon />
      </div>
      {isCartOpen && (
        <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleCart}>X</button>
          <h2>Giỏ hàng của bạn</h2>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Giỏ hàng trống</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.imgUrl} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price} VND</p>
                    <button onClick={() => onRemove(item.id)}>Xóa</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
