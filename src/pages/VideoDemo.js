import React from "react";
import InnerPageLayout from "../components/Layout/InnerPageLayout";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb";
import VideoList from "../components/Video/VideoList";

export default function VideoDemo() {
  return (
    <InnerPageLayout>
      <BreadCrumb pageTitle="Video Demo" currentPage="Video Demo" href="/" />
      <VideoList />
    </InnerPageLayout>
  );
}
