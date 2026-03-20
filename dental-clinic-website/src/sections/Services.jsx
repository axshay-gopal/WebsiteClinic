function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-14">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-200 hover:shadow-md transition">
          <h3 className="text-lg font-medium mb-3">🦷 Teeth Cleaning</h3>
          <p className="text-gray-500">Professional oral hygiene care</p>
        </div>

        <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-200 hover:shadow-md transition">
          <h3 className="text-lg font-medium mb-3">🪥 Implants</h3>
          <p className="text-gray-500">Permanent tooth replacement</p>
        </div>

        <div className="bg-[#f9fafb] p-8 rounded-2xl border border-gray-200 hover:shadow-md transition">
          <h3 className="text-lg font-medium mb-3">😁 Braces</h3>
          <p className="text-gray-500">Smile alignment solutions</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
