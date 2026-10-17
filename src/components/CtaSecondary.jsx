import React from 'react';

export default function CtaSecondary() {
    return (
        <section className="py-16 bg-[#070b19] border-y border-[#0052FF]/20 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#0052FF]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#00D2FF]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="bg-gradient-to-b from-[#0a1128] to-[#0d1738] border border-[#0052FF]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#0052FF]/20 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
                        ¿Buscas un diseño para tu equipo completo?
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                        Atención personalizada para pedidos al por mayor
                    </h2>

                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                        Si deseas equipar a tu equipo de torneo, empresa o grupo de amigos, te ofrecemos descuentos exclusivos a partir de 10 unidades y asesoría en diseño 1 a 1.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001l-1.416 5.17 5.289-1.387c1.469.8 3.125 1.222 4.781 1.223h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.177-2.925-7.062a9.925 9.925 0 00-7.064-2.945z" />
                            </svg>
                            Cotizar por WhatsApp
                        </a>

                        <a
                            href="#hero"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-lg transition-all text-center"
                        >
                            Ir al Personalizador
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}