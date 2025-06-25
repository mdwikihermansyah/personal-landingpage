import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CLIENT_DATA } from "../../data/clients";

export default function LogoSliderTwo() {
  const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: false,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  };

  return (
    <section className="max-w-full overflow-hidden pb-20 sm:pt-10">
      <div className="flex items-center w-screen mx-auto theme-container">
        <div className="flex w-full flex-col lg:flex-row gap-5 lg:gap-[154px]">
          <div className="w-full max-w-[176px]">
            <p className="text-base font-semibold text-main-black">
              We've more than 1250+ global clients
            </p>
          </div>

          <div className="flex-1 overflow-hidden">
            <Swiper {...swiperOptions} className="client-logo-slider">
              {CLIENT_DATA.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center">
                    <img
                      src={item.logoUrl}
                      alt={`Client Logo ${index + 1}`}
                      className="max-w-full h-auto"
                    />
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
