import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showPremierLeaugeToggle, setShowPremierLeaugeToggle] = useState(false);
  const [showSubPremierLeaugeToggle, setShowSubPremierLeaugeToggle] =
    useState(false);
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
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
        <div className="relative flex items-center gap-10 lg:hidden">
          <Link
            className="relative  ml-14 flex text-[14px] before:ml-[8px] before:h-[20px]  before:w-[20px] before:font-live before:text-xl before:leading-[19px] before:text-[#73c3ce] before:content-['\e922']"
            href="/"
          >
            نتایج زنده
          </Link>
          <button
            onClick={() => setIsBurgerMenuOpened(!isBurgerMenuOpened)}
            className={`BurgerMenu duration-200 before:transition-all before:duration-200 after:transition-all after:duration-200 ${
              isBurgerMenuOpened && "active"
            }`}
          >
            <span
              className={`${
                isBurgerMenuOpened &&
                "translate-x-[50%] opacity-0 transition-all"
              } block h-[2px] w-[20px] rounded-lg bg-white transition-all duration-200 `}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={`${
          isBurgerMenuOpened
            ? "h-screen border-orange-400 transition-all duration-300 ease-in-out"
            : "h-0"
        } top-90px fixed block   w-full border-t-2  bg-[#292929] transition-all duration-300 ease-in-out lg:hidden`}
      >
        {isBurgerMenuOpened && (
          <div className="flex w-full flex-col gap-10 px-6 py-12 text-xl">
            <Link href="/">نتایج</Link>
            <Link href="/">اخبار داغ</Link>
            <Link href="/">نقل و انتقالات</Link>
            <div
              onClick={() =>
                setShowSubPremierLeaugeToggle(!showSubPremierLeaugeToggle)
              }
              className="relative flex w-full cursor-pointer items-center justify-between"
            >
              <span>لیگ جزیره</span>
              <img src="/plus.png" />
              <div
                className={`${
                  showSubPremierLeaugeToggle
                    ? "duration-400 h-36 transition-all ease-linear"
                    : "duration-400 h-0 transition-all ease-linear"
                } duration-400 absolute top-14 mx-auto flex w-[95%] flex-col gap-4 overflow-hidden px-4 text-[16px] transition-all ease-linear `}
              >
                <p className="border-b border-b-gray-500/50">اخبار منتخب</p>
                <p className="border-b border-b-gray-500/50">جدول لیگ</p>
                <p className="border-b border-b-gray-500/50">پیش بینی ها</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
