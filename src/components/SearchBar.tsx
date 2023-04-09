import React, { useContext, useState } from "react";
import Modal from "./Modal";
import Funnel from "./Funnel";
import Checkbox from "./Checkbox";
import { LocationContext, CheckBoxContext } from "../providers";
type SearchProps = {
  search: string;
  setSearch: (a: string) => void;
  handleSubmit: any;
};

export const SearchBar: React.FC<SearchProps> = ({
  search,
  setSearch,
  handleSubmit,
}) => {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  const { location, setLocation } = useContext(LocationContext);

  const handleClick = () => {
    setModal(false);
  };

  return (
    <>
      {modal ? <Modal state={handleClick} handleSubmit={handleSubmit} /> : null}
      <form className="sm:hidden" onSubmit={handleSubmit}>
        <div className="max-w-[327px] bg-white dark:bg-dark-blue rounded-[6px] p-[16px] flex items-center justify-between ">
          <div>
            <input
              className=" w-[105px] mr-[90px] dark:bg-dark-blue dark:text-white opacity-50 caret-violet text-dark-blue"
              type="text"
              placeholder="Filter by title..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div
            className="text-gray dark:text-white mr-[24px]"
            onClick={() => setModal(true)}
          >
            <Funnel />
          </div>
          <div className="bg-violet p-3.5 rounded">
            <img src="/assets/white-search.svg" alt="" />
          </div>
        </div>
      </form>
      <form className="hidden sm:block" onSubmit={handleSubmit}>
        <div className="search-wrapper rounded-[6px] h-[5rem] flex bg-white dark:bg-dark-blue">
          <div className="search filter flex items-center sm:pl-6 sm:pr-[50px] lg:pl-8 lg:pr-[119px] border-r border-[#6E8098] border-opacity-20">
            <figure className="mr-[1rem]">
              <img src="/assets/search.svg" alt="" />
            </figure>
            <input
              className="cursor-pointer w-[312px] dark:bg-dark-blue dark:text-white sm:max-w-[147px] lg:max-w-[271px] overflow-hidden text-ellipsis whitespace-nowrap outline-0"
              type="text"
              placeholder="Filter by title, companies, expertise…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter2 search  h-[5rem] flex p-7 pl-6 pr-5 lg:pr-[108px] border-r border-[#6E8098] border-opacity-20">
            <figure className="w-[17px] mr-[16px]">
              <img src="/assets/placeholder.svg" alt="" />
            </figure>
            <input
              className="cursor-pointer sm:w-[135px] dark:bg-dark-blue dark:text-white outline-0 overflow-hidden whitespace-nowrap"
              type="text"
              placeholder="Filter by location…"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div className="p-4 lg:pl-8 flex items-center">
            <Checkbox />
            <p className="pl-4 pr-5 w-full dark:text-white font-bold">
              Full Time <span className="sm:hidden lg:inline-block">Only</span>
            </p>
            <button
              type="submit"
              className="hover:bg-[#939BF5] py-4 px-[14px] bg-violet text-white rounded font-bold lg:px-9 lg:py-4"
            >
              search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
