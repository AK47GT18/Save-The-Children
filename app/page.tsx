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

import { useQuery } from "@apollo/client/react";
import { GET_HOME_DATA } from "@/lib/queries";
import { GetHomeDataResponse } from "@/lib/types";

export default function Home() {
  const { data, loading, error } = useQuery<GetHomeDataResponse>(GET_HOME_DATA);
  
  const homeData = data?.page?.homePageFields;


  return (
    <main className="min-h-screen bg-white font-sans antialiased text-text-main selection:bg-primary selection:text-brand-dark">
      <SocialProof />
      <Hero data={homeData} />
      <SectionReveal><Stats data={homeData} /></SectionReveal>
      <SectionReveal><AminaTimeline data={homeData} /></SectionReveal>
      <SectionReveal><ImpactCards data={homeData} /></SectionReveal>
      <SectionReveal><DonationFlow /></SectionReveal>
      <SectionReveal><StorySpotlight data={homeData} /></SectionReveal>
      <SectionReveal><Transparency data={homeData} /></SectionReveal>
      <SectionReveal><WhyStandForChildren /></SectionReveal>
      <SectionReveal><AuthorityQuote /></SectionReveal>
      <SectionReveal><LastChanceCTA /></SectionReveal>
    </main>
  );
}