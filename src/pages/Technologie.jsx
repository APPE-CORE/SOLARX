import React from 'react';
import { Cpu, Snowflake, Microscope, ShieldCheck, Activity, FlaskConical, Database, ScanLine, Thermometer, ChevronRight, XCircle } from 'lucide-react';

const Technologie = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in text-white font-sans selection:bg-cyan-500 selection:text-black">
        
        {/* 1. HERO SECTION: LE LABO */}
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5 bg-black">
            {/* Background Tech Bleu */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black opacity-80"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* L'Orbe "Data" */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-[200px] opacity-10 animate-pulse"></div>
            </div>

            <div className="relative z-20 text-center px-4 mt-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md animate-fade-in">
                    <Cpu size={14} className="animate-pulse" /> Architecture HPP v3.0
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-2xl">
                    BIO-INGÉNIERIE.
                </h1>
                <p className="text-xl md:text-2xl text-cyan-100/70 max-w-2xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
                    La chaleur est l'ennemie du vivant. <br/>
                    Nous avons remplacé le feu par la pression.
                </p>
                
                <div className="flex justify-center gap-8 text-xs font-mono text-cyan-500/80">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white">6000</span>
                        <span>BARS PRESSION</span>
                    </div>
                    <div className="w-px bg-white/10 h-10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white">4°C</span>
                        <span>TEMP. MAX</span>
                    </div>
                    <div className="w-px bg-white/10 h-10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-white">0%</span>
                        <span>OXYDATION</span>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-cyan-500/50">
                <ScanLine size={24} />
            </div>
        </section>

        {/* 2. LE PROBLÈME THERMIQUE (Why we do it) */}
        <section className="py-24 bg-neutral-950 border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Le mensonge de la pasteurisation.</h2>
                        <div className="w-20 h-1 bg-red-600 mb-8"></div>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            Pour conserver un jus 12 mois, l'industrie le chauffe à 75°C (Flash Pasteurization). 
                            <span className="text-white font-bold"> C'est un massacre moléculaire.</span>
                        </p>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                                <span>La Vitamine C est détruite au-delà de 42°C.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                                <span>Les enzymes digestives sont désactivées.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <XCircle className="text-red-500 flex-shrink-0" size={20} />
                                <span>Le goût change (goût de "cuit").</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative bg-black border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                        {/* Abstract visual for Dead vs Alive */}
                        <div className="absolute inset-0 bg-red-900/10 rounded-2xl"></div>
                        <div className="text-center z-10">
                            <Thermometer size={64} className="text-red-600 mx-auto mb-4 animate-pulse" />
                            <h3 className="text-2xl font-bold text-red-500 mb-2">Zone Critique</h3>
                            <p className="font-mono text-red-300">&gt; 42°C = Mort Cellulaire</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. LA SOLUTION : PASCALISATION (HPP) */}
        <section className="py-24 bg-black relative overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/5 skew-x-12"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technologie HPP.</h2>
                    <h3 className="text-xl text-cyan-500 font-mono uppercase tracking-widest">High Pressure Processing</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                            <Snowflake className="text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">1. Mise en Bouteille Froide</h4>
                        <p className="text-gray-400 text-sm">Le jus est immédiatement mis en bouteille finale. Aucune cuve intermédiaire. Le froid est maintenu.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                            <Activity className="text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">2. Chambre Hyperbare</h4>
                        <p className="text-gray-400 text-sm">Les bouteilles plongent dans une cuve d'eau. La pression monte à 6000 bars (équivalent à 60km sous l'océan).</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                            <ShieldCheck className="text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">3. Stérilisation Mécanique</h4>
                        <p className="text-gray-400 text-sm">La pression fait "exploser" les parois des bactéries (E.Coli, Salmonelle) mais laisse intactes les petites molécules (Vitamines, Goût).</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. COMPARATIF SCIENTIFIQUE */}
        <section className="py-24 bg-neutral-900 border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-12">Analyse Comparative</h2>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-xs font-bold text-gray-500 uppercase tracking-widest">
                                <th className="py-4 px-6">Critère</th>
                                <th className="py-4 px-6 text-gray-700">Jus Industriel</th>
                                <th className="py-4 px-6 text-gray-600">Centrifugeuse Maison</th>
                                <th className="py-4 px-6 text-cyan-500 bg-cyan-950/10">Protocole SolarX</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-6 px-6 font-bold">Conservation</td>
                                <td className="py-6 px-6 text-gray-400">12 mois (Mort)</td>
                                <td className="py-6 px-6 text-gray-400">24h (Oxydation rapide)</td>
                                <td className="py-6 px-6 text-white font-bold bg-cyan-950/10">30 à 45 Jours (Vivant)</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-6 px-6 font-bold">Traitement</td>
                                <td className="py-6 px-6 text-gray-400">Chauffe 75°C - 85°C</td>
                                <td className="py-6 px-6 text-gray-400">Friction mécanique (Chauffe légère)</td>
                                <td className="py-6 px-6 text-cyan-400 font-bold bg-cyan-950/10">Froid + 6000 Bars</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-6 px-6 font-bold">Vitamines</td>
                                <td className="py-6 px-6 text-gray-400">Synthétiques (Rajoutées)</td>
                                <td className="py-6 px-6 text-gray-400">Intactes (mais déclin h+1)</td>
                                <td className="py-6 px-6 text-cyan-400 font-bold bg-cyan-950/10">100% Natives & Stables</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="py-6 px-6 font-bold">Sécurité</td>
                                <td className="py-6 px-6 text-gray-400">Standard</td>
                                <td className="py-6 px-6 text-red-500">Risque bactérien</td>
                                <td className="py-6 px-6 text-cyan-400 font-bold bg-cyan-950/10">Stérile (Qualité Clinique)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* 5. DATA & TRANSPARENCE */}
        <section className="py-24 bg-black border-b border-white/5 relative">
             <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-cyan-500 mb-6">
                            <Database size={20} />
                            <span className="font-mono text-xs tracking-widest">BLOCKCHAIN LEDGER</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-white">Confiance Zéro. <br/>Vérification Totale.</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Nous ne vous demandons pas de nous croire. Chaque bouteille possède un QR Code unique lié à son lot de production.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                <FlaskConical className="text-purple-500" />
                                <div>
                                    <h4 className="font-bold text-sm">Analyse Brix (Sucre)</h4>
                                    <p className="text-xs text-gray-500">Taux de sucre naturel vérifié avant pressage.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                <Microscope className="text-green-500" />
                                <div>
                                    <h4 className="font-bold text-sm">Pathogènes</h4>
                                    <p className="text-xs text-gray-500">Certificat d'absence Listeria & Salmonella.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Visual representation of data */}
                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
                        <div className="relative bg-neutral-900 border border-white/10 p-6 rounded-xl font-mono text-xs text-green-400 shadow-2xl overflow-hidden">
                            <div className="border-b border-white/10 pb-4 mb-4 flex justify-between">
                                <span>LOT: #SLX-2025-084</span>
                                <span className="animate-pulse">● LIVE</span>
                            </div>
                            {/* CORRECTION ICI : Remplacement des > par &gt; */}
                            <div className="space-y-2 opacity-80">
                                <p>&gt; INITIALIZING SCAN...</p>
                                <p>&gt; ORIGIN: VALENCIA, ES (39.4699° N)</p>
                                <p>&gt; HARVEST DATE: 2025-02-14</p>
                                <p>&gt; PRESSURE LOG: 6012 BARS [OK]</p>
                                <p>&gt; COLD CHAIN: 3.2°C AVG [OK]</p>
                                <p>&gt; SPECTRAL ANALYSIS: VALID</p>
                                <p className="text-cyan-400 mt-4">&gt;&gt; CERTIFICATE GENERATED.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* 6. CTA FINAL */}
        <section className="py-24 bg-white text-black text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-6">La science a du goût.</h2>
                <p className="text-xl text-gray-600 mb-10">
                    Choisissez votre carburant. Maintenant que vous savez ce qu'il y a dedans.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <button 
                        onClick={() => onNavigate('home')} 
                        className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                        Goûter le Model V <ChevronRight size={18} />
                    </button>
                    <button 
                        onClick={() => onNavigate('model-s')} 
                        className="px-8 py-4 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                        Goûter le Model S <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Technologie;