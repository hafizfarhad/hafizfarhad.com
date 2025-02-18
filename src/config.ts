import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://hafizfarhad.com", // replace this with your deployed domain
  author: "Hafiz Farhad",
  profile: "https://hafizfarhad.com",
  desc: "Hafiz Farhad - Cyber Security Researcher, Programmer, & CTF Player.",
  title: "Hafiz Farhad",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/hafizfarhad/hafizfarhad.com/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/hafizfarhad",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hafizfarhad",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hi@hafizfarhad.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/0xhafizfarhad",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@0xhafizfarhad",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://github.com/hafizfarhad/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
];
