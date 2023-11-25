import InvoiceCard from "@/components/InvoiceCard/InvoiceCard";
import {getAllInvoices} from "@/utils/api-functions";
import {Invoice} from "@/types";
import noInvoiceIcon from "@/../public/assets/illustration-empty.svg"
import Image from "next/image";

const InvoiceList = async () => {
    const invoices: Invoice[] | undefined = await getAllInvoices()

    const renderCards = () => {
        if(invoices) {
            return invoices.map(invoice => (
                <InvoiceCard key={invoice.id} clientName={invoice.clientName}
                             invoiceReference={invoice.invoiceReference} invoiceStatus={invoice.invoiceStatus}
                             paymentDue={invoice.paymentDue} total={invoice.total}/>))
        }
        return <Image src={noInvoiceIcon} alt={"No Invoices Image"} />
    }
    return (
        <section className={"w-full mt-8"}>
            {renderCards()}
        </section>
    );
};

export default InvoiceList;