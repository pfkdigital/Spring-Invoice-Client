'use client'

import {useEffect, useState} from "react";
import invoiceStatus from "@/components/InvoiceCard/InvoiceStatus";

type ButtonTypes = {
    type: "edit" | "delete" | "mark" | "cancel",
    handleClick: () => void
    invoiceStatus?: "paid" | "pending" | "draft" | undefined
}

const Button = ({type,handleClick,invoiceStatus}: ButtonTypes) => {
    const [label, setLabel] = useState("")
    const [styles, setStyles] = useState("")

    useEffect(() => {
        switch (type) {
            case "cancel":
                setLabel("Cancel")
                setStyles("w-[89px] h-[48px] flex-shrink-0 rounded-3xl bg-navy hover:bg-white shadow-md text-white hover:text-pastel-blue text-xs font-bold leading-5 tracking-tighter")
                break
            case "edit":
                setLabel("Edit")
                setStyles("w-[73px] h-[48px] flex-shrink-0 rounded-3xl bg-navy hover:bg-white shadow-md text-white hover:text-pastel-blue text-xs font-bold leading-5 tracking-tighter")
                break
            case "delete":
                setLabel("Delete")
                setStyles("w-[89px] h-[48px] flex-shrink-0 rounded-3xl bg-red hover:bg-pale-red text-white mx-2 text-xs font-bold leading-5 tracking-tighter")
                break
            case "mark":
                setLabel("Mark as Paid")
                setStyles("w-[131px] h-[48px] flex-shrink-0 rounded-3xl bg-purple hover:bg-pale-purple text-white text-xs font-bold leading-5 tracking-tighter disabled:bg-purple")
                break
            default:
                break
        }
    }, []);
    return (
        <button className={styles} onClick={() => handleClick()}>
            {label}
        </button>
    );
};

export default Button;