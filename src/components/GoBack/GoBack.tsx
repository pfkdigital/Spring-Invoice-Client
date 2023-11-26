'use client'

import React from 'react';
import Image from "next/image";
import arrowBackIcon from "../../../public/assets/icon-arrow-left.svg";
import {useRouter} from "next/navigation";

const GoBack = () => {
    const router = useRouter()
    return (
        <div className={"flex justify-start items-center"} onClick={() => router.back()}>
            <Image src={arrowBackIcon} alt={"Go back"} className={"mr-6"}/>
            <p className={"text-white text-xs font-bold leading-5 tracking-tighter"}>Go back</p>
        </div>
    );
};

export default GoBack;