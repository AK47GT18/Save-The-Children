"use client";

import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '@/lib/apollo';
import Footer from './sections/Footer';
import LegalModal from './modals/LegalModal';
import SocialProof from './sections/SocialProof';
import Navbar from './sections/Navbar';
import DonationModal from './modals/DonationModal';
import { useDonation } from '@/context/DonationContext';

interface PageClientWrapperProps {
  children: React.ReactNode;
}

const PageClientWrapper = ({ children }: PageClientWrapperProps) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'audit' | null>(null);
  const { isModalOpen, closeModal } = useDonation();

  return (
    <ApolloProvider client={client}>
      <Navbar />
      {children}
      <Footer onOpenLegal={setLegalModal} />
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
      <DonationModal isOpen={isModalOpen} onClose={closeModal} />
    </ApolloProvider>
  );
};

export default PageClientWrapper;
