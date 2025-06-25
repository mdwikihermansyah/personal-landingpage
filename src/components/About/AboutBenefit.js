import React from "react";

export default function AboutBenefit() {
  return (
    <section id="benefit">
      <div className="benefit-section-wrapper w-full py-16 md:py-[130px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-[70px]">
            <div className="flex items-center justify-center col-span-6">
              <img
                src="./assets/images/about/benefit-img.webp"
                alt=""
                className="max-w-full"
              />
              <button
                type="button"
                aria-label="play-video"
                className="absolute flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
              >
                <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
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
                        fill="#794AFF"
                      />
                    </svg>
                  </span>
                  <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                  <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                  <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                </span>
              </button>
            </div>
            <div className="flex items-center col-span-6">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-[30px]">
                {/* <!-- single card  --> */}
                <div
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative before:w-full before:block before:h-full before:border before:border-purple before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-purple after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10">
                    <h1 className="font-semibold text-18 font-inter text-main-black">
                      Expertise Marketing
                    </h1>
                    <p className="text-paragraph">
                      Provide visualizations an reports time saving for vacation
                    </p>
                  </div>
                </div>
                {/* <!-- single card  --> */}
                {/* <!-- single card  --> */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative before:w-full before:block before:h-full before:border before:border-purple before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-purple after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10">
                    <h1 className="font-semibold text-18 font-inter text-main-black">
                      Kolaboratif dan Inovatif
                    </h1>
                    <p className="text-paragraph">Menciptakan solusi...</p>
                  </div>
                </div>
                {/* <!-- single card  --> */}
                {/* <!-- single card  --> */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative before:w-full before:block before:h-full before:border before:border-purple before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-purple after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10">
                    <h1 className="font-semibold text-18 font-inter text-main-black">
                      Profesional dan Berpengalaman
                    </h1>
                    <p className="text-paragraph">
                      Memberikan hasil kerja yang berkualitas dan tepat sasaran
                    </p>
                  </div>
                </div>
                {/* <!-- single card  --> */}
                {/* <!-- single card  --> */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative before:w-full before:block before:h-full before:border before:border-purple before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-purple after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10">
                    <h1 className="font-semibold text-18 font-inter text-main-black">
                      Responsif dan Solutif
                    </h1>
                    <p className="text-paragraph">
                      Memahami dan memberikan respon cepat dengan solusi yang
                      efektif
                    </p>
                  </div>
                </div>
                {/* <!-- single card  --> */}
                {/* <!-- single card  --> */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative before:w-full before:block before:h-full before:border before:border-purple before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-purple after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10">
                    <h1 className="font-semibold text-18 font-inter text-main-black">
                      Time-saving
                    </h1>
                    <p className="text-paragraph">
                      Provide visualizations an reports time saving for vacation
                    </p>
                  </div>
                </div>
                {/* <!-- single card  --> */}
                {/* <!-- single card  --> */}
                <div
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  className="max-w-full col-span-3 relative before:w-full before:block before:h-full before:border before:border-purple before:rounded-[10px] before:absolute before:left-0 before:top-0 before:z-0 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:origin-top-left after:w-full after:block after:h-full after:border after:border-purple after:rounded-[10px] after:absolute after:left-0 after:top-0 after:z-0 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 before:ease-linear after:ease-linear after:origin-bottom-right"
                >
                  <div className="rounded-[10px] m-[1px] bg-white px-[26px] py-5 border border-transparent relative z-10">
                    <h1 className="font-semibold text-18 font-inter text-main-black">
                      Consistent results
                    </h1>
                    <p className="text-paragraph">
                      Provide visualizations an reports time saving for vacation
                    </p>
                  </div>
                </div>
                {/* <!-- single card  --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
