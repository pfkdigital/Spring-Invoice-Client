import React from 'react';
import InvoiceDetailTable from "@/components/InvoiceDetail/InvoiceDetailTable/InvoiceDetailTable";
import {Invoice} from "@/types";

type InvoiceDetailProp = {
    invoice: Invoice
}

const InvoiceDetail = ({
                           invoice
                       }: InvoiceDetailProp) => {
    const {
        invoiceReference,
        description,
        senderAddress,
        createdAt,
        paymentDue,
        clientName,
        clientAddress,
        clientEmail,
        invoiceItems
    } = invoice
    return (
        <div className={"w-full max-w-[738px] h-auto p-6 mt-4 rounded-lg bg-dark-navy shadow-md mb-[50px] md:mb-0 md:p-8"}>
            <div>
                <div>
                    <div className={"w-full h-auto flex flex-col justify-between mb-[30px] md:flex-row"}>
                        <div className={"h-auto mb-[30px] md:w-2/4 md:mb-0"}>
                            <p className={"text-white md:text-[16px] font-bold leading-5 tracking-tighter md:mb-2"}>
                                <span className={"text-pastel-blue"}>#</span>{invoiceReference}</p><p
                            className={"text-pale-blue font-spartan text-xs leading-5 tracking-tighter"}>{description}</p>
                        </div>
                        <div className={"h-auto text-pale-blue font-spartan text-xs leading-5 tracking-tighter md:text-right"}>
                            <p>{senderAddress.street}</p><p>{senderAddress.city}</p><p>{senderAddress.postCode}</p>
                            <p>{senderAddress.country}</p>
                        </div>
                    </div>
                    <div className={"md:w-full md:flex"}>
                        <div className={"w-[90%] flex justify-between md:w-[50%]"}>
                            <div className={"flex-col w-auto"}>
                                <div>
                                    <p className={"text-pale-blue font-spartan text-xs leading-5 tracking-tighter md:mb-2"}>Invoice
                                        Date</p>
                                    <p className={"text-white font-bold leading-5 tracking-tighter text-[15px]"}>{createdAt}</p>
                                </div>
                                <div>
                                    <p className={"text-pale-blue font-spartan text-xs leading-5 tracking-tighter mt-8 md:mb-2"}>Payment
                                        Due</p>
                                    <p className={"text-white text-[15px] font-bold leading-5 tracking-tighter"}>{paymentDue}</p>
                                </div>
                            </div>
                            <div className={"flex-col"}>
                                <div className={"mb-2"}>
                                    <p className={"text-pale-blue font-spartan text-xs leading-5 tracking-tighter md:mb-2"}>Bill
                                        To</p>
                                    <p className={"text-white text-[15px] font-bold leading-5 tracking-tighter"}>{clientName}</p>
                                </div>
                                <div className={"text-pale-blue font-spartan text-xs leading-5 tracking-tighter"}>
                                    <p>{clientAddress.street}</p><p>{clientAddress.city}</p><p>{clientAddress.postCode}</p>
                                    <p>{clientAddress.country}</p>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-9 md:mt-0 md:ml-[110px]"}>
                            <p className={"text-pale-blue font-spartan text-xs leading-5 tracking-tighter md:mb-2"}>Sent
                                to</p>
                            <p className={"text-white text-[15px] font-bold leading-5 tracking-tighter"}>{clientEmail}</p>
                        </div>
                    </div>
                </div>
            </div>
            <InvoiceDetailTable items={invoiceItems}/>
        </div>
    );
};

export default InvoiceDetail;