import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGitlab,
  FaLinkedin,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiJquery, SiJavascript } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import work1 from "./assets/work1.png";
// import work2 from "./assets/work2.png";
// import work3 from "./assets/work3.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/samyak-agarwal-59ab671b6/",
  },
  {
    id: 2,
    icon: <SiLeetcode/>,
    link: "https://leetcode.com/samyak_agarwal3000/",                // change herre leetcode and other 
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Samyak Agarwal",
  },
  {
    id: 2,
    icon: <SiLeetcode />,         // change hereererer eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    key: "Leetcode",
    value: "@samyak_agarwal3000",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "samyakagarwal7may@gmail.com",
  },
];

export const icons = [
  {
    id: 1,
    icon:  <FaHtml5 />,
    bio: "HTML"
  },
  {
    id: 2,
    icon:  <FaCss3 />,
    bio: "CSS"
  },
  {
    id: 3,
    icon:  <FaSass />,
    bio: "SASS"
  },
  {
    id: 4,
    icon:  <FaJava />,
    bio: "Java"
  },
  {
    id: 5,
    icon:  <SiJavascript />,
    bio: "JavaScript"
  },
  // {
  //   id: 6,
  //   icon:  <SiTypescript />,
  //   bio: "Typesript"
  // },
  {
    id: 7,
    icon:  <FaReact />,
    bio: "ReactJS"
  },
  // {
  //   id: 8,
  //   icon:  <TbBrandNextjs />,
  //   bio: "NextJS"
  // },
 
  {
    id: 9,
    icon:  <TbBrandTailwind />,
    bio: "Tailwind CSS"
  },
 
];

export const experiences = [
  {
    id: 1,
    year: "June 2023 - August 2023",
    position: "Front-End Developer",
    Institution: "LNMIIT, India",
  },
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "ReactJS 1",
    category: "ReactJS",
    gitLab: "https://github.com/asamyakagarwal/car-rental.git",
    demo: "https://car-rental-126ma5ppc-samyaks-projects-9fe6f719.vercel.app",
  }
  // {
  //   id: 2,
  //   img: work2,
  //   name: "ReactJS 2",
  //   category: "JavaScript",
  //   gitLab: "https://gitlab.com/stefantrenda/brainsterchallenges_stefantrendafilovskife7/-/tree/Challenge_19-React",
  //   demo: "https://music-app-steph-dev.vercel.app/",
  // },
  
  // {
  //   id: 3,
  //   img: work3,
  //   name: "JavaScript",
  //   category: "NextJs",
  //   gitLab: "https://github.com/stefantrenda/responsive-site",
  //   demo: "https://responsive-stephdev.netlify.app/",
  // }

];

export const workNavs = ["All", "ReactJS", "JavaScript", "NextJS"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Rajasthan, India",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "samyakagarwal7may@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 9351153081",
  },
];
