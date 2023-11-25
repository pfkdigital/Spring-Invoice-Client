"use client";

import { useState } from "react";
import arrowUp from "@/../public/assets/icon-arrow-up.svg";
import arrowDown from "@/../public/assets/icon-arrow-down.svg";
import Image from "next/image";
import { filterData } from "@/components/FilterBox/filterData";
import FilterItem from "@/components/FilterBox/FilterItem";

const FilterBox = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<
    "paid" | "draft" | "pending" | ""
  >("");

  const renderFilterBoxes = () => {
    return filterData.map((filter) => {
      return (
        <FilterItem
          key={Math.random()}
          name={filter.name}
          value={filter.value}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      );
    });
  };

  return (
    <div>
      <div className={"relative"}>
        <div
          className={"flex justify-center items-center"}
          onClick={() => setIsActive(!isActive)}
        >
          <p
            className={
              "text-white text-sm font-bold leading-5 tracking-tighter mr-4"
            }
          >
            Filter <span className={"hidden md:inline-block"}>by status</span>
          </p>
          {isActive ? (
            <Image
              src={arrowUp}
              alt={"arrow-up"}
              className={"w-[8.456px] h-[4.228px]"}
            />
          ) : (
            <Image
              src={arrowDown}
              alt={"arrow-down"}
              className={"w-[8.456px] h-[4.228px]"}
            />
          )}
        </div>
        {isActive && (
          <div
            className={
              "absolute top-12 left-[-50%] w-[192px] min-h-[128px] max-h-auto bg-navy z-20 rounded-lg p-6"
            }
          >
            {renderFilterBoxes()}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBox;
