import React from "react";
import BlogAuthor from "./BlogAuthor";

const blogDetailsData = {
  title: "People The Office Analyzing Checking Finance Graphs",
  excerpt:
    "Meet our Support Engineer, the backbone of our technical assistance and customer satisfaction. Armed with a robust blend of technical acumen and exceptional problem-solving skills, our Support dedicated",
  content: [
    {
      type: "paragraph",
      text: "Our team is comprised of seasoned professionals, each bringing a wealth of experience and expertise to the table With years of dedicated service in their respective fields, our team members have honed their skills to deliver unparalleled results. From intricate problem-solving innovative strategizing, their collective experience forms the backbone of our success. Guided by a commitment to excellence, our team combines their extensive knowledge a passion for staying at the forefront of industry advancements.",
    },
    {
      type: "heading",
      text: "Efficiency Elevated Unleashing the Power of IT Managed Solutions Navigating Your IT Queries with Ease",
    },
    {
      type: "paragraph",
      text: "Our team is comprised of seasoned professionals, each bringing a wealth of experience and expertise to the table With years of dedicated service in their respective fields, our team members have honed their skills to deliver unparalleled results. From intricate problem-solving innovative strategizing, their collective experience forms the backbone of our success. Guided by a commitment to excellence, our team combines their extensive knowledge a passion for staying at the forefront of industry advancements.",
    },
    {
      type: "heading",
      text: "A checklist to improve your daily routine",
    },
    {
      type: "paragraph",
      text: "From intricate problem-solving to innovative strategizing, their collective experience forms the backbone of our success. Guided by a commitment to excellence, our team combines their extensive knowledge with a passion for staying at the forefront of industry advancements.",
    },
  ],
  images: {
    featured: "/assets/images/blogs/detail-1.webp",
    gallery: [
      "/assets/images/blogs/detail-2.webp",
      "/assets/images/blogs/detail-3.webp",
    ],
  },
};

export default function BlogDetailsInfo() {
  return (
    <section className="py-16 md:py-[130px]">
      <div className="theme-container w-full mx-auto ">
        <div className="col-span-8">
          <div className="w-full">
            <img
              src={blogDetailsData.images.featured}
              alt=""
              className="object-cover w-full"
            />
            <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
              {blogDetailsData.title}
            </h1>
            <div className="flex mt-[22px] mb-2 gap-4 items-center">
              <svg
                className="hidden md:block"
                width="33"
                height="39"
                viewBox="0 0 33 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4489 24.2727H20.1761L23.5682 28.6705L25.9886 31.5341L31.8011 39H25.6648L21.7102 33.9886L20.0227 31.6023L14.4489 24.2727ZM32.6364 18.5455C32.6364 22.3068 31.9318 25.5284 30.5227 28.2102C29.125 30.8807 27.2159 32.9261 24.7955 34.3466C22.3864 35.767 19.6534 36.4773 16.5966 36.4773C13.5398 36.4773 10.8011 35.767 8.38068 34.3466C5.97159 32.9148 4.0625 30.8636 2.65341 28.1932C1.25568 25.5114 0.556818 22.2955 0.556818 18.5455C0.556818 14.7841 1.25568 11.5682 2.65341 8.89773C4.0625 6.21591 5.97159 4.16477 8.38068 2.74432C10.8011 1.32386 13.5398 0.613635 16.5966 0.613635C19.6534 0.613635 22.3864 1.32386 24.7955 2.74432C27.2159 4.16477 29.125 6.21591 30.5227 8.89773C31.9318 11.5682 32.6364 14.7841 32.6364 18.5455ZM26.2784 18.5455C26.2784 15.8977 25.8636 13.6648 25.0341 11.8466C24.2159 10.017 23.0795 8.63636 21.625 7.70455C20.1705 6.76136 18.4943 6.28977 16.5966 6.28977C14.6989 6.28977 13.0227 6.76136 11.5682 7.70455C10.1136 8.63636 8.97159 10.017 8.14205 11.8466C7.32386 13.6648 6.91477 15.8977 6.91477 18.5455C6.91477 21.1932 7.32386 23.4318 8.14205 25.2614C8.97159 27.0795 10.1136 28.4602 11.5682 29.4034C13.0227 30.3352 14.6989 30.8011 16.5966 30.8011C18.4943 30.8011 20.1705 30.3352 21.625 29.4034C23.0795 28.4602 24.2159 27.0795 25.0341 25.2614C25.8636 23.4318 26.2784 21.1932 26.2784 18.5455Z"
                  fill="#D2A98E"
                />
              </svg>

              <p className="flex-1 text-paragraph">{blogDetailsData.excerpt}</p>
            </div>

            {blogDetailsData.content.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="text-paragraph mb-[25px]">
                    {item.text}
                  </p>
                );
              } else if (item.type === "heading") {
                return (
                  <h1
                    key={index}
                    className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]"
                  >
                    {item.text}
                  </h1>
                );
              }
            })}

            <div className="flex flex-col xl:flex-row gap-[30px] pt-6">
              {blogDetailsData.images.gallery.map((img, index) => (
                <img key={index} src={img} alt="" className="" />
              ))}
            </div>

            <BlogAuthor />
          </div>
        </div>
      </div>
    </section>
  );
}
