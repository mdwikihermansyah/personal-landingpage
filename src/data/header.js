export const HEADER_DESKTOP_LINKS = [
  {
    label: "Beranda",
    path: "/",
    hasDropdown: false,
  },
  {
    label: "Informasi Kajian",
    path: "#",
    hasDropdown: true,
    dropdownLinks: [
      { label: "Perencanaan", path: "/layanan/perencanaan" },
      { label: "Pengelolaan", path: "/layanan/pengelolaan" },
      { label: "Monitoring Pintar", path: "/layanan/monitoring-pintar" },
    ],
  },
  {
    label: "Karya Tulis",
    path: "#",
    hasDropdown: true,
    dropdownLinks: [
      { label: "Kegiatan", path: "/kegiatan" },
      { label: "Video Demo", path: "/video-demo" },
    ],
  },
  {
    label: "Profil",
    path: "/teams",
    hasDropdown: false,
  },
];

export const HEADER_MOBILE_LINKS = [
  { title: "Beranda", href: "/" },
  {
    title: "Kajian",
    subMenu: [
      { title: "Perencanaan", href: "/projects" },
      { title: "Pengelolaan", href: "/project-details/" },
      { title: "Monitoring Pintar", href: "/service-details" },
    ],
  },
  {
    title: "Karya Tulis",
    subMenu: [
      { title: "Video", href: "/projects" },
      { title: "Kegiatan", href: "/kegiatan" },
    ],
  },
  { title: "Profil", href: "/teams" },
];
