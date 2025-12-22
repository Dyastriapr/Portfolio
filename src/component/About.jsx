import React, { useState, useRef } from 'react';
import ProfileImage from '../assets/img/FotoDyasHD.png';
import ShinyText from '../components/ShinyText';
import TrueFocus from '../components/TrueFocus';
import ExperienceMarquee from "../components/ExperienceMarquee";


const MOVEMENT_RANGE = 10; 

export const About = () => {
    
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            const moveX = (mouseX / (rect.width / 2)) * MOVEMENT_RANGE;
            const moveY = (mouseY / (rect.height / 2)) * MOVEMENT_RANGE;
            setTranslate({ x: moveX, y: moveY });
        }
    };

    const handleMouseLeave = () => {
        setTranslate({ x: 0, y: 0 });
    };

    return (
      // 🛑 FIX UTAMA: Wrapper di luar container mx-auto untuk memastikan overflow-x terpotong
      <div className="w-screen overflow-x-hidden">
        
        <div className="container mx-auto py-8 sm:py-10 flex flex-col items-center justify-center px-4">
            
            {/* Header / Gambar Section */}
            <div 
                ref={containerRef} 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full flex flex-col items-center justify-center mb-2" 
            > 
                {/* Judul "ABOUT" */}
                <div className="absolute z-10 font-kronaOne text-center">
                    <ShinyText 
                        text="ABOUT" 
                        disabled={true} 
                        speed={3} 
                        className='custom-class text-6xl sm:text-8xl md:text-9xl font-extrabold' 
                    />
                </div>

                {/* Gambar Profil dengan Efek Parallax (Responsif) */}
                <img 
                    src={ProfileImage} 
                    alt="Dyas Tri Apriliansyah Profile" 
                    className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover transition-transform duration-100 ease-out" 
                    style={{
                        transform: `translate(${translate.x}px, ${translate.y}px)`,
                    }}
                />
                
                {/* Gradient Fade di Bawah Gambar */}
                <div 
                    className="absolute z-20 w-full h-24 pointer-events-none" 
                    style={{ 
                        top: '75%', 
                        backgroundImage: 'linear-gradient(to top, white, rgba(255, 255, 255, 0))'
                    }}
                ></div>
            </div>

            {/* Konten Teks */}
            <div className="
                mt-[-1rem] sm:mt-[-2rem] // Margin overlap responsif
                relative z-30 pt-4 
            "> 
                {/* TrueFocus Component (Role Titles) */}
                <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4 font-kronaOne text-center">
                    <TrueFocus 
                        sentence="UI/UX Designer | Web Developer | AI Enthusiast"
                        separator="|"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="black"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>

                {/* Deskripsi Diri (Responsif) */}
                <p className="
                    text-xs sm:text-sm md:text-base 
                    text-black font-kronaOne text-justify pt-6 sm:pt-10">
                    I am an individual with a strong interest in UI/UX Design, Web Development, and AI. I possess the ability to bridge the gap between design and development, leveraging my expertise in Figma to create interfaces focused on user interaction ease. <br/><br />
                    I can implement these designs into interactive web applications using frameworks such as React and Vue, alongside CSS utilities like Tailwind and Bootstrap.<br/><br />
                    Furthermore, I am keen to learn Machine Learning for data analysis and developing intelligent features that can enhance the quality of digital products.
                </p>
            </div>

            {/* Experience Marquee */}
            <div className="w-full mt-8 sm:mt-12">
             <p className='font-kronaOne text-black text-lg font-bold'>Experience</p> 
                <ExperienceMarquee />
            </div>

        </div>
      </div>
    )
}