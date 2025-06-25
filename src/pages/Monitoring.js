import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import MonitoringList from "../components/Layanan/MonitoringList";

export default function Monitoring() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Monitoring Pelaksanaan Pengembangan Kompetensi"
        currentPage="Layanan Kami"
        href="/layanan"
      />
      <MonitoringList />
    </InnerPageLayout>
  );
}
