import { useState } from "react";
import "./cart.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cart = ({ cartItems, removeFromCart }) => {
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
        <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleCart}>
            X
          </button>
          {/* Cart */}
          <div className="cart">
            <h2>Giỏ hàng</h2>
            {cartItems.length === 0 ? (
              <p>Giỏ hàng trống</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imgUrl} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price} VNĐ</p>
                    <button onClick={() => removeFromCart(item.id)}>Xóa</button>
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
