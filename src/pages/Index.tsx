import Link from 'react-router-dom';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import TrustedPartner from '@/components/TrustedPartner';
import WhyChooseUs from '@/components/WhyChooseUs';
import FounderMessage from '@/components/FounderMessage';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ClientLogos />
        <WhyChooseUs />
        <TrustedPartner />
        <Fleet />
        <FounderMessage />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
