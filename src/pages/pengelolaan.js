import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import PengelolaanList from "../components/Layanan/PengelolaanList";

export default function Pengelolaan() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Pengelolaan DIKLAT"
        currentPage="Layanan Kami"
        href="/layanan"
      />
      <PengelolaanList />
    </InnerPageLayout>
  );
}
