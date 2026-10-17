import React, { useState } from 'react';

export default function Hero() {
    const [playerName, setPlayerName] = useState('LEYENDA');
    const [playerNumber, setPlayerNumber] = useState('10');
    const [kitColor, setKitColor] = useState('#0052FF');

    const colorOptions = [
        { name: 'Azul KitZone', hex: '#0052FF' },
        { name: 'Cian Neón', hex: '#00D2FF' },
        { name: 'Negro Azabache', hex: '#111827' },
        { name: 'Rojo Pasión', hex: '#EF4444' },
        { name: 'Dorado', hex: '#F59E0B' },
    ];

    return (
        <section id="hero" className="relative pt-12 pb-20 md:py-24 overflow-hidden bg-[#070b19]">
            {/* Luces de fondo */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052FF]/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#00D2FF]/15 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Columna Izquierda: Copywriting Hero */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 text-[#00D2FF] text-xs sm:text-sm font-semibold tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                            COLECCIÓN 2026 PREMIER & MATCH QUALITY
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                            Viste la pasión. <br />
                            <span className="bg-gradient-to-r from-[#00D2FF] via-[#0052FF] to-blue-400 bg-clip-text text-transparent">
                                Personaliza tu camiseta
                            </span> al nivel profesional.
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            Consigue las equipaciones oficiales de tus equipos favoritos o crea tu diseño único con tipografías y parches originales. Calidad réplica exacta y tejido transpirable Dri-FIT.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <a
                                href="#personalizador"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0052FF] to-[#00D2FF] text-white font-bold text-lg hover:shadow-lg hover:shadow-[#0052FF]/40 transition-all transform hover:-translate-y-1 text-center"
                            >
                                Diseñar Mi Camiseta
                            </a>
                            <a
                                href="#beneficios"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 font-semibold text-lg transition-all text-center"
                            >
                                Ver Garantías
                            </a>
                        </div>

                        {/* Badges de confianza */}
                        <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left">
                            <div>
                                <p className="text-white font-bold text-lg sm:text-xl">+10,000</p>
                                <p className="text-slate-400 text-xs sm:text-sm">Camisetas entregadas</p>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg sm:text-xl">100%</p>
                                <p className="text-slate-400 text-xs sm:text-sm">Estampados oficiales</p>
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg sm:text-xl">4.9 ★</p>
                                <p className="text-slate-400 text-xs sm:text-sm">Valoración clientes</p>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Simulador Interactivo de Camiseta */}
                    <div id="personalizador" className="lg:col-span-5">
                        <div className="bg-[#0a1128]/90 border border-[#0052FF]/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                                    Simulador en Vivo
                                </span>
                                <span className="text-xs text-slate-400">Previsualización 2D</span>
                            </div>

                            {/* Camiseta Visual */}
                            <div className="relative w-full h-72 sm:h-80 rounded-2xl flex flex-col items-center justify-center p-6 transition-colors duration-300 shadow-inner overflow-hidden" style={{ backgroundColor: kitColor }}>
                                {/* Cuello y textura simulada */}
                                <div className="absolute top-0 w-24 h-8 bg-black/20 rounded-b-full border-b-2 border-white/20" />

                                {/* Dorsal */}
                                <div className="text-center text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] z-10 select-none">
                                    <p className="font-black text-2xl sm:text-3xl tracking-widest uppercase font-mono">
                                        {playerName || 'NOMBRE'}
                                    </p>
                                    <p className="font-black text-7xl sm:text-8xl leading-none mt-1 font-sans">
                                        {playerNumber || '10'}
                                    </p>
                                </div>

                                <div className="absolute bottom-3 right-4 text-white/40 text-[10px] font-black tracking-wider">
                                    KITZONE OFFICIAL
                                </div>
                            </div>

                            {/* Controles del Simulador */}
                            <div className="mt-6 space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                                        Nombre en la Espalda
                                    </label>
                                    <input
                                        type="text"
                                        maxLength={12}
                                        value={playerName}
                                        onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
                                        placeholder="Ej. MESSI"
                                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                                            Número
                                        </label>
                                        <input
                                            type="text"
                                            maxLength={2}
                                            value={playerNumber}
                                            onChange={(e) => setPlayerNumber(e.target.value.replace(/[^0-9]/g, ''))}
                                            placeholder="10"
                                            className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00D2FF] transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                                            Color Base
                                        </label>
                                        <div className="flex gap-1.5 items-center h-[42px]">
                                            {colorOptions.map((c) => (
                                                <button
                                                    key={c.hex}
                                                    onClick={() => setKitColor(c.hex)}
                                                    style={{ backgroundColor: c.hex }}
                                                    title={c.name}
                                                    className={`w-7 h-7 rounded-full border-2 transition-transform ${kitColor === c.hex ? 'border-white scale-110 shadow-md' : 'border-transparent opacity-80 hover:opacity-100'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => alert(`¡Diseño listo! Camiseta: ${playerName} #${playerNumber}`)}
                                    className="w-full py-3 rounded-xl bg-[#0052FF] hover:bg-[#00D2FF] text-white font-bold transition-colors text-sm shadow-md"
                                >
                                    Guardar este Estampado
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}