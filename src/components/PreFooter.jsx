import React, { useState } from 'react';

export default function PreFooter() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <section className="py-16 bg-[#070b19] border-t border-[#0052FF]/20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-[#0052FF]/20 via-[#0a1128] to-[#00D2FF]/10 border border-[#0052FF]/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">

                    <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-widest block mb-2">
                        Únete a la Comunidad
                    </span>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                        Recibe lanzamientos exclusivos y ofertas relámpago
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
                        Suscríbete a nuestro boletín y recibe un 10% de descuento adicional en tu segunda compra más acceso anticipado a nuevas camisetas retro.
                    </p>

                    {subscribed ? (
                        <div className="bg-[#0052FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] p-4 rounded-xl text-sm font-semibold max-w-md mx-auto">
                            🎉 ¡Gracias por suscribirte! Revisa tu bandeja de entrada para reclamar tu cupón.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Tu correo electrónico..."
                                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-[#0052FF] hover:bg-[#00D2FF] text-white font-bold text-sm transition-colors shadow-md whitespace-nowrap"
                            >
                                Suscribirme
                            </button>
                        </form>
                    )}

                </div>
            </div>
        </section>
    );
}