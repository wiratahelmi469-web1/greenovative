export interface LinkItem {
  title: string;
  url?: string;
  children?: {
    title: string;
    url: string;
  }[];
}

const links: LinkItem[] = [
  {
    title: "Our Profile",
    url: "https://our-company-seven.vercel.app/",
  },
  {
    title: "Chat WhatsApp",
    url: "https://wa.me/6285286197108",
  },
  {
    title: "TikTok",
    children: [
      {
        title: "Flora Nature",
        url: " https://vt.tiktok.com/ZS9AADN3ERWUf-1looX/",
      },
      {
        title: "Exotic Plants.id",
        url: "https://vt.tiktok.com/ZS9AAAvSmYFd5-gIVPE/",
      },
      {
        title: "Kebun tropis",
        url: " https://vt.tiktok.com/ZSqwLvMT4/?page=Mall",
      },
      {
        title: "Plantsspace.id",
        url: "https://vt.tiktok.com/ZS9AADkk7Rg63-R2qjW/  ",
      },
    ],
  },
  {
    title: "Tokopedia",
    children: [
      {
        title: "Official Store",
        url: "#",
      },
      {
        title: "Tanaman Hias",
        url: "#",
      },
      {
        title: "Pot & Media",
        url: "#",
      },
      {
        title: "Project",
        url: "#",
      },
    ],
  },
];

export default links;