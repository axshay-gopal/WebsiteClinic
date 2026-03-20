export default function Navbar({ onBookClick }) {
  return (
    <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-primary">
          PRANAM
          <span className="text-slate-700 font-medium italic">DENTAL</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-primary transition">
            Services
          </a>
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>
        <button
          onClick={onBookClick}
          className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-sky-200 transition"
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
