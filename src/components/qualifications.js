import React from 'react';

function Qualifications() {
  const qualifications = ['Bachelor of Science in Computer Science', 'Certified React Developer', 'AWS Certified'];
  
  return (
    <section className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg flex-1">
      <h3 className="text-xl font-semibold mb-4">Qualifications</h3>
      <ul className="list-disc list-inside text-gray-300">
        {qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
    </section>
  );
}

export default Qualifications;