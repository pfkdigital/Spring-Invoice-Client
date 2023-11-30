import FilterSection from "@/components/FilterSection/FilterSection";
import InvoiceList from "@/components/InvoiceList/InvoiceList";
import {Invoice} from "@/types";
import {getAllInvoices} from "@/utils/api-functions";
import NewModal from "@/components/NewInvoiceModal/NewModal";

export default async function Home() {
    const invoices: Invoice[] | undefined = await getAllInvoices()
    if(!invoices) {
        return null
    }
    return (
        <>
            <NewModal />
            <section className={"relative pt-8 pb-[103px] xl:max-w-[730px] xl:mx-auto xl:pt-[72px]"}>
                <InvoiceList invoices={invoices}/>
            </section>
        </>
    )
}
