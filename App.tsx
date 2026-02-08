
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CitizenSection from './components/CitizenSection';
import OmbudsmanForm from './components/OmbudsmanForm';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import TrustLogos from './components/TrustLogos';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Citizen Interaction Flow */}
        <div id="ouvidoria" className="bg-slate-50 border-y border-slate-100 py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <CitizenSection />
              <OmbudsmanForm />
            </div>
          </div>
        </div>

        <AboutSection />
        <ServicesSection />
        <BenefitsSection />
        <TargetAudience />
        <Testimonials />
        <TrustLogos />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
