import React from "react";
import type { GetServerSideProps } from "next";

import client from "../../graphql/apollo-client";
import { getOneNews } from "../../graphql/query";
import Image from "next/image";

interface Props {
  data: {
    title: string;
    id: number | string;
    coverPhoto: { url: string };
    description: string;
  }[];
}

const NewsSlug = ({ data }: Props) => {
  console.log("Dynamic", data);
  return (
    <div className="mt-[90px] min-h-[100vh]  bg-[#292929] text-center text-lg text-slate-400">
      <div
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)",
        }}
        className="w-ful h-[300px] py-4"
      >
        تبلیغات
      </div>
      <div className="mt-10 flex w-full flex-col gap-4 p-4 text-start text-white lg:container lg:mx-auto">
        <h1 className="lg:text-3xl mb-20">{data[0].title}</h1>
        <div className="relative h-[250px] w-full sm:h-[350px] lg:h-[550px] mb-10">
          <Image
            className="object-cover object-right-top lg:object-contain"
            src={data[0].coverPhoto.url}
            alt="img1"
            fill
          />
        </div>
        <p className="lg:text-[20px] leading-[40px]">{data[0].description}</p>
      </div>
    </div>
  );
};

export default NewsSlug;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const params = context.params;
  const { data } = await client.query({
    query: getOneNews,
    variables: { slug: params?.newsSlug },
  });

  return {
    props: {
      data: data.newses,
    },
  };
};
