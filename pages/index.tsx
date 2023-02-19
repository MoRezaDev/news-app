import Head from "next/head";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

import type { GetServerSideProps } from "next";
import client from "../graphql/apollo-client";
import { getTrendNews, getNews } from "../graphql/query";

export interface Props {
  data: {
    title: string;
    id: number | string;
    coverPhoto: { url: string };
    description: string;
    slug: string;
  }[];
  allNews: {
    title: string;
    id: number | string;
    coverPhoto: { url: string };
    description: string;
    slug: string;
  }[];
}

const Home = ({ data, allNews }: Props) => {
  console.log(allNews);
  return (
    <>
      <Head>
        <title>News App</title>
      </Head>
      <main className="relative">
        <Section1 data={data} />
        <Section2 data={allNews} />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await client.query({
    query: getTrendNews,
  });
  const { data: allNews } = await client.query({ query: getNews });
  console.log({ allNews });
  return {
    props: {
      data: data.newses,
      allNews: allNews.newses,
    },
  };
};
