import React, { useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { DataContext } from "../providers";

export const JobPage = () => {
  const { data } = useContext(DataContext);

  const params = useParams();

  const mainData: any = data.find((job: any) => job?.id == params.id);

  return (
    <>
      <Navbar data={mainData} />
      <div className="mt-[216px]  px-6">
        <div className="w-full md:max-w-[689px] lg:max-w-[730px] md:m-auto bg-white dark:bg-dark-blue md:p-12 py-10 px-6 rounded">
          <div className="flex flex-col gap-y-[54px] md:flex-row md:justify-between md:items-center">
            <div>
              <p className="text-dark-gray">
                {mainData?.postedAt} . {mainData?.contract}
              </p>
              <h1 className="mt-2 font-bold text-dark-blue text-xl dark:text-white">
                {mainData?.position}
              </h1>
              <p className=" mt-4 text-violet text-sm font-bold">
                {mainData?.location}
              </p>
            </div>
            <button className="md:hover:bg-[#939BF5] bg-violet text-white font-bold  py-4 px-14 md:px-[28px] rounded ">
              Apply Now
            </button>
          </div>
          <div className="mt-8 text-dark-gray">
            <p className="text-dark-gray">{mainData.description}</p>

            <div className="mt-10 ">
              <h2 className="text-dark-blue dark:text-white mb-8 text-xl font-bold">
                Requirements
              </h2>
              <p>{mainData.requirements?.content}</p>
              <ul className="mt-8 list-disc marker:text-violet">
                {mainData?.requirements?.items.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-dark-blue dark:text-white mb-8 text-xl font-bold">
                What You will Do
              </h2>
              <p>{mainData.role?.content}</p>
              <ol className="mt-8 list-decimal marker:text-violet marker:text-justify">
                {mainData?.role?.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white dark:bg-dark-blue w-full mt-[64px] rounded md:flex md:justify-between lg:justify-center lg:gap-x-[348px] md:items-center">
        <div className="hidden md:block">
          <h1 className="font-bold dark:text-white text-dark-blue mb-3">
            {mainData.position}
          </h1>
          <p className="text-dark-gray">{mainData.company}.</p>
        </div>
        <button className="md:hover:bg-[#939BF5] bg-violet text-white font-bold py-4 px-16 w-full md:w-[141px] md:px-[28px] rounded ">
          Apply Now
        </button>
      </div>
    </>
  );
};
