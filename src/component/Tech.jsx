import React from 'react';
import vue from '../assets/img/Vue.js.png';
import tailwind from '../assets/img/Tailwind CSS.png';
import react from '../assets/img/React.png';
import python from '../assets/img/Python.png';
import figma from '../assets/img/Figma.png';
import bootstrap from '../assets/img/Bootstrap.png';
import nodejs from '../assets/img/Node Js.png';
import github from '../assets/img/github.png'

const icons = [
  { id: 1, name: 'Vue', icon: vue },
  { id: 2, name: 'Tailwind', icon: tailwind },
  { id: 3, name: 'React', icon: react },
  { id: 4, name: 'Python', icon: python },
  { id: 5, name: 'Figma', icon: figma },
  { id: 6, name: 'Bootstrap', icon: bootstrap },
  { id: 7, name: 'NodeJS', icon: nodejs },
  { id: 8, name: 'Github', icon: github}
];

const Tech = () => {
  return (
    <div className="text-black font-kronaOne mt-10 px-6">
      <div className="text-3xl sm:text-4xl mb-8 text-center md:text-left">
        Tech Stack
      </div>

      {/* Grid responsif */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {icons.map((item, i) => (
          <div
            key={item.id}
            className="floating flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
            style={{
              animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
            }}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-full h-full object-contain hover:scale-125 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Animasi */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Tech;
