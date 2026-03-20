import { ShieldCheck, Zap, HeartPulse, Microscope } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck />,
    title: "Certified Experts",
    desc: "Our team consists of highly qualified dental specialists.",
  },
  {
    icon: <Zap />,
    title: "Modern Tech",
    desc: "We use the latest digital imaging and painless laser tech.",
  },
  {
    icon: <Microscope />,
    title: "Precision Care",
    desc: "Detailed diagnostics for long-lasting dental health.",
  },
  {
    icon: <HeartPulse />,
    title: "Patient Comfort",
    desc: "A relaxing environment designed to reduce anxiety.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 border-y border-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="text-primary mb-4 p-3 bg-sky-50 rounded-2xl">
              {f.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
