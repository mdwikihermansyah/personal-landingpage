import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import PerencanaanList from "../components/Layanan/PerencanaanList";

export default function Perencanaan() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Perencanaan Pengembangan Kompetensi"
        currentPage="Layanan Kami"
        href="/layanan"
      />
      <PerencanaanList />
    </InnerPageLayout>
  );
}
