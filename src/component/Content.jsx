import { useState } from "react";
import BinaGenerasi from '../assets/img/BinaGnerasi.png';
import SisiKidul from '../assets/img/sisikidul.png';
import E2F from '../assets/img/edufuturefund.png';
import Conskrip from '../assets/img/conskrip.png';


export default function Content() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="card bg-white shadow-md w-full h-full rounded-2xl p-6 relative">
      {/* Navbar di pojok kanan atas */}
      <div className="absolute top-0 right-0">
        <div className="shadow-lg rounded-bl-xl rounded-tr-xl overflow-hidden">
          <div className="flex">
            <div
              className={`px-6 py-2 cursor-pointer transition-all ${activeTab === "about" ? "bg-black text-white shadow-md" : "text-white bg-black"}`}
              onClick={() => setActiveTab("about")}
            >
              About
            </div>
            <div
              className={`px-6 py-2 cursor-pointer transition-all ${activeTab === "project" ? "bg-black text-white shadow-md" : "text-white bg-black"}`}
              onClick={() => setActiveTab("project")}
            >
              Project
            </div>
          </div>
        </div>
      </div>                   

      {/* Konten utama */}
      <div className="p-4">
        {activeTab === "about" ? (
          <div>
            <div className="text-2xl font-bold">About Me</div>
            <div className="divider divider-neutral"></div>
            <p className="text-black">
              Saya adalah seorang Programmer Website yang solid dalam pengembangan web, baik di sisi Frontend. Saya memiliki minat yang mendalam dalam menciptakan aplikasi web yang responsif, intuitif, dan ramah pengguna. Selain itu, saya juga tertarik dalam pengembangan Kecerdasan Buatan (AI), dan terus memperluas pengetahuan saya di bidang ini untuk mengintegrasikan teknologi AI ke dalam aplikasi web modern. Dengan kombinasi keahlian dalam pemrograman dan minat terhadap inovasi teknologi, saya selalu berusaha untuk memberikan solusi yang efektif dan inovatif dalam setiap proyek yang saya kerjakan.
            </p>

            <div className="mt-5">
              <div className="text-xl font-bold">Minat Saya</div>
              <div className="flex flex-wrap justify-center gap-5 md:flex-nowrap">
                <div className="card bg-base-100 w-96 shadow-2xl">
                  <div className="card-body">
                    <div className="font-bold">Web Design</div>
                    <p>Website yang dirancang dengan mempertimbangkan UI/UX, menawarkan antarmuka yang modern dan interaktif.</p>
                  </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-2xl">
                  <div className="card-body">
                    <div className="font-bold">Kecerdasan Buatan</div>
                    <p>Saya minat diberbagai jenis teknologi yang berkaitan dengan AI seperti Chatbot, Machine Learning, Deep Learning, dan lain-lain.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-2xl font-bold">My Project</div>
            <div className="divider divider-neutral"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[500px] overflow-y-auto mt-5">
              {/* Proyek 1 */}
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={BinaGenerasi} alt="Bina Generasi" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Bina Generasi</h2>
                  <p>Bina Generasi adalah Website Parenting, panduan orang tua untuk membesarkan anaknya dan konsultasi terkait parenting.</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-black text-white"
                      onClick={() => window.open('https://bina-generasi.vercel.app/', '_blank')}
                    >
                      Visit
                    </button>
                  </div>
                </div>
              </div>

              {/* Proyek 2 */}
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={SisiKidul} alt="Sisi Kidul" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Sisi Kidul</h2>
                  <p>Sisi Kidul adalah platform yang menawarkan informasi mengenai budaya dan wisata di daerah Sisi Kidul.</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn  bg-black text-white"
                      onClick={() => window.open('https://sisikidul-test1.vercel.app/', '_blank')}
                    >
                      Visit
                    </button>
                  </div>
                </div>
              </div>

              {/* Proyek 3 */}
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={E2F} alt="Sisi Kidul" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">EduFutureFund</h2>
                  <p>Sisi Kidul adalah platform yang menawarkan informasi mengenai budaya dan wisata di daerah Sisi Kidul.</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-black text-white"
                      onClick={() => window.open('', '_blank')}
                    >
                      Visit
                    </button>
                  </div>
                </div>
              </div>

              {/* Proyek 4 */}
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img src={Conskrip} alt="Sisi Kidul" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Conskrip</h2>
                  <p>Aplikasi Konsversi Skripsi menjadi jurnal secara otomatis ( hanya abstrak )</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-black text-white"
                      onClick={() => window.open('', '_blank')}
                    >
                      Visit
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
