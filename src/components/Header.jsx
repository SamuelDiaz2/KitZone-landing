import React, { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#070b19]/90 backdrop-blur-md border-b border-[#0052FF]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052FF] to-[#00D2FF] flex items-center justify-center font-black text-white text-xl shadow-lg shadow-[#0052FF]/30 group-hover:scale-105 transition-transform">
                        KZ
                    </div>
                    <span className="font-extrabold text-2xl tracking-wider text-white">
                        KIT<span className="text-[#00D2FF]">ZONE</span>
                    </span>
                </a>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
                    <a href="#beneficios" className="hover:text-[#00D2FF] transition-colors">Beneficios</a>
                    <a href="#como-funciona" className="hover:text-[#00D2FF] transition-colors">Cómo Funciona</a>
                    <a href="#testimonios" className="hover:text-[#00D2FF] transition-colors">Opiniones</a>
                    <a href="#faq" className="hover:text-[#00D2FF] transition-colors">Preguntas</a>
                </nav>

                {/* CTA del Header */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#hero"
                        className="px-5 py-2.5 rounded-full bg-[#0052FF] hover:bg-[#00D2FF] text-white font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#0052FF]/30"
                    >
                        Personalizar
                    </a>
                </div>

                {/* Botón Menú Móvil */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-slate-300 hover:text-white p-2"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menú Desplegable Móvil */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0a1128] border-b border-[#0052FF]/20 px-4 pt-2 pb-6 space-y-4">
                    <a
                        href="#beneficios"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-slate-300 hover:text-[#00D2FF] py-2 font-medium"
                    >
                        Beneficios
                    </a>
                    <a
                        href="#como-funciona"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-slate-300 hover:text-[#00D2FF] py-2 font-medium"
                    >
                        Cómo Funciona
                    </a>
                    <a
                        href="#testimonios"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-slate-300 hover:text-[#00D2FF] py-2 font-medium"
                    >
                        Opiniones
                    </a>
                    <a
                        href="#faq"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-slate-300 hover:text-[#00D2FF] py-2 font-medium"
                    >
                        Preguntas
                    </a>
                    <a
                        href="#hero"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-center py-3 rounded-xl bg-[#0052FF] text-white font-bold"
                    >
                        Personalizar Ahora
                    </a>
                </div>
            )}
        </header>
    );
}