import React from 'react'
import Squares from '../components/Squares.jsx'
import ShinyText from '../components/ShinyText';
import TextType from '../components/TextType';
import SplitText from "../components/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
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
        <div className="relative z-50 font-kronaOne text-center mb-[-3rem]">
          <ShinyText 
            text="DYAS TRI APRILIANSYAH" 
            disabled={false} 
            speed={3} 
            className='custom-class text-4xl sm:text-6xl md:text-8xl lg:text-9xl' 
          />
        </div>
        
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
      </div>
      
    </div>
  )
}