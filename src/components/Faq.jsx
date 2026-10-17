import React, { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: '¿Las camisetas son réplicas exacta o versión aficionado?',
            answer: 'Ofrecemos ambas versiones. Nuestras camisetas cuentan con la calidad de tejido oficial Dri-FIT, logos bordados o termosellados según la versión (Stadium o Match Player) y todos los detalles idénticos a los de la prenda original.',
        },
        {
            question: '¿Cuánto tiempo tarda en llegar mi pedido?',
            answer: 'El tiempo de confección y personalizado toma entre 24 y 48 horas. Una vez despachado, los envíos nacionales suelen demorar de 2 a 4 días hábiles dependiendo de tu ubicación.',
        },
        {
            question: '¿Puedo personalizar con cualquier nombre y número?',
            answer: '¡Sí! Puedes ingresar el nombre que desees (hasta 12 caracteres) y cualquier número de 1 o 2 dígitos. Usamos la tipografía y fuente oficial del club o selección seleccionada.',
        },
        {
            question: '¿Cómo elijo la talla correcta?',
            answer: 'Te recomendamos revisar nuestra tabla de medidas estándar. Si prefieres un ajuste más holgado tipo streetwear, te aconsejamos pedir una talla adicional a tu talla habitual.',
        },
        {
            question: '¿Qué garantía tengo si el producto llega con un error?',
            answer: 'Cuenta con nuestra garantía de satisfacción. Si hay un defecto de fábrica o un error en las letras/números elegidos, realizamos el cambio sin costo adicional.',
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-[#0a1128] relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2 className="text-xs font-bold text-[#00D2FF] tracking-widest uppercase mb-3">
                        Dudas Frecuentes
                    </h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Preguntas Frecuentes
                    </p>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        Todo lo que necesitas saber antes de personalizar tu camiseta.
                    </p>
                </div>

                {/* Acordeón de preguntas */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-[#070b19] border border-[#0052FF]/20 rounded-2xl overflow-hidden transition-colors"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                                >
                                    <span className="font-bold text-white text-base sm:text-lg">
                                        {faq.question}
                                    </span>
                                    <span className={`w-8 h-8 rounded-full bg-[#0052FF]/20 flex items-center justify-center text-[#00D2FF] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}