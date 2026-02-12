import React, { useState, useEffect } from 'react';

// IMPORT GAMBAR
import binaImg from '../assets/img/BinaGnerasi.png';
import kidulImg from '../assets/img/sisikidul.png';
import cdcImg from '../assets/img/cdc.png';
import lppmImg from '../assets/img/lppm.png';
import analisisImg from '../assets/img/analisis_sentimen.png';
import uppksImg from '../assets/img/Uppks.png';
import pcImg from '../assets/img/pc.png';
import convImg from '../assets/img/konv.png';
import designImg from '../assets/img/desain.png';

export const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Efek untuk mendeteksi ukuran layar (Responsif See More)
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; 
      setIsMobile(mobile);
      setVisibleCount(mobile ? 4 : 8);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
  }, [selectedProject]);

  const projects = [
    { 
      id: 1, 
      title: 'Bina Generasi', 
      category: 'Website', 
      description: 'Bina Generasi adalah Website Parenting yang memberikan edukasi tumbuh kembang anak secara komprehensif. Dilengkapi dengan fitur tracking perkembangan anak dan artikel kesehatan.', 
      image: [binaImg, kidulImg], 
      tech: ['React', 'Tailwind', 'Vercel'], 
      link: "https://bina-generasi.vercel.app/" 
    },
    { 
      id: 2, 
      title: 'Sisi Kidul', 
      category: 'Website', 
      description: 'Website pendukung inisiatif Merdeka Belajar untuk pemetaan pendidikan di daerah tertinggal.', 
      image: [kidulImg, binaImg], 
      tech: ['React', 'Tailwind'], 
      link: "https://sisikidul-test1.vercel.app/" 
    },
    { 
      id: 3, 
      title: 'UI/UX LPPM IBIK', 
      category: 'Design or UI/UX', 
      description: "Perancangan antarmuka sistem informasi penelitian dan pengabdian masyarakat untuk dosen.", 
      image: [lppmImg], 
      tech: ['Figma'], 
      link: "https://www.figma.com/design/14QZ8ED8gRnIDITHbBfyll/Desain-LPPM-IBIK?m=auto&t=oB321F7C4dG8bSpy-6" 
    },
    { 
      id: 4, 
      title: 'UI/UX CDC IBIK', 
      category: 'Design or UI/UX', 
      description: 'Dashboard Career Development Center guna memantau alumni dan peluang kerja.', 
      image: [cdcImg], 
      tech: ['Figma'], 
      link: "https://www.figma.com/design/X5E4kdH6NEYANvKu3DXh7c/Desain-CDC-IBIK?m=auto&t=oB321F7C4dG8bSpy-6" 
    },
    { 
      id: 5, 
      title: 'Analisis Sentimen BERT', 
      category: 'AI', 
      description: "Implementasi AI menggunakan model BERT untuk klasifikasi opini publik pada media sosial.", 
      image: [analisisImg], 
      tech: ['Python', 'BERT'], 
      link: "https://drive.google.com" 
    },
    { 
      id: 6, 
      title: 'UPPKS Matahari', 
      category: 'Website', 
      description: "Platform informasi digital untuk mendukung UMKM dan kelompok UPPKS.", 
      image: [uppksImg], 
      tech: ['HTML', 'Bootstrap', 'Laravel', 'MySQL'], 
      link: null 
    },
    { 
      id: 7, 
      title: 'Filtering Citra Digital', 
      category: 'Website', 
      description: "Aplikasi pengolahan citra untuk manipulasi filter gambar secara real-time.", 
      image: [pcImg], 
      tech: ['Python', 'Flask'], 
      link: null 
    },
    { 
      id: 8, 
      title: 'Konversi Jurnal', 
      category: 'Website', 
      description: "Tool otomatisasi untuk merapikan format dokumen skripsi menjadi template jurnal.", 
      image: [convImg], 
      tech: ['Python', 'Text Summarization'], 
      link: null 
    },
     { 
      id: 9, 
      title: 'Project Design', 
      category: 'Design or UI/UX', 
      description: "Semua Desain Poster yang pernah saya buat", 
      image: [designImg], 
      tech: ['Figma', 'Canva'], 
      link: "https://www.figma.com/design/CODIjrHYbFn89D8DPZgN37/Poster?node-id=0-1&t=g2tTGgla3FAHWQEe-1" 
    },
  ];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + (isMobile ? 4 : 8));
  };

  const nextSlide = () => setCurrentImgIndex((prev) => (prev === selectedProject.image.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.image.length - 1 : prev - 1));

  return (
    <div className="px-4 py-12 font-kronaOne text-black bg-white min-h-screen container mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-black mb-14 text-center uppercase tracking-tighter">Projects</h2>

        {/* FILTER */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {['All', 'Design or UI/UX', 'Website', 'AI'].map((filter) => (
            <button
              key={filter}
              className={`${activeFilter === filter ? 'bg-black text-white' : 'bg-gray-50 text-gray-400 hover:text-black'} px-5 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase transition-all duration-300`}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(isMobile ? 4 : 8);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full justify-items-center">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group bg-white border-[4px] border-gray-50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 w-full flex flex-col max-w-[340px]">
              <div className="relative h-52 md:h-60 bg-gray-100 overflow-hidden">
                <img src={project.image[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out" alt={project.title} />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest">{project.category}</span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-base md:text-lg font-black mb-3 uppercase leading-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-6 uppercase">
                  {project.tech.map(t => <span key={t} className="text-[8px] md:text-[9px] text-gray-300 font-bold">#{t}</span>)}
                </div>
                <div className="mt-auto flex gap-3">
                  <button onClick={() => { setSelectedProject(project); setCurrentImgIndex(0); }} className="flex-1 border-2 border-black py-2.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase hover:bg-black hover:text-white transition-all duration-500">Detail</button>
                  {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 bg-black text-white text-center py-2.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase hover:bg-gray-800 transition-all shadow-lg">Visit</a>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE */}
        {visibleCount < filteredProjects.length && (
          <button 
            onClick={handleSeeMore} 
            className="mt-16 border-b-2 border-black pb-1 text-xs font-black uppercase hover:text-gray-400 transition-all"
          >
            Explore More
          </button>
        )}
      </div>

      {/* FULLSCREEN DETAIL VIEW */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex flex-col md:flex-row bg-white animate-in slide-in-from-bottom duration-500 overflow-y-auto md:overflow-hidden">
          {/* Tombol Close */}
          <button 
            onClick={() => setSelectedProject(null)} 
            className="fixed top-4 right-4 md:top-8 md:right-8 z-[110] bg-black text-white w-10 h-10 md:w-14 md:h-14 rounded-full font-bold flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            ✕
          </button>

          {/* SISI KANAN (MOBILE: ATAS): CAROUSEL GAMBAR (60%) */}
          <div className="w-full md:w-[60%] h-[45vh] md:h-screen bg-gray-50 relative group flex items-center justify-center overflow-hidden order-1 md:order-2">
            <img 
              src={selectedProject.image[currentImgIndex]} 
              className="max-w-full max-h-full object-contain p-4 transition-all duration-700 ease-in-out" 
              alt="slide" 
            />

            {selectedProject.image.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/10 text-white w-10 h-10 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-all">❮</button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/10 text-white w-10 h-10 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-all">❯</button>
                
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4">
                  {selectedProject.image.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentImgIndex(idx)} 
                      className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${idx === currentImgIndex ? 'bg-black w-8 md:w-16' : 'bg-black/20 w-3'}`} 
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* SISI KIRI (MOBILE: BAWAH): DESKRIPSI & TECH (40%) */}
          <div className="w-full md:w-[40%] p-6 py-10 md:p-20 flex flex-col justify-center bg-white order-2 md:order-1 border-l border-gray-100">
            <div className="max-w-xl mx-auto md:mx-0">
              <span className="text-[9px] md:text-[11px] font-black uppercase mb-2 tracking-[0.4em] text-gray-400 block">{selectedProject.category}</span>
              <h3 className="text-3xl md:text-6xl font-black mb-4 md:mb-8 uppercase leading-[0.9] tracking-tighter">{selectedProject.title}</h3>
              <p className="text-gray-500 text-sm md:text-lg mb-6 leading-relaxed font-sans font-medium">{selectedProject.description}</p>
              
              {/* TECH STACK DI DETAIL */}
              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.tech.map(t => (
                  <span 
                    key={t} 
                    className="bg-gray-100 border border-gray-200 px-4 py-1.5 rounded-lg text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-block bg-black text-white py-4 px-10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all w-full md:w-auto text-center shadow-xl"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};