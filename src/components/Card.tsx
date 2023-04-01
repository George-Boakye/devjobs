import React from "react";

type Props = {
  data: any;
};

export default function Card({ data }: Props) {
  return (
    <>
      <div className="card-container flex justify-center flex-wrap sm:gap-x-[11px] lg:gap-x-[30px] gap-y-[40px] gap-x-[30px] w-full">
        {data.map((card: any) => (
          <div className="main-card pt-6 relative" key={card.id}>
            <div className="card bg-white dark:bg-dark-blue w-[327px] lg:w-[350px] rounded-[6px] pt-[49px] pb-[36px] pl-[32px] ">
              <figure
                style={{ backgroundColor: card.logoBackground }}
                className=" w-[50px] h-[50px] absolute top-[0] rounded-[15px] flex justify-center center-items p-[8px]"
              >
                <img className="w-[100%]" src={card.logo} alt="" />
              </figure>
              <p className=" text-dark-gray">
                {card.postedAt} . <span>{card.contract}</span>
              </p>
              <h1 className="text-dark-blue dark:text-white mb-[12px] mt-[12px]">
                {card.position}
              </h1>
              <p className="mb-[40px] text-dark-gray">{card.company}</p>
              <p className="text-violet text-[14px]">{card.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
