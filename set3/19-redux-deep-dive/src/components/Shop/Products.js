import { useSelector, useDispatch } from "react-redux";

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import { cartActions } from "../../store/cart";

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product);

  const addToCartHandler = (item) => {
    dispatch(cartActions.add(item));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            onAddToCart={addToCartHandler.bind(null, product)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
