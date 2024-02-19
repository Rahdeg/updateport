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
    gitURL: "https://github.com/Rahdeg/twitch",
  },
  {
    id: `food-${Date.now()}`,
    name: "Advance Organization Todo",
    imgSrc: "/taskys.png",
    gitURL: "https://github.com/Rahdeg/my-todo",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Food delivery App",
    imgSrc: "/food.png",
    gitURL: "https://github.com/Rahdeg/foodtribes",
  },
  {
    id: `openai-${Date.now()}`,
    name: "OpenAI",
    imgSrc: "/course.png",
    gitURL: "https://github.com/Rahdeg/ilearn",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Movie App",
    imgSrc: "/movie.png",
    gitURL: "https://github.com/Rahdeg/moviebox",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Gallery App",
    imgSrc: "/picture3.png",
    gitURL: "https://github.com/Rahdeg/hngx3",
  },
];
