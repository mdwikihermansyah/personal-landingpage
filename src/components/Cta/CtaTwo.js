import React from "react";

export default function CtaTwo() {
  return (
    <section className="relative w-full border-b bg-[#0a0118] border-white/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0a0118] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#0a0118] rounded-full animate-ping delay-300"></div>

      <div className="grid w-full grid-cols-1 py-10 px-5 sm:py-20 xl:py-0 xl:px-0  mx-auto relative">
        <div className="col-span-1 pb-16 pt-0 xl:pt-[130px] md:pb-[130px] flex flex-col items-center">
          {/* <!-- bg anim  --> */}
          <div className="absolute top-0 right-0 z-0 w-full h-full anim-light-bg"></div>

          {/* Floating shapes */}
          <div className="absolute left-0 top-20 w-20 h-20 border border-white/10 rounded-lg rotate-45 animate-float"></div>
          <div className="absolute right-0 bottom-20 w-16 h-16 border border-blue-seo/20 rounded-full animate-float delay-150"></div>

          <div className="w-full max-w-[600px] relative">
            <div className="absolute -left-8 -top-8 w-16 h-16 border-t-2 border-l-2 border-white/10"></div>
            <div className="absolute -right-8 -bottom-8 w-16 h-16 border-b-2 border-r-2 border-white/10"></div>

            <h1 className="text-white font-medium py-1 px-5 rounded-[30px] border-[1.2px] border-white/10 w-fit mx-auto backdrop-blur-sm">
              Kontak Kami
            </h1>
            <h2 className="font-semibold text-24 md:text-48 text-white pt-5 mb-10 text-center">
              Terhubung dengan kami
            </h2>

            <div className="flex flex-col gap-7 w-full backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              <input
                type="text"
                placeholder="Nama Anda"
                className="py-3 px-6 border border-white/10 rounded-lg bg-main-gray/5 w-full relative z-10 focus:border-white focus:outline-none text-white transition-all duration-300 hover:border-white/30"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="py-3 px-6 border border-white/10 rounded-lg bg-main-gray/5 w-full relative z-10 focus:border-white focus:outline-none text-white transition-all duration-300 hover:border-white/30"
                onKeyDown={(e) => {
                  if (
                    !/[0-9]/.test(e.key) &&
                    e.key !== "Backspace" &&
                    e.key !== "Delete" &&
                    e.key !== "ArrowLeft" &&
                    e.key !== "ArrowRight" &&
                    e.key !== "Tab"
                  ) {
                    e.preventDefault();
                  }
                }}
              />

              <button className="w-full flex justify-center">
                <div className="home-two-btn-white-rev group py-3 px-8 w-full sm:w-fit relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-seo to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                    Send Message
                  </span>
                  <svg
                    className="relative z-10 ml-2 inline-block"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 group-hover:stroke-blue-seo stroke-white"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
