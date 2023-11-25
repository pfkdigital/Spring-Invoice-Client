"use client"

import {useEffect, useState} from "react";

const InvoiceStatus = ({invoiceStatus}: { invoiceStatus: string }) => {
    const [backgroundColor, setBackgroundColor] = useState("")
    const [textColor, setTextColor] = useState("")
    useEffect(() => {
        switch (invoiceStatus) {
            case "paid":
                setBackgroundColor("bg-green");
                setTextColor("text-green")
                break
            case "pending":
                setBackgroundColor("bg-orange");
                setTextColor("text-orange")
                break
            case "draft":
                setBackgroundColor("bg-pale-blue")
                setTextColor("text-pale-blue")
                break
            default:
                break
        }
    }, [, invoiceStatus]);

    return (
        <div className={"flex justify-end items-center md:w-[25%] md:justify-center"}>
            <div
                className={`flex justify-center items-center w-[104px] h-10 ${backgroundColor} bg-opacity-[0.0571] rounded-md`}>
                <div className={`w-2 h-2 rounded-full ${backgroundColor} mr-2`}/>
                <p className={`${textColor} text-xs font-bold leading-5 tracking-tighter first-letter:uppercase`}>{invoiceStatus}</p>
            </div>
        </div>
    );
};

export default InvoiceStatus;