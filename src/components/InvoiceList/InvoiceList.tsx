"use client"

import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import {Invoice} from "@/types";
import noInvoiceIcon from "@/../public/assets/illustration-empty.svg"
import Image from "next/image";
import Link from "next/link";
import FilterSection from "@/components/FilterSection/FilterSection";
import {useEffect, useState} from "react";

type InvoiceListProps = {
    invoices: Invoice[]
}

const InvoiceList = ({invoices}: InvoiceListProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [filteredList,setFilteredList] = useState<Invoice[]>([])
    const [currentFilter, setCurrentFilter] = useState<
        "paid" | "draft" | "pending" | "reset" | ""
    >("");

    useEffect(() => {
        setFilteredList(invoices)
    }, []);

    useEffect(() => {
        if(currentFilter != ""){
            const filteredList = invoices.filter(invoice => invoice.invoiceStatus === currentFilter)
            setFilteredList(filteredList)
        }
        if(currentFilter === "reset"){
            setFilteredList(invoices)
        }
    }, [currentFilter, invoices]);

    const renderCards = () => {
        if (filteredList.length > 0) {
            return filteredList.map(invoice => (
                <Link key={invoice.id} href={`/invoice/${invoice.id}`}>
                    <InvoiceCard key={invoice.id} clientName={invoice.clientName}
                                 invoiceReference={invoice.invoiceReference} invoiceStatus={invoice.invoiceStatus}
                                 paymentDue={invoice.paymentDue} total={invoice.total}/>
                </Link>))
        }
        return <div className={"w-full h-auto max-w-[730px] flex-col justify-start items-center mt-[100px]"}>
            <Image src={noInvoiceIcon} alt={"No Invoices Image"} className={"h-[160px] w-[193.073px] mx-auto"}/>
            <p className={"text-white text-2xl text-center font-bold leading-normal tracking-tight mt-10 mb-[24px]"}>There
                is nothing here</p>
            <p className={"text-blue-gray-300 text-center font-spartan text-xs font-medium leading-5 tracking-tighter"}>Create
                an invoice by clicking the
                <span className={"font-bold"}> New</span> button and get started</p>
        </div>
    }
    return (
        <section className={"w-full"}>
            <FilterSection currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} isActive={isActive}
                           setIsActive={setIsActive}/>
            {renderCards()}
        </section>
    );
};

export default InvoiceList;