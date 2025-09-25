import React from 'react'
import DyasImg from '../assets/img/Dyas.png'
import Bg from '../assets/img/Background.png'
import Email from '../assets/img/email.png'

export const Content = () => {
  return (
    <div className="relative h-screen overflow-hidden mx-auto px-4 sm:px-8">
      {/* Background */}
      <img 
        src={Bg} 
        alt="Bg" 
        className="absolute left-0 top-0 w-full h-full object-cover z-0"
      />

      {/* Title */}
      <div className="relative z-30 font-kronaOne text-xl sm:text-2xl my-4 
                      text-center sm:text-left text-black">
        PORTFOLIO
      </div>

      {/* Konten Utama (Nama, Tombol, Foto) */}
      <div className="relative h-full"> 
        
        {/* Nama & Tombol CV */}
        <div className="relative z-5 flex flex-col justify-start pt-24 sm:justify-center sm:pt-0 h-full font-kronaOne 
                        items-center sm:items-start text-center sm:text-left">
          <div className="text-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            DYAS TRI
          </div>
          <div className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-stroke-thin text-stroke-black-500">
            APRILIANSYAH
          </div>

          {/* Tombol Download CV - DIPERBARUI */}
          <div className="mt-8">
            <a 
              href="src/assets/cv/CV_DyasTriAp.pdf"
              download="CV_Dyas_Tri_Apriliansyah.pdf"
              className="bg-black text-white font-kronaOne text-base sm:text-lg py-4 px-10 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Foto Dyas */}
        <img 
          src={DyasImg} 
          alt="Dyas" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-auto z-10 
                     sm:top-10 sm:h-full sm:right-0 sm:left-auto sm:translate-x-0"
        />
      </div>

      {/* Icon Email - DIPERBARUI */}
     <div className="fixed bottom-5 right-5 flex gap-3 z-30">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dyastriap12@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={Email} 
            alt="Email" 
            className="w-10 sm:w-12 md:w-14"
          />
        </a>
      </div>
    </div>
  )
}