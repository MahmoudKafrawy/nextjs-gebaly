import Category from "../components/Category";

export default function Home({ products }) {
  return (
    <>
      <div className="container">
        <Category title="Women" product={products.filter((product) => product.category == "women's clothing")} />
        <Category title="Men" product={products.filter((product) => product.category == "men's clothing")} />
        <Category title="Electronics" product={products.filter((product) => product.category == "electronics")} />
        <Category title="Jewelry" product={products.filter((product) => product.category == "jewelery")} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
