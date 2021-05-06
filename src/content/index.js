export default {
  nav: {
    logo: "MS",
    links: [
      { text: "knowledge", to: "mywork" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    img:process.env.PUBLIC_URL + "/assets/profile.jpg",
    imgPlaceholder:
      "M",
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
      "Feel free to connect with me for any project development or any IT consultacy, I will definitely reach out to you.",
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
    imgPlaceholder:
      "m",
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
    desc: `Web Stack I use for web development is PERN stack, basically I have been working in React Js from 2019 and for large scalable database I love PostgreSql, also for NOSQL database I am familier with MongoDB and Firebase.`,
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
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },

  game: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/unity.png",
        alt: "flutter",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/illu.png",
        alt: "android",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/photoshop.png",
        alt: "node",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/blender.png",
        alt: "express",
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};
