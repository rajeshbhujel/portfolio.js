import React from 'react';

const Projects = () => {
  const projectList = [
    { title: 'Portfolio Website', description: 'Built with React and TailwindCSS.' },
    { title: 'Reverse-Aid Parking System', description: 'Django-based IoT web app.' },
    { title: 'CCNA Packet Tracer Config', description: 'Simulated campus network.' },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
