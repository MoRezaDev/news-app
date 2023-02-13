import Image from "next/image";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import { BsArrowLeftSquareFill } from "react-icons/bs";

type CardSectionProps = {
  type: string;
};

const CardSection = ({ type }: CardSectionProps) => {
  if (type === "largeCard")
    return (
      <div className="flex flex-col gap-4 overflow-hidden rounded-md bg-[#333] ">
        <img src="/big-card.webp" className="rouned-t-md mb-8" />
        <div className="relative  w-full p-4 text-white">
          <p className="mb-8 text-xl md:text-2xl">
            پدری 3 امتیاز دیگر را به حساب تیم ژاوی واریز کرد
          </p>
          <p className="mb-16 text-justify text-sm font-extralight">
            در هفته بیست و یکم از رقابت های لالیگای اسپانیا، ویارئال و بارسلونا
            در ورزشگاه لا سرامیکا به مصاف هم رفتند و در نهایت در این بازی
            بارسلونا موفق شد با نتیجه یک بر صفر به پیروزی برسد
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
            <div className="flex items-center gap-2">
              <BsArrowLeftSquareFill size={20} />
              <span className="text-sm">ادامه مطلب</span>
            </div>
          </div>
        </div>
      </div>
    );
  if (type === "mediumCard")
    return (
      <div className="flex flex-col gap-2 overflow-hidden rounded-md bg-[#333] text-white ">
        <img src="/neymar-small-webp.webp" className=" w-[full]  lg:w-full" />
        <div className="w-full p-4 md:text-xl">
          <p className="mb-6 w-[65%] text-[16px] leading-6">
            کلاهبرداری با سو استفاده اسم نیمار در واتس‌اپ
          </p>
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
  return null;
};

export default CardSection;
