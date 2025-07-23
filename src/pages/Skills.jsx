import React from 'react';

const Skills = () => {
  const skills = ["React", "Tailwind CSS", "Django", "Python", "HTML/CSS", "Cisco Packet Tracer"];

  return (
    <section id="skills" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-blue-50 p-4 rounded shadow hover:bg-blue-100 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
