// src/sections/About.jsx
const About = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image side */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-50 rounded-full z-0"></div>
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
            alt="Pranam Dental Clinic"
            className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-square md:aspect-auto h-[500px]"
          />
        </div>

        {/* Text side */}
        <div className="w-full md:w-1/2">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            About Our Clinic
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight text-slate-900">
            Setting New Standards in Professional Dental Care.
          </h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Located in the heart of Kannur, Pranam Dental Speciality Care Centre
            is dedicated to providing high-quality dental treatments with a
            focus on patient comfort and modern technology.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-tighter">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4.3★</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-tighter">
                Google Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
