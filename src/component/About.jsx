import React from 'react'

export const About = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col md:flex-row gap-8 px-4">
      {/* Deskripsi */}
      <div className="md:w-2/3 bg-black text-white font-kronaOne text-base sm:text-lg md:text-2xl p-6 sm:p-10 text-justify rounded-xl">
        Hello, I am an IT Generalist who is passionate about solving a wide range of technology problems. I have experience providing technical support, from hardware troubleshooting and software management to network and operating system administration. I combine these fundamental IT skills with a special interest and expertise in web development. I enjoy building web applications that are not only functional but also intuitive and user-friendly. I also stay current with technological advancements, including Artificial Intelligence (AI), to integrate them into modern tech solutions. I am confident that my skills in problem analysis and communication will allow me to make a positive contribution to the company.
      </div>

      {/* Skills */}
      <div className="md:w-1/3 text-black flex flex-col items-center space-y-8 md:space-y-12 font-kronaOne text-center">
        <div className="relative w-full sm:w-80 h-32 sm:h-40 border border-black flex items-center justify-center rounded-xl">
          <span className="absolute -top-4 left-3 text-sm sm:text-lg font-bold">
            01
          </span>
          <span className="text-lg sm:text-xl">UI/UX Design</span>
        </div>

        <div className="relative w-full sm:w-80 h-32 sm:h-40 border border-black flex items-center justify-center rounded-xl">
          <span className="absolute -top-4 left-3 text-sm sm:text-lg font-bold">
            02
          </span>
          <div>
            <div className="text-lg sm:text-xl">Machine</div>
            <div className="text-lg sm:text-xl">Learning</div>
          </div>
        </div>

        <div className="relative w-full sm:w-80 h-32 sm:h-40 border border-black flex items-center justify-center rounded-xl">
          <span className="absolute -top-4 left-3 text-sm sm:text-lg font-bold">
            03
          </span>
          <span className="text-lg sm:text-xl">Web Design & Developer</span>
        </div>
      </div>
    </div>
  )
}
