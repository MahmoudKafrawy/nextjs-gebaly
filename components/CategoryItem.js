import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup } from "@mui/material";
import styles from "../styles/Category.module.css";
import { CartContext } from "../context/CartContext";
import React, { useContext, useRef } from "react";
import Link from "next/link";

const CategoryItem = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const state = useContext(CartContext);
  return (
    <div>
      <Card sx={{ width: 240, height: 380 }} style={{ margin: 10 }} className={styles.card}>
        <Link href={`/product/${product.id}`} key={product.id}>
          <a>
            <CardMedia
              component="img"
              height="194"
              image={product.image}
              alt="green iguana"
              className={styles.itemImg}
            />

            <CardContent>
              <Typography gutterBottom component="div" className={styles.itemTitle}>
                {product.title.substr(0, 70)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
          </a>
        </Link>
        <CardActions>
          <ButtonGroup size="small" aria-label="small outlined button group">
            {!state.cart.includes(product.id) ? (
              <Button onClick={() => dispatch({ type: "ADD", payload: product.id })}>Add to cart</Button>
            ) : (
              <Button onClick={() => dispatch({ type: "REMOVE", payload: product.id })}>Remove From cart</Button>
            )}
          </ButtonGroup>
          {/* <Button>+</Button>
            <Button>{state.cart.length}</Button>
            <Button>-</Button>
          {state.cart.includes(product.id) == false ? (
            <Button size="small">
              <Typography variant="caption">Add to cart</Typography>
            </Button>
          ) : (
            <Button size="small">
              <Typography variant="caption">
                <span style={{ color: "red" }}>Remove from cart</span>
              </Typography>
            </Button>
          )} */}
        </CardActions>
      </Card>
    </div>
  );
};

export default CategoryItem;
