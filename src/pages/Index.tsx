import Link from 'react-router-dom';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import ExperienceSection from '@/components/ExperienceSection';

import TrustedPartner from '@/components/TrustedPartner';
import WhyChooseUs from '@/components/WhyChooseUs';
import FounderMessage from '@/components/FounderMessage';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />

        <RevealOnScroll width="100%">
          <WhatWeDo />
        </RevealOnScroll>


        <RevealOnScroll width="100%">
          <ExperienceSection />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <WhyChooseUs />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <TrustedPartner />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <Fleet />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <FounderMessage />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <Testimonials />
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <FAQ />
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
