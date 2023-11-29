import axios, {AxiosResponse} from "axios"
import {Invoice} from "@/types";


const baseUrl = "http://localhost:8080/api/v1/invoices"

export const getAllInvoices = async (): Promise<Invoice[] | undefined> => {
    try {
        const response: AxiosResponse<Array<Invoice>> = await axios.get("http://localhost:8080/api/v1/invoices");
        return response.data;
    } catch (e) {
        console.log(e)
    }
}

export const getAnInvoiceById = async (id: number): Promise<Invoice | undefined> => {
    try {
        const response: AxiosResponse<Invoice> = await axios.get(`${baseUrl}/${id}`);
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const deleteAnInvoiceById = async(id:number) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
}

export const markAnInvoiceAsPaid = async (id: number) => {
    try {
        await axios.put(`${baseUrl}/${id}/update`)
    } catch (e) {
        console.log(e)
    }
}