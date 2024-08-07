import "./header.scss";
import Nav from "./nav/Nav";
import Search from "./search/Search"; // Import Search component instead of SearchModal
import Cart from "./cart/Cart";

import { useState, useEffect } from "react";

import Wishlist from "../../pages/wishlist/Wishlist";
import BlackLine from "./black_line/BlackLine";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isSearchVisible, setSearchVisible] = useState(false); // Updated state name

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

  return (
    <>
      <BlackLine />
      <header className={`header ${showHeader ? "show" : "hide"}`}>
        <div className="logo">LOGO</div>
        <Nav />
        <div className="tool">
          <button className="search-btn" onClick={openSearch}>
            <Search />
          </button>
          <Wishlist />
          <Cart />
        </div>
      </header>
      <Search isVisible={isSearchVisible} onClose={closeSearch} />
    </>
  );
};

export default Header;
