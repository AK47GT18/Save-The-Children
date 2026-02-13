"use client";

import { useState } from 'react';

// UI Components
import SectionReveal from '../components/ui/SectionReveal';

// Modals
import LegalModal from '../components/modals/LegalModal';

// Sections
import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import WhyStandForChildren from '../components/sections/WhyStandForChildren';
import StorySpotlight from '../components/sections/StorySpotlight';
import AminaTimeline from '../components/sections/AminaTimeline';
import ImpactCards from '../components/sections/ImpactCards';
import DonationFlow from '../components/sections/DonationFlow';
import Causes from '../components/sections/Causes';
import AuthorityQuote from '../components/sections/AuthorityQuote';
import Transparency from '../components/sections/Transparency';
import SocialProof from '../components/sections/SocialProof';
import LastChanceCTA from '../components/sections/LastChanceCTA';
import Footer from '../components/sections/Footer';

export default function Home() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'audit' | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-text-main selection:bg-primary selection:text-brand-dark">
      <SocialProof />
      <Navbar />
      <Hero />
      <SectionReveal><Stats /></SectionReveal>
      <SectionReveal><WhyStandForChildren /></SectionReveal>
      <SectionReveal><StorySpotlight /></SectionReveal>
      <SectionReveal><AminaTimeline /></SectionReveal>
      <SectionReveal><ImpactCards /></SectionReveal>
      <SectionReveal><DonationFlow /></SectionReveal>
      <SectionReveal><Causes /></SectionReveal>
      <SectionReveal><AuthorityQuote /></SectionReveal>
      <SectionReveal><Transparency /></SectionReveal>
      <SectionReveal><LastChanceCTA /></SectionReveal>
      <Footer onOpenLegal={setLegalModal} />
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </main>
  );
}