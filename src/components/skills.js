import React from 'react';

function Skills() {
  const skills = ['React', 'Laravel', 'Tailwind CSS', 'Node.js',];
  
  return (
    <section className="p-6 bg-white bg-opacity-10 rounded-lg shadow-lg flex-1">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      <ul className="list-disc list-inside text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;