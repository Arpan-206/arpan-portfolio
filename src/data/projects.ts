export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Clubs Directory (Hack Club)",
    techs: ["ReactJS (NextJS)", "FastAPI", "OpenStreetMap"],
    link: "https://github.com/hackclub/clubsdirectory",
  },
  {
    title: "Coconut",
    techs: ["ReactJS (NextJS)", "Typer", "AI"],
    link: "https://github.com/Arpan-206/coconut_cli",
  },
  {
    title: "Hashpoll",
    techs: ["Svelte", "AWS Amplify", "FastAPI", "Typer"],
    link: "https://github.com/Arpan-206/hashpoll-amplify",
  },
  {
    title: "Formee",
    techs: ["Python", "Typer", "Hasura"],
    link: "https://github.com/Arpan-206/formee",
  },
  {
    title: "Jams API (Hack Club)",
    techs: ["FastAPI", "OpenAI", "Airtable"],
    link: "https://github.com/Arpan-206/jams-api",
  },
];

export default projects;
