function Contact() {
  return (
    <section className="py-20 px-6 md:px-16 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Book an Appointment
      </h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded"
        />

        <input type="date" className="p-3 border rounded" />

        <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
