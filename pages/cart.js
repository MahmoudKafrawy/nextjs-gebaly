import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext } from "react";
import Meta from "../components/Meta";
import { CartContext } from "../context/CartContext";
import styles from "../styles/Cart.module.css";

const Cart = ({ products }) => {
  const { dispatch } = useContext(CartContext);
  const state = useContext(CartContext);
  return (
    <>
      <Meta />
      <div className={styles.cart}>
        {products
          .filter((product) => state.cart.includes(product.id))
          .map((cartEl) => (
            <div key={cartEl.id}>
              <div className={styles.product}>
                <div className={styles.productImg}>
                  <img src={cartEl.image} />
                </div>
                <div className={styles.productDetails}>{cartEl.title}</div>
                <div className={styles.removeItem}>
                  <div>${cartEl.price.toFixed(2)}</div>
                  <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button onClick={() => dispatch({ type: "REMOVE", payload: cartEl.id })}>Remove From cart</Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        <div className={styles.total}>
          <div>Total</div>$
          {products.filter((product) => state.cart.includes(product.id)).reduce((sum, { price }) => (sum += price), 0)}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
export default Cart;
