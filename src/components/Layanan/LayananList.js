import React from "react";
import ServiceOne from "../Services/ServiceOne";
import LayananComp from "../CaseStudies/LayananComp";
import { LAYANAN_DATA } from "../../data/layanan";

export default function LayananList() {
  return (
    <div className="my-16 theme-container mx-auto">
      {/* <!-- single blog start --> */}
      <div className="w-full ">
        <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px]">
          Perencanaan Pengembangan Kompetensi
        </h1>
        <p className="text-paragraph  sm:text-[20px] mt-[22px] mb-[50px]">
          Musrenbangkom (Musyawarah Perencanaan Pembangunan Komunitas/Kecamatan)
          adalah forum resmi bagi masyarakat untuk menyampaikan aspirasi dan
          usulan pembangunan secara terbuka. ASN berperan sebagai fasilitator,
          pencatat, sekaligus penghubung antara masyarakat dengan pemerintah
          daerah agar program pembangunan lebih tepat sasaran.
        </p>

        <img
          src="../assets/images/blogs/1.webp"
          alt=""
          className="object-cover w-full rounded-xl"
        />
      </div>

      <div>
        <ServiceOne />

        <p className="text-paragraph  sm:text-[20px]  mb-[50px]">
          Melalui Musrenbangkom, ASN dapat meningkatkan kemampuan komunikasi
          publik secara efektif, menjadi jembatan penghubung antara masyarakat
          dan pemerintah, serta mendukung penyusunan program kerja yang
          benar-benar sesuai dengan kebutuhan di lapangan. Selain itu, kehadiran
          ASN di Musrenbangkom juga mendorong partisipasi Perangkat Daerah
          secara inklusif, sehingga tercipta perencanaan pembangunan yang lebih
          transparan, akuntabel, dan berpihak pada kepentingan bersama.
        </p>
      </div>

      <LayananComp data={LAYANAN_DATA} no_title />
    </div>
  );
}
