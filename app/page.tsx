"use client";

import SectionReveal from '@/components/ui/SectionReveal';
import SocialProof from '@/components/sections/SocialProof';

// Sections
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import AminaTimeline from '@/components/sections/AminaTimeline';
import ImpactCards from '@/components/sections/ImpactCards';
import DonationFlow from '@/components/sections/DonationFlow';
import StorySpotlight from '@/components/sections/StorySpotlight';
import Transparency from '@/components/sections/Transparency';
import WhyStandForChildren from '@/components/sections/WhyStandForChildren';
import AuthorityQuote from '@/components/sections/AuthorityQuote';
import LastChanceCTA from '@/components/sections/LastChanceCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased text-text-main selection:bg-primary selection:text-brand-dark">
      <SocialProof />
      <Hero />
      <SectionReveal><Stats /></SectionReveal>
      <SectionReveal><AminaTimeline /></SectionReveal>
      <SectionReveal><ImpactCards /></SectionReveal>
      <SectionReveal><DonationFlow /></SectionReveal>
      <SectionReveal><StorySpotlight /></SectionReveal>
      <SectionReveal><Transparency /></SectionReveal>
      <SectionReveal><WhyStandForChildren /></SectionReveal>
      <SectionReveal><AuthorityQuote /></SectionReveal>
      <SectionReveal><LastChanceCTA /></SectionReveal>
    </main>
  );
}