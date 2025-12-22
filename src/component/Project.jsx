import React, { useState } from 'react';

// IMPORT GAMBAR
import binaImg from '../assets/img/BinaGnerasi.png';
import kidulImg from '../assets/img/sisikidul.png';
import cdcImg from '../assets/img/cdc.png';
import lppmImg from '../assets/img/lppm.png';
import analisisImg from '../assets/img/analisis_sentimen.png';
import uppksImg from '../assets/img/Uppks.png';
import pcImg from '../assets/img/pc.png';
import convImg from '../assets/img/konv.png';

export const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // DATA PROJECT LENGKAP DENGAN TECH STACK
  const projects = [
    { 
      id: 1, 
      title: 'Bina Generasi', 
      description: 'Bina Generasi adalah Website Parenting yang memberikan edukasi tumbuh kembang anak.', 
      image: binaImg, 
      category: 'Website', 
      tech: ['React', 'Tailwind', 'Vercel'],
      link: "https://bina-generasi.vercel.app/" 
    },
    { 
      id: 2, 
      title: 'Sisi Kidul', 
      description: 'Website pendukung inisiatif Merdeka Belajar untuk pemetaan pendidikan di daerah.', 
      image: kidulImg, 
      category: 'Website', 
      tech: ['NextJS', 'Tailwind', 'Lucide'],
      link: "https://sisikidul-test1.vercel.app/" 
    },
    { 
      id: 3, 
      title: 'Desain UI/UX LPPM IBIK', 
      description: "Perancangan antarmuka sistem informasi penelitian dan pengabdian masyarakat.", 
      image: lppmImg, 
      category: 'UI/UX', 
      tech: ['Figma', 'Prototyping', 'UI Design'],
      link: "https://www.figma.com/design/14QZ8ED8gRnIDITHbBfyll/Desain-LPPM-IBIK" 
    },
    { 
      id: 4, 
      title: 'Desain UI/UX CDC IBIK', 
      description: 'Perancangan desain dashboard untuk Career Development Center kampus.', 
      image: cdcImg, 
      category: 'UI/UX', 
      tech: ['Figma', 'User Flow', 'Design System'],
      link: "https://www.figma.com/design/X5E4kdH6NEYANvKu3DXh7c/Desain-CDC-IBIK" 
    },
    { 
      id: 5, 
      title: 'Analisis Sentimen BERT', 
      description: "Implementasi AI menggunakan model BERT untuk klasifikasi opini publik.", 
      image: analisisImg, 
      category: 'AI', 
      tech: ['Python', 'PyTorch', 'BERT'],
      link: "https://drive.google.com/file/d/13LnfSrvZSNG6XdzSKzxemiNdIQ2DBijY/view?usp=sharing" 
    },
    { 
      id: 6, 
      title: 'UPPKS Matahari', 
      description: "Platform informasi digital untuk mendukung UMKM dan kelompok UPPKS.", 
      image: uppksImg, 
      category: 'Website', 
      tech: ['HTML', 'Bootstrap', 'JS'],
      link: null 
    },
    { 
      id: 7, 
      title: 'Filtering Citra Digital', 
      description: "Aplikasi pengolahan citra untuk manipulasi filter gambar secara real-time.", 
      image: pcImg, 
      category: 'Website', 
      tech: ['React', 'Canvas API', 'CSS'],
      link: null 
    },
    { 
      id: 8, 
      title: 'Konversi Skripsi ke Jurnal', 
      description: "Tool otomatisasi untuk merapikan format dokumen skripsi menjadi template jurnal.", 
      image: convImg, 
      category: 'Website', 
      tech: ['PHP', 'Laravel', 'MySQL'],
      link: null 
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="px-4 sm:px-6 py-16 font-kronaOne text-black bg-white min-h-screen container mx-auto flex flex-col items-center">
      
      {/* JUDUL */}
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center uppercase tracking-tighter">
        Projects
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-16 justify-center">
        {['All', 'UI/UX', 'Website', 'AI'].map((filter) => (
          <button
            key={filter}
            className={`${
              activeFilter === filter 
                ? 'bg-black text-white' 
                : 'border border-gray-300 text-gray-500 hover:border-black hover:text-black'
            } px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-widest`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* GRID PROJECT - 3 KOLOM DI DESKTOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-items-center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col w-full max-w-[420px]"
            >
              {/* IMAGE SECTION */}
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold px-4 py-1.5 rounded-full uppercase shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK LABELS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] bg-gray-50 border border-gray-100 text-gray-400 px-3 py-1 rounded-md font-bold uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-auto flex gap-3">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-black text-white text-[10px] font-bold py-4 rounded-2xl hover:bg-gray-800 transition-all uppercase tracking-[0.2em]"
                    >
                      Visit
                    </a>
                  ) : (
                    <button className="flex-1 bg-gray-100 text-gray-400 text-[10px] font-bold py-4 rounded-2xl cursor-not-allowed uppercase">
                      No Link
                    </button>
                  )}
                  
                  <button 
                    className="flex-1 text-center border-2 border-black text-black text-[10px] font-bold py-4 rounded-2xl hover:bg-black hover:text-white transition-all uppercase tracking-[0.2em]"
                    onClick={() => alert(`Showing details for: ${project.title}`)}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-400 italic text-lg tracking-widest">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;