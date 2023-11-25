import FilterSection from "@/components/FilterSection/FilterSection";
import InvoiceList from "@/components/InvoiceList/InvoiceList";

export default function Home() {
    return (
        <section className={"pt-8 pb-[103px] xl:max-w-[730px] xl:mx-auto xl:pt-[72px]"}>
            <FilterSection/>
            <InvoiceList/>
        </section>
    )
}
