import React, { useState } from 'react';
import { Twitter, Instagram, Linkedin, Mail, ArrowRight, ShieldCheck, Activity, Globe } from 'lucide-react';

const Footer = ({ currentView, onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Bienvenue dans le programme SolarX : ${email}`);
    setEmail('');
  };

  // --- LOGIQUE DE THÈME DYNAMIQUE ---
  // On définit les classes de couleurs en fonction de la page active
  let theme = {
    text: 'text-orange-500',                 // Couleur du texte principal (X du logo)
    hoverText: 'hover:text-orange-500',      // Survol des liens
    focusBorder: 'focus:border-orange-500',  // Focus de l'input
    btnHover: 'hover:bg-orange-500',         // Survol du bouton Inscription
    socialHover: 'hover:text-orange-500',    // Survol des réseaux sociaux
    lightBg: 'bg-orange-500/10'              // Fonds légers (optionnel)
  };

  if (currentView === 'model-s') {
    theme = {
        text: 'text-rose-600',
        hoverText: 'hover:text-rose-600',
        focusBorder: 'focus:border-rose-600',
        btnHover: 'hover:bg-rose-600',
        socialHover: 'hover:text-rose-600',
        lightBg: 'bg-rose-600/10'
    };
  } else if (currentView === 'technologie') {
    theme = {
        text: 'text-cyan-500',
        hoverText: 'hover:text-cyan-500',
        focusBorder: 'focus:border-cyan-500',
        btnHover: 'hover:bg-cyan-500',
        socialHover: 'hover:text-cyan-500',
        lightBg: 'bg-cyan-500/10'
    };
  } else if (currentView === 'contact') {
    theme = {
        text: 'text-violet-500',
        hoverText: 'hover:text-violet-500',
        focusBorder: 'focus:border-violet-500',
        btnHover: 'hover:bg-violet-500',
        socialHover: 'hover:text-violet-500',
        lightBg: 'bg-violet-500/10'
    };
  }
  // -----------------------------------

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10 font-sans relative z-10">
      
      {/* 1. ZONE HAUTE : NEWSLETTER & MANIFESTE */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            
            {/* Branding & Mission */}
            <div className="max-w-md">
                <div 
                    className="text-3xl font-bold tracking-tighter uppercase mb-6 cursor-pointer group"
                    onClick={() => onNavigate('home')}
                >
                    Solar<span className={`transition-colors duration-500 ${theme.text}`}>X</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Ingénierie nutritionnelle pour la performance humaine. 
                    Nous remplaçons la chimie par la physique (HPP). 
                    Le standard de l'hydratation fonctionnelle.
                </p>
                {/* Status System : On garde le vert car c'est une convention "Opérationnel", mais on pourrait l'adapter si voulu */}
                <div className="flex items-center gap-4 text-xs font-mono text-green-500 bg-green-900/10 px-4 py-2 rounded-full w-fit border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    SYSTEM STATUS: OPERATIONAL
                </div>
            </div>

            {/* Newsletter Capture (Adaptée) */}
            <div className="w-full lg:w-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors">
                <h3 className="font-bold text-lg mb-2">Rejoindre le "Lab"</h3>
                <p className="text-gray-400 text-xs mb-6">Accès anticipé aux lots limités.</p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input 
                            type="email" 
                            placeholder="votre@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // FOCUS DYNAMIQUE ICI
                            className={`bg-black border border-white/20 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none ${theme.focusBorder} w-full sm:w-64 transition-colors placeholder:text-gray-600`}
                            required
                        />
                    </div>
                    {/* BOUTON DYNAMIQUE ICI */}
                    <button type="submit" className={`bg-white text-black font-bold py-3 px-6 rounded-lg text-sm ${theme.btnHover} hover:text-white transition-all flex items-center justify-center gap-2 group`}>
                        Inscrire <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </button>
                </form>
            </div>
        </div>
      </div>

      {/* 2. ZONE MÉDIANE : LIENS DE NAVIGATION */}
      <div className="border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Colonne 1 : Produits */}
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-500">Hardware</h4>
                <ul className="space-y-4 text-sm">
                    <li>
                        {/* On garde les couleurs spécifiques aux produits pour la clarté */}
                        <button onClick={() => onNavigate('model-s')} className="text-gray-300 hover:text-rose-500 transition-colors flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span> Model S (Sanguine)
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Model V (Valencia)
                        </button>
                    </li>
                    <li>
                        <button className="text-gray-600 cursor-not-allowed flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-gray-700 rounded-full"></span> Model X (Classified)
                        </button>
                    </li>
                </ul>
            </div>

            {/* Colonne 2 : Science (Hover Dynamique) */}
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-500">Software</h4>
                <ul className="space-y-4 text-sm">
                    <li><button onClick={() => onNavigate('technologie')} className={`text-gray-300 ${theme.hoverText} transition-colors`}>Technologie HPP</button></li>
                    <li><button className={`text-gray-300 ${theme.hoverText} transition-colors`}>Traçabilité</button></li>
                    <li><button className={`text-gray-300 ${theme.hoverText} transition-colors`}>Certificats Bio</button></li>
                </ul>
            </div>

            {/* Colonne 3 : Légal (Hover Dynamique) */}
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-500">Protocole</h4>
                <ul className="space-y-4 text-sm">
                    <li><button className={`text-gray-300 ${theme.hoverText} transition-colors`}>CGV / CGU</button></li>
                    <li><button className={`text-gray-300 ${theme.hoverText} transition-colors`}>Confidentialité</button></li>
                    <li><button className={`text-gray-300 ${theme.hoverText} transition-colors`}>Expédition & Froid</button></li>
                </ul>
            </div>

            {/* Colonne 4 : Réseaux (Hover Dynamique) */}
            <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-500">Signal</h4>
                <div className="flex gap-4">
                    {/* Les icônes s'illuminent de la couleur du thème au survol */}
                    <a href="#" className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black ${theme.socialHover} transition-all`}>
                        <Instagram size={18} />
                    </a>
                    <a href="#" className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black ${theme.socialHover} transition-all`}>
                        <Twitter size={18} />
                    </a>
                    <a href="#" className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black ${theme.socialHover} transition-all`}>
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </div>
      </div>

      {/* 3. ZONE BASSE : COPYRIGHT & CRÉDITS */}
      <div className="border-t border-white/10 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-6">
                <span>&copy; 2025 SolarX Inc.</span>
                <span className="hidden md:inline">|</span>
                <span className="flex items-center gap-2"><Globe size={12}/> Paris, France</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 group">
                    <ShieldCheck size={12} className={`text-gray-500 ${theme.text} transition-colors`} />
                    <span>Paiement Sécurisé</span>
                </div>
                <div className="flex items-center gap-1">
                    <Activity size={12} className={`text-gray-500 ${theme.text} transition-colors`} />
                    <span>Hébergement Vert</span>
                </div>
            </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;