export type Address = {
    street: string;
    city: string;
    postCode: string;
    country: string;
};

export type InvoiceItem = {
    id: number;
    name: string;
    quantity: number;
    price: number;
    total: number;
};

export type Invoice = {
    id: number;
    invoiceReference: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    invoiceStatus: string;
    senderAddress: Address;
    clientAddress: Address;
    total: number;
    invoiceItems: InvoiceItem[];
};

export type InvoiceCardProps = {
    invoiceReference: string;
    paymentDue: string;
    clientName: string;
    total: number;
    invoiceStatus: string;
}