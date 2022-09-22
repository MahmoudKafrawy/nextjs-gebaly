import Meta from "../../../components/Meta";
import styles from "../../../styles/Product.module.css";
const index = ({ product }) => {
  return (
    <>
      <Meta />
      ``
      <div className={styles.product}>
        <div className={styles.productImg}>
          <img src={product.image} />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productTitle}>{product.title}</div>
          <div className={styles.productDes}>{product.description}</div>
          <div>Rate count : {product.rating.count}</div>
          <div>Rate : {product.rating.rate}</div>
          <div>Price : ${product.price.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://fakestoreapi.com/products/`);
//   const products = await res.json();
//   const ids = products.map((product) => product.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return { paths, fallback: false };
// };
export default index;
