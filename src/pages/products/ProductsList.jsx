import "./productsList.scss";
import Products from "../../Data/products.json";
import Card from "./cards/Card";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="products_list">
      {products.map((product) => (
        <Card
          key={product.id}
          imgUrl={product.imgUrl}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
