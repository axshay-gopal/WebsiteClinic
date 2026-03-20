import { useState } from "react";
import Navbar from "./components/Navbar";
import BookingModal from "./components/BookingModal";
import WhatsappButton from "./components/WhatsappButton";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Services from "./sections/Services";
import About from "./sections/About";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      <Navbar onBookClick={toggleModal} />

      <main>
        <Hero onBookClick={toggleModal} />
        <Features />
        <Services />
        <About />
        <CTA onBookClick={toggleModal} />
        <Contact />
      </main>

      {/* Floating UI Elements */}
      <WhatsappButton />
      <BookingModal isOpen={isModalOpen} onClose={toggleModal} />

      <footer className="py-10 text-center border-t border-slate-100 text-slate-400 text-sm">
        <p>© 2026 Pranam Dental Speciality Care Centre. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
