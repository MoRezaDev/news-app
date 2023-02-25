import Image from "next/image";

type LiveCardProps = {
  data: {
    tournoment: string;
    day: string;
    guestName: string;

    guestResult: number;

    hostName: string;

    hostResult: number;

    state: string;

    hostLogo: { url: string };
    guestLogo: { url: string };
  }[];
};

const LiveCard = ({ data }: LiveCardProps) => {
  return (
    <div className="w-full border  border-black md:my-6 md:mx-auto md:w-[97%] md:rounded-md">
      <div className="flex  h-[40px] w-full items-center bg-black px-4 py-2 text-white">
        <h1 className="">{data[0].tournoment}</h1>
      </div>
      {data.map((match, idx) => (
        <div
          className={`${
            (idx + 1) % 2 === 0 ? "bg-[#292929]" : "bg-[#333]"
          }  flex h-[60px] items-center justify-center gap-4 text-white md:text-xl`}
          key={idx}
        >
          <div className="flex  w-[150px] items-center justify-end gap-4 md:w-[250px] ">
            <p>{match.hostName}</p>
            <Image
              src={match.hostLogo.url}
              width={20}
              height={20}
              alt="host"
              className="md:h-[32px] md:w-[32px]"
            />

            <p>{match.hostResult}</p>
          </div>
          <span>-</span>
          <div className="flex  w-[150px] items-center justify-start gap-4 md:w-[250px] ">
            <p>{match.guestResult}</p>

            <Image
              src={match.guestLogo.url}
              width={20}
              height={20}
              alt="host"
              className="md:h-[32px] md:w-[32px]"
            />
            <p>{match.guestName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveCard;
