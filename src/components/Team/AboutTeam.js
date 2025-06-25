import React from "react";
import { Link } from "react-router-dom";
import { TEAMS_DATA } from "../../data/teams";

export default function AboutTeam() {
  return (
    <section className="bg-white pt-16 pb-14 md:pt-[130px] md:pb-[120px] relative">
      <div className="w-full mx-auto theme-container">
        <div className="flex flex-col justify-between w-full lg:flex-row">
          <div className="">
            <h2 className="pt-5 font-semibold text-main-black text-24 sm:text-48">
              Dukungan SDM Berkualitas
            </h2>
          </div>
          <div className="flex flex-col items-center gap-10 sm:flex-row">
            <h1 className="flex items-center justify-between w-full gap-4 font-semibold text-48 sm:text-65 text-main-black sm:w-fit">
              <span
                data-scroll-qs="scroll"
                data-count-qs="28"
                data-type-qs="+"
                data-speed-qs="1000"
              >
                15+
              </span>
              <span className="font-normal text-20 sm:text-22 text-paragraph">
                Team Aktif
              </span>
            </h1>
          </div>
        </div>
        <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px]">
          {TEAMS_DATA.map((member) => (
            <div key={member.id} className="col-span-3">
              <div className="relative flex items-center justify-center overflow-hidden group/main">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full overflow-hidden rounded-lg"
                />
                {/* <!-- social links  --> */}
                <div className="flex bg-[#086AD8] absolute bottom-5 translate-y-16 group-hover/main:translate-y-0 transition-all duration-300">
                  <a
                    href={member.social.instagram}
                    target="blank"
                    aria-label="instagram"
                    className="relative flex items-center justify-center w-10 h-10 overflow-hidden group before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <svg
                      className="relative z-10"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#086AD8]"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.56934 0C2.80791 0 0.569336 2.23858 0.569336 5V9.33C0.569336 12.0914 2.80792 14.33 5.56934 14.33H9.89934C12.6608 14.33 14.8993 12.0914 14.8993 9.33V5C14.8993 2.23858 12.6608 0 9.89933 0H5.56934ZM12.0334 3.58233C12.4291 3.58233 12.7499 3.26154 12.7499 2.86583C12.7499 2.47012 12.4291 2.14933 12.0334 2.14933C11.6377 2.14933 11.3169 2.47012 11.3169 2.86583C11.3169 3.26154 11.6377 3.58233 12.0334 3.58233ZM11.3169 7.16502C11.3169 9.14358 9.71291 10.7475 7.73435 10.7475C5.75579 10.7475 4.15185 9.14358 4.15185 7.16502C4.15185 5.18646 5.75579 3.58252 7.73435 3.58252C9.71291 3.58252 11.3169 5.18646 11.3169 7.16502ZM7.73454 9.31425C8.92168 9.31425 9.88404 8.35189 9.88404 7.16475C9.88404 5.97762 8.92168 5.01525 7.73454 5.01525C6.54741 5.01525 5.58504 5.97762 5.58504 7.16475C5.58504 8.35189 6.54741 9.31425 7.73454 9.31425Z"
                        fill="white"
                      />
                    </svg>
                  </a>

                  <a
                    href={member.social.linkedin}
                    target="blank"
                    aria-label="linkedin"
                    className="relative flex items-center justify-center w-10 h-10 overflow-hidden group before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <svg
                      className="relative z-10"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#086AD8]"
                        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <h1 className="mt-6 font-semibold text-22 text-main-black white_card_title">
                <Link to="/teams">{member.name}</Link>
              </h1>

              <p className="mt-1 text-paragraph">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
