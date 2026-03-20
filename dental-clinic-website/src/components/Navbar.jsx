function Navbar({ onBook }) {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white border-b border-gray-200 fixed w-full z-50">
      <h1 className="text-xl font-semibold">SmileCare</h1>

      <div className="flex gap-6 items-center text-sm">
        <a href="#home" className="text-gray-600 hover:text-black">
          Home
        </a>
        <a href="#services" className="text-gray-600 hover:text-black">
          Services
        </a>
        <a href="#contact" className="text-gray-600 hover:text-black">
          Contact
        </a>

        <button
          onClick={onBook}
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
