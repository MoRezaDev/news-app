import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <>
      <section className="sticky top-[96px] z-[-1] w-full bg-[#292929]">
        <div className="relative flex h-screen items-end">
          <img
            src={"/van.webp"}
            alt="section1"
            className="absolute top-0  z-[-1] object-contain md:object-cover lg:static  lg:h-full lg:w-full"
          />
        </div>
      </section>
      <div className="gradientTitle relative -top-[550px]  h-56 w-full text-white sm:-top-[400px] md:-top-[300px] ">
        <div className="mr-10 w-4/5  py-3 md:mr-28 lg:w-2/5">
          <h1 className="text-xl leading-[60px] md:text-3xl">
            ویرجیل فن دایک: حذف برابر آرژانتین در جام جهانی باعث انگیزه گرفتن من
            شده است
          </h1>
        </div>
      </div>
    </>
  );
};

export default Section1;
