import React from "react";
import plusIcon from "@/../public/assets/icon-plus.svg";
import Image from "next/image";
import FilterBox from "@/components/FilterBox/FilterBox";

const FilterSection = () => {
  return (
    <section className={"flex justify-between items-center max-w-[730px]"}>
      <div>
        <h2 className={"text-white text-20 font-bold tracking-tight md:text-[32px]"}>
          Invoices
        </h2>
        <p
          className={
            "text-pale-blue text-sm font-medium leading-5 tracking-tighter"
          }
        >
          <span className="hidden md:inline-block">There are</span> 7{" "}
          <span className="hidden md:inline-block">total</span> Invoices
        </p>
      </div>
      <div className={"flex justify-end items-center"}>
        <FilterBox />
        <div
          className={
            "flex justify-between items-center bg-purple hover:bg-pale-purple rounded-3xl ml-[18px] pl-[6px] pr-[14px] py-2 cursor-pointer"
          }
        >
          <div
            className={
              "w-8 h-8 bg-white flex items-center justify-center rounded-full mr-2"
            }
          >
            <Image src={plusIcon} alt={"plus-icon"} className={"z-10"} />
          </div>
          <p
            className={
              "text-white text-sm font-bold leading-5 tracking-tighter"
            }
          >
            New{" "}
            <span
              className={
                "hidden md:inline-block text-white text-sm font-bold leading-5 tracking-tighter"
              }
            >
              Invoice
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
