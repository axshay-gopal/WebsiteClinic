export default function Hero({ onBookClick }) {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Painless Care for a{" "}
            <span className="text-primary">Perfect Smile.</span>
          </h1>
          <p className="text-slate-500 text-lg mb-8 max-w-lg">
            At Pranam Dental, we combine advanced technology with a gentle touch
            to give you the best dental experience in Kannur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={onBookClick}
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-sky-100 hover:-translate-y-1 transition"
            >
              Book Appointment
            </button>
            <a
              href="#services"
              className="px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition text-center"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="flex-1 w-full h-[400px] md:h-[600px] bg-slate-100 rounded-[3rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Clinic Interior"
          />
        </div>
      </div>
    </section>
  );
}
