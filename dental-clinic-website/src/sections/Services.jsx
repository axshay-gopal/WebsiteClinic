// src/sections/Services.jsx
const services = [
  {
    title: "General Dentistry",
    desc: "Routine cleanings and preventive care for the whole family.",
  },
  {
    title: "Cosmetic Surgery",
    desc: "Whiter, brighter, and more aligned teeth with our veneers.",
  },
  {
    title: "Dental Implants",
    desc: "Permanent solutions for missing teeth using top-tier tech.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Specialized Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
