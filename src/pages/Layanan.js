import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import LayananList from "../components/Layanan/LayananList";

export default function Layanan() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle=" Perencanaan"
        currentPage="Layanan Kami"
        href="/layanan"
      />
      <LayananList />
    </InnerPageLayout>
  );
}
