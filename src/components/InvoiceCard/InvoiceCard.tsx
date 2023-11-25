import React from 'react';
import arrowRight from "@/../public/assets/icon-arrow-right.svg"
import Image from "next/image";
import {InvoiceCardProps} from "@/types";
import InvoiceStatus from "@/components/InvoiceCard/InvoiceStatus";

const InvoiceCard = ({
                         invoiceReference,
                         paymentDue,
                         clientName,
                         total,
                         invoiceStatus
                     }: InvoiceCardProps) => {
    return (
        <div className={"w-full max-w-[730px] h-auto max-h-fit bg-dark-navy mb-4 rounded-lg md:h-[72px] cursor-pointer"}>
            <div className={"relative grid grid-cols-2 grid-rows-2- p-6 md:h-full md:flex md:py-0 md:items-center"}>
                <div className={"md:flex md:items-center md:w-[30%]"}>
                    <p className={"text-white text-xs font-bold leading-5 tracking-tighter"}><span
                        className={"text-pastel-blue"}>#</span>{invoiceReference}</p>
                    <p className={"text-pale-blue text-xs font-medium leading-5 tracking-tighter mt-6 md:mt-0 md:ml-[27px]"}>Due {paymentDue}</p>
                </div>
                <div className={"flex justify-end md:w-[25%] md:items-center md:justify-center"}>
                    <p className={"text-white font-spartan text-xs font-medium leading-5 tracking-tighter text-start"}>{clientName}</p>
                </div>
                <div className={"flex items-center md:w-[25%] md:items-center md:justify-center"}><p
                    className={"text-white text-base font-bold leading-6 tracking-tight"}>£{total}</p>
                </div>
                <InvoiceStatus invoiceStatus={invoiceStatus} />
                <Image src={arrowRight} alt={"right-arrow"} className={"hidden md:inline-block md:w-1 md:h-2"}/>
            </div>
        </div>
    );
};

export default InvoiceCard;