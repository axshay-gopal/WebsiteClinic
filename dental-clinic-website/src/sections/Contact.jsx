function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-[#f6f8fb]">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Visit Our Clinic
      </h2>

      <p className="text-center text-gray-500 mb-6">
        Easily find us using Google Maps
      </p>

      <div className="text-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Pranam+Dental+Clinic"
          target="_blank"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          📍 Open in Google Maps
        </a>
      </div>
    </section>
  );
}

export default Contact;
