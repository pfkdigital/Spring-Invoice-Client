"use client"

import InvoiceStatus from "@/components/InvoiceCard/InvoiceStatus";
import Button from "@/components/Button/Button";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import {useState} from "react";
import {DeleteModalProvider, useDeleteModal} from "@/utils/DeleteModalProvider";
import {useEditModal} from "@/utils/EditModalProvider";
import {markAnInvoiceAsPaid} from "@/utils/api-functions";
import {useRouter} from "next/navigation";

type TopControllerBarProps = {
    id: number,
    invoiceStatus: string
    invoiceReference: string;
}

const TopControlBar = ({invoiceStatus, invoiceReference, id}: TopControllerBarProps) => {
    const {isDeleteModalOpen, closeDeleteModal, openDeleteModal} = useDeleteModal()
    const router = useRouter()
    const handleMarkAsPaid = () => {
        if (invoiceStatus === "pending") {
            markAnInvoiceAsPaid(id).then(r => router.refresh())
        } else {
            alert("Please fill the invoice details before marking as paid")
        }
    }

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
                <Button type={"edit"} handleClick={() => {
                    console.log("hi")
                }}/>
                <Button type={"delete"} handleClick={openDeleteModal}/>
                {invoiceStatus !== "paid" || "draft" ? <Button type={"mark"} handleClick={() => handleMarkAsPaid()}/> : null}
            </div>
            {isDeleteModalOpen &&
                <DeleteModal id={id} invoiceReference={invoiceReference} onCancel={closeDeleteModal}/>}
        </section>
    );
};

export default TopControlBar;