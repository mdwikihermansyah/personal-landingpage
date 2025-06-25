import React from "react";

export default function ServiceOne({ data }) {
  return (
    <section id="service">
      <div className="w-full relative">
        <div className="relative z-10 mx-auto theme-container">
          <div className="w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-5">
            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[70px] gap-8">
              {data.map((service, index) => (
                <div
                  key={index}
                  data-aos="zoom-in-left"
                  data-aos-delay={index * 100}
                  className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
                >
                  <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
                    <span>{service.icon}</span>
                  </div>
                  <div>
                    <p className="mb-4 font-semibold text-center text-20 text-main-black">
                      {service.title}
                    </p>
                    <p className="text-center text-paragraph">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
