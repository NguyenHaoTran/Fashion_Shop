import "../../repsonsive/responsiveHeader.scss";
import "./header.scss";
import Nav from "./nav/Nav";
import Search from "./search/Search";
import Cart from "../header/cart/Cart.jsx";
// import Cart from '../../pages/products/Cart.jsx'
// import Wishlist from "../../pages/wishlist/Wishlist";
import BlackLine from "./black_line/BlackLine";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  const openSearch = () => setSearchVisible(true);
  const closeSearch = () => setSearchVisible(false);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <BlackLine />
      <header className={`header ${showHeader ? "show" : "hide"}`}>
        <div className="logo">LOGO</div>
        <div className="nav_header">
          <Nav />
        </div>

        <div className="tool">
          <button className="search-btn" onClick={openSearch}>
            <SearchOutlinedIcon className="search-icon" />
            <Search />
          </button>
          {/* <Wishlist /> */}
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </header>
      <Search isVisible={isSearchVisible} onClose={closeSearch} />
    </>
  );
};

export default Header;
