import { FC } from "react";
import Head from "next/head";

const defaultProps = {
  title: "Electric Cars, Solar & Clean Energy | Tesla",
  description:
    "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
};

const AppHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="favicon.ico" type="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

AppHead.defaultProps = defaultProps;

export default AppHead;
