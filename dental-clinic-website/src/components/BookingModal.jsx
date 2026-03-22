import { X } from "lucide-react";
import { useState } from "react";

const BookingModal = ({ isOpen, onClose }) => {
  // 1. Create state to capture form data
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    date: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Format the WhatsApp message
    const clinicNumber = "9447203305"; // Pranam Dental Number
    const message =
      `Hello Pranam Dental! I would like to book an appointment.%0A%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Preferred Date:* ${formData.date}`;

    // 3. Open WhatsApp link
    window.open(`https://wa.me/${clinicNumber}?text=${message}`, "_blank");

    onClose(); // Close modal after redirect
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-orange-500 transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-1">Book a Visit</h2>
        <p className="text-slate-500 mb-6 text-sm">
          Send your details via WhatsApp for quick confirmation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
              Service Required
            </label>
            <select
              name="service"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50"
            >
              <option value="">Select a service...</option>
              <option value="General Checkup">General Dentistry</option>
              <option value="Teeth Whitening">
                Oral and Maxillofacial Surgery.
              </option>
              <option value="Braces & Orthodontics">Orthodontics</option>
              <option value="Dental Implants">Pediatric Dentistry</option>
              <option value="Implantology">Implantology</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                required
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
                Date
              </label>
              <input
                name="date"
                type="date"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-100 mt-2"
          >
            Confirm & Send WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
