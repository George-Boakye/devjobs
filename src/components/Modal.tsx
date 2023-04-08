import React, { useContext, useState } from "react";
import Checkbox from "./Checkbox";
import { LocationContext } from "../providers";

export default function Modal({ state, handleSubmit }: any) {
  const { location, setLocation } = useContext(LocationContext);
  console.log(location);
  const closeModal = (e: any) => {
    return e.target.matches(".modal") ? state() : null;
  };
  return (
    <>
      <div
        className="modal w-full h-full bg-[rgba(0,0,0,0.2)] fixed left-0 top-0 z-[1] "
        onClick={closeModal}
      >
        <div className="w-82 p-6 absolute top-[200px] left-6 modal-content bg-white  dark:bg-dark-blue rounded-[6px]">
          <form onSubmit={handleSubmit}>
            <div className="flex pb-[24px] border-gray border-b border-opacity-20">
              <figure className="mr-[16px]">
                <img src="/assets/placeholder.svg" alt="" />
              </figure>
              <input
                className="bg-white dark:bg-dark-blue dark:text-white outline-0"
                type="text"
                placeholder="Filter by location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center">
              <Checkbox />
              <label className="block pl-[16px] text-midnight dark:text-white font-bold">
                Full Time Only
              </label>
            </div>
            <div>
              <button
                className="text-white w-[279px] bg-violet pt-[16px] pl-[48px] pr-[48px] pb-[16px] rounded-[6px] font-bold"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
