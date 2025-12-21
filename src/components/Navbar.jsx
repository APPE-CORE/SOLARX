import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Droplets } from 'lucide-react';

const Navbar = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (view) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ view, label }) => {
    const isActive = currentView === view;
    const glowColor = view === 'model-s' ? 'group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]' 
                    : view === 'technologie' ? 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                    : view === 'contact' ? 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]' // Glow Violet si on survole un lien vers contact (futur)
                    : 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]';
    
    const textColor = isActive ? 'text-white' : 'text-gray-400 group-hover:text-white';
    const bgActive = isActive ? 'bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] border-white/20' : 'border-transparent hover:bg-white/5 hover:border-white/10';

    return (
        <button 
            onClick={() => onNavigate(view)} 
            className={`relative px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${bgActive} ${textColor} ${glowColor} group overflow-hidden`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <span className="relative z-10">{label}</span>
        </button>
    );
  };

  // Bouton Contact toujours Violet (Fixe)
  const contactBtnClasses = "bg-white/10 border-white/20 text-white shadow-sm hover:bg-violet-600 hover:border-violet-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]";

  // --- LOGIQUE DE COULEUR DU LOGO ---
  // On détermine la couleur du texte et du remplissage (fill) selon la page
  let logoColorClass = "text-orange-500"; // Défaut (Home)
  let logoFillClass = "fill-current"; // Défaut (Plein)

  if (currentView === 'model-s') {
      logoColorClass = "text-rose-600";
      logoFillClass = "fill-current"; // Sanguine = Plein
  } else if (currentView === 'technologie') {
      logoColorClass = "text-cyan-500";
      logoFillClass = "fill-cyan-500/20"; // Tech = Creux/Transparent
  } else if (currentView === 'contact') {
      logoColorClass = "text-violet-500";
      logoFillClass = "fill-violet-500/20"; // Contact = Creux/Transparent (Style Tech mais Violet)
  }

  return (
    <>
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
            ${scrolled 
                ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4' 
                : 'bg-transparent py-6 border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-20">
                
                {/* LOGO DYNAMIQUE */}
                <div 
                    className="text-2xl font-bold tracking-tighter uppercase cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                    onClick={() => handleMobileLinkClick('model-s')} 
                >
                    {/* Icône Gouttelettes */}
                    <div className={`transition-colors duration-500 ${logoColorClass}`}>
                        <Droplets size={24} className={logoFillClass} strokeWidth={2.5}/>
                    </div>
                    
                    {/* Texte SolarX */}
                    <span className="text-white">
                        Solar
                        <span className={`transition-colors duration-500 ${logoColorClass}`}>X</span>
                    </span>
                </div>

                {/* NAVIGATION DESKTOP */}
                <div className="hidden md:flex items-center space-x-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-inner">
                    <NavLink view="model-s" label="Sanguine" />
                    <NavLink view="home" label="Valencia" />
                    <NavLink view="technologie" label="Lab / Tech" />
                </div>

                {/* ACTIONS DROITE */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => onNavigate('contact')}
                        className={`relative group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-500 ease-out border ${contactBtnClasses}`}
                    >
                        <span className="hidden sm:inline">Joindre le Lab</span> 
                        <MessageSquare size={18} className="group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5}/>
                        
                        {currentView === 'contact' && (
                            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                            </span>
                        )}
                    </button>

                    <button 
                        className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>

        {/* MENU MOBILE */}
        <div 
            className={`fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col items-center justify-center
            ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
            <div className="flex flex-col items-center space-y-10 z-10 w-full px-8">
                <button 
                    onClick={() => handleMobileLinkClick('model-s')}
                    className={`text-4xl font-bold tracking-tight transition-all duration-300 ${currentView === 'model-s' ? 'text-rose-500 scale-110' : 'text-gray-400 hover:text-white'}`}
                >
                    Model S
                </button>
                <button 
                    onClick={() => handleMobileLinkClick('home')}
                    className={`text-4xl font-bold tracking-tight transition-all duration-300 ${currentView === 'home' ? 'text-orange-500 scale-110' : 'text-gray-400 hover:text-white'}`}
                >
                    Model V
                </button>
                <button 
                    onClick={() => handleMobileLinkClick('technologie')}
                    className={`text-4xl font-bold tracking-tight transition-all duration-300 ${currentView === 'technologie' ? 'text-cyan-500 scale-110' : 'text-gray-400 hover:text-white'}`}
                >
                    Technologie
                </button>
                <button 
                    onClick={() => handleMobileLinkClick('contact')}
                    className={`text-4xl font-bold tracking-tight transition-all duration-300 ${currentView === 'contact' ? 'text-violet-500 scale-110' : 'text-gray-400 hover:text-white'}`}
                >
                    Joindre le Lab
                </button>
            </div>
            
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute bottom-12 p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-pulse hover:animate-none"
            >
                <X size={32} />
            </button>
        </div>
    </>
  );
};

export default Navbar;