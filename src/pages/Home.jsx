import React from 'react';
import { ChevronRight, Sun, Droplets, ShieldPlus, Leaf, Zap, Timer, Star, Quote, CheckCircle, CalendarClock, ArrowRight } from 'lucide-react';

const Home = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
        
        {/* 1. HERO SECTION: L'ORIGINE SOLAIRE */}
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/5 bg-black">
            {/* Background Solaire */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/30 via-black to-black opacity-80"></div>
                
                {/* CORRECTION ICI : Utilisation de animate-pulse standard pour la "respiration" */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full blur-[180px] opacity-20 animate-pulse"></div>
            </div>

            <div className="relative z-20 text-center px-4 mt-12">
                <div className="inline-flex items-center gap-2 px-4 py-1 border border-orange-500/30 rounded-full bg-orange-950/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                    {/* CORRECTION ICI : Rotation douce contrôlée (10 secondes) */}
                    <Sun size={12} className="animate-[spin_10s_linear_infinite]" /> Standard Solaire Quotidien
                </div>
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-white drop-shadow-2xl">
                    VALENCIA
                </h1>
                <p className="text-xl md:text-2xl text-orange-100/80 max-w-2xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
                    L'énergie pure de Valencia. Constante. Fiable.
                    <br />Conçue pour le rythme biologique humain.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
                    {/* CORRECTION ICI : Ajout de duration-500 pour fluidifier le survol */}
                    <button className="px-12 py-4 bg-orange-600 text-white font-bold rounded hover:bg-orange-500 transition-all duration-500 ease-out w-64 md:w-auto uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.7)] hover:scale-105">
                        Activer le Rituel (35€)
                    </button>
                    
                    <button onClick={() => onNavigate('model-s')} className="px-12 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all duration-300 w-64 md:w-auto uppercase tracking-wider text-sm backdrop-blur-sm flex items-center justify-center gap-2 group">
                        Version Sanguine <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300"/>
                    </button>
                </div>
            </div>
        </section>

        {/* 2. LES PILIERS DU QUOTIDIEN */}
        <section className="py-24 bg-neutral-950 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">La fondation de votre journée.</h2>
                    <p className="text-gray-400 text-lg">
                        Contrairement au Model S qui est un "boost" tactique, le Model V est une infrastructure. Il stabilise votre niveau d'énergie sans pic ni crash.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pilier 1 */}
                    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-500 group">
                        <Zap className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-xl font-bold mb-3 text-white">Libération Prolongée</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            La matrice fibreuse naturelle du fruit ralentit l'absorption du fructose. Résultat : 4 heures d'énergie stable, pas de pic d'insuline.
                        </p>
                    </div>

                    {/* Pilier 2 */}
                    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-500 group">
                        <Droplets className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-xl font-bold mb-3 text-white">Hydratation Active</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Contient de l'eau structurée biologiquement filtrée par l'arbre, chargée en électrolytes essentiels (Potassium, Magnésium) pour une hydratation cellulaire.
                        </p>
                    </div>

                    {/* Pilier 3 */}
                    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/50 transition-all duration-500 group">
                        <ShieldPlus className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-xl font-bold mb-3 text-white">Bouclier C Naturel</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Une seule dose couvre 140% des apports journaliers en Vitamine C native (non synthétique), optimisant la fonction immunitaire et la synthèse du collagène.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. LE PROCESSUS : PURETÉ MAXIMALE */}
        <section className="py-24 bg-neutral-900 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Zéro Interférence.</h2>
                        <p className="text-gray-400 max-w-md">
                            Du verger à la bouteille, nous n'ajoutons rien. Nous ne retirons rien. Nous préservons simplement l'intégrité du fruit.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center space-x-2 text-orange-400 font-mono text-xs tracking-widest bg-orange-900/20 px-4 py-2 rounded border border-orange-500/20">
                        <Leaf size={14} />
                        MONO-VARIÉTÉ : VALENCIA LATE
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black/40 p-8 rounded-lg border border-white/5 hover:border-orange-500/30 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><CheckCircle size={18} className="text-orange-500"/> Single Origin</h3>
                        <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                            Sourcé exclusivement dans la région de Valencia, Espagne. Terroir sablonneux, ensoleillement maximal &gt;300 jours/an.
                        </p>
                    </div>

                    <div className="bg-black/40 p-8 rounded-lg border border-white/5 hover:border-orange-500/30 transition-all duration-300 group relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Timer size={18} className="text-orange-500"/> Pressé à Froid H+24</h3>
                        <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                            Les fruits sont pressés moins de 24 heures après la récolte manuelle pour éviter l'oxydation des nutriments sensibles.
                        </p>
                    </div>

                    <div className="bg-black/40 p-8 rounded-lg border border-white/5 hover:border-orange-500/30 transition-all duration-300 group relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><ShieldPlus size={18} className="text-orange-500"/> Technologie HPP</h3>
                        <p className="text-sm text-gray-500 leading-relaxed relative z-10">
                            Jamais chauffé. Pasteurisé à froid par haute pression (6000 bars) pour tuer les bactéries sans cuire les vitamines.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. PROFIL: LUMINEUX ET ACCESSIBLE */}
        <section className="py-24 bg-black relative overflow-hidden border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Visual: Image abstraite ou produit */}
                    <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition-colors duration-700"></div>
                        {/* Placeholder pour une image de fruit coupé lumineux */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611080626919-7cf5a9692767?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale-[30%] contrast-110 group-hover:grayscale-0 transition-all duration-1000 transform scale-105 group-hover:scale-100"></div>
                        
                        <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/30 flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Profil Solaire Actif</span>
                        </div>
                    </div>

                    {/* Specs / Presentation */}
                    <div>
                        <h2 className="text-4xl font-bold mb-2 text-white">Le Goût de la Lumière.</h2>
                        <h3 className="text-2xl text-orange-500 mb-8 font-light">Éclatant. Rond. Vital.</h3>
                        
                        <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                            À l'opposé de la complexité tannique du Model S, le Model V recherche l'équilibre parfait entre la douceur naturelle et une acidité rafraîchissante. C'est le goût du réveil.
                        </p>

                        <div className="space-y-8">
                            {/* Jauge 1 */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2"><Sun size={14}/> Indice Glycémique</span>
                                    <span className="text-sm font-mono text-orange-400">Modéré (Stable)</span>
                                </div>
                                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-gradient-to-r from-orange-400 to-yellow-500 h-full w-[45%]"></div>
                                </div>
                            </div>

                            {/* Jauge 2 */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2"><Droplets size={14}/> Jutosité / Texture</span>
                                    <span className="text-sm font-mono text-orange-400">Haute (Fluide)</span>
                                </div>
                                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-gradient-to-r from-orange-400 to-yellow-500 h-full w-[85%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-orange-950/30 border border-orange-500/20 rounded-xl flex items-start gap-4">
                            <CheckCircle className="text-orange-500 w-8 h-8 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-white mb-1">L'Engagement "Zéro Zeste"</h4>
                                <p className="text-sm text-gray-400">Notre technologie de pressage unique sépare instantanément l'huile essentielle de la peau du jus, éliminant 99% de l'amertume.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. AVIS: RITUELS QUOTIDIENS */}
        <section className="py-24 bg-neutral-900 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">La routine des performeurs.</h2>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">Avis vérifiés sur abonnés 6+ mois.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Avis 1 */}
                <div className="bg-black p-8 rounded-xl border border-white/5 relative group hover:border-orange-500/30 transition-colors duration-300">
                    <Quote className="absolute top-8 right-8 text-orange-900/40 w-8 h-8 group-hover:text-orange-500 transition-colors duration-300" />
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-orange-500 text-orange-500" />)}
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">"Mon café a disparu."</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    "Je cherchais à réduire la caféine. Un Model V à jeun me réveille plus proprement, sans l'agitation ni le crash de 11h. C'est devenu automatique."
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <div className="w-8 h-8 bg-orange-900/50 rounded-full flex items-center justify-center text-xs font-bold text-orange-300">TH</div>
                    <div>
                        <div className="text-sm font-bold text-white">Thomas H.</div>
                        <div className="text-xs text-gray-500">Architecte, Lyon</div>
                    </div>
                    </div>
                </div>

                {/* Avis 2 */}
                <div className="bg-black p-8 rounded-xl border border-white/5 relative group hover:border-orange-500/30 transition-colors duration-300">
                    <Quote className="absolute top-8 right-8 text-orange-900/40 w-8 h-8 group-hover:text-orange-500 transition-colors duration-300" />
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-orange-500 text-orange-500" />)}
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">"La constance est folle."</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    "Ce qui m'impressionne, c'est que le goût est parfait chaque matin, toute l'année. Je ne sais pas comment ils font ça avec du naturel, mais je ne peux plus m'en passer."
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <div className="w-8 h-8 bg-orange-900/50 rounded-full flex items-center justify-center text-xs font-bold text-orange-300">SA</div>
                    <div>
                        <div className="text-sm font-bold text-white">Sarah A.</div>
                        <div className="text-xs text-gray-500">Dev Front-End, Remote</div>
                    </div>
                    </div>
                </div>

                {/* Avis 3 */}
                <div className="bg-black p-8 rounded-xl border border-white/5 relative group hover:border-orange-500/30 transition-colors duration-300">
                    <Quote className="absolute top-8 right-8 text-orange-900/40 w-8 h-8 group-hover:text-orange-500 transition-colors duration-300" />
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-orange-500 text-orange-500" />)}
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">"Simple et efficace."</h4>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    "Je prends le V la semaine pour le boulot, et le S le week-end avant le sport. Le combo parfait. L'abonnement est super flexible."
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <div className="w-8 h-8 bg-orange-900/50 rounded-full flex items-center justify-center text-xs font-bold text-orange-300">MD</div>
                    <div>
                        <div className="text-sm font-bold text-white">Marc D.</div>
                        <div className="text-xs text-gray-500">Consultant, Paris</div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* 6. CTA: L'ABONNEMENT */}
        <section className="py-24 bg-white text-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-widest rounded mb-6">
                            <CalendarClock size={14}/> Flexibilité Totale
                        </div>
                        <h2 className="text-4xl font-bold mb-6">Automatisez votre <br/>apport solaire.</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Ne soyez jamais à court d'énergie. L'abonnement Model V est conçu pour s'intégrer à votre vie sans friction.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center">
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-orange-600" />
                                </div>
                                <p className="text-sm font-medium">Livraison mensuelle fraîche (J+1)</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                    <ArrowRight className="w-5 h-5 text-orange-600" />
                                </div>
                                <p className="text-sm font-medium">Mettre en pause ou annuler en 1 clic</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                    <Sun className="w-5 h-5 text-orange-600" />
                                </div>
                                <p className="text-sm font-medium">Accès prioritaire aux éditions limitées</p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Card Model V */}
                    <div className="w-full md:w-96 bg-black text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden border-2 border-orange-500/20">
                        <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-bl-xl">
                            Populaire
                        </div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">Abonnement Model V <Sun size={20} className="text-orange-500"/></h3>
                        <p className="text-gray-400 text-sm mb-8">Le standard quotidien</p>
                        
                        <div className="text-5xl font-bold mb-4">
                            35€ <span className="text-sm font-normal text-gray-500">/mois</span>
                        </div>
                        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-8">Soit 1.16€ par jour</p>

                        <ul className="space-y-4 mb-8 text-sm">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>30 x 250ml Shots (Format quotidien)</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>Origine Valencia Certifiée</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>Livraison gratuite incluse</li>
                        </ul>

                        <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase text-xs tracking-widest transition-colors rounded-lg shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40">
                            Démarrer l'abonnement
                        </button>
                        <p className="text-[10px] text-center text-gray-500 mt-4">Sans engagement. Satisfait ou remboursé.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
};

export default Home;