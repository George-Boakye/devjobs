import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { DataContext } from "../providers";

function HomePage() {
  const { data, setData } = useContext(DataContext);
  const [itemCount, setItemCount] = useState(12);

  const loadMore = () => {
    setItemCount(itemCount + 10);
  };

  const visibleData = data.slice(0, itemCount);

  return (
    <>
      <Navbar data={null} />
      <div className="mt-20 pl-6 pr-6 lg:px-[165px] flex flex-col justify-center items-center w-full">
        <Card data={visibleData} />
        <button
          onClick={loadMore}
          className="bg-violet text-white rounded py-4 px-7 mt-8 mb-[62px] w-[141px] font-bold hover:bg-[#939BF5] md:cursor-pointer"
        >
          Load more
        </button>
      </div>
    </>
  );
}

export default HomePage;
