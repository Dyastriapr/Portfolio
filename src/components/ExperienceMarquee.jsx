import React from "react";

// Struktur data pengalaman yang detail
const experiences = [
  {
    title: "Front-End Developer",
    place: "Institut Bisnis dan Informatika Kesatuan",
    time: "Feb 2025 - Aug 2025",
    desc: "Memelihara antarmuka pengguna interaktif menggunakan Vue dan COREUI",
  },
  {
    title: "UI/UX Designer",
    place: "Institut Bisnis dan Informatika Kesatuan",
    time: " Feb 2025 - Aug 2025",
    desc: "Merancang wireframe, prototype, dan user flow di Figma untuk aplikasi web dan mobile.",
  },
  {
    title: "IT Support",
    place: "PT. Yudisthira Ghalia Indonesia",
    time: "Jan 2020 - Mar 2020",
    desc: "Fokus pada instalasi, konfigurasi, dan perbaikan sistem CCTV dan jaringan komputer.",
  },
];

export default function ExperienceMarquee() {
  const Card = ({ exp }) => (
    <div
      className={`
        flex-shrink-0 
        p-4 sm:p-5 // Padding responsif
        bg-white 
        text-black
        border border-gray-200 
        rounded-xl 
        shadow-md hover:shadow-lg transition-shadow
        min-w-[250px] md:min-w-[350px] lg:min-w-[400px] // Lebar card responsif
      `}
    >
      <h3 className="font-kronaOne 
        text-base sm:text-lg md:text-xl // Ukuran judul responsif
        mb-1 sm:mb-2 leading-tight">
        {exp.title}
      </h3>
      <p className="
        text-xs sm:text-sm // Ukuran meta responsif
        text-gray-700 mb-1 sm:mb-2">
        <span className="font-semibold">{exp.place}</span>
        {" • "}
        <span className="italic">{exp.time}</span>
      </p>
      <p className="
        text-xs sm:text-sm // Ukuran deskripsi responsif
        text-gray-600">
        {exp.desc}
      </p>
    </div>
  );

  return (
    <div className="relative w-full overflow-clip // Mencegah konten meluber keluar
      py-6 sm:py-8 // Padding vertikal responsif
      bg-white">
      
      {/* Container Marquee */}
      <div
        // Gunakan kelas animasi responsif
        className="flex whitespace-nowrap animate-marquee lg:animate-marquee-desktop hover:[animation-play-state:paused]"
      >
        {/* Track pertama */}
        <div className="flex 
          gap-4 sm:gap-8 // Jarak antar card responsif
          mr-4 sm:mr-8 // Margin kanan untuk jarak antar track
          ">
          {experiences.map((exp, i) => (
            <Card key={i} exp={exp} />
          ))}
        </div>

        {/* Track duplikat supaya looping mulus */}
        <div className="flex 
          gap-4 sm:gap-8 // Jarak antar card responsif
          ">
          {experiences.map((exp, i) => (
            <Card key={`dup-${i}`} exp={exp} />
          ))}
        </div>
      </div>
      
      {/* Efek Gradient Overlay Kiri */}
      <div 
        className="absolute top-0 left-0 
        w-10 sm:w-20 // Lebar gradien responsif
        h-full z-10 
        bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"
      />
      
      {/* Efek Gradient Overlay Kanan */}
      <div 
        className="absolute top-0 right-0 
        w-10 sm:w-20 // Lebar gradien responsif
        h-full z-10 
        bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none"
      />

    </div>
  );
}