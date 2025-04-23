// import images
import Hero_person from "./assets/images/Hero/person.png";

import ae from "./assets/images/Skills/ae.png";
import ai from "./assets/images/Skills/ai.png";
// import css from "./assets/images/Skills/css.png";
// import reactjs from "./assets/images/Skills/react.png";
// import nodejs from "./assets/images/Skills/node.png";
// import native from "./assets/images/Skills/native.png";

import services_logo1 from "./assets/images/Services/logo1.png";
// import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import image1 from "./assets/images/Projects/img1.png";
import image2 from "./assets/images/Projects/img2.png";
// import project3 from "./assets/images/Projects/img3.png";
// import project4 from "./assets/images/Projects/img4.png";
// import project5 from "./assets/images/Projects/img5.png";
import project6 from "./assets/images/Projects/outro.mp4";
import project7 from "./assets/images/Projects/Biglogo.mp4";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
// import { BsGithub } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Motion Designer",
    firstName: "OLEKSII",
    LastName: "ANDRIUSHCHENKO",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Over 1 year of motion designer experience",
      },
      {
        count: "50+",
        text: "Projects that I have done",
      },
    ],
  },
  skills: {
    title: "Tech Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "After Effects",
        // para: "Proficient in AE",
        logo: ae,
      },
      {
        name: "Adobe Illustrator",
        // para: "Proficient in CSS",
        logo: ai,
      },
      // {
      //   name: "JavaScript",
      //   para: "Experienced with JavaScript",
      //   logo: js,
      // },
      // {
      //   name: "React js",
      //   para: "Skilled in React.js",
      //   logo: reactjs,
      // },
      // {
      //   name: "ReactNative",
      //   para: "Skilled in React Native",
      //   logo: native,
      // },
      // {
      //   name: "Node js",
      //   para: "Experienced with Node.js",
      //   logo: nodejs,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Soft Skills",
    subtitle: "MY SKILLS",
    service_content: [
      {
        title: "Stress resistance",
        para: "My ability to effectively manage emotions and behavior during stressful situations allows me to work productively and without tension even in challenging conditions. This skill also helps prevent burnout, ensuring a balanced workload and managing emotional reactions to prolonged work.",
        logo: services_logo1,
      },
      // {
      //   title: "Teamwork",
      //   para: "My teamwork skills enable me to collaborate effectively with various teams, share knowledge and experience, respect the opinions of others, improve the quality of my decisions, increase productivity, and achieve the company’s overall goals.",
      //   logo: services_logo2,
      // },
      {
        title: "Reliability",
        para: "My reliability skills help me complete tasks in a timely and accurate manner, comply with rules, be accountable for my actions, respect confidentiality, and maintain a high level of professionalism, which increases the trust of management, colleagues, and clients and ensures success in my work.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY OWN PROJECTS",
    image: Hero_person,
    project_content: [
      
      {
        title: "Web store",
        video: project7,
        image: image1
        // link: "https://smisyuk4.github.io/yummy-react-frontend/",
      },
      {
        title: "Mobile App",
        video: project6,
        image: image2,
        // link: "https://asmolovskiyandrey.github.io/command-project//",
      },
      // {
      //   title: "Filmoteka",
      //   image: project2,
      //   link: "https://olexiia.github.io/command-project-JS/",
      // },
      // {
      //   title: "Image Finder",
      //   image: project3,
      //   link: "https://olexiia.github.io/goit-js-hw-11/",
      // },
      // {
      //   title: "Weather-searcher",
      //   image: project4,
      //   link: "https://olexiia.github.io/Weather-searcher/",
      // },
      // {
      //   title: "Web Studio",
      //   image: project5,
      //   link: "https://olexiia.github.io/goit-markup-hw-08/",
      // },
      // {
      //   title: "ReactNative Mobile app",
      //   image: project6,
      //   link: "https://expo.dev/@olexii/mynewproject?serviceType=classic&distribution=expo-go",
      // },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "Here are some feedbacks from my clients.",
    testimonials_content: [
      {
        review:
          "“Oleksii absolutely nailed our logo animation. It was smooth, stylish, and matched our brand perfectly. We couldn’t have asked for a better result!”",
        img: avatar1,
        name: "VOLODYMYR POBEDYNSKYI",
      },
      {
        review:
          "“The intro video Oleksii created gave our content a professional edge. It’s exactly what we needed to grab attention from the very first second!”",
        img: avatar2,
        name: "HUBSKA NASTIA",
      },
      {
        review:
          "“His outro animation was clean, modern, and left a lasting impression. It tied our video together perfectly and boosted our brand presence.”",
        img: avatar3,
        name: "ANDRII ASMOLOVSKYI",
      },
      {
        review:
          "“Working with Oleksii was a breeze. He delivered top-quality animations — logo, intro, and outro — all ahead of schedule. Highly recommend!”",
        img: avatar4,
        name: "MOROZYNSKYI MAKS",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR IDEAS",
    image1: Hireme_person,
    para: "I'm a Motion Designer who turns ideas into eye-catching animations. From logos to intros and outros — I help bring your vision to life with motion that speaks.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "incretiblealex@gmail.com",
        icon: GrMail,
        link: "mailto:incretiblealex@gmail.com",
      },
      {
        text: "+38 098 216 56 99",
        icon: MdCall,
        link: "https://t.me/OlexiiA",
      },
      {
        text: "@OlexiiA",
        icon: FaTelegram,
        link: "https://t.me/OlexiiA",
      },
      // {
      //   text: "My GitHub profile",
      //   icon: BsGithub,
      //   link: "https://github.com/OlexiiA",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
