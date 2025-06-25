import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LayananComp({ data, no_title }) {
  const swiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".h5-story-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".h5-story-next",
      prevEl: ".h5-story-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section className={` ${no_title ? "pt-7" : "py-16 md:py-[130px]"} `}>
      {/* <!-- title  --> */}
      <div className="flex flex-col items-center mx-auto theme-container">
        {!no_title && (
          <h2 className="text-24 sm:text-48 font-semibold text-main-black pt-5 max-w-[844px] text-center">
            Sistem Informasi yang kompleks Sesuai dengan Kebutuhan
          </h2>
        )}

        <div className="w-full">
          <div className="pt-14">
            <Swiper {...swiperOptions} className="h5-story-slider ">
              {data.map((item) => (
                <SwiperSlide key={item.id} className="pr-3 ">
                  <div className="pb-[192px] pr-[30px] w-full bg-white relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full max-w-[380px]"
                    />
                    <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[150px] hover:h-[205px] transition-all duration-300 hover:bg-blue-seo overflow-hidden ">
                      <img
                        src="/assets/images/home-five/hero/about-card-shape.webp"
                        alt=""
                        className="absolute right-2 top-bottom-moving"
                      />
                      <h2 className={` max-w-[230px] group-hover:text-white`}>
                        {item.title.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < item.title.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h2>

                      <Link to="/service-details">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
