function Features() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 shadow-md rounded-xl hover:shadow-xl transition">
          <h3 className="font-bold text-lg mb-2">Modern Equipment</h3>
          <p className="text-gray-600">Advanced dental technology</p>
        </div>

        <div className="p-6 shadow-md rounded-xl hover:shadow-xl transition">
          <h3 className="font-bold text-lg mb-2">Expert Doctors</h3>
          <p className="text-gray-600">Highly trained professionals</p>
        </div>

        <div className="p-6 shadow-md rounded-xl hover:shadow-xl transition">
          <h3 className="font-bold text-lg mb-2">Comfort Care</h3>
          <p className="text-gray-600">Pain-free treatments</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
