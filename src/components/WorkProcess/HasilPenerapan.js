"use client";
import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import { HASIL_PENERAPAN_DATA } from "../../data/hasil_penerapan";

export default function HasilPenerapan() {
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
    <section id="working-process">
      <div className="working-process-section-wrapper w-full xl:pb-[130px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid-cols-12 xl:grid">
            <div className="col-span-5">
              <div className="title-area">
                <span className="mb-5 section-title-top-tag">Our Fun Fact</span>
                <div className=" mb-[50px]">
                  <h2 className="md:text-48 text-34 font-semibold text-main-black">
                    Hasil Penerapan
                  </h2>

                  <p className="text-main-black opacity-55 mt-3">
                    Implementasi Pengembangan Aplikasi di Lingkungan
                    Pemerintahan
                  </p>
                </div>

                <div
                  id="progress-wrapper"
                  className="grid grid-cols-1 gap-5 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
                >
                  {HASIL_PENERAPAN_DATA.map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                    >
                      <div className="relative z-10 flex flex-col space-y-5">
                        <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple">
                          <span className="font-semibold text-purple">
                            {item.number}
                          </span>
                        </div>
                        <div>
                          <p className="mb-4 font-semibold text-20 text-main-black">
                            {item.title}
                          </p>
                          <p className="text-paragraph">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                        <img
                          src="./assets/images/home-one-ff-item-shape-2.webp"
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-7 mt-12 xl:mt-0">
              <div className="relative flex justify-center w-full h-full xl:justify-end">
                <div className="right-0 h-full xl:absolute">
                  <div className="sticky top-[155px]">
                    <div
                      ref={sceneRef}
                      id="home-working-cursor-anim"
                      className="relative"
                    ></div>
                    <div id="progressThumbHeight">
                      <img
                        src="/assets/images/working-process-thumb.webp"
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
