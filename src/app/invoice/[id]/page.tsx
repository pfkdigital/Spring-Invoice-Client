import {Invoice} from "@/types";
import {getAnInvoiceById} from "@/utils/api-functions";
import GoBack from "@/components/GoBack/GoBack";
import TopControlBar from "@/components/TopControlBar/TopControlBar";
import InvoiceDetail from "@/components/InvoiceDetail/InvoiceDetail";
import BottomControlBar from "@/components/BottomControlBar/BottomControlBar";
import React from "react";
import {DeleteModalProvider} from "@/utils/DeleteModalProvider";

type InvoicePageProps = {
    params: { id: number }
}

export default async function Page({params}: InvoicePageProps) {
    const invoice: Invoice | undefined = await getAnInvoiceById(params.id)
    if (!invoice) {
        return null
    }
    return (
        <main className={"pt-8 pb-[103px] xl:max-w-[730px] xl:mx-auto xl:pt-[72px]"}>
            <GoBack/>
            <TopControlBar id={invoice.id} invoiceStatus={invoice.invoiceStatus} invoiceReference={invoice.invoiceReference}/>
            <InvoiceDetail invoice={invoice}/>
            <BottomControlBar id={invoice.id} invoiceStatus={invoice.invoiceStatus} invoiceReference={invoice.invoiceReference}/>
        </main>
    );
};
