import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CtaPrimary from './components/CtaPrimary';
import Explicacion from './components/Explicacion';
import Testimonios from './components/Testimonios';
import CtaSecondary from './components/CtaSecondary';
import Faq from './components/Faq';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 font-sans selection:bg-[#00D2FF] selection:text-slate-950">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero Section + Personalizador */}
      <Hero />

      {/* 3. Beneficios */}
      <Benefits />

      {/* 4. CTA 1 (Contador / Oferta) */}
      <CtaPrimary />

      {/* 5. Explicación / Paso a Paso */}
      <Explicacion />

      {/* 6. Testimonios */}
      <Testimonios />

      {/* 7. CTA 2 (Asesoría / WhatsApp) */}
      <CtaSecondary />

      {/* 8. Preguntas Frecuentes */}
      <Faq />

      {/* 9. Pre-Footer / Newsletter */}
      <PreFooter />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}