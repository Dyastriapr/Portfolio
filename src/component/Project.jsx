import React, { useState, useEffect } from 'react';

const binaImg = "src/assets/img/BinaGnerasi.png";
const kidulImg = "src/assets/img/sisikidul.png";
const cdcImg = "src/assets/img/cdc.png";
const lppmImg = "src/assets/img/lppm.png";
const analisisImg = "src/assets/img/analisis_sentimen.png";
const uppksImg ="src/assets/img/Uppks.png"
const pcImg="src/assets/img/pc.png"
const convImg ="src/assets/img/konv.png"

export const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, title: 'Bina Generasi', description: 'Bina Generasi adalah Website Parenting...', image: binaImg, category: 'Website', link :"https://bina-generasi.vercel.app/" },
    { id: 2, title: 'Sisi Kidul', description: 'Website ini mendukung inisiatif Merdeka Belajar...', image: kidulImg, category: 'Website', link:"https://sisikidul-test1.vercel.app/" },
    { id: 3, title: 'Desain UI/UX LPPM IBIK', description: "Merancang UI dan UX untuk LPPM IBIK", image: lppmImg, category: 'UI/UX', link:"https://www.figma.com/design/14QZ8ED8gRnIDITHbBfyll/Desain-LPPM-IBIK" },
    { id: 4, title: 'Desain UI/UX CDC IBIK', description:'Merancang UI dan UX untuk CDC IBIK', image: cdcImg, category: 'UI/UX', link:"https://www.figma.com/design/X5E4kdH6NEYANvKu3DXh7c/Desain-CDC-IBIK" },
    { id: 6, title: 'Analisis Sentimen Menggunakan BERT', description: "Mengimplementasikan model AI berbasis BERT...", image: analisisImg, category: 'AI', link : "https://drive.google.com/file/d/13LnfSrvZSNG6XdzSKzxemiNdIQ2DBijY/view?usp=sharing" },
    { id: 7, title: 'UPPKS Matahari', description: "Membangun platform website informatif untuk UPPKS Matahari...", image: uppksImg, category: 'Website' },
    { id: 8, title: 'Aplikasi Filtering Pengolahan Citra', description: "Mengembangkan aplikasi web untuk filtering gambar...", image: pcImg, category: 'Website' },
    { id: 9, title: 'Konversi Format Skripsi ke Jurnal', description: "Menciptakan alat bantu konversi skripsi ke jurnal...", image: convImg, category: 'Website' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="px-4 sm:px-6 py-10 font-kronaOne text-black bg-white min-h-screen">
      {/* Judul */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        Project
      </h2>

      {/* Filter */}
      <div className="flex flex-wrap gap-3 md:gap-4 mb-8 justify-center md:justify-start">
        {['All', 'UI/UX', 'Website', 'AI'].map((filter) => (
          <button
            key={filter}
            className={`${activeFilter === filter ? 'bg-black text-white' : 'border border-black text-black'} px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200 hover:bg-gray-800 hover:text-white`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Card Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 md:h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-black text-white text-sm sm:text-base w-full py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                  >
                    VISIT
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full py-10 text-lg">
            Belum ada project untuk kategori ini.
          </p>
        )}
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Krona+One&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <Project />
    </div>
  );
}
