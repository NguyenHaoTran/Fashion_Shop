import "./products.scss";

import ProductsList from './ProductsList'


const Products = () => {
  return (
    <div className="products">
      <div className="banner">
        <div className="selection">
          <a href="">TRANG CHỦ</a>
          <span>|</span>
          <a href="">SẢN PHẨM</a>
        </div>
        <p className="p_banner">SẢN PHẨM</p>
      </div>
      {/*  */}
      <div className="products_section">
        <div className="sidebar">
          <div className="category">
            <b>DANH MỤC SẢN PHẨM</b>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="price"></div>
          <div className="color"></div>
          <div className="size"></div>
        </div>
        <div className="products_view">
          <div className="products_info">
            <b>PRODUCTS_lIST</b>
          </div>
          <div className="products_list">
            <ProductsList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
