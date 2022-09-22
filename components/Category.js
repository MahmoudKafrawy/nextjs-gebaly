import Image from "next/image";
import Link from "next/link";
import CategoryItem from "./CategoryItem";
import styles from "../styles/Category.module.css";

const Category = ({ title, product }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.category}>
        {product.map((product) => (
          <div key={product.id}>
            <CategoryItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
