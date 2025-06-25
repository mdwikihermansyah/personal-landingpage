import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_QUICK_LINKS, FOOTER_SOCIAL_LINKS } from "../../../data/footer";
import { CONTACT_INFO } from "../../../data/contact";

export default function FooterTwo({ no_border = false }) {
  return (
    <footer
      className={`relative pt-20 overflow-hidden bg-[#0a0118] ${
        no_border ? "" : "border-t"
      } border-white/20`}
    >
      <div className="grid grid-cols-4 gap-4 mx-auto mb-20 theme-container md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4">
          <img src="/assets/images/home-two/logo-footer.svg" alt="logo" />
          <p className="max-w-[300px] text-white/50 mt-[30px] mb-6">
            Solusi Inovatif untuk Perencanaan, Pengelolaan, dan Monitoring
            Pengembangan Kompetensi
          </p>
          <div className="flex gap-[15px]">
            {FOOTER_SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="blank"
                aria-label={social.name}
                className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-blue-seo before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
              >
                <span className="relative z-10">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-4">
          <h1 className="font-semibold text-white text-18">Quick Link</h1>
          <ul className="mt-3.5">
            {FOOTER_QUICK_LINKS.map((link, index) => (
              <li key={index} className="">
                <Link href={link.href}>
                  <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                    <svg
                      className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                      width="6"
                      height="12"
                      viewBox="0 0 6 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 6L1 11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="transition-all duration-300 group-hover:translate-x-4">
                      {link.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 space-y-5">
          <h1 className="font-semibold text-white text-18">Address</h1>
          <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
            <span className="transition-all duration-300">
              {CONTACT_INFO.address}
            </span>
          </div>
          <h1 className="font-semibold text-white text-18">Contact</h1>
          <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
            <span className="transition-all duration-300">
              {CONTACT_INFO.email} <br />
              {CONTACT_INFO.phone}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -right-[268px] top-[132px]">
        <img src="/assets/images/home-two/footer-shape.png" alt="footer" />
      </div>

      <div className="w-full h-[80px] md:h-[65px] bg-[#323239] relative z-10">
        <div className="h-full mx-auto theme-container">
          <div className="flex flex-col items-center justify-between w-full h-full sm:flex-row">
            <span className="pt-3 text-white/50 md:pt-0">
              2025 © All rights reserved by{" "}
              <b className="text-white">Simdiklat</b>
            </span>
            <div className="relative">
              <a
                href="#"
                aria-label="go top"
                className="w-[45px] h-[45px] rounded-full border-[3px] border-[#323239] flex justify-center items-center bg-blue-sass absolute -top-[70px] md:-top-[55px]"
              >
                <span>
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="22.5"
                      cy="22.5"
                      r="21"
                      fill="#4A7DFF"
                      stroke="#323239"
                      strokeWidth="3"
                    />
                    <path
                      d="M19 21L23 17M23 17L27 21M23 17V29"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <ul className="flex items-center sm:space-x-6">
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="font-medium text-paragraph">|</li>
              <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
