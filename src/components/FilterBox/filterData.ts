export type FilterValue = {
    name: string;
    value: 'paid' | 'draft' | 'pending' | ""
}

export const filterData: FilterValue[] = [
    {name: "Draft", value: "draft"},
    {name: "Pending", value: "pending"},
    {name: "Paid", value: "paid"}
]