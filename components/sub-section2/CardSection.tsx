import React from "react";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import { BsArrowLeftSquareFill } from "react-icons/bs";

type CardSectionProps = {
  type: string;
  data: {
    id: number | string;
    title: string;
    description: string;
    slug: string;
    coverPhoto: { url: string };
  };
};

const CardSection = ({ type, data }: CardSectionProps) => {
  if (type === "largeCard")
    return (
      <div className="flex flex-col gap-4 overflow-hidden rounded-md bg-[#333] ">
        <img src={data.coverPhoto.url} className="rouned-t-md mb-8" />
        <div className="relative  w-full p-4 text-white">
          <p className="mb-8 text-xl md:text-2xl">{data.title}</p>
          <p className="mb-16 text-justify text-sm font-extralight">
            {data.description.slice(0, 180)}
          </p>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between gap-8 px-2">
              <div className="flex items-center gap-2">
                <CiClock2 className="font-bold" size={20} />
                <span className="text-sm">5 ساعت پیش</span>
              </div>
              <div className="flex items-center gap-2">
                <VscComment size={20} />
                <span className="text-sm">250</span>
              </div>
            </div>
            <Link href={`/news/${data.slug}`}>
              <div className="flex items-center gap-2 transition  hover:opacity-50">
                <BsArrowLeftSquareFill size={20} />
                <span className="text-sm">ادامه مطلب</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  if (type === "mediumCard")
    return (
      <div className="flex flex-col gap-2 overflow-hidden rounded-md bg-[#333] text-white ">
        <img src={data.coverPhoto.url} className="lg:w-full" />
        <div className="w-full p-4 md:text-xl">
          <Link
            href={`/news/${data.slug}`}
            className="transition hover:opacity-50"
          >
            <p className="mb-6 w-[65%] text-[16px] leading-6">{data.title}</p>
          </Link>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <CiClock2 className="font-bold" size={20} />
              <span className="text-sm">5 ساعت پیش</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <VscComment size={20} />
                <span className="text-sm">250</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  if (type === "smallCard")
    return (
      <div className="flex h-[150px] justify-between  gap-2 overflow-hidden rounded-md bg-[#333] text-white ">
        <img
          src={data.coverPhoto.url}
          className="h-full min-w-[40%] object-cover   lg:w-full"
        />
        <div className="flex w-full flex-col items-start  justify-between p-4 md:text-xl">
          <Link
            href={`/news/${data.slug}`}
            className="transition hover:opacity-50"
          >
            <p className="mb-6 w-full  text-[16px] leading-6">{data.title}</p>
          </Link>
          <div className="flex w-full items-center justify-between">
            <div className="hidden items-center gap-2 xs:flex">
              <CiClock2 className="font-bold" size={20} />
              <span className="text-sm">5 ساعت پیش</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <VscComment size={20} />
                <span className="text-sm">250</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return null;
};

export default CardSection;
