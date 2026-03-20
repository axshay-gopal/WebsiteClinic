function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">
        Pranam Dental Speciality Care Centre
      </h1>

      <div className="flex gap-6 items-center">
        <a href="#home" className="cursor-pointer">
          Home
        </a>
        <a href="#services" className="cursor-pointer">
          Services
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
