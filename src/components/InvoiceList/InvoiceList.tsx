import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import {getAllInvoices} from "@/utils/api-functions";
import {Invoice} from "@/types";
import noInvoiceIcon from "@/../public/assets/illustration-empty.svg"
import Image from "next/image";
import Link from "next/link";

const InvoiceList = async () => {
    const invoices: Invoice[] | undefined = await getAllInvoices()

    const renderCards = () => {
        if (invoices) {
            return invoices.map(invoice => (
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
        <section className={"w-full mt-8"}>
            {renderCards()}
        </section>
    );
};

export default InvoiceList;