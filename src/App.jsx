import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profil from './components/Profil';
import Program from './components/Program';
import Galeri from './components/Galeri';
import Kontak from './components/Kontak';

const sections = [
  { id: 'beranda', component: Hero },
  { id: 'profil', component: Profil },
  { id: 'program', component: Program },
  { id: 'galeri', component: Galeri },
  { id: 'kontak', component: Kontak }
];

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const handleScroll = (deltaY) => {
    if (isScrolling.current) return;

    if (deltaY > 50 && activeSection < sections.length - 1) {
      isScrolling.current = true;
      setActiveSection(prev => prev + 1);
      setTimeout(() => isScrolling.current = false, 1000); // Cooldown
    } else if (deltaY < -50 && activeSection > 0) {
      isScrolling.current = true;
      setActiveSection(prev => prev - 1);
      setTimeout(() => isScrolling.current = false, 1000);
    }
  };

  useEffect(() => {
    const onWheel = (e) => {
      handleScroll(e.deltaY);
    };

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      handleScroll(deltaY);
    };

    const onKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        handleScroll(100);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        handleScroll(-100);
      }
    };

    // Add event listeners
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeSection]);

  return (
    <div className="h-screen w-full bg-brand-black text-white overflow-hidden relative selection:bg-brand-blue selection:text-white">

      {/* Background decoration elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-yellow/5 blur-[100px] pointer-events-none z-0"></div>

      <Navbar
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main container translating to show different sections */}
      <div
        className="h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)]"
        style={{ transform: `translateY(-${activeSection * 100}vh)` }}
      >
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <div key={section.id} className="h-screen w-full relative z-10 flex items-center justify-center pt-20">
              <Component isActive={index === activeSection} setActiveSection={setActiveSection} />
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default App;
