import React, { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ModelS from './pages/ModelS.jsx';
import Technologie from './pages/Technologie.jsx';
import Contact from './pages/Contact.jsx'; // 👈 1. IMPORT
import CustomCursor from './components/CustomCursor.jsx';

const App = () => {
  const [currentView, setCurrentView] = useState('model-s');

  const navigateTo = (view) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  // --- LOGIQUE DE COULEUR DYNAMIQUE ---
  let selectionClass = '';
  if (currentView === 'model-s') {
    selectionClass = 'selection:bg-rose-500 selection:text-white';
  } else if (currentView === 'home') {
    selectionClass = 'selection:bg-orange-500 selection:text-white';
  } else if (currentView === 'contact') {
    selectionClass = 'selection:bg-violet-500 selection:text-white'; // 👈 2. COULEUR VIOLETTE
  } else {
    selectionClass = 'selection:bg-cyan-500 selection:text-black';
  }

  return (
    <div className={`bg-black text-white font-sans overflow-x-hidden min-h-screen ${selectionClass}`}>
      
      <CustomCursor currentView={currentView} />

      <Navbar currentView={currentView} onNavigate={navigateTo} />

      <main className="min-h-screen">
          {currentView === 'home' && <Home onNavigate={navigateTo} />}
          {currentView === 'model-s' && <ModelS onNavigate={navigateTo} />}
          {currentView === 'technologie' && <Technologie onNavigate={navigateTo} />}
          {currentView === 'contact' && <Contact />} {/* 👈 3. AFFICHAGE */}
      </main>

      <Footer currentView={currentView} onNavigate={navigateTo} />

    </div>
  );
};

export default App;