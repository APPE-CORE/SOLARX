import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  // --- INPUT FLOTTANT ---
  const FloatingInput = ({ label, type = "text", id, required = true }) => (
    <div className="relative group w-full">
      <input 
        type={type} 
        id={id} 
        required={required}
        placeholder=" "
        className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-5 pb-3 text-white outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-200 placeholder-shown:pt-4"
      />
      <label 
        htmlFor={id}
        className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-200 pointer-events-none 
        peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-violet-400 peer-focus:bg-[#050505] peer-focus:px-1 font-medium
        peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-violet-400 peer-[:not(:placeholder-shown)]:bg-[#050505] peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:font-medium"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 animate-fade-in bg-[#050505] flex items-center relative overflow-hidden">
        
        {/* Background subtil (Noise) */}
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* 1. COLONNE GAUCHE : INFOS */}
            <div className="space-y-10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-widest rounded mb-6 border border-violet-500/20">
                        <MessageSquare size={14}/> Canal Direct
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
                        Fréquence <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500">Ouverte.</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        Notre équipe scientifique et logistique répond aux demandes complexes. Pas de bot. De vrais humains basés à Paris.
                    </p>
                </div>
                 <div className="space-y-6 border-t border-white/10 pt-8">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-violet-500/50 transition-colors">
                            <Mail className="text-violet-400" size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Email Prioritaire</h4>
                            <p className="text-gray-500 text-sm font-mono">lab@solarx.io</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-violet-500/50 transition-colors">
                            <Clock className="text-violet-400" size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-1">Temps de Réponse</h4>
                            <p className="text-gray-500 text-sm flex items-center gap-2">
                                &lt; 4h ouvrées <span className="flex w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. COLONNE DROITE : LE FORMULAIRE "COMÈTE" AMÉLIORÉ */}
            <div className="relative w-full rounded-2xl z-0 group">
                
                {/* --- NOUVELLE LUEUR D'AMBIANCE DIFFUSE (DERRIÈRE) --- */}
                {/* - z-negative : Place cet élément derrière tout le reste.
                   - blur-3xl : Crée un flou très large pour une lumière diffuse.
                   - opacity-40 : Règle l'intensité pour créer un contraste fort avec l'animation nette.
                   - group-hover:opacity-40 : Apparaît au survol.
                */}
                <div className="absolute inset-0 bg-violet-500/40 blur-3xl -z-20 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>

                {/* --- COUCHE D'ANIMATION (Le trait lumineux net) --- */}
                {/* - -inset-[4px] : Le trait est plus épais (4px).
                   - Le dégradé est inversé pour que la tête blanche soit le début (360deg) et que la traînée violette soit derrière.
                   - #ffffff_360deg : Tête blanche éclatante.
                   - #d946ef_340deg : Début de la traînée fuchsia.
                   - transparent_270deg : La traînée s'estompe complètement.
                   - transparent_0deg : Reste transparent jusqu'à la tête.
                */}
                <div className="absolute -inset-[4px] rounded-2xl overflow-hidden -z-10">
                    <div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#d946ef_340deg,#ffffff_360deg)] opacity-100"></div>
                </div>
                
                {/* --- LE CONTENU (FORMULAIRE LIQUIDE GLACE OPAQUE) --- */}
                <div className="relative h-full w-full bg-[#0a0a0a] backdrop-blur-2xl rounded-2xl p-8 lg:p-10 z-10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(139,92,246,0.05)]">
                    
                    {/* Loader Overlay */}
                    {formState === 'submitting' && (
                        <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center animate-fade-in rounded-2xl">
                            <div className="w-10 h-10 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-violet-400 font-mono text-sm tracking-widest animate-pulse">ENVOI SÉCURISÉ...</p>
                        </div>
                    )}

                    {/* Success State */}
                    {formState === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-8 animate-fade-in">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 border border-green-500/20">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Transmission Reçue.</h3>
                            <p className="text-gray-400 mb-8 text-sm">Votre ticket a été créé avec succès.</p>
                            <button 
                                onClick={() => setFormState('idle')}
                                className="text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors text-sm"
                            >
                                Fermer
                            </button>
                        </div>
                    ) : (
                        /* Formulaire */
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <FloatingInput id="prenom" label="Prénom" />
                                <FloatingInput id="nom" label="Nom" />
                            </div>
                            
                            <FloatingInput id="email" label="Email Professionnel" type="email" />
                            
                            <div className="relative group w-full">
                                 <select id="sujet" className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-5 pb-3 text-white outline-none focus:border-violet-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                                    <option className="bg-neutral-900">Sujet : Question Scientifique</option>
                                    <option className="bg-neutral-900">Sujet : Suivi de Commande</option>
                                    <option className="bg-neutral-900">Sujet : Partenariat B2B</option>
                                 </select>
                                 <label className="absolute left-4 top-1 text-xs text-violet-400 font-medium pointer-events-none">Objet</label>
                                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <ArrowRight size={18} className="rotate-90"/>
                                 </div>
                            </div>

                            <div className="relative group w-full">
                                <textarea 
                                    id="message" 
                                    required
                                    rows="4"
                                    placeholder=" "
                                    className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-5 pb-3 text-white outline-none focus:border-violet-500 focus:bg-white/10 transition-all resize-none placeholder-shown:pt-4"
                                ></textarea>
                                <label 
                                    htmlFor="message"
                                    className="absolute left-4 top-4 text-gray-400 text-sm transition-all duration-200 pointer-events-none 
                                    peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-violet-400 peer-focus:bg-[#050505] peer-focus:px-1 font-medium
                                    peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-violet-400 peer-[:not(:placeholder-shown)]:bg-[#050505] peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:font-medium"
                                >
                                    Votre Message <span className="text-rose-500">*</span>
                                </label>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-violet-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Transmettre la Demande <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-2">
                                Connexion SSL Chiffrée.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;