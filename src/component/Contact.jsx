import React from 'react';

// IMPORT ASSETS
import imgWA from '../assets/img/whatsap.png'; 
import imgIg from '../assets/img/instagramm.png';
import imgMail from '../assets/img/maill.png';
import imgIn from '../assets/img/linkedin.png'; 

export const Contact = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: imgWA,
      link: 'https://wa.me/6283879631235',
      label: 'Chat'
    },
    {
      name: 'Email',
      icon: imgMail,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=dyastriap12@gmail.com',
      label: 'Mail'
    },
    {
      name: 'LinkedIn',
      icon: imgIn,
      link: 'https://www.linkedin.com/in/dyas-tri-apriliansyah-125ab42a4', 
      label: 'Connect'
    },
    {
      name: 'Instagram',
      icon: imgIg,
      link: 'https://www.instagram.com/dyastriapr',
      label: 'Follow'
    }
  ];

  return (
    <div className="px-4 py-16 md:py-24 font-kronaOne text-black bg-white container mx-auto flex flex-col items-center">
      
      {/* JUDUL */}
      <h2 className="text-xl md:text-3xl font-black mb-3 text-center uppercase tracking-tighter">
        Get In Touch
      </h2>
      <p className="text-gray-400 text-[8px] md:text-xs mb-10 md:mb-20 uppercase tracking-[0.2em] text-center">
        Let's collaborate on your next big project
      </p>

      {/* CONTAINER IKON 
          grid-cols-4: Memaksa 4 kolom di semua ukuran layar (Mobile & PC)
          gap-2: Jarak kecil di mobile agar tidak sesak
      */}
      <div className="grid grid-cols-4 gap-2 md:gap-10 w-full max-w-4xl px-2">
        
        {socialLinks.map((social) => (
          <a 
            key={social.name}
            href={social.link}
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col items-center w-full"
          >
            {/* CARD IKON 
                Mobile: p-3 (kecil), Desktop: p-10 (besar)
                border-[2px] di mobile agar tetap clean
            */}
            <div className="w-full bg-white border-[2px] md:border-[4px] border-gray-50 rounded-2xl md:rounded-[2.5rem] p-3 md:p-10 flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:border-black transition-all duration-500 aspect-square">
              <img 
                src={social.icon} 
                alt={social.name} 
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-20 md:h-20 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </div>
            
            {/* LABEL TEKS 
                Teks dibuat sangat kecil di mobile agar tidak 'tabrakan' antar kolom
            */}
            <div className="mt-2 md:mt-6 text-center">
              <h3 className="text-[7px] md:text-sm font-black uppercase tracking-tighter md:tracking-widest">
                {social.name}
              </h3>
              <p className="hidden md:block text-[10px] text-gray-400 uppercase font-bold group-hover:text-black mt-1">
                {social.label}
              </p>
            </div>
          </a>
        ))}

      </div>

      {/* FOOTER */}
      <div className="mt-20 md:mt-32 border-t border-gray-100 w-full pt-8 flex justify-center text-center">
        <p className="text-[7px] md:text-[10px] text-gray-300 uppercase tracking-[0.3em] md:tracking-[0.5em]">
          © 2025 Dyas Triap. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Contact;