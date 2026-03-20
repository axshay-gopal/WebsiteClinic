function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-24 bg-gradient-to-r from-blue-50 to-white">
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          Your Smile, Our Priority
        </h1>

        <p className="text-gray-600 mb-6 text-lg">
          Modern dental care with advanced technology and expert doctors in K.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition">
          Book Appointment
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
          alt="Dental Clinic"
          className="w-2/3 md:w-3/4 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
