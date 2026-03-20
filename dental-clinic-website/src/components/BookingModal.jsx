function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Book Appointment
        </h2>

        <form className="flex flex-col gap-4">
          <input
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Name"
          />
          <input
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Email"
          />
          <input
            type="date"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
