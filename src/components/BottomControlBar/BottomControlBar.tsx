"use client"

import React from 'react';
import Button from "@/components/Button/Button";
import {useDeleteModal} from "@/utils/DeleteModalProvider";
import {useRouter} from "next/navigation";
import {markAnInvoiceAsPaid} from "@/utils/api-functions";

type BottomControllerBarProps = {
    id: number,
    invoiceStatus: string
    invoiceReference: string;
}
const BottomControlBar = ({id,invoiceReference,invoiceStatus}:BottomControllerBarProps) => {
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
        <div className={"fixed bottom-0 left-0 w-screen h-auto px-6 py-[22px] bg-dark-navy md:hidden"}>
            <div className={"flex justify-center"}>
                <Button type={"edit"} handleClick={() => {
                    console.log("hi")
                }}/>
                <Button type={"delete"} handleClick={openDeleteModal}/>
                {invoiceStatus !== "paid" || "draft" ? <Button type={"mark"} handleClick={() => handleMarkAsPaid()}/> : null}
            </div>
        </div>
    );
};

export default BottomControlBar;