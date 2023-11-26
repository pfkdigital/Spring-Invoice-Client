import React from 'react';
import InvoiceStatus from "@/components/InvoiceCard/InvoiceStatus";
import Button from "@/components/Button/Button";

type TopControllerBarProps = {
    invoiceStatus: string
}

const TopControlBar = ({invoiceStatus}: TopControllerBarProps) => {
    return (
        <section
            className={"w-full h-[91px] max-w-[738px] p-6 bg-dark-navy mt-8 rounded-lg md:flex md: justify-between md:items-center"}>
            <div className={"h-full w-full flex justify-between items-center md:max-w-auto md:justify-start"}>
                <div className={"md: mr-4"}>
                    <p className={"text-blue-gray-300 text-xs font-medium leading-5 tracking-tighter"}>Status</p>
                </div>
                <InvoiceStatus invoiceStatus={invoiceStatus}/>
            </div>
            <div className={"hidden md:flex"}>
                <Button type={"edit"}/>
                <Button type={"delete"}/>
                <Button type={"mark"}/>
            </div>
        </section>
    );
};

export default TopControlBar;