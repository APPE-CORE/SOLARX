import React, { useEffect, useRef, useState } from 'react';

// On récupère la prop 'currentView' envoyée par App.jsx
const CustomCursor = ({ currentView }) => {
  const cursorRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const ease = 0.3;

  // --- LOGIQUE DE COULEUR DYNAMIQUE ---
  let themeColorClasses = '';
  
  if (currentView === 'model-s') {
      themeColorClasses = isHovering 
          ? 'border-rose-500 bg-rose-500/20 shadow-[0_0_15px_rgba(225,29,72,0.6)]' 
          : 'border-rose-500/80 bg-transparent shadow-[0_0_5px_rgba(225,29,72,0.3)]';
  } else if (currentView === 'home') {
      themeColorClasses = isHovering 
          ? 'border-orange-500 bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.6)]' 
          : 'border-orange-500/80 bg-transparent shadow-[0_0_5px_rgba(249,115,22,0.3)]';
  } else if (currentView === 'contact') {
      themeColorClasses = isHovering 
          ? 'border-violet-500 bg-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.6)]' 
          : 'border-violet-500/80 bg-transparent shadow-[0_0_5px_rgba(139,92,246,0.3)]';
  } else {
      themeColorClasses = isHovering 
          ? 'border-cyan-500 bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.6)]' 
          : 'border-cyan-500/80 bg-transparent shadow-[0_0_5px_rgba(6,182,212,0.3)]';
  }
  // ------------------------------------


  useEffect(() => {
    // Optimisation : Si on est sur mobile, on n'attache même pas les écouteurs d'événements
    // pour économiser les ressources.
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    const onMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      const target = e.target;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(isClickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const animate = () => {
        if (!cursorRef.current) return;
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
        requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      // MODIFICATION ICI : Ajout de 'hidden lg:block'
      // 'hidden' = display: none (mobile par défaut)
      // 'lg:block' = display: block (écrans > 1024px uniquement)
      className={`hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 transition-all duration-200 ease-out
        ${isHovering 
            ? 'w-12 h-12 -mt-6 -ml-6' 
            : 'w-6 h-6 -mt-3 -ml-3'
        }
        ${isClicking ? 'scale-75' : 'scale-100'}
        ${themeColorClasses}
      `}
      style={{willChange: 'transform'}} 
    ></div>
  );
};

export default CustomCursor;