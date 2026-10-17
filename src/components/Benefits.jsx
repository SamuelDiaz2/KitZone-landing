import React from 'react';

export default function Benefits() {
    const benefitsList = [
        {
            icon: (
                <svg className="w-7 h-7 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Tejidos de Alta Performance',
            description: 'Tecnología transpirable Dri-FIT que expulsa el sudor y te mantiene fresco tanto en la cancha como en la calle.',
        },
        {
            icon: (
                <svg className="w-7 h-7 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 12h10m-5 5h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
            ),
            title: 'Estampados Oficiales Garantizados',
            description: 'Dorsales, nombres y parches de competición idénticos a los utilizados por los jugadores profesionales.',
        },
        {
            icon: (
                <svg className="w-7 h-7 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Envíos Rápidos y Seguros',
            description: 'Procesamiento ultrarrápido y despacho con seguimiento en tiempo real directamente hasta tu puerta.',
        },
        {
            icon: (
                <svg className="w-7 h-7 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: 'Garantía de Satisfacción 100%',
            description: 'Si tu prenda presenta algún defecto de fábrica o error en el personalizado, la reemplazamos sin costo.',
        },
    ];

    return (
        <section id="beneficios" className="py-20 bg-[#0a1128] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado de la Sección */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-bold text-[#00D2FF] tracking-widest uppercase mb-3">
                        ¿Por qué elegir KitZone?
                    </h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        La máxima calidad deportiva diseñada para verdaderos fanáticos.
                    </p>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        Combinamos materiales prémium con acabados de nivel profesional para ofrecer prendas duraderas y con estilo.
                    </p>
                </div>

                {/* Grilla de Beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefitsList.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-[#070b19]/80 border border-[#0052FF]/20 rounded-2xl p-6 hover:border-[#00D2FF]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#0052FF]/10 border border-[#0052FF]/30 flex items-center justify-center mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}