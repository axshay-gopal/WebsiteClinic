export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-white p-10 rounded-[2rem] shadow-sm">
          <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-slate-800">Address</p>
              <p className="text-slate-500">
                Yogasala Rd, Talap, Kannur, Kerala 670001
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-800">Call Us</p>
              <p className="text-slate-500">0497 270 0271</p>
            </div>
            <div>
              <p className="font-bold text-slate-800">Hours</p>
              <p className="text-slate-500 italic text-sm">
                Mon-SUN: 10am - 10PM | Sun: 10am - 1pm
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] overflow-hidden h-[400px] border-4 border-white shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.594770806443!2d75.36746971481084!3d11.870335891584854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba43d378c3bd5fd%3A0xa3e30bc355b3c715!2sPranam%20Dental%20Speciality%20Care%20Centre!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
            className="w-full h-full grayscale"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
