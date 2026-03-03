import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, MessageCircle } from 'lucide-react';

const Kontak = ({ isActive }) => {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vmin] h-[50vmin] bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>

            {isActive && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-4xl z-10 glass p-8 md:p-14 rounded-3xl border border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.8)] flex flex-col items-center text-center"
                >
                    {/* Header */}
                    <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white mb-6">
                        MARI BERGABUNG BERSAMA KAMI
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-12 font-light">
                        Menjadi bagian dari PASGATARA berarti merangkul disiplin, menanamkan jiwa kepemimpinan, dan menjunjung tinggi kehormatan SMAN 1 Grabag.
                    </p>

                    {/* Info Card Container */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center mb-12">

                        {/* Location */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 w-full md:w-auto"
                        >
                            <div className="p-3 bg-brand-blue/20 rounded-lg text-brand-blue glow-blue">
                                <MapPin size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="text-white font-bold text-sm tracking-widest">LOKASI</h4>
                                <p className="text-gray-400 text-xs mt-1">Jl. Raya Kranggan, Grabag, Magelang</p>
                            </div>
                        </motion.div>

                        {/* School */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 w-full md:w-auto"
                        >
                            <div className="p-3 bg-brand-yellow/20 rounded-lg text-brand-yellow glow-yellow">
                                <Building size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="text-white font-bold text-sm tracking-widest">SEKOLAH</h4>
                                <p className="text-gray-400 text-xs mt-1">SMAN 1 Grabag</p>
                            </div>
                        </motion.div>

                    </div>

                    {/* WhatsApp CTA Button */}
                    <motion.a
                        href="https://wa.me/628123456789" // Example Number
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] transition-shadow duration-300"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"></div>

                        <MessageCircle size={28} className="mr-3 relative z-10" />
                        <span className="relative z-10 tracking-wider">HUBUNGI KAMI DI WHATSAPP</span>
                    </motion.a>

                </motion.div>
            )}
        </section>
    );
};

export default Kontak;
