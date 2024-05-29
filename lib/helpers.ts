import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  FaX,
} from "react-icons/fa6";

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    url: "https://m.facebook.com/profile.php/?id=100003154060853&name=xhp_nt__fb__action__open_user",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/raheemadegbite/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    url: "https://github.com/Rahdeg",
    color: "#fff",
  },
  {
    id: `x-${Date.now()}`,
    Icon: FaX,
    url: "https://twitter.com/Walett25",
    color: "#ff0000",
  },
];

export const ProjectsData = [
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Raw Stream",
    imgSrc: "/raw.png",
    url: "https://live-raw.vercel.app/",
    gitURL: "https://github.com/Rahdeg/twitch",
    features: [
      "Authentication",
      "Live Stream",
      "LiveChat",
      "Social(Followers,Block)",
    ],
  },
  {
    id: `finance-${Date.now()}`,
    name: "Advance Finance Manager",
    imgSrc: "/finance.png",
    url: "https://finance-brown-delta.vercel.app/",
    gitURL: "https://github.com/Rahdeg/finance",
    features: [
      "PayWall",
      "Bank account syncing",
      "Upload CSV files",
      "Different chart types",
    ],
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Food delivery App",
    imgSrc: "/food.png",
    url: "https://restaurant-10db5.web.app/",
    gitURL: "https://github.com/Rahdeg/foodtribes",
    features: ["Authentication", "PayWall", "Delivery", "Admin"],
  },
];
