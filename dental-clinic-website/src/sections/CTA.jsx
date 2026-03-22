const CTA = ({ onBookClick }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto  rounded-[3rem] p-12 text-center text-slate-900">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
          Ready for a Healthier Smile?
        </h2>
        <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
          Join hundreds of happy patients at Pranam Dental.
        </p>
        <button
          onClick={onBookClick}
          className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all"
        >
          Book Your Visit Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
