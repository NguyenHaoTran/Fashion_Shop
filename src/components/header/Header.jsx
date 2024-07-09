import "./header.scss";
import Nav from "./nav/Nav";
import Search from "./search/Search";
import Cart from "./cart/Cart";

import { useState, useEffect } from "react";

import Wishlist from "../../pages/wishlist/Wishlist";
import BlackLine from "./black_line/BlackLine";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // Khi cuộn xuống, ẩn header
      setShowHeader(false);
    } else {
      // Khi cuộn lên, hiện header
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

  return (
    <>
      <BlackLine />
      <header className={`header ${showHeader ? "show" : "hide"}`}>
        <div className="logo">LOGO</div>
        <Nav />
        <div className="tool">
          <Search />
          <Wishlist />
          <Cart />
        </div>
      </header>
    </>
  );
};

export default Header;
