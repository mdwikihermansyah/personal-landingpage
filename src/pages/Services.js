import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import AboutService from "../components/Layout/Footer/AboutService";
import ServiceMain from "../components/Services/ServiceMain";
import ServiceFaq from "../components/Services/ServiceFaq";

export default function Services() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="Services" currentPage="Service" href="/services" />
      <AboutService />
      <ServiceMain />
      <ServiceFaq />
    </InnerPageLayout>
  );
}
