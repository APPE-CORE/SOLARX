import React from 'react';
import { ShoppingBag, ChevronRight, Zap, ShieldCheck, Activity, Star, Award, Fingerprint, Lock, TrendingUp, Quote, Mountain, ThermometerSnowflake, Droplets, ArrowLeft, Wind, Microscope, Timer, X } from 'lucide-react';

const ModelS = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
       
       {/* 1. HERO SECTION: L'EXCEPTION VOLCANIQUE */}
       <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/40 via-black to-black opacity-90"></div>
          {/* Le "Cœur" Rouge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-tr from-rose-800 to-red-950 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
             {/* Bouteille Model S Stylisée */}
             <div className="w-40 h-96 bg-gradient-to-b from-rose-700 to-rose-950 rounded-t-full rounded-b-[3rem] shadow-[0_0_100px_rgba(225,29,72,0.3)] border border-white/10 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-6 left-6 w-4 h-32 bg-white/10 rounded-full blur-sm"></div>
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
             </div>
             {/* Reflet sol */}
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
            {/* BOUTON PRINCIPAL CORRIGÉ (Grossissement + Fluidité) */}
            <button className="px-12 py-4 bg-rose-700 text-white font-bold rounded hover:bg-rose-600 transition-all duration-500 ease-out w-64 md:w-auto uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(190,18,60,0.4)] hover:shadow-[0_0_60px_rgba(190,18,60,0.7)] hover:scale-105">
              Réserver (45€)
            </button>
            
            {/* BOUTON SECONDAIRE CORRIGÉ (Flèche qui bouge) */}
            <button className="px-12 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all duration-300 w-64 md:w-auto uppercase tracking-wider text-sm backdrop-blur-sm flex items-center justify-center gap-2 group">
              Voir la Génétique <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300"/>
            </button>
          </div>
        </div>
      </section>

      {/* 2. AVANTAGES PRODUITS */}
      <section className="py-24 bg-neutral-950 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Biosynthèse Extrême.</h2>
                <p className="text-gray-400 text-lg">
                    Le Model S n'est pas conçu en laboratoire. Il est la réponse biologique de l'arbre à un environnement hostile.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Avantage 1 */}
                <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-rose-500/50 transition-all duration-500 group">
                    <ThermometerSnowflake className="w-12 h-12 text-rose-600 mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-xl font-bold mb-3 text-white">Stress Thermique Positif</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        La couleur rouge (Anthocyanes) ne se déclenche que si l'amplitude thermique dépasse &gt;14°C entre le jour et la nuit. C'est un mécanisme de défense antioxydant.
                    </p>
                </div>

                {/* Avantage 2 */}
                <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-rose-500/50 transition-all duration-500 group">
                    <Mountain className="w-12 h-12 text-rose-600 mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-xl font-bold mb-3 text-white">Minéralité Volcanique</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Puisant ses racines dans le basalte de l'Etna, ce jus présente une salinité naturelle unique qui agit comme un électrolyte naturel supérieur aux boissons isotoniques.
                    </p>
                </div>

                {/* Avantage 3 */}
                <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-rose-500/50 transition-all duration-500 group">
                    <Timer className="w-12 h-12 text-rose-600 mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="text-xl font-bold mb-3 text-white">Fenêtre de Tir : 45 Jours</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Disponible uniquement de Février à Mars. En dehors de cette fenêtre, nous refusons de presser. La rareté garantit le pic phénolique.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CONTAINER 3: RÉASSURANCE */}
      <section className="py-24 bg-neutral-900 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Protocole Sécurité.</h2>
              <p className="text-gray-400 max-w-md">
                Nous ne faisons pas confiance. Nous vérifions. Chaque lot subit une analyse spectrale avant mise en bouteille.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center space-x-2 text-green-500 font-mono text-xs tracking-widest bg-green-900/20 px-4 py-2 rounded border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                SYSTEM STATUS: OPTIMAL
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 p-8 rounded-lg border border-white/5 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-orange-500/20 transition-colors">
                    <Lock className="w-5 h-5 text-gray-300 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3">Chaîne du Froid Inviolable</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    De l'arbre à votre porte, la température ne dépasse jamais 4°C. Des capteurs IoT surveillent la chaîne thermique 24/7. Si l'alerte sonne, le lot est détruit.
                </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-white/5 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-orange-500/20 transition-colors">
                    <Fingerprint className="w-5 h-5 text-gray-300 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3">Traçabilité Moléculaire</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Chaque bouteille possède un ID unique lié à la parcelle de récolte. Scannez pour voir l'analyse complète du sol et la date exacte de pressage.
                </p>
            </div>

            <div className="bg-black/40 p-8 rounded-lg border border-white/5 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-orange-500/20 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-gray-300 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3">Zéro Compromis Chimique</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Pas d'additifs. Pas de "arômes naturels". Juste le fruit, soumis à 6000 bars de pression (HPP) pour neutraliser les pathogènes.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRÉSENTATION PRODUIT: LE SPECTRE ORGANOLEPTIQUE */}
      <section className="py-24 bg-black relative overflow-hidden border-b border-white/5">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Visual: Image abstraite ou produit */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 group">
                    <div className="absolute inset-0 bg-rose-900/20 group-hover:bg-transparent transition-colors duration-700"></div>
                    {/* Simulation d'une vue coupe macro du fruit */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623227866882-c005c207752f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 transform scale-105 group-hover:scale-100"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-rose-500 uppercase">Analyse Spectrale</span>
                            <span className="text-xs text-gray-400 font-mono">Lot #S-2025-ETNA</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                            <div className="bg-rose-600 h-full w-[92%]"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                            <span>Concentration</span>
                            <span>92% Saturation</span>
                        </div>
                    </div>
                </div>

                {/* Specs / Presentation */}
                <div>
                    <h2 className="text-4xl font-bold mb-2 text-white">Profil Complexe.</h2>
                    <h3 className="text-2xl text-rose-600 mb-8 font-light">Au-delà du sucré.</h3>
                    
                    <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                        Le Model S n'est pas un jus de petit-déjeuner. C'est un jus de dégustation. Sa structure tannique rappelle celle d'un vin rouge léger.
                    </p>

                    <div className="space-y-8">
                        {/* Jauge 1 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold tracking-widest uppercase">Acidité</span>
                                <span className="text-sm font-mono text-rose-500">Haute</span>
                            </div>
                            <div className="flex gap-1 h-2">
                                {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`flex-1 rounded-sm ${i > 6 ? 'bg-gray-800' : 'bg-white'}`}></div>)}
                            </div>
                        </div>

                        {/* Jauge 2 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold tracking-widest uppercase">Complexité Tannique</span>
                                <span className="text-sm font-mono text-rose-500">Moyenne+</span>
                            </div>
                            <div className="flex gap-1 h-2">
                                {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`flex-1 rounded-sm ${i > 5 ? 'bg-gray-800' : 'bg-white'}`}></div>)}
                            </div>
                        </div>

                        {/* Jauge 3 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold tracking-widest uppercase">Sucre Résiduel</span>
                                <span className="text-sm font-mono text-rose-500">Faible</span>
                            </div>
                            <div className="flex gap-1 h-2">
                                {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`flex-1 rounded-sm ${i > 3 ? 'bg-gray-800' : 'bg-white'}`}></div>)}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">450<span className="text-sm text-rose-600">mg</span></div>
                            <div className="text-[10px] uppercase text-gray-500 tracking-widest">Vitamine C / L</div>
                        </div>
                        <div className="w-px bg-white/10 h-12"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">11.2<span className="text-sm text-rose-600">°Bx</span></div>
                            <div className="text-[10px] uppercase text-gray-500 tracking-widest">Brix (Sucre)</div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 5. AVIS: RETOURS PILOTES */}
      <section className="py-24 bg-neutral-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cercle "Early Access".</h2>
             <p className="text-sm text-gray-500 mt-2 md:mt-0">Avis certifiés par Blockchain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Avis 1 */}
             <div className="bg-black p-8 rounded-xl border border-white/5 relative group hover:border-rose-500/30 transition-colors duration-300">
                <Quote className="absolute top-8 right-8 text-rose-900/40 w-8 h-8 group-hover:text-rose-600 transition-colors duration-300" />
                <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-rose-600 text-rose-600" />)}
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">"Une claque tannique."</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                   "Rien à voir avec le jus d'orange classique. On est plus proche d'un Pinot Noir sans alcool. La finale est longue, légèrement amère, parfaite pour couper la faim."
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                   <div className="w-8 h-8 bg-rose-900 rounded-full flex items-center justify-center text-xs font-bold">JD</div>
                   <div>
                      <div className="text-sm font-bold text-white">Julien D.</div>
                      <div className="text-xs text-gray-500">Sommelier, Bordeaux</div>
                   </div>
                </div>
             </div>

             {/* Avis 2 */}
             <div className="bg-black p-8 rounded-xl border border-white/5 relative group hover:border-rose-500/30 transition-colors duration-300">
                <Quote className="absolute top-8 right-8 text-rose-900/40 w-8 h-8 group-hover:text-rose-600 transition-colors duration-300" />
                <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-rose-600 text-rose-600" />)}
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">"Récupération immédiate."</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                   "Je l'utilise après mes sorties longues en hiver. L'acidité coupe la soif et je sens que ça recharge différemment du glucose pur. C'est plus stable."
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                   <div className="w-8 h-8 bg-rose-900 rounded-full flex items-center justify-center text-xs font-bold">ML</div>
                   <div>
                      <div className="text-sm font-bold text-white">Marie L.</div>
                      <div className="text-xs text-gray-500">Ultra-Traileuse, Chamonix</div>
                   </div>
                </div>
             </div>

             {/* Avis 3 */}
             <div className="bg-black p-8 rounded-xl border border-white/5 relative group hover:border-rose-500/30 transition-colors duration-300">
                <Quote className="absolute top-8 right-8 text-rose-900/40 w-8 h-8 group-hover:text-rose-600 transition-colors duration-300" />
                <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-rose-600 text-rose-600" />)}
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">"Design pur."</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                   "Le packaging noir et rouge est magnifique sur mon bureau. Mais au-delà du style, la constance du goût sur les 12 bouteilles est impressionnante pour un produit naturel."
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                   <div className="w-8 h-8 bg-rose-900 rounded-full flex items-center justify-center text-xs font-bold">KA</div>
                   <div>
                      <div className="text-sm font-bold text-white">Karim A.</div>
                      <div className="text-xs text-gray-500">Designer UX, Berlin</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. RÉASSURANCE & PRICING */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-widest rounded mb-6">
                        Traçabilité Totale
                    </div>
                    <h2 className="text-4xl font-bold mb-6">IGP Sicile. <br/>Garantie sans faille.</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Le Model S est fragile. Son anthocyanine se dégrade à la chaleur. C'est pourquoi notre chaîne logistique est hermétique.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <ShieldCheck className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Certification Anti-Fraude</h4>
                                <p className="text-sm text-gray-500">Chaque lot est testé par isotopie pour prouver qu'il vient bien de l'Etna et non d'une plaine industrielle.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Lock className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Serrure Thermique</h4>
                                <p className="text-sm text-gray-500">Du pressage à Catane jusqu'à votre frigo : transport sous température dirigée (2°C - 4°C). Jamais rompu.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-10 border-t border-gray-200 flex gap-8">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Indicazione_Geografica_Protetta_Logo.svg/1200px-Indicazione_Geografica_Protetta_Logo.svg.png" alt="IGP" className="h-12 opacity-60 grayscale hover:grayscale-0 transition-all" />
                         <div className="h-12 w-12 rounded-full border border-black flex items-center justify-center font-bold text-xs">HPP</div>
                         <div className="h-12 w-12 rounded-full border border-black flex items-center justify-center font-bold text-xs">ISO</div>
                    </div>
                </div>

                {/* Pricing Card */}
                <div className="w-full md:w-96 bg-black text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-bl-xl">
                        Stock Faible
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Pack Model S</h3>
                    <p className="text-gray-400 text-sm mb-8">Allocation mensuelle</p>
                    
                    <div className="text-5xl font-bold mb-8">
                        45€ <span className="text-sm font-normal text-gray-500">/pack</span>
                    </div>

                    <ul className="space-y-4 mb-8 text-sm">
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>12 x 500ml Sanguine</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>Origine Etna Certifiée</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>Livraison Froid J+1</li>
                    </ul>

                    <button className="w-full py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors rounded-lg hover:shadow-lg hover:shadow-white/20">
                        Sécuriser l'Allocation
                    </button>
                    <p className="text-[10px] text-center text-gray-500 mt-4">Annulable à tout moment.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default ModelS;