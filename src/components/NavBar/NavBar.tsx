"use client"

import React, {useEffect, useState} from 'react';
import springInvoiceIcon from "@/../public/assets/logo.svg"
import sunIcon from "@/../public/assets/icon-sun.svg"
import moonIcon from "@/../public/assets/icon-moon.svg"
import avatar from "@/../public/assets/image-avatar.jpg"
import Image from "next/image";
import {useTheme} from "next-themes";

const NavBar = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState<boolean>(false)

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        setMounted(true)
    }, []);


    if (!mounted) {
        return null
    }

    return (
        <nav
            className={"w-screen h-[72px] bg-slate-blue-gray dark:bg-dark-navy xl:absolute xl:w-[103px] xl:h-screen xl:rounded-tr-[20px] xl:rounded-br-[20px]"}>
            <div className={"h-full flex justify-between xl:flex-col xl:items-center xl:justify-between"}>
                <div
                    className={"relative flex justify-center items-center bg-purple h-[72px] w-[72px] rounded-tr-[20px] rounded-br-[20px] overflow-clip xl:w-full xl:h-[103px]"}>
                    <Image src={springInvoiceIcon} alt={"Spring invoice icon"}
                           className={"z-10 h-7 w-7 xl:w-10 xl:h-[37.7px]"}/>
                    <div
                        className={"absolute top-[55%] bg-pale-purple h-[72px] w-[72px] rounded-tl-[20px] xl:w-full"}></div>
                </div>
                <div className={"h-auto w-auto flex align-middle justify-center xl:flex-col "}>
                    <div className={"h-full w-auto flex justify-center items-center pr-4 xl:pr-0 xl:pb-5"}
                         onClick={() => switchTheme()}>
                        <Image src={theme === "dark" ? moonIcon : sunIcon} alt={"dark-mode"}
                               className={"h-4 w-4 cursor-pointer"}
                        />
                    </div>
                    <div className={"w-px h-full bg-border-dark xl:h-[3px] xl:w-[103px]"}></div>
                    <div
                        className={"h-full w-auto flex justify-center items-center pl-4 pr-[24px] xl:pl-0 xl:py-5 xl:px-0"}>
                        <Image src={avatar} alt={"profile avatar"} className={"h-8 w-8 rounded-full"}/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;