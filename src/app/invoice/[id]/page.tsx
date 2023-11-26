import {Invoice} from "@/types";
import {getAnInvoiceById} from "@/utils/api-functions";

type InvoicePageProps = {
    params: { id: number }
}

export default async function Page({params}: InvoicePageProps) {
    const invoice: Invoice | undefined = await getAnInvoiceById(params.id)
    console.log(invoice)
    return (
        <div>
            <p>invoice id: {params.id}</p>
        </div>
    );
};
