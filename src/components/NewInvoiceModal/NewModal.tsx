import React from 'react';
import GoBack from "@/components/GoBack/GoBack";
import ModalForm from "@/components/ModalForm/ModalForm";

const NewModal = () => {
    return (
        <section className={"absolute top-0 left-0 w-screen h-screen bg-bg-dark z-50"}>
            <div className={"flex-col items-start px-6 py-8"}>
                <GoBack />
                <h2 className={"text-white font-spartan text-base font-bold leading-4 tracking-tighter my-6"}>New Invoice</h2>
                <ModalForm />
            </div>
        </section>
    );
};

export default NewModal;