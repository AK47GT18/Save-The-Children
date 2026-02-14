"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DonationContextType {
  totalRaised: number;
  addDonation: (amount: number) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const DonationProvider = ({ children }: { children: ReactNode }) => {
  const [totalRaised, setTotalRaised] = useState(25000000); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addDonation = (amount: number) => {
    setTotalRaised((prev) => prev + amount);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DonationContext.Provider value={{ totalRaised, addDonation, isModalOpen, openModal, closeModal }}>
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};
