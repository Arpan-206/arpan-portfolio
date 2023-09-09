type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "arpanpandey.aps@gmail.com",
  title: "Hello, I’m Arpan 👋",
  // profile: "/profile.webp",
  description:
    "I'm a *full-stack developer* based in India. I enjoy building things that live on the internet, whether that be websites, applications, CLIs, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/ArpanHrbt",
    },
    {
      label: "Github",
      link: "https://github.com/Arpan-206",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/arpan-pandey/",
    },
  ],
};

export default presentation;
