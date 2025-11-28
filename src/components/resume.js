import React from 'react';

function Resume() {
  return (
    <section className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg flex-1">
      <h3 className="text-xl font-semibold mb-4">Resume</h3>
      <p className="text-gray-300">
  Download my full resume:{" "}
  <a
    href="#"
    className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent underline"
  >
    Resume.pdf
  </a>
</p>
      <p className="mt-4">Experience: Part of PANTAS digital library system development on internship time.</p>
    </section>
  );
}

export default Resume;