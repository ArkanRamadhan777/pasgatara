import React from 'react';
import { motion } from 'framer-motion';
import { Flag, ShieldCheck, Crosshair, Award } from 'lucide-react';

const programs = [
    {
        title: "Pelatihan Pasukan",
        desc: "Membina disiplin, peraturan baris-berbaris (PBB), dan fisik untuk membangun kepribadian yang tangguh.",
        icon: Flag,
        color: "brand-blue"
    },
    {
        title: "Latihan Kepemimpinan",
        desc: "Mengasah kemampuan memimpin, mengambil keputusan, dan public speaking dalam organisasi.",
        icon: ShieldCheck,
        color: "brand-yellow"
    },
    {
        title: "Bakti Sosial",
        desc: "Wujud pengabdian masyarakat sebagai bukti kepedulian dan tanggung jawab sosial pemuda.",
        icon: Crosshair,
        color: "white"
    },
    {
        title: "Kompetisi & Prestasi",
        desc: "Mengikuti kejuaraan tingkat regional maupun nasional untuk mengharumkan nama SMAN 1 Grabag.",
        icon: Award,
        color: "brand-blue"
    }
];

const Program = ({ isActive }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="w-full h-full flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {isActive && (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-6xl z-10"
                >
                    {/* Section Heading */}
                    <div className="mb-14 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white mb-4">
                            PROGRAM KERJA
                        </h2>
                        <div className="w-24 h-1 bg-brand-blue mx-auto glow-blue rounded-full"></div>
                    </div>

                    {/* Grid Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((prog, idx) => {
                            const Icon = prog.icon;
                            const isBlue = prog.color === "brand-blue";
                            const isYellow = prog.color === "brand-yellow";

                            return (
                                <motion.div
                                    key={idx}
                                    variants={item}
                                    whileHover={{ scale: 1.05 }}
                                    className={`glass p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300
                    hover:bg-opacity-10 
                    ${isBlue ? 'hover:shadow-[0_0_25px_rgba(0,136,255,0.4)] border-brand-blue/20 hover:border-brand-blue/60' : ''}
                    ${isYellow ? 'hover:shadow-[0_0_25px_rgba(255,204,0,0.4)] border-brand-yellow/20 hover:border-brand-yellow/60' : ''}
                    ${!isBlue && !isYellow ? 'hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] border-white/20 hover:border-white/60' : ''}
                  `}
                                >
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 
                    ${isBlue ? 'bg-brand-blue/20 text-brand-blue glow-blue' : ''}
                    ${isYellow ? 'bg-brand-yellow/20 text-brand-yellow glow-yellow' : ''}
                    ${!isBlue && !isYellow ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' : ''}
                  `}>
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-white tracking-wide">{prog.title}</h3>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                                        {prog.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Program;
