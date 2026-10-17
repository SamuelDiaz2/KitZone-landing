import React from 'react';

export default function Explicacion() {
    const steps = [
        {
            number: '01',
            title: 'Elige tu Modelo',
            description: 'Explora el catálogo y selecciona la camiseta de tu club o selección preferida.',
        },
        {
            number: '02',
            title: 'Personaliza tu Dorsal',
            description: 'Escribe tu nombre o el de tu jugador favorito y asigna el número oficial.',
        },
        {
            number: '03',
            title: 'Confirma tu Pedido',
            description: 'Revisa la vista previa de tu diseño y procede con tu método de pago preferido.',
        },
        {
            number: '04',
            title: 'Recibe en tu Puerta',
            description: 'Despachamos tu pedido con empaque protector y código de seguimiento en vivo.',
        },
    ];

    return (
        <section id="como-funciona" className="py-20 bg-[#070b19] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-xs font-bold text-[#00D2FF] tracking-widest uppercase mb-3">
                        Proceso Sencillo
                    </h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        ¿Cómo pedir tu camiseta personalizada?
                    </p>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        En solo 4 pasos tendrás la equipación oficial con tu estampado en tus manos.
                    </p>
                </div>

                {/* Pasos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#0a1128] border border-[#0052FF]/20 rounded-2xl p-6 relative hover:border-[#00D2FF]/40 transition-colors"
                        >
                            <span className="text-4xl font-black text-[#0052FF]/40 font-mono block mb-4">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}