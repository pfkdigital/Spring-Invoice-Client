"use client"

import React from 'react';
import Button from "@/components/Button/Button";

import {deleteAnInvoiceById} from "@/utils/api-functions";
import {useRouter} from "next/navigation";


type DeleteModalProps = {
    id: number,
    invoiceReference: string
    onCancel: () => void
}

const DeleteModal = ({id, invoiceReference, onCancel}: DeleteModalProps) => {
    const router = useRouter()
    const deleteInvoice = () => {
        try {
            deleteAnInvoiceById(id).then(
                () => {
                    onCancel()
                    router.refresh()
                    router.push("/")
                }
            )
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div
            className={"fixed top-0 left-0 h-screen w-screen z-20 bg-black-rgba flex justify-center items-center px-6 transition-all"}>
            <div className={"p-8 flex-col items-start bg-dark-navy w-full rounded-lg max-w-[480px]"}>
                <h2 className={"text-white text-2xl font-bold leading-8 tracking-tighter mb-2"}>Confirm
                    Deletion</h2>
                <p className={"text-blue-gray font-spartan text-xs font-medium leading-6 tracking-tighter"}>{`Are you sure you want to delete invoice #${invoiceReference} This action cannot be undone.`}</p>
                <div className={"w-full flex justify-end mt-8"}>
                    <Button type={"cancel"} handleClick={() => onCancel()}/>
                    <Button type={"delete"} handleClick={() => deleteInvoice()}/>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;