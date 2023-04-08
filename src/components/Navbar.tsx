import React, { useContext, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { DataContext, CheckBoxContext, LocationContext } from "../providers";
import jobData from "../../data";
import { useLocation, useNavigate } from "react-router-dom";

export default function ({ data }: any) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const { setData } = useContext(DataContext);
  const { check } = useContext(CheckBoxContext);

  const loc = useLocation();

  function handleSubmit(e: { preventDefault: any }) {
    e.preventDefault();
    console.log("rrrr");
    if (check) {
      const filteredData = jobData.filter((job: any) => {
        return (
          job.search.toLowerCase().includes(search.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase()) &&
          job.contract === "Full Time"
        );
      });
      setData(filteredData);
    } else {
      const filteredData = jobData.filter((job: any) => {
        return (
          job.search.toLowerCase().includes(search.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      });
      setData(filteredData);
    }
  }

  return (
    <>
      <div className="relative pt-8 p-6 h-[136px] lg:px-[165px]">
        <ImgWrapper>
          <img
            className="sm:object-fill object-cover object-center w-full h-full "
            src="/assets/triangle.png"
            alt=""
          />
        </ImgWrapper>
        <Wrapper>
          <div className="w-full flex justify-between flex-row">
            <figure onClick={() => navigate("/")} className="cursor-pointer">
              <img src="/assets/devjobs.svg" alt="" />
            </figure>
            <ThemeSwitcher />
          </div>
          {loc.pathname.includes("job") ? (
            <div className="relative ">
              <div className="flex flex-col md:flex-row  justify-center md:justify-between md:items-center items-center bg-white dark:bg-dark-blue w-[327px] md:w-[689px] lg:w-[730px] rounded md:pb-0 md:pr-10 pb-8">
                <figure
                  style={{ backgroundColor: data.logoBackground }}
                  className="w-[50px] h-[50px] md:w-[140px] md:h-[140px] absolute md:static rounded-[15px] md:rounded-[0] flex justify-center center-items p-[8px] top-[-30px] md:rounded-bl-lg"
                >
                  <img className="w-full" src={data.logo} alt="" />
                </figure>
                <div className="md:mr-[40px] md:absolute md:left-[180px]">
                  <h1 className="mt-[50px] md:mt-[0] text-5 text-dark-blue dark:text-white font-bold">
                    {data.company}
                  </h1>
                  <p className="text-dark-gray">
                    {data.company?.toLowerCase()}.com
                  </p>
                </div>
                <div className="md:dark:hover:bg-[#525861]  md:dark:bg-[#303642] md:mt-[0] mt-6 px-5 py-4 pb-3 bg-[#EEEFFC] dark:bg-[#1F273F] rounded md:cursor-pointer lg:cursor-pointer">
                  <p className="text-violet md:text-violet md:dark:text-white font-bold">
                    Company Site
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <LocationContext.Provider value={{ location, setLocation }}>
              <SearchBar
                handleSubmit={handleSubmit}
                search={search}
                setSearch={setSearch}
              />
            </LocationContext.Provider>
          )}
        </Wrapper>
      </div>
    </>
  );
}

const ImgWrapper = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  row-gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
