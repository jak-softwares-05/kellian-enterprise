"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context types
interface ModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

// Create the context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ModalProvider component
interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// Hook for accessing the modal context
export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
