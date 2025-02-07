import React from 'react';
import whatsapp from '../assets/img/whatsapp.png';
import github from '../assets/img/github.png';
import email from '../assets/img/email.png';
import instagram from '../assets/img/instagram.png';
import profil from '../assets/img/FotoDyas.jpg';

const Profil = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body justify-center ">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={profil} alt="Profil" />
              </div>
            </div>
            <div className='gap-4'>
              <p className='sm:text-sm md:text-xl text-center font-bold'>Dyas Tri Apriliansyah</p>
              <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm mt-3 bg-white hover:bg-black hover:text-white">Web Front-End Developer</button>
            </div>
          </div>
          <div className="divider divider-neutral"></div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2 items-center'>
              <img src={email} alt="Email" width={60} />
              <div>
                <p className='font-bold'>Email</p>
                <p>dyastriapr@gmail.com</p>
              </div>
            </div>

            <div className='flex flex-row gap-2 items-center'>
              <a href="https://wa.me/6283879631235" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" width={60} />
              </a>
              <div>
                <p className='font-bold'>WhatsApp</p>
                <p>6283879631235</p>
              </div>
            </div>

            <div className='flex flex-row gap-2 items-center'>
              <a href="https://www.instagram.com/dyastriapr" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" width={60} />
              </a>
              <div>
                <p className='font-bold'>Instagram</p>
                <p>@dyastriapr</p>
              </div>
            </div>

            <div className='flex flex-row gap-2 items-center'>
              <a href="https://github.com/dyastriapr" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" width={60} />
              </a>
              <div>
                <p className='font-bold'>GitHub</p>
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
