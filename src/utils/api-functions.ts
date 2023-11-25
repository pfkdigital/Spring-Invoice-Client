import axios, {AxiosResponse} from "axios"
import {Invoice} from "@/types";

export const getAllInvoices = async (): Promise<Invoice[] | undefined> => {
    try {
        const response: AxiosResponse<Array<Invoice>> = await axios.get("http://localhost:8080/api/v1/invoices");
        return response.data;
    } catch (e) {
        console.log(e)
    }
}