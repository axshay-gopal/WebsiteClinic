function Hero({ onBook }) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 bg-[#f6f8fb]"
    >
      <div className="md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
          Modern Dental Care <br /> Designed for You
        </h1>

        <p className="text-gray-500 mb-8 text-lg">
          Comfortable, advanced, and reliable dental treatments in Kochi.
        </p>

        <div className="flex gap-4">
          <button
            onClick={onBook}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Pranam+Dental+Clinic"
            target="_blank"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            View Location
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
          className="rounded-2xl shadow-lg w-3/4"
        />
      </div>
    </section>
  );
}

export default Hero;
