import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users } from 'lucide-react';

const Profil = ({ isActive }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="w-full h-full flex flex-col items-center justify-center p-6 lg:p-12 relative">
            {isActive && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-6xl z-10"
                >
                    {/* Section Heading */}
                    <motion.div variants={itemVariants} className="mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white mb-4">
                            PROFIL KAMI
                        </h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto glow-yellow rounded-full"></div>
                        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                            Membangun karakter pemuda yang tangguh, berani, dan berjiwa korsa tinggi.
                        </p>
                    </motion.div>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Sejarah / Identitas */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-2xl border-t-brand-blue/30 border-t-2 relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Shield size={100} />
                            </div>
                            <Shield size={40} className="text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-white">Identitas SMANSA</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                Sebagai pasukan garda terdepan dari SMAN 1 Grabag, kami tidak hanya mengukir prestasi, tetapi juga menjaga nilai-nilai kedisiplinan dan kepemimpinan di setiap langkah.
                            </p>
                        </motion.div>

                        {/* Visi */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-2xl border-t-brand-yellow/30 border-t-2 relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={100} />
                            </div>
                            <Target size={40} className="text-brand-yellow mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-white">Visi Utama</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                Mencetak generasi penerus bangsa yang "Bregada Pratama Eka Taruna", memiliki jiwa kepemimpinan mutlak, serta "Bharata Abinaya Cakti", berani karena benar.
                            </p>
                        </motion.div>

                        {/* Misi / Jiwa Korsa */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-2xl border-t-white/30 border-t-2 md:col-span-2 lg:col-span-1 relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Users size={100} />
                            </div>
                            <Users size={40} className="text-white mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4 text-white">Solidaritas Jiwa Korsa</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                Membina rasa persaudaraan dan kebersamaan di antara sesama anggota melalui kegiatan kedisiplinan yang menuntut kerjasama tim tingkat tinggi dan solidaritas tanpa batas.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Profil;
