import React, { useState, useEffect } from 'react';

export default function CtaPrimary() {
    // Temporizador regresivo de ejemplo (24 horas)
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: 59, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 bg-gradient-to-r from-[#0052FF] to-[#002288] relative overflow-hidden">
            {/* Fondo con brillo sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,210,255,0.2),transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-3xl mx-auto space-y-6">

                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#00D2FF] border border-white/20 text-xs font-bold uppercase tracking-wider">
                        ⚡ Oferta por Tiempo Limitado
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                        20% DE DESCUENTO EN TU PRIMER PEDIDO
                    </h2>

                    <p className="text-slate-200 text-base sm:text-lg">
                        Aprovecha la personalización gratuita de tu dorsal en cualquier equipación de la temporada actual. Válido solo por hoy.
                    </p>

                    {/* Temporizador */}
                    <div className="flex justify-center items-center gap-3 py-4">
                        <div className="bg-slate-950/60 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[70px] border border-white/10">
                            <span className="block text-2xl sm:text-3xl font-black text-white font-mono">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase">Horas</span>
                        </div>
                        <span className="text-2xl font-bold text-white">:</span>
                        <div className="bg-slate-950/60 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[70px] border border-white/10">
                            <span className="block text-2xl sm:text-3xl font-black text-white font-mono">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase">Minutos</span>
                        </div>
                        <span className="text-2xl font-bold text-white">:</span>
                        <div className="bg-slate-950/60 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[70px] border border-white/10">
                            <span className="block text-2xl sm:text-3xl font-black text-[#00D2FF] font-mono">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase">Segundos</span>
                        </div>
                    </div>

                    <div>
                        <a
                            href="#hero"
                            className="inline-block px-8 py-4 rounded-xl bg-white text-[#0052FF] font-extrabold text-lg hover:bg-[#00D2FF] hover:text-slate-950 transition-all shadow-xl shadow-black/20 transform hover:-translate-y-0.5"
                        >
                            Reclamar Descuento Ahora
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}