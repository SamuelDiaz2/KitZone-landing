import React from 'react';

export default function Testimonios() {
    const reviews = [
        {
            id: 1,
            name: 'Carlos Mendoza',
            role: 'Comprador verificado',
            comment: 'La calidad del tejido es impresionante. Pedí la camiseta de la Champions con el dorsal de Bellingham y el estampado quedó perfecto, idéntico al original.',
            stars: 5,
            jersey: 'Real Madrid - Edición Champions',
        },
        {
            id: 2,
            name: 'Andrés Felipe',
            role: 'Comprador verificado',
            comment: 'Llegó en menos de 3 días a mi ciudad. La tela Dri-FIT respira súper bien al jugar. Definitivamente volveré a pedir para mi equipo del torneo local.',
            stars: 5,
            jersey: 'FC Barcelona - Local 2026',
        },
        {
            id: 3,
            name: 'Mateo Gómez',
            role: 'Comprador verificado',
            comment: 'Tenía dudas sobre el tamaño, pero la guía de tallas es exacta. El parche de la liga y el nombre personalizado se ven impecables tras varios lavados.',
            stars: 5,
            jersey: 'Argentina - Edición 3 Estrellas',
        },
    ];

    return (
        <section id="testimonios" className="py-20 bg-[#0a1128] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-bold text-[#00D2FF] tracking-widest uppercase mb-3">
                        Prueba Social
                    </h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Lo que dicen nuestros fanáticos
                    </p>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        Miles de hinchas ya visten sus colores con calidad profesional.
                    </p>
                </div>

                {/* Lista de Testimonios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev) => (
                        <div
                            key={rev.id}
                            className="bg-[#070b19]/90 border border-[#0052FF]/20 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
                        >
                            <div className="space-y-4">
                                {/* Estrellas */}
                                <div className="flex gap-1 text-[#00D2FF]">
                                    {[...Array(rev.stars)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-slate-300 text-sm italic leading-relaxed">
                                    "{rev.comment}"
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-800">
                                <p className="text-white font-bold text-sm">{rev.name}</p>
                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-xs text-[#00D2FF]">{rev.role}</span>
                                    <span className="text-[11px] text-slate-500 font-medium">{rev.jersey}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}