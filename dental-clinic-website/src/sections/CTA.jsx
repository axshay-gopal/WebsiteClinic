const CTA = ({ onBookClick }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-sky-200">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready for a Healthier Smile?
        </h2>
        <p className="text-sky-50 text-lg mb-10 max-w-2xl mx-auto">
          Join hundreds of happy patients at Pranam Dental. Book your
          consultation today and experience modern, gentle dental care.
        </p>
        <button
          onClick={onBookClick}
          className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-50 transition-colors"
        >
          Book Your Visit Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
