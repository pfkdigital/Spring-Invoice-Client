"use client"

import React, {createContext, useContext, useState, ReactNode} from 'react';

interface DeleteModalContextType {
    isDeleteModalOpen: boolean;
    openDeleteModal: () => void;
    closeDeleteModal: () => void;
}

const DeleteModalContext = createContext<DeleteModalContextType | undefined>(undefined);

export const DeleteModalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <DeleteModalContext.Provider value={{isDeleteModalOpen, openDeleteModal, closeDeleteModal}}>
            {children}
        </DeleteModalContext.Provider>
    );
};

export const useDeleteModal = (): DeleteModalContextType => {
    const context = useContext(DeleteModalContext);
    if (!context) {
        throw new Error('useDeleteModal must be used within an DeleteModalProvider');
    }
    return context;
};
