function About() {
  return (
    <section className="py-20 px-6 md:px-16 bg-blue-50 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://motherdentalhospital.in/wp-content/uploads/2024/07/dental-hospitals.webp"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="md:w-1/2 md:pl-10">
        <h2 className="text-3xl font-bold mb-4">About Our Clinic</h2>

        <p className="text-gray-600 mb-4">
          We provide high-quality dental care with modern technology and a
          patient-first approach.
        </p>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default About;
