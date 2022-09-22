import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import gebhalyLogo from "../public/gebhalyLogo.png";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const NavBar = () => {
  const state = useContext(CartContext);
  return (
    <div className={styles.nav}>
      <div>
        <Link href="/">
          <a>
            <img src={gebhalyLogo.src} />
          </a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/products">All Products</Link>
        <Badge badgeContent={state.cart.length} color="primary">
          <Link href="/cart">Cart</Link>
        </Badge>
      </div>
      <div>
        <input className={styles.navSearch} placeholder="Search"></input>
      </div>
    </div>
  );
};

export default NavBar;
