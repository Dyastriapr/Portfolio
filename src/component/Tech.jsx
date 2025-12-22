import React from 'react';
import vue from '../assets/img/Vue.js.png';
import tailwind from '../assets/img/Tailwind CSS.png';
import react from '../assets/img/React.png';
import python from '../assets/img/Python.png';
import figma from '../assets/img/Figma.png';
import bootstrap from '../assets/img/Bootstrap.png';
import nodejs from '../assets/img/nodejs.png';
import github from '../assets/img/github.png';
import nextjs from '../assets/img/nextjs.png';
import laravel from '../assets/img/laravel.png';
import mysql from '../assets/img/mysql.png';
import mongo from '../assets/img/mongoDB.png';
import postman from '../assets/img/postman.png';
import canva from '../assets/img/canva.png';
import trelo from '../assets/img/trelo.png';

const Tech = () => {
  const techStack = {
    Frontend: [
      { name: 'Next JS', icon: nextjs },
      { name: 'React', icon: react },
      { name: 'Vue', icon: vue },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Bootstrap', icon: bootstrap },
    ],
    Backend: [
      { name: 'Laravel', icon: laravel },
      { name: 'NodeJS', icon: nodejs },
      
       { name: 'Next JS', icon: nextjs },
    ],
    Database: [
      { name: 'MySQL', icon: mysql },
      { name: 'Mongo DB', icon: mongo },
    ],
    Others: [
      { name: 'Figma', icon: figma },
      { name: 'Github', icon: github },
      { name: 'Python', icon: python },
      { name: 'Postman', icon: postman },
      { name: 'Canva', icon: canva },
      { name: 'Trello', icon: trelo },  

    ],
  };

  return (
    <div className="py-6 md:px-10 w-full font-kronaOne text-black container mx-auto">
      
      <h2 className="text-xl md:text-3xl  font-extrabold text-center mb-10 uppercase">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {Object.entries(techStack).map(([category, items]) => (
          <div 
            key={category} 
            className="bg-white border-2 border-gray-100 rounded-3xl p-4 md:p-6 shadow-md flex flex-col items-start basis-[calc(50%-1rem)] md:basis-auto md:min-w-[300px] md:max-w-[350px]"
          >
            {/* Nama Kategori */}
            <h3 className="text-[10px] md:text-lg font-bold text-black uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 md:mb-8 border-b-2 border-gray-50 w-full text-left pb-3 md:pb-4">
              {category}
            </h3>

            {/* List Icon */}
            <div className="flex flex-wrap justify-start gap-3 md:gap-8">
              {items.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center group">
                  {/* Ikon Container */}
                  <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      /* DI SINI KUNCINYA:
                         - grayscale: membuat gambar hitam putih secara default
                         - group-hover:grayscale-0: mengembalikan warna saat card/ikon di-hover
                         - transition & duration: agar transisi warna halus
                      */
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {/* Label */}
                  <span className="text-[7px] md:text-xs mt-2 md:mt-3 font-semibold text-gray-400 group-hover:text-gray-700 transition-colors duration-500 uppercase text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;