import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import BookingModal from "./components/BookingModal";
import WhatsAppButton from "./components/WhatsappButton";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans bg-[#f6f8fb] text-gray-800">
      <Navbar onBook={() => setOpen(true)} />
      <Hero onBook={() => setOpen(true)} />
      <Services />
      <Contact />

      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
