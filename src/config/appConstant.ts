import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const APP_CONSTANT = {
  FOOTER_CONSTANT: {
    NAME: "Sunil Kumar Yadav",
    YEAR: `©2020-${new Date().getFullYear()}`,
    SOCIAL_LIST: [
      {
        component: AiFillLinkedin,

        link: "https://www.linkedin.com/in/123sunil/",
      },
      {
        component: AiFillGithub,

        link: "https://github.com/SunilKuYadav",
      },
      {
        component: AiFillYoutube,

        link: "https://youtube.com/channel/UCpV9B_ntEwn1lmJFKqAkTkg",
      },
      {
        component: AiFillTwitterSquare,

        link: "https://twitter.com/123sunilkr?t=EaQyWzrUV1PL8rtNIYPg9A&s=09",
      },
      {
        component: AiFillInstagram,
        link: "https://www.instagram.com/_om_rudra_/",
      },
    ],
  },
};

export { APP_CONSTANT };
