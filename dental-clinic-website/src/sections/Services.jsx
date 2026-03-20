function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 transition">
          <h3 className="text-xl font-semibold mb-2">Teeth Cleaning</h3>
          <p className="text-gray-600">
            Professional cleaning for healthy and bright teeth.
          </p>
        </div>

        <div className="p-6 shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 transition">
          <h3 className="text-xl font-semibold mb-2">Dental Implants</h3>
          <p className="text-gray-600">
            Permanent solutions for missing teeth.
          </p>
        </div>

        <div className="p-6 shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 transition">
          <h3 className="text-xl font-semibold mb-2">Braces & Aligners</h3>
          <p className="text-gray-600">
            Straighten your smile with modern orthodontics.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
