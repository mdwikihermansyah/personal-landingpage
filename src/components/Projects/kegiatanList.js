import React from "react";
import { Link } from "react-router-dom";
import { KEGIATAN_DATA } from "../../data/kegiatan";

export default function KegiatanList() {
  return (
    <section className="w-full py-16 md:py-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px]">
          {KEGIATAN_DATA.map((project) => (
            <div
              key={project.id}
              data-aos="fade-left"
              data-aos-delay={project.delay}
              className="col-span-4"
            >
              <div className="pb-[92px] pr-[30px] w-full bg-white relative">
                <img
                  src={project.image}
                  alt=""
                  className="w-full max-w-[380px]"
                />
                <div className="group shadow-card pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-5 rounded-2xl absolute top-[50%] md:top-[63%] z-10 bg-white -right-0 h-[146px] hover:h-[185px] transition-all duration-300 hover:bg-it-blue hover:shadow-blue-card hover:-translate-y-[22px] overflow-hidden h5-story_slider_active_card">
                  <img
                    src="/assets/images/home-five/hero/about-card-shape.webp"
                    alt=""
                    className="absolute right-2 top-bottom-moving"
                  />
                  <h1 className="transition-all duration-300 text-paragraph group-hover:text-white">
                    {project.date}
                  </h1>
                  <h2 className="text-18 sm:text-20 font-semibold mt-3 max-w-[255px] group-hover:text-white">
                    {project.title}
                  </h2>
                  <Link to={`/kegiatan/${project.slug}`}>
                    <div className="flex items-center gap-2 mt-4 group">
                      <span className="relative font-medium leading-5 text-white border-b border-transparent font-inter before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5">
                        Read More
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#ffff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
