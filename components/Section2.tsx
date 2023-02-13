import React from "react";
import CardSection from "./sub-section2/CardSection";
import Slider from "./sub-section2/Slider";

const Section2 = () => {
  return (
    <div className="z-10 -mt-[300px] bg-[#292929]">
      <div className="flex h-16 w-full items-center overflow-hidden bg-gradient-to-t from-orange-500 to-orange-400 p-2 ">
        <h3 className="mr-0 min-w-fit text-xl font-semibold md:mr-20">
          آخرین اخبار
        </h3>
        <span className="mr-4 ml-2 h-10 border border-black "></span>
        <div className="flex  flex-shrink flex-grow  items-center gap-[80px]  overflow-hidden text-xl">
          <p className="animatedLastNews whitespace-nowrap">
            رسیدگی به پرونده سیتی آغاز شد: رؤسای لیگ برتر در لندن | سهامداران
            ارشد باشگاه‌های لیگ برتری امشب در لندن در جلسه‌ای درباره اتهامات
            منچسترسیتی شرکت می‌کنند | طبق ادعای موندودپورتیوو، پیشنهاد تمدیدی که
            بارسلونا به سرخیو بوسکتس ارائه داده، بسیار پایین‌تر از دستمزد فعلی
            او است
          </p>
          <p className="animatedLastNews whitespace-nowrap ">
            رسیدگی به پرونده سیتی آغاز شد: رؤسای لیگ برتر در لندن | سهامداران
            ارشد باشگاه‌های لیگ برتری امشب در لندن در جلسه‌ای درباره اتهامات
            منچسترسیتی شرکت می‌کنند | طبق ادعای موندودپورتیوو، پیشنهاد تمدیدی که
            بارسلونا به سرخیو بوسکتس ارائه داده، بسیار پایین‌تر از دستمزد فعلی
            او است
          </p>
        </div>
      </div>
      <section className="h-500px mx-auto mb-6 mt-3 w-[95%] overflow-hidden text-white lg:mb-24  lg:w-[60%]">
        <h1 className="mb-3 text-center text-2xl">تبلیغات</h1>
        <Slider />
      </section>
      <div className=" w-full bg-[#292929] py-16">
        <section className="mx-auto  w-full  md:w-[98%] lg:w-[1024px]">
          <div className="grid gap-4 rounded-md md:gap-4 lg:grid-cols-3">
            <div className="md:col-span-2 lg:h-[650px]">
              <CardSection type="largeCard" />
            </div>
            <div className="flex flex-col  gap-4 md:col-span-2 md:flex-row md:justify-between lg:col-span-1 lg:h-[650px] lg:flex-col">
              <CardSection type="mediumCard" />
              <CardSection type="mediumCard" />
              <div className="lg:hidden">
                <CardSection type="mediumCard" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section2;
