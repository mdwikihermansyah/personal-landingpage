import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import TeamMain from "../components/Team/TeamMain";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import CtaSeven from "../components/Cta/CtaSeven";

export default function Teams() {
  return (
    <InnerPageLayout>
      <BreadCrumb
        pageTitle="Pengenalan Tim Kami"
        currentPage="Team Kami"
        href="/teams"
      />
      <TeamMain />
      <CtaSeven />
    </InnerPageLayout>
  );
}
