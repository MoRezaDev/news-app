import Router from "next/router";
import { useState, useEffect } from "react";
import type { GetServerSideProps } from "next";
import { getDays, getDays7 } from "../utils/functions";

import client from "../graphql/apollo-client";
import { getLiveResultByDay } from "../graphql/query";
import LiveCard from "../components/LiveCard";

const fiveDays = getDays();
const sevenDays = getDays7();
const today = fiveDays.find((day) => day.isCurrentDay === true)?.name || "";

type DataType = {
  liveResults: {
    tournoment: string;
    day: string;
    guestName: string;

    guestResult: number;

    hostName: string;

    hostResult: number;

    state: string;
    guestLogo: { url: string };
    hostLogo: { url: string };
  }[];
};

interface LiveProps {
  data: DataType;
  loading?: boolean;
}

const live = ({ data }: LiveProps) => {
  const [selectedDay, setSelectedDay] = useState<string>(today);
  const [searchValue, setSearchValue] = useState<string>("");

  const arrangedData = (data: DataType) => {
    let filteredArray: string[] = [];
    if (data) {
      const { liveResults } = data;
      const tournoments = liveResults.map((result) => result.tournoment);
      filteredArray = tournoments.filter(
        (item, index) => tournoments.indexOf(item) === index
      );
    }
    return { filteredArray };
  };

  const { filteredArray } = arrangedData(data);

  const changeDayHandler = (day: string) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    Router.push(`/live?day=${selectedDay}`);
  }, [selectedDay]);
  // console.log(fiveDays);
  console.log(sevenDays);
  console.log(filteredArray);
  return (
    <div className="mt-[90px] min-h-screen bg-[#292929]">
      <div className=" h-[200px] w-full bg-[#161617] p-4">
        <p className="text-center text-lg text-slate-400">تبلیغات</p>
      </div>
      <div className=" flex  w-full flex-col gap-4 bg-[#292929] p-4 tracking-wider text-white">
        <h1>نتایج زنده ، روزهای هفته ، جستجو</h1>
        <div className="flex items-center gap-2">
          <div className="relative flex  min-w-fit  rounded-md bg-[#333] px-3 py-2 text-[14px] before:ml-[8px] before:h-[20px]  before:w-[20px] before:font-live before:text-xl before:leading-[19px] before:text-[#73c3ce] before:content-['\e922']">
            <p className="relative bottom-[1px]">
              زنده ({data.liveResults.length})
            </p>
          </div>
          <div className="flex-shrink flex-grow rounded-md bg-[#333] p-2">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              className="w-full bg-transparent outline-none placeholder:text-sm placeholder:text-[#828282]"
              type="text"
              placeholder="جستجوی تیم"
            />
          </div>
        </div>
        <div className="hidden   grid-cols-7 gap-4 md:grid">
          {sevenDays.map((day, idx) => (
            <div
              onClick={() => changeDayHandler(day.name)}
              key={idx}
              className={`${
                day.name === selectedDay && "border-2 border-orange-500"
              } cursor-pointer rounded-md bg-[#333] py-1 text-center text-[14px] transition hover:opacity-70 xs:px-2`}
            >
              <p>{day.name}</p>
              <p>{`${day.number}`} مهر</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2 xs:gap-4 md:hidden ">
          {fiveDays.map((day, idx) => (
            <div
              onClick={() => changeDayHandler(day.name)}
              key={idx}
              className={`${
                day.name === selectedDay && "border-2 border-orange-500"
              } cursor-pointer rounded-md bg-[#333] py-1 text-center text-[12px] transition hover:opacity-70 xs:px-2 xs:text-[14px]`}
            >
              <p>{day.name}</p>
              <p>{`${day.number}`} مهر</p>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        {searchValue.length === 0
          ? filteredArray.map((leauge, idx) => {
              const filteredData = data.liveResults.filter(
                (item) => item.tournoment === leauge
              );
              return <LiveCard key={idx} data={filteredData} />;
            })
          : filteredArray.map((leauge, idx) => {
              const filteredData = data.liveResults.filter(
                (item) => item.tournoment === leauge
              );
              const searchedData = filteredData.filter(
                (filData) =>
                  filData.guestName
                    .toLocaleLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  filData.hostName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              );
              if (searchedData) {
                return <LiveCard key={idx} data={searchedData} />;
              } else {
                return (
                  <div>
                    <h1>اطلاعات یافت نشد</h1>
                  </div>
                );
              }
            })}
      </div>
    </div>
  );
};

export default live;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //the actualDay is getting today string from url parameter query but my api server is limited
  //so i have to make it all the days set too پنج شنبه
  //but i leave the code for real world bellow here
  const params = context.query;
  const { day } = params;
  const actualDay = day || today;
  const selectedDays =
    actualDay === "پنج‌شنبه" || actualDay === "دوشنبه" || actualDay === "جمعه"
      ? "پنج‌شنبه"
      : "";

  const { data, loading } = await client.query({
    query: getLiveResultByDay,
    variables: { day: selectedDays },
  });

  console.log();
  console.log({ actualDay });
  return {
    props: {
      data,
    },
  };
};
