import React from 'react';

function Projects() {
  const projects = [
    { title: 'E-Commerce App', desc: 'Built with React and Node.js.', link: '#' },
    { title: 'Portfolio Site', desc: 'This very site!', link: '#' },
    { title: 'AI Chatbot', desc: 'Integrated with OpenAI API.', link: '#' },
  ];
  
  return (
  <section className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold mb-6">Projects</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition"
        >
          <h4 className="text-lg font-bold mb-2">{project.title}</h4>
          <p className="text-gray-300 mb-4">{project.desc}</p>
          <a
            href={project.link}
            className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent underline hover:scale-105 transition-transform inline-block"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);
}

export default Projects;