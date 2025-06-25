import React from "react";
import { BENEFIT_DATA } from "../../data/benefit";

export default function Benefit() {
  return (
    <section id="services">
      <div className="w-full what-we-do-wrapper pb-16 md:pb-[130px] relative overflow-x-hidden">
        <div className="mx-auto theme-container">
          <div className="w-full">
            <div className="flex justify-center w-full title-area">
              <div className="flex flex-col items-center">
                <div className="mb-[70px]">
                  <h2 className="font-semibold text-center text-white text-24 sm:text-48">
                    Kemudahan Akses Aplikasi
                  </h2>

                  <p className="text-white opacity-55 text-center mt-3">
                    Benefit yang didapatkan dalam penggunakan Aplikasi
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {BENEFIT_DATA.map((service, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="service-item p-5 md:p-[50px] relative group"
                >
                  <div className="service-item-ico w-[80px] h-[80px] rounded-[10px] flex justify-center items-center mb-7">
                    <img src={service.icon} alt="" className="relative z-10" />
                  </div>
                  <h1 className="mb-5 font-medium text-white">
                    {service.title}
                  </h1>
                  <p className="text-white opacity-55">{service.description}</p>
                  <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition duration-300 ease-in-out opacity-0 circle-shape group-hover:opacity-100">
                    <img
                      src="/assets/images/home-four/service-circle-shape.webp"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute z-10 shape-1 left-40 top-96">
          <img src="/assets/images/home-four/shape-1.webp" alt="" />
        </div>
        <div className="absolute z-10 shape-2 right-96 top-96">
          <img src="/assets/images/home-four/shape-2.webp" alt="" />
        </div>
        <div className="shape-3 absolute left-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-3.webp" alt="" />
        </div>
        <div className="shape-4 absolute right-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-4.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
