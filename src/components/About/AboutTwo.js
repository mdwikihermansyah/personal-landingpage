import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function AboutTwo() {
  return (
    <section id="about" className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="col-span-6 lg:pr-[87px]">
            <div className="py-1.5 md:py-3 px-5 rounded-[30px] border-[1.2px] border-blue-seo/30 w-fit bg-blue-seo/10">
              <h1 className="text-base font-medium leading-5 tracking-tight text-purple">
                About Company
              </h1>
            </div>
            <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
              Kemampuan Tim, Menjadi Solusi Digital Anda
            </h1>
            <p className="mt-5 md:mt-10 text-paragraph">
              Kami memiliki tim ahli dalam pengembangan aplikasi baik website
              atau mobile, integrasi API, manajemen basis data, serta deployment
              berbasis cloud dengan standar keamanan tinggi.
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-10 gap-8 md:gap-[70px]">
              <div className="grid-cols-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="#5D51F2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                    fill="white"
                  />
                </svg>
                <h1 className="mt-4 font-semibold text-18 text-main-black">
                  Tim Profesional
                </h1>
                <p className="mt-3 text-paragraph">
                  Siap mewujudkan ide Anda menjadi aplikasi digital yang
                  fungsional, menarik, dan scalable.
                </p>
              </div>
              <div className="grid-cols-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="#5D51F2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                    fill="white"
                  />
                </svg>
                <h1 className="mt-4 font-semibold text-18 text-main-black">
                  Berpengalaman
                </h1>
                <p className="mt-3 text-paragraph">
                  Kami berpengalaman dalam memenuhi kebutuhan sistem sesuai
                  dengan kesepakatan pengguna.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 mt-6 sm:flex-row md:gap-12 md:mt-12">
              <Link to="/blogs">
                <div className="py-3 home-two-btn-bg group bg-blue-seo border-blue-seo">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                    Lihat Tim
                  </span>
                  <svg
                    className="relative z-10"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 group-hover:stroke-blue-seo"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative col-span-6 mx-auto">
            <img src="/assets/images/home-two/about.webp" alt="img" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-[30px] h3-about-card relative overflow-hidden w-full pt-10 md:pt-20"
        >
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={20} />
              </h1>

              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Proyek Selesai
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={15} /> +
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Tahun Pengalaman
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={5} />+
              </h1>

              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Marketing Aktif
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div className="relative flex flex-col items-center justify-center col-span-3 pt-4 pb-4 overflow-hidden border bg-main-gray border-purple/10 rounded-3xl md:pt-6 md:pb-6 group">
            <div className="absolute top-0 left-0 z-0 h-full overflow-hidden transition-all duration-200 -translate-x-96 group-hover:translate-x-0 opacity-20">
              <img src="./assets/images/home-three/about-card-bg.svg" alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h1 className="text-48 text-main-black font-semibold pb-[18px]">
                <CountUp start={0} end={10} />+
              </h1>
              <div className="w-20 border-2 border-purple"></div>
              <p className="pt-6 font-semibold text-center text-18 text-paragraph">
                Tim Ahli
              </p>
            </div>
          </div>
          {/* <!-- card end  --> */}
        </div>
      </div>
    </section>
  );
}
