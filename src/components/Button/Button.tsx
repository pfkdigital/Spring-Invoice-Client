'use client'

import {useEffect, useState} from "react";

type ButtonTypes = {
    type: "edit" | "delete" | "mark"
}

const Button = ({type}: ButtonTypes) => {
    const [label, setLabel] = useState("")
    const [styles, setStyles] = useState("")

    useEffect(() => {
        switch (type) {
            case "edit":
                setLabel("Edit")
                setStyles("w-[73px] h-[48px] flex-shrink-0 rounded-3xl bg-navy shadow-md text-white text-xs font-bold leading-5 tracking-tighter")
                break
            case "delete":
                setLabel("Delete")
                setStyles("w-[89px] h-[48px] flex-shrink-0 rounded-3xl bg-red text-white mx-2 text-xs font-bold leading-5 tracking-tighter")
                break
            case "mark":
                setLabel("Mark as Paid")
                setStyles("w-[131px] h-[48px] flex-shrink-0 rounded-3xl bg-purple text-white text-xs font-bold leading-5 tracking-tighter")
                break
            default:
                break
        }
    }, []);
    return (
        <button className={styles}>
            {label}
        </button>
    );
};

export default Button;