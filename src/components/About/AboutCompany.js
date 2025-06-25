import Parallax from "parallax-js";
import React, { useEffect, useRef } from "react";

export default function AboutCompany() {
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
    <section className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-0 h-fit">
          <div className="col-span-6 lg:pr-[87px] flex h-full items-center">
            <div className="">
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
                atau mobile, integrasi API, manajemen basis data, serta
                deployment berbasis cloud dengan standar keamanan tinggi.
              </p>
              <hr className="mt-10 border-purple/10" />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-[50px] gap-8 md:gap-[70px]">
                <div data-aos="fade-left" className="grid-cols-1">
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
                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="grid-cols-1"
                >
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
            </div>
          </div>

          <div className="w-full about-thumbnil-area">
            <div
              data-aos="fade-right"
              className="xl:absolute relative lg:-right-16 right-0 top-0 lg:w-[682px] w-full"
            >
              <div ref={sceneRef} id="about-shape-mouse-anim">
                <div data-depth="0.20" className="layer">
                  <div
                    data-aos="fade-right"
                    className="hidden thumbnil-wrapper md:block"
                  >
                    <img
                      src="./assets/images/home-one-about-thumb-shape.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="right-0 w-full thumbnil-main md:absolute -bottom-16"
              >
                <div className="flex justify-center w-full">
                  <img
                    src="./assets/images/home-one-about-thumb-main.webp"
                    alt=""
                    className="rounded-[20px] overflow-hidden"
                  />
                </div>
              </div>
              <div className="w-full md:block hidden absolute right-0 top-0 h-[550px]">
                <div
                  ref={sceneRef}
                  id="home-one-about-mouse-anim"
                  className="h-full"
                >
                  <div
                    className="absolute layer right-2/3 top-36"
                    data-depth="0.30"
                  >
                    <div
                      data-aos="fade-left"
                      data-aos-delay="100"
                      className="inline-block h-fit px-[30px] py-2.5 bg-purple text-pone shadow-small shadow-purple text-white rounded-full rounded-bl-none"
                    >
                      Marketing & Growth
                    </div>
                  </div>
                  <div
                    data-depth="0.50"
                    className="absolute bottom-0 layer right-1/2"
                  >
                    <div
                      data-aos="fade-left"
                      data-aos-delay="200"
                      className="w-[296px] h-fit flex justify-between p-[7px] pl-5 bg-white shadow-style-one rounded-full items-center"
                    >
                      <span className="text-sm font-semibold text-main-black text-nowrap">
                        Trusted Clients
                      </span>
                      <img
                        src="/assets/images/home-one-about-group.webp"
                        alt=""
                      />
                    </div>
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
