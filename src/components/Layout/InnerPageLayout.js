import React from "react";
import DemoHeaderOne from "./Header/DemoHeader/DemoHeaderOne";
import MobileHeader from "./Header/DemoHeader/DemoHeaderMobile";
import FooterTwo from "./Footer/FooterTwo";

export default function InnerPageLayout({ children }) {
  return (
    <div>
      <DemoHeaderOne />
      <MobileHeader />
      {children}
      <FooterTwo no_border />
    </div>
  );
}
