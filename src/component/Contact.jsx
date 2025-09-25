import React from 'react';

// Pastikan path ini benar relatif dari lokasi file Contact.js Anda
import imgWA from '../assets/img/whatsap.png'; 
import imgIg from '../assets/img/instagramm.png';
import imgMail from '../assets/img/maill.png';

export const Contact = () => {
  return (
    <div className="px-4 sm:px-6 py-10 font-kronaOne text-black bg-white flex flex-col">
      {/* Judul - Alignment diubah */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center sm:text-left">
        Contact Me
      </h2>

      {/* Container Ikon (Sekarang di tengah) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 mt-4 w-full max-w-lg self-center">
        
        {/* Whatsapp */}
        <a 
          href="https://wa.me/6283879631235"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center group"
        >
          <img 
            src={imgWA} 
            alt="WhatsApp" 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-200"
          />
          <span className="mt-2 text-sm sm:text-base text-gray-700 group-hover:text-black transition-colors">WhatsApp</span>
        </a>
        
        {/* Email */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dyastriap12@gmail.com"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center group"
        >
          <img 
            src={imgMail} 
            alt="Email" 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-200"
          />
          <span className="mt-2 text-sm sm:text-base text-gray-700 group-hover:text-black transition-colors">Email</span>
        </a>
        
        {/* Instagram - Ukuran diperbaiki */}
        <a 
          href="https://www.instagram.com/dyastriapr"
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center group"
        >
          <img 
            src={imgIg} 
            alt="Instagram" 
            className="w-18 h-18 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-200"
          />
          <span className="mt-2 text-sm sm:text-base text-gray-700 group-hover:text-black transition-colors">Instagram</span>
        </a>
      </div>
    </div>
  );
};