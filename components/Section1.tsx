import Link from "next/link";

interface Props {
  data: {
    title: string;
    id: number | string;
    description: string;
    coverPhoto: { url: string };
    slug: string;
  }[];
}
const Section1 = ({ data }: Props) => {
  return (
    <>
      <section className="sticky top-[96px] z-[-1] w-full bg-[#292929]">
        <div className="relative flex h-screen items-end">
          <img
            src={data[0].coverPhoto.url}
            alt="section1"
            className="absolute top-0  z-[-1] object-contain md:object-cover lg:static  lg:h-full lg:w-full"
          />
        </div>
      </section>
      <div className="gradientTitle relative -top-[550px]  h-56 w-full text-white sm:-top-[400px] md:-top-[300px] ">
        <div className="mr-10 w-4/5  py-3 md:mr-28 lg:w-2/5">
          <Link
            href={`/news/${data[0].slug}`}
            className="transition hover:opacity-50"
          >
            <h1 className="text-xl leading-[60px] md:text-3xl">
              {data[0].title}
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section1;
