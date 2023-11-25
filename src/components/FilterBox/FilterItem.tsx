'use client'

import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {FilterValue} from "@/components/FilterBox/filterData";
import Checkbox from "@/components/FilterBox/Checkbox";

type FilterItemProps = FilterValue & {
    currentFilter: 'paid' | 'draft' | 'pending' | "",
    setCurrentFilter: Dispatch<SetStateAction<"paid" | "draft" | "pending" | "">>
}

const FilterItem = ({name,value,currentFilter,setCurrentFilter}:FilterItemProps) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
         if(currentFilter && value){
             const states = currentFilter === value
             setChecked(states)
         }
    }, [currentFilter, value]);

    const handleClick = () => {
        setCurrentFilter(value)
    }

    return (
        <div className={"flex justify-start mb-[17px] last:mb-0"}>
            <Checkbox checked={checked} handleClick={handleClick}  />
            <p className={'ml-[13px] text-white text-xs font-bold leading-5 tracking-tighter'}>{name}</p>
        </div>
    );
};

export default FilterItem;