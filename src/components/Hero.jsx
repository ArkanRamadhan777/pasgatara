import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';
import pasgatarLogo from '../assets/pasgatara-logo.svg';

const Hero = ({ isActive, setActiveSection }) => {
    return (
        <section className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            {/* Glow Orbs specific to Hero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vmin] h-[70vmin] bg-brand-blue/15 rounded-full blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[30vmin] h-[30vmin] bg-brand-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>

            {isActive && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 60 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                    className="relative z-10 flex flex-col items-center gap-5"
                >
                    {/* Logo */}
                    <motion.div
                        animate={{ y: [0, -18, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                        className="relative"
                    >
                        {/* Glow ring behind logo */}
                        <div className="absolute inset-0 rounded-full bg-brand-blue/20 blur-[25px] scale-110 pointer-events-none" />
                        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-brand-blue/50 shadow-[0_0_60px_rgba(0,136,255,0.35),_0_0_120px_rgba(0,136,255,0.15)] flex items-center justify-center bg-brand-black/60 overflow-hidden relative">
                            <img
                                src={pasgatarLogo}
                                alt="Logo PASGATARA"
                                className="w-36 h-36 md:w-48 md:h-48 object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400"
                        style={{ textShadow: '0 0 40px rgba(255,255,255,0.15)' }}
                    >
                        PASGATARA
                    </motion.h1>

                    {/* Sub title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-base md:text-xl font-bold tracking-[0.2em] text-brand-blue text-glow uppercase"
                    >
                        Pasukan SMANSA Grabag Tanduk Rusa
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="max-w-lg text-sm md:text-base text-gray-300 tracking-wide font-light italic border-l-2 border-brand-yellow pl-4 text-left"
                    >
                        "Bregada Pratama Eka Taruna, Bharata Abinaya Cakti"
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 mt-4"
                    >
                        <button
                            onClick={() => setActiveSection(1)}
                            className="group relative px-8 py-3 bg-brand-blue text-white font-bold rounded-lg overflow-hidden flex items-center justify-center gap-2 hover:shadow-[0_0_35px_rgba(0,136,255,0.7)] transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
                            <span className="relative z-10">Lihat Profil</span>
                            <ChevronRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => setActiveSection(4)}
                            className="px-8 py-3 bg-transparent border border-brand-yellow/60 text-brand-yellow font-bold rounded-lg hover:bg-brand-yellow/10 hover:border-brand-yellow hover:shadow-[0_0_25px_rgba(255,204,0,0.35)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Phone size={18} />
                            <span>Hubungi Kami</span>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Hero;
