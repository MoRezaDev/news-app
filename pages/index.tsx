import type { NextPage } from "next";
import Head from "next/head";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>News App</title>
      </Head>
      <main className="relative">
        <Section1 />
        <Section2 />
      </main>
    </>
  );
};

export default Home;
