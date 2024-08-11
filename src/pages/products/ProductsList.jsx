
import "./productsList.scss";
import Card from "./Card";

const ProductsList = ({ products, onCardClick, addToCart }) => {


  return (
    <div className="products_list">
      {products.map((product) => (
        <Card
          key={product.id}
          imgUrl={product.imgUrl}
          name={product.name}
          price={product.price}
          onClick={() => onCardClick(product)} // Handle card click
          addToCart={addToCart}  // Truyền hàm addToCart vào Card
        />
      ))}
    </div>
  );
};

export default ProductsList;
