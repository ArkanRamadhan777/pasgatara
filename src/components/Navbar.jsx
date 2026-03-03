import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import pasgatarLogo from '../assets/pasgatara-logo.svg';

const Navbar = ({ sections, activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (index) => {
        setActiveSection(index);
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300 px-6 py-2 flex justify-between items-center">
            {/* Brand Logo */}
            <div
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => handleNavClick(0)}
            >
                <img
                    src={pasgatarLogo}
                    alt="PASGATARA Logo"
                    className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(0,136,255,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(0,136,255,0.8)] transition-all duration-300"
                />
                <div className="hidden sm:block">
                    <h1 className="text-lg font-black tracking-wider text-white">PASGATARA</h1>
                    <p className="text-[9px] text-brand-blue font-semibold tracking-widest uppercase">SMANSA Grabag</p>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {sections.map((section, idx) => (
                    <button
                        key={section.id}
                        onClick={() => handleNavClick(idx)}
                        className={`text-sm font-semibold tracking-wide uppercase transition-all duration-300 relative py-2 ${activeSection === idx ? 'text-brand-blue text-glow' : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {section.id}
                        {activeSection === idx && (
                            <motion.div
                                layoutId="nav-indicator"
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue shadow-[0_0_10px_#0088ff]"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white p-2 focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full flex flex-col items-center bg-brand-black/95 backdrop-blur-xl border-b border-white/10 md:hidden py-6 gap-6"
                    >
                        {sections.map((section, idx) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(idx)}
                                className={`text-lg font-bold tracking-widest uppercase transition-colors duration-300 ${activeSection === idx ? 'text-brand-blue' : 'text-gray-300'
                                    }`}
                            >
                                {section.id}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
