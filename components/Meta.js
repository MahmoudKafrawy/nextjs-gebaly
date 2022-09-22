import Head from "next/head";
const Meta = ({ title, keyWords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keyWords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Gebhaly",
  keyWords: "buy,online,shopping",
  description: "buy online from gebhaly",
};

export default Meta;
