import {Invoice} from "@/types";
import {getAnInvoiceById} from "@/utils/api-functions";
import GoBack from "@/components/GoBack/GoBack";
import TopControlBar from "@/components/TopControlBar/TopControlBar";

type InvoicePageProps = {
    params: { id: number }
}

export default async function Page({params}: InvoicePageProps) {
    const invoice: Invoice | undefined = await getAnInvoiceById(params.id)
    if(!invoice) {
        return null
    }
    return (
        <main className={"pt-8 pb-[103px] xl:max-w-[730px] xl:mx-auto xl:pt-[72px]"}>
            <GoBack />
            <TopControlBar  invoiceStatus={invoice.invoiceStatus}/>
        </main>
    );
};
