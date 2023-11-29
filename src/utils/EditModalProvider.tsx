"use client"

import React, {createContext, useContext, useState, ReactNode} from 'react';

interface EditModalContextType {
    isEditModalOpen: boolean;
    openEditModal: () => void;
    closeEditModal: () => void;
}

const EditModalContext = createContext<EditModalContextType | undefined>(undefined);

export const EditModalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    return (
        <EditModalContext.Provider value={{isEditModalOpen, openEditModal, closeEditModal}}>
            {children}
        </EditModalContext.Provider>
    );
};

export const useEditModal = (): EditModalContextType => {
    const context = useContext(EditModalContext);
    if (!context) {
        throw new Error('useEditModal must be used within an EditModalProvider');
    }
    return context;
};
