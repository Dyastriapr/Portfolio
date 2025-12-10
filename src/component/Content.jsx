import React from 'react'
import Squares from '../components/Squares.jsx'
import ShinyText from '../components/ShinyText';
// import TextType from '../components/TextType'; // Tidak dipakai di kode saat ini
import SplitText from "../components/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

// SVG Icon Panah ke Bawah
const ChevronDownIcon = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);


export const Content = () => {
  return (
  
    <div className="relative h-screen overflow-hidden sm:px-8">
     
      <div className="absolute inset-0 z-0">
        <Squares />
      </div>

      <div className="relative z-40 font-kronaOne text-xl sm:text-2xl my-4 
                      text-center sm:text-left text-white">
        PORTFOLIO
      </div>

      <div className="z-40 flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> 
        {/* NAMA */}
        <div className="relative z-50 font-kronaOne text-center mb-[-3rem]">
          <ShinyText 
            text="DYAS TRI APRILIANSYAH" 
            disabled={false} 
            speed={3} 
            className='custom-class text-4xl sm:text-6xl md:text-8xl lg:text-9xl' 
          />
        </div>
        
        {/* SLOGAN */}
        <div className='relative z-42 text-white mt-20 font-kronaOne'>
          <SplitText
            text="From concept to commit, I turn imagination into interaction."
            className=" font-semibold text-center sm:text-xl md:text-2xl lg:text-3xl"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        {/* ICON PANAH KE BAWAH - Ditambahkan di sini! */}
       

      </div>
 <div className='absolute bottom-5 left-1/2 -translate-x-1/2 z-42'>
            <ChevronDownIcon 
                className="w-8 h-8 text-white animate-bounce-slow" 
            />
        </div>
      
    </div>
  )
}