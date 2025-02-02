
import React from 'react';
import whatsapp from '../assets/img/whatsapp.png';
import github from '../assets/img/github.png';
import email from '../assets/img/email.png';
import instagram from '../assets/img/instagram.png';
import profil from '../assets/img/FotoDyas.jpg';


const Profil = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body justify-center ">
          <div className="flex flex-col justify-center items-center gap-5">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src= {profil} />
            </div>
          </div>
            <div className='gap-4'>
              <p className='sm:text-sm md:text-xl  text-center font-bold '>Dyas Tri Apriliansyah</p>
              <button className="btn btn-xs sm:btn-sm md:btn-sm  lg:btn-sm mt-3">Web Front-End Developer</button>
                
            </div>
          </div>
          <div className="divider divider-neutral"></div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2 items-center'>
            <img src={email} alt="" width={80}/>
            <div>
            <p className='font-bold'>Email</p>
            <p>dyastriapr@gmail.com</p>
            </div>
            </div>

            <div className='flex flex-row gap-2 items-center'>
            <img src={whatsapp} alt="" width={80}/>
            <div>
            <p className='font-bold'>Whatsapp</p>
            <p>6283879631235</p>
            </div>
            </div>

            <div className='flex flex-row gap-2 items-center'>
            <img src={instagram} alt="" width={80} />
            <div>
            <p className='font-bold'>Instagram</p>
            <p>@dyastriapr</p>
            </div>
            </div>

            <div className='flex flex-row gap-2 items-center'>
            <img src={github} alt="" width={80}/>
            <div>
            <p className='font-bold'>Github</p>
            <p>@dyastriapr</p>
            </div>

            </div>

          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Profil;
