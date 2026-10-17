import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#050814] border-t border-[#0052FF]/20 pt-12 pb-8 text-slate-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">

                    {/* Columna 1: Marca */}
                    <div className="space-y-4 md:col-span-1">
                        <a href="#" className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0052FF] to-[#00D2FF] flex items-center justify-center font-black text-white text-base">
                                KZ
                            </div>
                            <span className="font-extrabold text-xl text-white tracking-wider">
                                KIT<span className="text-[#00D2FF]">ZONE</span>
                            </span>
                        </a>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Tu tienda especializada en camisetas de fútbol y ropa deportiva personalizada con la mejor calidad del mercado.
                        </p>
                    </div>

                    {/* Columna 2: Navegación Rápida */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">Navegación</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#hero" className="hover:text-[#00D2FF] transition-colors">Personalizador</a></li>
                            <li><a href="#beneficios" className="hover:text-[#00D2FF] transition-colors">Beneficios</a></li>
                            <li><a href="#como-funciona" className="hover:text-[#00D2FF] transition-colors">Cómo Funciona</a></li>
                            <li><a href="#testimonios" className="hover:text-[#00D2FF] transition-colors">Opiniones</a></li>
                            <li><a href="#faq" className="hover:text-[#00D2FF] transition-colors">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Legales */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">Legal & Soporte</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors">Políticas de Privacidad</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors">Políticas de Envío</a></li>
                            <li><a href="#" className="hover:text-[#00D2FF] transition-colors">Garantía y Devoluciones</a></li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes & Métodos de Pago */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">Síguenos</h4>
                        <div className="flex gap-3 mb-6">
                            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#00D2FF] hover:border-[#00D2FF] transition-colors">
                                IG
                            </a>
                            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#00D2FF] hover:border-[#00D2FF] transition-colors">
                                FB
                            </a>
                            <a href="#" aria-label="TikTok" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#00D2FF] hover:border-[#00D2FF] transition-colors">
                                TK
                            </a>
                        </div>
                        <p className="text-[11px] text-slate-500">
                            Pagos 100% Seguros y Encriptados.
                        </p>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} KitZone Brand Lines. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}