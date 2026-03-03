import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop', title: 'Pendidikan Baris Berbaris' },
    { id: 2, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop', title: 'Lari Pagi Pasukan' },
    { id: 3, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop', title: 'Upacara Bendera' },
    { id: 4, src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&auto=format&fit=crop', title: 'Pelantikan Anggota' },
];

const Galeri = ({ isActive }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="w-full h-full flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden">
            {isActive && (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-6xl z-10"
                >
                    {/* Section Heading */}
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wider">
                            GALERI <span className="text-brand-blue text-glow">KEGIATAN</span>
                        </h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto glow-yellow rounded-full"></div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[50vh] min-h-[400px]">
                        {images.map((img) => (
                            <motion.div
                                key={img.id}
                                variants={item}
                                className="relative overflow-hidden rounded-xl group border border-brand-blue/30 hover:border-brand-blue shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-colors duration-500"
                            >
                                {/* Background Image */}
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out md:grayscale group-hover:grayscale-0"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-8 h-1 bg-brand-yellow mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 glow-yellow"></div>
                                    <h3 className="text-lg font-bold text-white tracking-widest uppercase shadow-black drop-shadow-md">
                                        {img.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Galeri;
