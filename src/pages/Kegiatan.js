import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import CtaSeven from "../components/Cta/CtaSeven";
import KegiatanList from "../components/Projects/kegiatanList";

export default function Kegiatan() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Kegiatan Terbaru"
        desc="Dokumentasi kegiatan bersama Pengguna"
        currentPage="Kegiatan"
        href="/projects"
      />
      <KegiatanList />

      <CtaSeven />
    </InnerPageLayout>
  );
}
