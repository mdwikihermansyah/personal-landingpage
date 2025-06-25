import React, { useState } from "react";
import CtaSeven from "../Cta/CtaSeven";
import { VIDEO_DATA } from "../../data/video";

export default function VideoList() {
  const [activeTab, setActiveTab] = useState("demo");

  return (
    <div className="">
      <div className="theme-container mx-auto my-28">
        <div className="flex overflow-x-auto mb-8 border-b ">
          <button
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base whitespace-nowrap ${
              activeTab === "demo"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("demo")}
          >
            Demo
          </button>
          <button
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base whitespace-nowrap ${
              activeTab === "paparan"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("paparan")}
          >
            Paparan
          </button>
          <button
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base whitespace-nowrap ${
              activeTab === "sharing"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("sharing")}
          >
            Sharing Knowledge
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_DATA[activeTab].map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" pt-10">
        <CtaSeven />
      </div>
    </div>
  );
}
