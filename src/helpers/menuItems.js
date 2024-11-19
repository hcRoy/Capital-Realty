import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

export const menuItems = [
  {
    key: "home",
    label: "Home",
    path: "/",
  },
  {
    key: "our-projects",
    label: "Our Projects",
    path: "/projects",
  },
  {
    key: "about-us",
    label: "About",
    path: "/about",
  },
  {
    key: "contact-us",
    label: "Contact Us",
    path: "/contact_us",
  },
];

export const quickLinks = [
  {
    key: "home",
    label: "Home",
    path: "/",
  },
  {
    key: "about",
    label: "About",
    path: "/about",
  },
  {
    key: "our_projects",
    label: "Our Projects",
    path: "/projects",
  },
  {
    key: "contact_us",
    label: "Contact Us",
    path: "/contact_us",
  },
];

export const followUs = [
  {
    key: "linkedin",
    label: "LinkedIn",
    path: "https://www.linkedin.com/company/capital-realty/",
    icon: FaYoutube,
  },
  {
    key: "facebook",
    label: "Facebook",
    path: "https://www.facebook.com/capitalrealty/",
    icon: RiFacebookFill,
  },
  {
    key: "instagram",
    label: "Instagram",
    path: "https://www.instagram.com/capitalrealty/",
    icon: FaInstagram,
  },
];
