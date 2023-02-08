import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showPremierLeaugeToggle, setShowPremierLeaugeToggle] = useState(false);
  return (
    <header className="fixed top-0 z-20  h-[96px]  w-full  bg-black text-white">
      <div className="relative  mx-auto flex  items-center justify-between  px-5 lg:container lg:px-3 ">
        <div className="flex h-[96px] items-center gap-12">
          <Image src={"/logo.png"} alt="logo" width={60} height={50} />
          <ul className="hidden h-[96px] items-center gap-8 lg:flex">
            <li className="animatedBorder relative h-[100%] ">
              <Link className="flex h-[100%] items-center" href="/">
                <span>نتایج زنده</span>
              </Link>
            </li>
            <li className="animatedBorder relative h-[100%]">
              <Link className="flex h-[100%] items-center" href="/">
                <span>اخبار داغ</span>
              </Link>
            </li>
            <li className="animatedBorder relative h-[100%]">
              <Link className="flex h-[100%] items-center" href="/">
                <span>نقل و انتقالات</span>
              </Link>
            </li>
            <li
              onMouseEnter={() => setShowPremierLeaugeToggle(true)}
              onMouseLeave={() => setShowPremierLeaugeToggle(false)}
              className="animatedBorder group relative flex h-[100%] cursor-pointer items-center "
            >
              <div className="flex items-center ">
                <span>لیگ جزیره</span>
                <div className="transition-all duration-300 ease-linear group-hover:rotate-180">
                  <Image alt="arrow" src="/down.svg" width={26} height={28} />
                </div>
              </div>
              {showPremierLeaugeToggle ? (
                <div className="fixed top-[95px] right-0 w-screen cursor-default border-t-4 border-t-slate-900 bg-zinc-700">
                  <div className="container mx-auto mr-[185px] flex gap-56 p-6 text-sm">
                    <ul className="flex flex-col gap-3">
                      <li className="mb-4 w-32 border-b border-b-gray-400 py-1 text-gray-400">
                        آخرین اخبار
                      </li>
                      <li>اخبار داغ</li>
                      <li>نقل و انتقالات</li>
                      <li>اخبار منتخب</li>
                    </ul>
                    <ul className="flex flex-col gap-3 ">
                      <li className="mb-4 w-32 border-b border-b-gray-400 py-1 text-gray-400">
                        اطلاعات
                      </li>
                      <li>جدول لیگ</li>
                      <li>نتایج</li>
                      <li>پیش بینی ها</li>
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
