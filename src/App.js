import React, { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import AOS from "aos";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import HomeSix from "./pages/HomeSix";
import HomeSeven from "./pages/HomeSeven";
import HomeEight from "./pages/HomeEight";
import HomeNine from "./pages/HomeNine";
import HomeTen from "./pages/HomeTen";
import About from "./pages/About";
import Services from "./pages/Services";
import BlogDetails from "./pages/KegiatanDetails";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import Faq from "./pages/Faq";
import Teams from "./pages/Teams";
import Blogs from "./pages/Blogs";
import Checkout from "./pages/Checkout";
import Notfound from "./pages/Notfound";
import LandingOne from "./landing/LandingOne";
import LandingTwo from "./landing/LandingTwo";
import LandingThree from "./landing/LandingThree";
import LandingFour from "./landing/LandingFour";
import LandingFive from "./landing/LandingFive";
import LandingSix from "./landing/LandingSix";
import LandingSeven from "./landing/LandingSeven";
import LandingEight from "./landing/LandingEight";
import LandingNine from "./landing/LandingNine";
import LandingTen from "./landing/LandingTen";
import VideoDemo from "./pages/VideoDemo";
import Kegiatan from "./pages/Kegiatan";
import KegiatanDetails from "./pages/KegiatanDetails";
import Perencanaan from "./pages/Perencanaan";
import Pengelolaan from "./pages/pengelolaan";
import Monitoring from "./pages/Monitoring";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/home-four" element={<HomeFour />} />
        <Route path="/home-five" element={<HomeFive />} />
        <Route path="/home-six" element={<HomeSix />} />
        <Route path="/home-seven" element={<HomeSeven />} />
        <Route path="/home-eight" element={<HomeEight />} />
        <Route path="/home-nine" element={<HomeNine />} />
        <Route path="/home-ten" element={<HomeTen />} />
        {/* Landing Demo */}
        <Route path="/landing-one" element={<LandingOne />} />
        <Route path="/landing-two" element={<LandingTwo />} />
        <Route path="/landing-three" element={<LandingThree />} />
        <Route path="/landing-four" element={<LandingFour />} />
        <Route path="/landing-five" element={<LandingFive />} />
        <Route path="/landing-six" element={<LandingSix />} />
        <Route path="/landing-seven" element={<LandingSeven />} />
        <Route path="/landing-eight" element={<LandingEight />} />
        <Route path="/landing-nine" element={<LandingNine />} />
        <Route path="/landing-ten" element={<LandingTen />} />
        {/* Inner Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/kegiatan/:slug" element={<KegiatanDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/layanan/perencanaan" element={<Perencanaan />} />
        <Route path="/layanan/pengelolaan" element={<Pengelolaan />} />
        <Route path="/layanan/monitoring-pintar" element={<Monitoring />} />
        <Route path="/video-demo" element={<VideoDemo />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
