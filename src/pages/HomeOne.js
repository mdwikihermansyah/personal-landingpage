import React from "react";
import HeroOne from "../components/Hero/HeroOne";
import DemoHeaderOne from "../components/Layout/Header/DemoHeader/DemoHeaderOne";
import MobileHeader from "../components/Layout/Header/DemoHeader/DemoHeaderMobile";
import PageLayout from "../components/Layout/PageLayout";
import FAqOne from "../components/FaqCom/FaqOne";
import LogoSliderTwo from "../components/ClientLogoSlider/LogoSliderTwo";
import AboutTwo from "../components/About/AboutTwo";
import TestimonianTwo from "../components/Testimonials/TestimonialTwo";
import FooterTwo from "../components/Layout/Footer/FooterTwo";
import CtaTwo from "../components/Cta/CtaTwo";
import { LAYANAN_DATA } from "../data/layanan";
import LayananComp from "../components/CaseStudies/LayananComp";
import Benefit from "../components/Services/Benefit";
import HasilPenerapan from "../components/WorkProcess/HasilPenerapan";

export default function HomeOne() {
  return (
    <PageLayout>
      <DemoHeaderOne />
      <MobileHeader />
      <HeroOne />
      <LayananComp data={LAYANAN_DATA} />
      <LogoSliderTwo />
      <AboutTwo />

      <div
        className="home-four relative bg-[#0a0118] w-full overflow-x-hidden py-20 xl:p-28 
       mb-10 lg:mb-20"
      >
        <Benefit />
      </div>

      <HasilPenerapan />

      <TestimonianTwo />
      <FAqOne />
      <CtaTwo />
      <FooterTwo />
    </PageLayout>
  );
}
