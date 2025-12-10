import React, { useState, useRef } from 'react';
import ProfileImage from '../assets/img/FotoDyasHD.png';
import ShinyText from '../components/ShinyText';

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
   
    <div className="container mx-auto py-10 flex flex-col items-center justify-center max-w-4xl px-4">
      
     
      <div 
        ref={containerRef} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full flex flex-col items-center justify-center mb-0"
      > 

       
        <div className="absolute z-10 font-kronaOne text-center">
          <ShinyText 
            text="ABOUT" 
            disabled={true} 
            speed={3} 
            className='custom-class text-7xl sm:text-8xl md:text-9xl font-extrabold' 
          />
        </div>

        
        <img 
          src={ProfileImage} 
          alt="Dyas Tri Apriliansyah Profile" 
          className="relative z-20 w-96 h-96 md:w-96 md:h-96 object-cover transition-transform duration-100 ease-out" 
          style={{
            
            transform: `translate(${translate.x}px, ${translate.y}px)`,
          }}
        />
        
      
        <div 
            className="absolute z-20 w-full h-24 pointer-events-none" 
            style={{ 
                top: '75%', 
                backgroundImage: 'linear-gradient(to top, white, rgba(255, 255, 255, 0))'
            }}
        ></div>

      </div>

      <div className="mt-[-2rem]   relative z-30  pt-4"> 
        <h2 className="text-3xl font-bold text-black mb-4 font-kronaOne text-center">I'm UI/UX Designer & Web Developer</h2>
        <p className="text-sm sm:text-base md:text-lg text-black font-kronaOne text-justify">
          I am an individual with a strong interest in UI/UX Design, Web Development, and AI. I possess the ability to bridge the gap between design and development, leveraging my expertise in Figma to create interfaces focused on user interaction ease. <br></br><br />
          I can implement these designs into interactive web applications using frameworks such as React and Vue, alongside CSS utilities like Tailwind and Bootstrap.<br></br><br />
           Furthermore, I am keen to learn Machine Learning for data analysis and developing intelligent features that can enhance the quality of digital products.
        </p>
      </div>

    </div>
  )
}