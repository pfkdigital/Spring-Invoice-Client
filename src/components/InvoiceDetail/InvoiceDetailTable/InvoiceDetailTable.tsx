import React from 'react';
import {InvoiceItem} from '@/types';

type InvoiceDetailProps = {
    items: InvoiceItem[];
};

const InvoiceDetailTable = ({items}: InvoiceDetailProps) => {
    const renderInvoiceItems = () => {
        return items.map((item) => (
            <div
                key={item.id}
                className="mb-6 flex justify-between items-center text-white text-xs font-bold leading-5 tracking-tighter last:mb-0"
            >
                <div>
                    <p>{item.name}</p>
                    <p className="text-blue-gray">{`${item.quantity} x £${item.price}`}</p>
                </div>
                <div>
                    <p>£ {item.total}</p>
                </div>
            </div>
        ));
    };

    const renderTableItems = () => {
        return items.map((item) => (
            <tr className="flex mb-8 last:mb-0" key={item.id}>
                <td className="w-1/4 text-white md:text-[12px] font-bold leading-5 tracking-tighter text-left">{item.name}</td>
                <td className="w-1/4 text-white md:text-[12px] font-bold leading-5 tracking-tighter text-center">{item.quantity}</td>
                <td className="w-1/4 text-white md:text-[12px] font-bold leading-5 tracking-tighter text-right">£ {item.price}</td>
                <td className="w-1/4 text-white md:text-[12px] font-bold leading-5 tracking-tighter text-right">£ {item.total}</td>
            </tr>
        ));
    };

    return (
        <div className="mt-10">
            <div>
                <div className="p-6 bg-navy rounded-tl-lg rounded-tr-lg">
                    <div className="md:hidden">{renderInvoiceItems()}</div>
                    <table className="hidden md:flex md:flex-col w-full table-auto">
                        <thead className={"mb-7"}>
                            <tr className={"flex min-w-[100%] last:mb-0"}>
                                <th className="w-1/4 text-pale-blue font-normal text-xs leading-5 tracking-tighter text-left">Item
                                    Name
                                </th>
                                <th className="w-1/4 text-pale-blue font-normal text-xs leading-5 tracking-tighter text-center">QTY.</th>
                                <th className="w-1/4 text-pale-blue font-normal text-xs leading-5 tracking-tighter text-right">Price</th>
                                <th className="w-1/4 text-pale-blue font-normal text-xs leading-5 tracking-tighter text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableItems()}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 w-full flex justify-between items-center bg-blue-black rounded-bl-lg rounded-br-lg">
                    <p className="text-white text-xs font-medium leading-6 tracking-tighter">Amount Due</p>
                    <p className="text-white text-right text-lg font-bold leading-8 tracking-tighter">£556.00</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetailTable;
