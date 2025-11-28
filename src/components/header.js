

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-black bg-opacity-20">
      <button className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
        Akeh.
        </button>

      <div className="flex space-x-6 mt-4">
  {/* Email */}
  <a
    href="mailto:teniojohnraymart@gmail.com"
    className="text-gray-300 hover:text-pink-500 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8"
      />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/johnraymart.tenio.73"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-blue-600 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.5 0-1 .5-1 1v1h3l-.5 3h-2.5v7A10 10 0 0022 12z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/akehhhhhh"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-pink-500 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </svg>
  </a>
</div>

    </header>
  );
}

export default Header;