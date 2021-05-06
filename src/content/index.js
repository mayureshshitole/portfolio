export default {
  nav: {
    logo: "MS",
    links: [
      { text: "knowledge", to: "mywork" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + "/assets/profile.jpg",
    imgPlaceholder: "M",
    text: ["Hi!", "It's me Mayuresh.", "I am "],
    typical: [
      "Full Stack Web developer ",
      2000,
      "Mobile App and Game Developer",
      2000,
      "Graphics Designer",
      2000,
    ],
    btnText: "Discover More",
  },
  contact: {
    title: "Ping Me!",
    desc:
      "Feel free to connect with me for any project development or any IT consultacy, I have couple of friends we work as a team on every projects. Ping me I will definitely reach out to you.",
    socials: [
      {
        alt: "facebook",
        img: process.env.PUBLIC_URL + "/assets/facebook.png",
        linkto: "https://www.facebook.com/mayuresh.shitole.1",
      },
      {
        alt: "github",
        img: process.env.PUBLIC_URL + "/assets/github.png",
        linkto: "https://github.com/mayureshshitole",
      },
      {
        alt: "link",
        img: process.env.PUBLIC_URL + "/assets/link.png",
        linkto: "https://www.linkedin.com/in/mayuresh-s-580a36105/",
      },
      {
        alt: "gmail",
        img: process.env.PUBLIC_URL + "/assets/gmail.png",
        linkto: "mailto:mayureshshitole@gmail.com",
      },
    ],
    profileimg: process.env.PUBLIC_URL + "/assets/profile2.png",
    imgPlaceholder: "m",
  },

  stack: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/node.png",
        alt: "node",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/express.png",
        alt: "express",
      },
      {
        img: process.env.PUBLIC_URL + "/logo512.png",
        alt: "react",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/html.png",
        alt: "html",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/mongo.png",
        alt: "mongodb",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/postgress.png",
        alt: "postgress",
      },
    ],
    desc: `Web Stack I use for web development is PERN stack, basically I have been working in React Js from 2019 and for large scalable database I love PostgreSql, also for NOSQL database I am familier with MongoDB and Firebase. No issue with PHP HTML CSS but single page applications are more optimized thats why I use React Js. Server side I use Node Js. New technology I am Learning in 2021 is Next Js`,
  },

  mobile: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/flutter.png",
        alt: "flutter",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/android.png",
        alt: "android",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/node.png",
        alt: "node",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/express.png",
        alt: "express",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/firebase.png",
        alt: "mongodb",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/postgress.png",
        alt: "postgress",
      },
    ],
    desc: `I have been developing Android apps from 2017 I started as a Native Android developer but later on for simple apps with good UI I shifted to flutter and I really enjoyed that. For database connectivity in mobile apps I prefers Firebase but for sometime I use PostgreSql instead of NOSQL databases. For server side I use Node Js. I am familer with MySql but I dont prefer it over PostgreSql`,
  },

  game: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/unity.png",
        alt: "unity",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/illu.png",
        alt: "illustator",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/photoshop.png",
        alt: "photoshop",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/blender.png",
        alt: "blender",
      },
    ],
    desc: `Strange but I was Graphic designer before I stepped into Game development. Before Web and Mobile app developent I was into the Game development environment. I use Unity with C# and for 2D assets Adobe Illustratorand Photoshop, I have worked as a freelancer for MNC to develop their 3D assets in Blender(Trust me they just paid and didnt gave any certificate for that ;)`,
  },
};
