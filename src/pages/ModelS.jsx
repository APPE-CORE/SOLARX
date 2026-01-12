import React from 'react';
import { 
  ShoppingBag, ChevronRight, ShieldCheck, Activity, 
  Mountain, Wind, Timer, Dna, MapPin, Lock, Fingerprint, 
  Grip, ArrowRight, Sparkles, 
  // NOUVELLES ICÔNES POUR LA TARIFICATION ELITE :
  Check, X, Crown, Zap, Truck, RefreshCw, Star, Gem, Minus, AlertCircle
} from 'lucide-react';

const ModelS = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-black text-white selection:bg-rose-900 selection:text-white">
       
       {/* =========================================================================
           1. HERO SECTION (INTACTE)
       ========================================================================= */}
       <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/40 via-black to-black opacity-90"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-tr from-rose-800 to-red-950 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
             <div className="w-40 h-96 bg-gradient-to-b from-rose-700 to-rose-950 rounded-t-full rounded-b-[3rem] shadow-[0_0_100px_rgba(225,29,72,0.3)] border border-white/10 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-6 left-6 w-4 h-32 bg-white/10 rounded-full blur-sm"></div>
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
             </div>
             <div className="w-40 h-8 bg-rose-900/30 rounded-[100%] blur-xl mt-8"></div>
          </div>
        </div>

        <div className="relative z-20 text-center px-4 mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-rose-500/30 rounded-full bg-rose-950/20 text-rose-500 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <Wind size={12} /> Édition Hivernale Limitée
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-white drop-shadow-2xl">
            SANGUINE
          </h1>
          <p className="text-xl md:text-2xl text-rose-100/70 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Forgée par le froid. Colorée par le stress thermique.
            <br />Le millésime volcanique.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-2">
            <button className="px-12 py-4 bg-rose-700 text-white font-bold rounded hover:bg-rose-600 transition-all duration-500 ease-out w-64 md:w-auto uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(190,18,60,0.4)] hover:shadow-[0_0_60px_rgba(190,18,60,0.7)] hover:scale-105">
              Réserver (45€)
            </button>
            <button className="px-12 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all duration-300 w-64 md:w-auto uppercase tracking-wider text-sm backdrop-blur-sm flex items-center justify-center gap-2 group">
              Voir la Génétique <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300"/>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ORIGINE & TERROIR : VERSION FINALE MOBILE STRETCH
          - CRITIQUE FIX MOBILE : La grille n'a plus de hauteur fixe sur téléphone. 
            Les cartes s'étirent désormais pour contenir tout leur contenu (sphère C3G incluse).
      ========================================================================= */}
      <section className="py-24 bg-black relative border-b border-white/5 overflow-hidden">
         {/* Fond : Noise Texture + Grille subtile */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* EN-TÊTE DE SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-rose-500"></div>
                        <span className="text-rose-500 font-mono text-xs tracking-[0.2em] uppercase">Données Télémétriques</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        Terroir Hostile.
                    </h2>
                    <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                        L'orange sanguine ne naît pas du confort. Elle naît de la violence thermique du volcan Etna.
                    </p>
                </div>
                
                {/* Badge Localisation */}
                <div className="flex items-center gap-3 text-white text-xs font-mono uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md cursor-default">
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                    <MapPin size={14} className="text-gray-400"/> 
                    Sicile (37.75° N, 14.99° E)
                </div>
            </div>

            {/* BENTO GRID - FIX MOBILE ICI : 'md:auto-rows' au lieu de 'auto-rows' */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[340px]">
                
                {/* --- CARTE 1 : VISUALISATION SISMOGRAPHIQUE (Span 8) --- */}
                <div className="md:col-span-8 bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 relative overflow-hidden group flex flex-col justify-between font-sans">
                    
                    {/* Arrière-plan Gradient Subtil */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-rose-900/10 pointer-events-none"></div>

                    {/* Header Carte */}
                    <div className="relative z-10 flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center gap-2 text-rose-500 font-mono text-xs uppercase tracking-widest mb-2">
                                <Activity size={14} /> Activité Sismique
                            </div>
                            <h3 className="text-3xl font-bold text-white">Stress Racinaire.</h3>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-xs font-mono text-gray-500 mb-1">CAPTEUR: ETNA-04</div>
                            <div className="text-xs font-mono text-rose-500 bg-rose-500/10 px-2 py-1 rounded inline-block">LIVE ●</div>
                        </div>
                    </div>

                    {/* GRAPHIQUE */}
                    <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-500 min-h-[60px]">
                        <div className="absolute w-full h-px bg-rose-500/20"></div>
                        <svg viewBox="0 0 200 40" className="w-full h-full stroke-rose-500 fill-none stroke-[2px]" preserveAspectRatio="none">
                            <path vectorEffect="non-scaling-stroke">
                                <animate attributeName="d" dur="3s" repeatCount="indefinite" calcMode="linear"
                                    values="
                                    M0,20 L10,20 L15,10 L20,30 L25,20 L40,20 L45,5 L50,35 L55,20 L70,20 L80,20 L85,15 L90,25 L95,20 L120,20 L125,5 L130,35 L135,20 L150,20 L155,10 L160,30 L165,20 L200,20;
                                    M0,20 L5,20 L10,30 L15,10 L20,20 L35,20 L40,35 L45,5 L50,20 L65,20 L75,20 L80,25 L85,15 L90,20 L115,20 L120,35 L125,5 L130,20 L145,20 L150,30 L155,10 L160,20 L200,20;
                                    M0,20 L10,20 L15,10 L20,30 L25,20 L40,20 L45,5 L50,35 L55,20 L70,20 L80,20 L85,15 L90,25 L95,20 L120,20 L125,5 L130,35 L135,20 L150,20 L155,10 L160,30 L165,20 L200,20"
                                />
                            </path>
                        </svg>
                    </div>

                    {/* Données du bas */}
                    <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-8 border-t border-white/5 pt-6 mt-2 text-center md:text-left">
                        <div>
                            <div className="text-xl md:text-3xl font-bold text-white tracking-tighter">14<span className="text-xs md:text-sm font-normal text-gray-500 ml-1">°C</span></div>
                            <div className="text-[10px] text-gray-500 font-mono uppercase mt-1 tracking-wider">Amplitude</div>
                        </div>
                        <div>
                            <div className="text-xl md:text-3xl font-bold text-white tracking-tighter">6.1<span className="text-xs md:text-sm font-normal text-gray-500 ml-1">pH</span></div>
                            <div className="text-[10px] text-gray-500 font-mono uppercase mt-1 tracking-wider">Acidité Sol</div>
                        </div>
                        <div>
                            <div className="text-xl md:text-3xl font-bold text-white tracking-tighter">3357<span className="text-xs md:text-sm font-normal text-gray-500 ml-1">m</span></div>
                            <div className="text-[10px] text-gray-500 font-mono uppercase mt-1 tracking-wider">Altitude</div>
                        </div>
                    </div>
                </div>

                {/* --- CARTE 2 : MINÉRALITÉ (Span 4) --- */}
                <div className="md:col-span-4 bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 flex flex-col justify-between hover:border-rose-500/30 transition-colors duration-300 group font-sans">
                    <div>
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">
                            <Mountain size={14}/> Géologie
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Sol Basaltique.</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Riche en potassium et sélénium. Lave noire décomposée, pas de terreau.
                        </p>
                    </div>
                    
                    <div className="space-y-6 mt-8 md:mt-0">
                        {/* Jauges */}
                        <div>
                            <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2">
                                <span>POTASSIUM</span>
                                <span className="text-white">98%</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-rose-500 h-full w-[98%] shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2">
                                <span>SÉLÉNIUM</span>
                                <span className="text-white">OPTIMAL</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-gray-500 h-full w-[85%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CARTE 3 : TIMING / SCARCITY (Span 4) --- */}
                <div className="md:col-span-4 bg-gradient-to-br from-rose-950/20 to-black rounded-3xl border border-rose-500/20 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group font-sans">
                    <div className="absolute inset-0 bg-rose-500/5 blur-3xl rounded-full scale-50 group-hover:scale-75 transition-transform duration-700"></div>
                    
                    <div className="relative z-10 my-auto">
                        <div className="w-14 h-14 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 mx-auto border border-rose-500/20 text-rose-500 group-hover:scale-110 transition-transform duration-300">
                             <Timer size={24} />
                        </div>
                        <h3 className="text-4xl font-bold text-white mb-2 tracking-tighter">45 Jours.</h3>
                        <p className="text-rose-200/60 text-sm mb-8">
                            Février à Mars uniquement. <br/>
                            Après, c'est fini.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            Allocation Ouverte
                        </div>
                    </div>
                </div>

                 {/* --- CARTE 4 : BIOLOGIE / MOLECULE (Span 8) --- */}
                 {/* FIX MOBILE : Suppression de overflow-hidden pour laisser la carte s'étirer */}
                 <div className="md:col-span-8 bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8 md:gap-10 hover:border-white/20 transition-colors duration-300 relative font-sans">
                    
                    <div className="flex-1 relative z-10">
                        <div className="flex items-center gap-2 text-rose-500 font-mono text-xs uppercase tracking-widest mb-4">
                            <Dna size={14} /> Biologie Moléculaire
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Anthocyanes C3G.</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                            Le pigment de la survie. Un antioxydant surpuissant qui modifie la structure du jus : moins acide, plus complexe, texture velours.
                        </p>
                        
                        <div className="flex gap-10 border-t border-white/5 pt-6">
                            <div>
                                <div className="text-2xl font-bold text-white">450<span className="text-[10px] text-gray-500 ml-1 uppercase">mg/L</span></div>
                                <div className="text-[10px] text-gray-500 font-mono uppercase mt-1">Vitamine C</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">11.2<span className="text-[10px] text-gray-500 ml-1 uppercase">°Bx</span></div>
                                <div className="text-[10px] text-gray-500 font-mono uppercase mt-1">Sucrosité</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Molécule Visuelle (Bien visible maintenant) */}
                    <div className="relative w-40 h-40 flex-shrink-0 flex items-center justify-center mt-8 md:mt-0 mx-auto md:mx-0">
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-3 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-rose-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#f43f5e]"></div>
                        </div>
                        <div className="w-20 h-20 bg-gradient-to-br from-rose-600 to-rose-900 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.4)] relative z-10">
                            <div className="text-white font-bold text-lg tracking-tighter">C3G</div>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* =========================================================================
          3. ANALYSE SPECTRALE : VERSION "TWIN PANELS" (ALIGNEMENT BAS PARFAIT)
          - Architecture : 2 colonnes de même hauteur (h-full).
          - Gauche : Texte en haut, Tableau en bas.
          - Droite : Visualiseur en haut, Barres en bas.
          - Résultat : Alignement géométrique strict.
      ========================================================================= */}
      <section className="py-24 bg-neutral-950 border-b border-white/5 relative overflow-hidden">
        {/* Fond Grille Subtile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">Profil Organoleptique.</h2>
                <p className="text-gray-400 text-lg">Analyse spectrale du lot #S-2025-ETNA.</p>
            </div>

            {/* MAIN HUD CONTAINER */}
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 relative w-full overflow-hidden">
                
                {/* HUD Header Strip */}
                <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-rose-500 blur-sm opacity-50 animate-pulse"></div>
                            <Grip className="text-rose-500 relative z-10" size={20} />
                        </div>
                        <span className="text-xs md:text-sm font-mono text-white tracking-[0.2em]">LIVE MONITORING</span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] md:text-xs text-gray-500 font-mono">
                        <span className="hidden md:inline">FREQ: 50Hz</span>
                        <span className="text-green-500">CALIBRATION: OK</span>
                    </div>
                </div>

                {/* GRID 2 COLONNES : HAUTEUR EGALISÉE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* --- COLONNE GAUCHE : NARRATION & NOTES --- */}
                    <div className="flex flex-col justify-between h-full">
                        {/* Bloc Haut : Texte */}
                        <div className="mb-12">
                            <h3 className="text-3xl font-bold text-white mb-6">Au-delà du sucré.</h3>
                            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                Le Model S se distingue par une amertume noble en fin de bouche. Ce n'est pas un jus de petit-déjeuner, c'est un jus de gastronomie conçu pour le palais adulte, capable d'accompagner un repas.
                            </p>
                        </div>
                        
                        {/* Bloc Bas : Tableau des Notes (Ancré en bas) */}
                        <div className="space-y-6 font-mono text-xs md:text-sm bg-white/5 p-6 rounded-2xl border border-white/5">
                            <div className="flex justify-between items-center group">
                                <span className="text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">Note de Tête</span>
                                <span className="text-white font-bold">FRUITS ROUGES / FRAMBOISE</span>
                            </div>
                            <div className="w-full bg-white/5 h-px"></div>
                            <div className="flex justify-between items-center group">
                                <span className="text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">Note de Cœur</span>
                                <span className="text-white font-bold">ORANGE SANGUINE VIVE</span>
                            </div>
                            <div className="w-full bg-white/5 h-px"></div>
                            <div className="flex justify-between items-center group">
                                <span className="text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider">Note de Fond</span>
                                <span className="text-white font-bold">AMERTUME FLORALE</span>
                            </div>
                        </div>
                    </div>

                    {/* --- COLONNE DROITE : DATA & JAUGES --- */}
                    <div className="flex flex-col justify-between h-full bg-[#0A0A0A] rounded-2xl border border-white/10 p-6 md:p-8 relative overflow-hidden">
                        
                        {/* Décoration Haut : Visualiseur Audio/Gout (Pour combler le vide) */}
                        <div className="mb-8 relative h-24 w-full flex items-center justify-center opacity-30">
                            <div className="absolute inset-x-0 bottom-0 h-px bg-white/20"></div>
                            {/* Onde SVG abstraite */}
                            <svg viewBox="0 0 100 20" className="w-full h-full fill-rose-500/20 stroke-rose-500 stroke-[0.5px]">
                                <path d="M0,20 Q10,10 20,20 T40,20 T60,5 T80,20 T100,20 V20 H0 Z" />
                            </svg>
                            <span className="absolute top-0 right-0 text-[10px] font-mono text-rose-500">SIGNATURE GUSTATIVE</span>
                        </div>

                        {/* Bloc Bas : Jauges (Alignées avec le tableau de gauche) */}
                        <div className="space-y-8">
                            <div className="group">
                                <div className="flex justify-between mb-3 items-end">
                                    <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Acidité</span>
                                    <span className="text-xs font-mono text-rose-500 font-bold bg-rose-500/10 px-2 py-0.5 rounded">8.5/10</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-rose-900 to-rose-500 w-[85%] rounded-full relative shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-3 items-end">
                                    <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Complexité Tannique</span>
                                    <span className="text-xs font-mono text-rose-500 font-bold bg-rose-500/10 px-2 py-0.5 rounded">7.2/10</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-rose-900 to-rose-500 w-[72%] rounded-full relative shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-3 items-end">
                                    <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Sucre Résiduel</span>
                                    <span className="text-xs font-mono text-rose-500 font-bold bg-rose-500/10 px-2 py-0.5 rounded">4.0/10</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-rose-900 to-rose-500 w-[40%] rounded-full relative shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* =========================================================================
          4. SÉCURITÉ & LOGISTIQUE : VERSION ELITE (Lumière Corrigée)
          - Origine Lumière : Calée sur l'icône (60px 60px)
          - Intensité : Réduite pour plus de subtilité (0.06 opacity)
          - Ambiance : "Dark Glass" sobre
      ========================================================================= */}
      <section className="py-32 bg-black border-b border-white/5 relative overflow-hidden">
        {/* Fond d'ambiance : Carte topographique subtile */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                     <div className="flex items-center gap-2 mb-4 text-rose-500 font-mono text-[10px] uppercase tracking-widest">
                        <ShieldCheck size={14} /> Protocoles de Défense
                     </div>
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Zéro Compromis.</h2>
                     <p className="text-gray-400 max-w-lg leading-relaxed">
                        La confiance n'exclut pas le contrôle. Notre chaîne logistique est un environnement stérile surveillé par IA.
                     </p>
                </div>
                
                {/* Status Global */}
                <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-green-900/10 border border-green-900/30 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    <span className="text-green-500 font-mono text-xs tracking-widest uppercase">Système Nominal</span>
                </div>
            </div>

            {/* GRID DES MODULES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* --- MODULE 1 : CHAINE DU FROID --- */}
                <div className="bg-[#0A0A0A]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative group transition-all duration-700 overflow-hidden hover:border-white/20">
                    
                    {/* === EFFET LUMIÈRE CORRIGÉ === */}
                    {/* Diffusion depuis l'icône (Top Left) - Opacité faible (0.06) */}
                    <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_60px_60px,rgba(225,29,72,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    {/* ============================= */}

                    <div className="relative z-10">
                        {/* Icon Container */}
                        <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-rose-500/30 group-hover:text-rose-500 text-gray-400 transition-all duration-500 relative shadow-none group-hover:shadow-[0_0_15px_rgba(225,29,72,0.15)]">
                            <Lock size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Chaîne Froid 4°C</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Des capteurs IoT enregistrent la température toutes les 5 minutes. Si le seuil de 4°C est dépassé, le lot est automatiquement détruit.
                        </p>

                        {/* Tech Footer */}
                        <div className="flex justify-between items-center pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                            <span className="text-[10px] font-mono text-gray-600 uppercase group-hover:text-gray-400 transition-colors">Seuil Critique</span>
                            <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-1 rounded">&gt; 4.1°C</span>
                        </div>
                    </div>
                </div>

                {/* --- MODULE 2 : HPP --- */}
                <div className="bg-[#0A0A0A]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative group transition-all duration-700 overflow-hidden hover:border-white/20">
                     
                     {/* === EFFET LUMIÈRE CORRIGÉ === */}
                     <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_60px_60px,rgba(225,29,72,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                     {/* ============================= */}

                    <div className="relative z-10">
                        {/* Icon Container */}
                        <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-rose-500/30 group-hover:text-rose-500 text-gray-400 transition-all duration-500 relative shadow-none group-hover:shadow-[0_0_15px_rgba(225,29,72,0.15)]">
                            <Activity size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Pression HPP</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Pascalisation à froid (6000 bars). Cette pression écrase les bactéries pathogènes mais laisse intactes les vitamines et la structure du goût.
                        </p>

                        {/* Tech Footer */}
                        <div className="flex justify-between items-center pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                            <span className="text-[10px] font-mono text-gray-600 uppercase group-hover:text-gray-400 transition-colors">Pression</span>
                            <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-1 rounded">6000 BARS</span>
                        </div>
                    </div>
                </div>

                {/* --- MODULE 3 : TRAÇABILITÉ --- */}
                <div className="bg-[#0A0A0A]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative group transition-all duration-700 overflow-hidden hover:border-white/20">
                     
                     {/* === EFFET LUMIÈRE CORRIGÉ === */}
                     <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_60px_60px,rgba(225,29,72,0.06),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                     {/* ============================= */}

                    <div className="relative z-10">
                        {/* Icon Container */}
                        <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-rose-500/30 group-hover:text-rose-500 text-gray-400 transition-all duration-500 relative shadow-none group-hover:shadow-[0_0_15px_rgba(225,29,72,0.15)]">
                            <Fingerprint size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Traçabilité ID</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Chaque bouteille possède un QR Code unique gravé au laser. Scannez pour voir la parcelle satellite, la date de récolte et le rapport labo.
                        </p>

                        {/* Tech Footer */}
                        <div className="flex justify-between items-center pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                            <span className="text-[10px] font-mono text-gray-600 uppercase group-hover:text-gray-400 transition-colors">Technologie</span>
                            <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-1 rounded">BLOCKCHAIN</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
      {/* =========================================================================
          6. PRICING ELITE : "THE MASTER CARD" (Final interaction logic)
          - DOM Order Trick : La carte centrale est placée en premier dans le code (Peer)
            pour pouvoir contrôler les autres, mais réordonnée visuellement (Order-2).
          - Center Hover : Grandit + Pousse les voisins (peer-hover).
          - Sides Hover : Ne grandissent plus, juste un effet de lumière.
      ========================================================================= */}
      <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
        
        {/* FOND : AMBIANCE VOLCANIQUE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vw] bg-rose-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* HEADER */}
            <div className="flex flex-col items-center text-center mb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-rose-500/20 rounded-full bg-rose-950/10 text-rose-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                    <Gem size={10} /> Protocoles d'Acquisition
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 drop-shadow-2xl">
                    Choisir l'Excellence.
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
                    L'accès à la Sanguine est limité par la nature. <br/>Choisissez comment vous sécurisez votre allocation.
                </p>
            </div>

            {/* GRILLE DES 3 OFFRES */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-24">
                
                {/* 1. LE RITUEL (CENTRE - LE MAÎTRE)
                   - Placé en PREMIER dans le code pour agir comme "Peer".
                   - Visuellement remis au milieu avec `order-2`.
                   - Effet : Grandit et active le push des autres.
                */}
                <div className="relative order-2 peer bg-[#0f0202] border border-rose-500/50 rounded-3xl p-8 lg:p-10 shadow-[0_0_50px_rgba(225,29,72,0.1)] z-20 flex flex-col h-auto lg:h-[640px] transform transition-all duration-500 ease-out hover:scale-[1.08] hover:-translate-y-4 hover:shadow-[0_0_100px_rgba(225,29,72,0.4)] hover:z-30 group">
                    
                    {/* Badge Flottant */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-rose-900/50 flex items-center gap-2">
                        <Star size={10} fill="currentColor" /> Recommandé
                    </div>

                    <div className="mb-8 text-center lg:text-left">
                        <div className="text-rose-500 font-mono text-xs uppercase tracking-widest mb-2">Abonnement</div>
                        <h3 className="text-4xl font-bold text-white mb-4 flex items-center gap-2 justify-center lg:justify-start">
                            Rituel <Crown size={24} className="text-rose-500" fill="currentColor" fillOpacity={0.2} />
                        </h3>
                        <div className="flex items-baseline gap-1 mb-6 justify-center lg:justify-start">
                            <span className="text-6xl font-bold text-white tracking-tighter">45€</span>
                            <span className="text-gray-400 text-sm">/mois</span>
                        </div>
                        <p className="text-rose-100/80 text-sm leading-relaxed mb-8 h-10">
                            La performance continue. Priorité absolue sur la récolte et logistique froide.
                        </p>
                        
                        {/* BOUTON HERO */}
                        <button className="relative w-full py-5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-sm uppercase tracking-widest transition-all shadow-lg shadow-rose-900/30 hover:shadow-rose-600/50 hover:scale-[1.02] overflow-hidden group">
                            <span className="relative z-10 flex items-center justify-center gap-2">Rejoindre le Cercle <ArrowRight size={16} /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                        </button>
                        <p className="text-center text-[10px] text-gray-500 mt-3 uppercase tracking-widest">Sans engagement • Annulation 1-click</p>
                    </div>

                    {/* Features Hero */}
                    <div className="space-y-5 border-t border-rose-500/10 pt-8 flex-1">
                        <div className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded-full bg-rose-500 text-white"><Check size={12} strokeWidth={3} /></div> <span className="text-rose-400">12 Bouteilles</span> (Allocation Réservée)</div>
                        <div className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded-full bg-rose-500 text-white"><Check size={12} strokeWidth={3} /></div> Livraison Express J+1</div>
                        <div className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded-full bg-rose-500 text-white"><Check size={12} strokeWidth={3} /></div> -18% sur le prix public</div>
                        <div className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded-full bg-rose-500 text-white"><Check size={12} strokeWidth={3} /></div> Accès "Black Batch"</div>
                        <div className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded-full bg-rose-500 text-white"><Check size={12} strokeWidth={3} /></div> Conciergerie 24/7</div>
                    </div>
                </div>

                {/* 2. EXPLORATEUR (GAUCHE)
                   - Visuellement remis à gauche avec `order-1`.
                   - Réagit au hover du "Peer" (Centre) en s'écartant vers la gauche (-translate-x-6).
                   - Ne grandit PAS au survol (juste border light).
                */}
                <div className="relative order-1 bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col h-auto lg:h-[580px] transition-all duration-500 ease-out hover:bg-neutral-900/80 hover:border-white/20 lg:peer-hover:-translate-x-6 lg:peer-hover:scale-[0.98] lg:peer-hover:opacity-60">
                    <div className="mb-8">
                        <div className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-2">Découverte</div>
                        <h3 className="text-3xl font-bold text-white mb-4">Explorateur</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-white tracking-tighter">55€</span>
                            <span className="text-gray-500 text-sm">/coffret</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 h-10">
                            Une expédition unique pour comprendre la différence Sanguine.
                        </p>
                        <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all">
                            Commander (Unique)
                        </button>
                    </div>
                    {/* Features */}
                    <div className="space-y-4 border-t border-white/5 pt-8 flex-1">
                        <div className="flex items-center gap-3 text-sm text-gray-300"><div className="p-1 rounded-full bg-white/10"><Check size={10} /></div> 12 Bouteilles (500ml)</div>
                        <div className="flex items-center gap-3 text-sm text-gray-300"><div className="p-1 rounded-full bg-white/10"><Check size={10} /></div> Livraison Standard</div>
                        <div className="flex items-center gap-3 text-sm text-gray-500 opacity-50"><div className="p-1 rounded-full bg-white/5"><Minus size={10} /></div> Pas de priorité stock</div>
                    </div>
                </div>

                {/* 3. ATHLÈTE (DROITE)
                   - Visuellement remis à droite avec `order-3`.
                   - Réagit au hover du "Peer" (Centre) en s'écartant vers la droite (translate-x-6).
                   - Ne grandit PAS au survol.
                */}
                <div className="relative order-3 bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col h-auto lg:h-[580px] transition-all duration-500 ease-out hover:bg-neutral-900/80 hover:border-white/20 lg:peer-hover:translate-x-6 lg:peer-hover:scale-[0.98] lg:peer-hover:opacity-60">
                    <div className="mb-8">
                        <div className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-2">Performance</div>
                        <h3 className="text-3xl font-bold text-white mb-4">Athlète</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-white tracking-tighter">85€</span>
                            <span className="text-gray-500 text-sm">/mois</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 h-10">
                            Volume doublé pour les régimes à haute intensité et récupération rapide.
                        </p>
                        <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all">
                            Configurer
                        </button>
                    </div>
                    {/* Features */}
                    <div className="space-y-4 border-t border-white/5 pt-8 flex-1">
                        <div className="flex items-center gap-3 text-sm text-gray-300"><div className="p-1 rounded-full bg-white/10"><Check size={10} /></div> <span className="text-white font-bold">24 Bouteilles</span> / Mois</div>
                        <div className="flex items-center gap-3 text-sm text-gray-300"><div className="p-1 rounded-full bg-white/10"><Check size={10} /></div> Livraison Prioritaire J+1</div>
                        <div className="flex items-center gap-3 text-sm text-gray-300"><div className="p-1 rounded-full bg-white/10"><Check size={10} /></div> Consultation Nutrition</div>
                    </div>
                </div>

            </div>

            {/* TABLEAU DE COMPARAISON TECHNIQUE */}
            <div className="border border-white/5 rounded-3xl bg-neutral-900/20 overflow-hidden">
                <div className="bg-white/5 px-8 py-4 border-b border-white/5 flex items-center gap-2">
                    <Activity size={16} className="text-rose-500"/>
                    <span className="text-xs font-mono uppercase tracking-widest text-white">Spécifications Techniques Comparées</span>
                </div>
                <div className="grid grid-cols-4 text-xs md:text-sm divide-x divide-white/5">
                    {/* Header Col */}
                    <div className="col-span-1 p-6 text-gray-500 font-mono hidden md:block">
                        <div className="h-10 flex items-center">Volume</div>
                        <div className="h-10 flex items-center">Type de Livraison</div>
                        <div className="h-10 flex items-center">Priorité Allocation</div>
                        <div className="h-10 flex items-center">Garantie Fraîcheur</div>
                    </div>
                    {/* Explorateur Col */}
                    <div className="col-span-4 md:col-span-1 p-6 text-center md:text-left">
                        <div className="font-bold text-white mb-4 block md:hidden">Explorateur</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-gray-400">6 Litres</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-gray-400">Standard (48h)</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-gray-600">Standard</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-gray-400">Satisfait ou Remboursé</div>
                    </div>
                    {/* Rituel Col (Highlighted) */}
                    <div className="col-span-4 md:col-span-1 p-6 bg-rose-900/5 text-center md:text-left relative">
                        <div className="absolute inset-0 border-x border-rose-500/10 pointer-events-none"></div>
                        <div className="font-bold text-rose-500 mb-4 block md:hidden">Rituel (Recommandé)</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-white font-bold">6 Litres</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-rose-400 font-bold">Express J+1 (Froid)</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-rose-400 font-bold">Haute (Garanti)</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-white">Remplacement Immédiat</div>
                    </div>
                    {/* Elite Col */}
                    <div className="col-span-4 md:col-span-1 p-6 text-center md:text-left">
                        <div className="font-bold text-white mb-4 block md:hidden">Athlète</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-white">12 Litres</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-white">Express J+1 (Froid)</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-white">Prioritaire +++</div>
                        <div className="h-10 flex items-center justify-center md:justify-start text-white">Remplacement Immédiat</div>
                    </div>
                </div>
            </div>

            {/* FOOTER REASSURANCE */}
            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-8 opacity-40 text-[10px] font-mono uppercase tracking-widest text-white">
                    <span className="flex items-center gap-2"><ShieldCheck size={12}/> Paiement Crypté (Stripe)</span>
                    <span className="hidden md:flex items-center gap-2"><Truck size={12}/> Chronofresh Certified</span>
                    <span className="flex items-center gap-2"><RefreshCw size={12}/> Pause à tout moment</span>
                </div>
            </div>

        </div>
      </section>

      {/* =========================================================================
          6. FINALE : "LE MILLÉSIME" (PC OPTIMIZED - ZERO LAG)
          - Problème résolu : Lag sur PC dû au recalcul de l'ombre (box-shadow).
          - Solution : Technique "Phantom Glow". L'ombre intense est une div séparée 
            qui joue sur l'OPACITÉ (géré par le GPU) et non sur le SHADOW (géré par le CPU).
      ========================================================================= */}
      <section className="pt-16 pb-24 lg:pt-24 lg:pb-44 bg-black relative flex items-center overflow-hidden border-t border-white/5">
        
        {/* Fond : Lueur d'ambiance */}
        <div className="absolute bottom-0 right-0 w-[70vw] h-[40vw] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="w-full max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                
                {/* --- COLONNE GAUCHE --- */}
                <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start pointer-events-none">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-rose-500/30 rounded-full bg-rose-950/10 text-rose-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        Série Limitée Hiver
                    </div>

                    {/* TITRE */}
                    <div className="relative inline-block mb-8">
                        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-white tracking-tighter leading-tight lg:leading-[0.85] relative z-10">
                            LE MILLÉSIME.
                        </h2>
                        <h2 className="hidden md:block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold text-neutral-900 tracking-tighter leading-tight lg:leading-[0.85] absolute top-1 left-1 z-0 select-none blur-[1px]">
                            LE MILLÉSIME.
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg md:text-2xl max-w-xl leading-relaxed font-light">
                        La nature a fait le travail difficile. Nous l'avons juste mis en bouteille.
                        <span className="text-white font-medium block mt-4">12 bouteilles. Une saison. Zéro compromis.</span>
                    </p>
                </div>

                {/* --- COLONNE DROITE --- */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-8 w-full mt-8 lg:mt-0 pointer-events-auto relative z-50">
                    
                    {/* --- BOUTON ARCHITECTURE GPU (ZERO LAG) --- */}
                    <div className="relative group w-full md:w-auto flex justify-center md:justify-end">
                        
                        {/* 1. L'OMBRE FANTÔME (Celle qui est grosse)
                            - Elle est déjà là, invisible (opacity-0).
                            - Au survol, elle apparaît (opacity-100).
                            - Le navigateur n'a rien à recalculer, juste afficher.
                        */}
                        <div className="absolute inset-0 bg-rose-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 will-change-[opacity]"></div>

                        {/* 2. LE BOUTON PHYSIQUE
                            - Il gère le Scale (agrandissement).
                            - Il a sa propre ombre de base (fixe).
                        */}
                        <button className="relative w-full md:w-auto px-10 py-6 bg-rose-700 hover:bg-rose-600 text-white font-bold rounded-2xl transition-transform duration-300 ease-out transform group-hover:scale-[1.02] shadow-xl shadow-rose-900/40 flex items-center justify-center gap-4 will-change-transform">
                            <ShoppingBag size={20} className="md:w-6 md:h-6" />
                            <span className="tracking-tight uppercase text-sm md:text-lg">Commander le Coffret</span>
                        </button>
                    </div>

                    {/* Feedback */}
                    <div className="flex flex-col items-center lg:items-end gap-2 text-right">
                        <div className="flex items-center gap-2 text-white text-xs md:text-base">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-mono uppercase tracking-widest">En Stock - Expédié 24h</span>
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm">
                            Privilège membre : <span className="text-white font-bold">45€ / mois</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </section>

    </div>
  );
};

export default ModelS;