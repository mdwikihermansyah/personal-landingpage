import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import WinGrid from "./WinGrid";
import { Link } from "react-router-dom";
import FotoUstadz from "../../assets/images/home-landing/rm-bgustadz.png";
import Shadow from "../../assets/images/home-one-hero-circle-orange.svg";

export default function HeroOne() {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current);
      // Cleanup the parallax instance on component unmount
      return () => {
        parallaxInstance.disable();
      };
    }
  }, []);
  return (
    <section id="home-one-hero">
      <div className="hero-one-section-wrapper w-full xl:h-[905px] overflow-hidden relative">
        {/* <WinGrid /> */}
        <div className="relative z-10 h-full mx-auto pointer-events-none theme-container">
          <div className="w-full grid  lg:grid-cols-2 grid-cols-1 2xl:gap-[130px] gap-10   items-center xl:pt-[223px] pt-[130px] h-full">
            <div className="article-area">
              {/* <div className="inline-flex md:px-6 px-3 py-2.5 md:py-[14px] bg-white space-x-2.5 items-center rounded-full shadow-style-one mb-5">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_460_7967)">
                      <path
                        d="M10.0005 10.9371L0.0507812 7.62184C0.132029 7.4156 0.3164 7.26529 0.535144 7.23435L6.68811 6.32812L10.0005 10.9371Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                        fill="#F7B84E"
                      />
                      <path
                        d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                        fill="#FEC461"
                      />
                      <path
                        d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                        fill="#F7B84E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_460_7967">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="text-sm font-semibold pointer-events-auto md:text-20 text-purple">
                  Sistem Informasi Kediklatan
                </span>
              </div> */}
              {/* <h2 className="text-4xl xl:text-5xl text-main-black font-semibold mb-[35px] pointer-events-auto">
                <span>Mari Berkonsultasi</span> <br />
                Bersama Ahli Pengobatan Tradisional <br /> dan
                <span className="relative inline-block px-3 font-bold text-white ">
                  <span className="relative z-10">Pemateri, </span>
                  <span className="absolute top-0 left-0 block w-full h-full bg-gradient-to-r from-purple"></span>
                </span>
                <br />
                <span className="italic">
                  {" "}
                  Penulis, Serta Motivator Berpengalaman
                </span>
              </h2> */}
              <h2 className="text-4xl xl:text-5xl text-main-black font-semibold mb-[35px] pointer-events-auto">
                Mari Berdikusi, Bersama.. <br />
                <span className="relative inline-block px-3 font-bold text-white ">
                  <span className="relative z-10">Ahmad Najib, S.Pd, </span>
                  <span className="absolute top-0 left-0 block w-full h-full bg-gradient-to-r from-purple"></span>
                </span>
              </h2>
              <div className="px-6 py-[14px] bg-white border-l-2 border-blue-sass mb-[35px] pointer-events-auto xl:w-full md:w-[500px]">
                <p className="text-ptwo text-paragraph">
                  Kami siap membantu Anda dalam memahami dan mengembangkan
                  pengobatan tradisional, Pemateri, Penulis, Serta Motivator
                  Berpengalaman.
                </p>
              </div>
              <div className=" flex sm:space-x-[40px] items-center pointer-events-auto">
                <Link to="/blogs">
                  <div className="py-3 home-two-btn-bg group bg-orange border-blue-seo">
                    <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-orange font-inter">
                      Hubungi Kami
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
                      ></path>
                    </svg>
                  </div>
                </Link>

                <a
                  href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
                  aria-label="play-video"
                  className="flex items-center space-x-7 video-play-btn  sm:mt-0"
                >
                  <span className="hidden sm:flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
                    <span>
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                          fill="#F2844D"
                        />
                      </svg>
                    </span>
                    <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                    <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                    <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                  </span>
                  <span className="font-medium text-main-black border-b border-main-black leading-5 font-inter">
                    Video Profil
                  </span>
                </a>
              </div>
            </div>
            <div className="relative h-full image-area sm:ml-0 lg:ml-5 xl:ml-0">
              <div className="relative xl:absolute 2xl:w-[900px] xl:w-[750px] lg:w-[600px] w-full left-0 top-0 h-full">
                {/* Gambar utama */}
                <div className="relative xl:absolute bottom-0 left-0 z-10 w-full">
                  <div className="flex justify-start w-full">
                    <img
                      src={FotoUstadz}
                      alt="Foto Profil Ustadz"
                      className="w-full h-auto max-w-none"
                    />
                  </div>
                </div>

                {/* Tag-layer animasi */}
                <div className="absolute bottom-0 left-0 hidden w-full h-full xl:block">
                  <div
                    ref={sceneRef}
                    id="hero-mouse-move-anim"
                    className="relative z-10 w-full h-full pointer-events-auto"
                  >
                    <div data-depth="0.20" className="layer">
                      <span className="inline-block px-6 xl:px-[30px] py-1.5 xl:py-2.5 bg-[#BA4AFF] text-white 2xl:text-pone xl:text-sm lg:text-pone rounded-full rounded-br-none">
                        Konsultasi Kesehatan
                      </span>
                    </div>
                    <div data-depth="0.30" className="layer">
                      <span className="inline-block px-6 xl:px-[30px] py-1.5 xl:py-2.5  bg-blue-sass text-white 2xl:text-pone xl:text-sm lg:text-pone rounded-full rounded-bl-none -ml-20">
                        Kajian Tematik
                      </span>
                    </div>
                    <div data-depth="0.40" className="layer h-fit">
                      <span className="inline-block px-6 xl:px-[30px] py-1.5 xl:py-2.5 bg-blue-sass text-white 2xl:text-pone xl:text-sm lg:text-pone rounded-full rounded-br-none h-fit">
                        Pemateri Berpengalaman
                      </span>
                    </div>
                    <div data-depth="0.50" className="layer h-fit">
                      <span className="inline-block px-6 xl:px-[30px] py-1.5 xl:py-2.5 bg-[#FF8C05] text-white 2xl:text-pone xl:text-sm lg:text-pone rounded-full rounded-br-none h-fit -ml-20">
                        Penulis & Motivator
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lingkaran putih */}
                <div className="absolute left-0 bottom-[100px] w-full hidden xl:block">
                  <div className="flex justify-start">
                    <div className="w-[850px] h-[700px] bg-white rounded-[325px]"></div>
                  </div>
                </div>

                {/* Bayangan */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                  <div className="flex justify-start">
                    <img src={Shadow} alt="Shadow" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
