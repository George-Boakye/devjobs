import React, { useContext, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import styled from "styled-components";
import { MobileSearch } from "./MobileSearch";
import { DataContext, CheckBoxContext, LocationContext } from "../providers";
import jobData from "../../data";

export default function () {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const { setData } = useContext(DataContext);
  const { check } = useContext(CheckBoxContext);

  console.log("bragadus", check);

  function handleSubmit(e: { preventDefault: any }) {
    e.preventDefault();
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
            <figure>
              <img src="/assets/devjobs.svg" alt="" />
            </figure>
            <ThemeSwitcher />
          </div>
          <LocationContext.Provider value={{ location, setLocation }}>
            <MobileSearch
              handleSubmit={handleSubmit}
              search={search}
              setSearch={setSearch}
            />
          </LocationContext.Provider>
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
