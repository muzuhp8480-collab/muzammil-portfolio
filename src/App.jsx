import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import BookCallModal from './components/BookCallModal';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = (e) => {
    if (e) e.preventDefault();
    const workSection = document.getElementById('projects');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#03140e] text-[#f1f7f4] selection:bg-[#00f59b] selection:text-[#03140e]">
      {/* Top Floating Header matching reference */}
      <Navbar 
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. HERO matching Reference Design exactly with Muzammil in Maroon Shirt & Sunglasses */}
        <Hero
          onOpenContact={handleOpenContact}
          onExploreWork={handleExploreWork}
        />

        {/* 2. ABOUT ME: A Little About Me */}
        <About onOpenContact={handleOpenContact} />

        {/* 3. SERVICES: What I Do */}
        <Services onOpenContact={handleOpenContact} />

        {/* 4. SKILLS: What I Work With */}
        <Skills />

        {/* 5. PROJECTS: Things I've Created with Real Video Playback */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. RESULTS: What I Focus On */}
        <Results />

        {/* 7. TESTIMONIALS: What People Say */}
        <Testimonials />

        {/* 8. WHY WORK WITH ME: AI + Creativity + Marketing */}
        <WhyWorkWithMe onOpenContact={handleOpenContact} />

        {/* 9. CONTACT: Let's Create Something */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Sleek Dark Emerald Footer */}
      <Footer />

      {/* Project Video & Case Study Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={() => {
            setSelectedProject(null);
            handleOpenContact();
          }}
        />
      )}

      {/* Book a Strategy Call Interactive Modal */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        onShowToast={showToast}
      />

      {/* Interactive Toast Notifications */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
