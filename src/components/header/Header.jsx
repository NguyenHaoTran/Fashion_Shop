import "./header.scss";
import Nav from "./nav/Nav";
import Search from "./search/Search";
import Cart from "./cart/Cart";

import Wishlist from "../../pages/wishlist/Wishlist";
import BlackLine from "./black_line/BlackLine";

const Header = () => {
  return (
    <>
      <BlackLine />
      <header>
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
