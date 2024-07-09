
import "./productsList.scss";
import Card from "./Card";

const ProductsList = ({ products }) => {

  

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
