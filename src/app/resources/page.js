import styles from "./Tools.module.css";

export const metadata = {
  title: "Dev Resources Hub",
};

const resources = [
  {
    category: "AI Chatbot Agents",
    links: [
      { name: "Chat GPT", url: "https://chatgpt.com/" },
      { name: "DeepSeek AI", url: "https://chat.deepseek.com/" },
      { name: "Morphic SH", url: "https://www.morphic.sh/" },
      { name: "Chatbot Arena", url: "https://lmarena.ai/" },
      { name: "Fragments E2B", url: "https://fragments.e2b.dev/" },
      { name: "Perplexity", url: "https://www.perplexity.ai/" },
    ],
  },
  {
    category: "Resume Builder",
    links: [
      { name: "Resume Dive", url: "https://resumedive.com/" },
      { name: "ResuMake", url: "https://resumake.io/" },
      { name: "Enhancv", url: "https://enhancv.com/" },
      { name: "Nova Resume", url: "https://novoresume.com/" },
      { name: "Kickresume", url: "https://www.kickresume.com/" },
      { name: "Canva", url: "https://www.canva.com/resumes/" },
    ],
  },
  {
    category: "Portfolio Inspiration",
    links: [
      { name: "A K Singh Rajpoot", url: "https://aksinghrajpoot.com/" },
      { name: "Aabraham James", url: "https://seera.framer.website/" },
      { name: "Brittany Chiang", url: "https://brittanychiang.com/" },
      { name: "Ryan Warner", url: "https://ryanwarner.dev/" },
    ],
  },
  {
    category: "Roadmaps",
    links: [
      { name: "Front End", url: "https://roadmap.sh/frontend" },
      { name: "Back End", url: "https://roadmap.sh/backend" },
      { name: "JavaScript", url: "https://roadmap.sh/javascript" },
      { name: "React", url: "https://roadmap.sh/react" },
      { name: "DevOps", url: "https://roadmap.sh/devops" },
      { name: "Full Stack", url: "https://roadmap.sh/full-stack" },
      { name: "System Design", url: "https://roadmap.sh/system-design" },
    ],
  },
  {
    category: "VS Code Extensions",
    links: [
      {
        name: "Prettier",
        url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
      },
      {
        name: "ESLint",
        url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
      },
      {
        name: "Tailwind IntelliSense",
        url: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
      },
      {
        name: "Live Server",
        url: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
      },
      {
        name: "GitLens",
        url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
      },
    ],
  },
  {
    category: "APIs & Mock Services",
    links: [
      { name: "RapidAPI", url: "https://rapidapi.com/" },
      { name: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com/" },
      { name: "Reqres.in", url: "https://reqres.in/" },
      { name: "Mocky.io", url: "https://mocky.io/" },
      { name: "API Ninjas", url: "https://api-ninjas.com/" },
    ],
  },
  {
    category: "Code Practice Platforms",
    links: [
      { name: "LeetCode", url: "https://leetcode.com/" },
      { name: "HackerRank", url: "https://www.hackerrank.com/" },
      { name: "Codewars", url: "https://www.codewars.com/" },
      { name: "Exercism", url: "https://exercism.org/" },
      { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
    ],
  },
  {
    category: "Free Hosting / Deployment",
    links: [
      { name: "Vercel", url: "https://vercel.com/" },
      { name: "Netlify", url: "https://netlify.com/" },
      { name: "Render", url: "https://render.com/" },
      { name: "GitHub Pages", url: "https://pages.github.com/" },
      {
        name: "Firebase Hosting",
        url: "https://firebase.google.com/products/hosting",
      },
    ],
  },
  {
    category: "Learning Platforms",
    links: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      { name: "W3Schools", url: "https://www.w3schools.com/" },
      { name: "Frontend Masters", url: "https://frontendmasters.com/" },
      { name: "Codecademy", url: "https://www.codecademy.com/" },
    ],
  },
  {
    category: "UI Libraries & Frameworks",
    links: [
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "ShadCN/UI", url: "https://ui.shadcn.com/" },
      { name: "Chakra UI", url: "https://chakra-ui.com/" },
      { name: "Material UI", url: "https://mui.com/" },
    ],
  },
  {
    category: "Mockup Generator",
    links: [
      { name: "Website Mockup Generator", url: "https://websitemockupgenerator.com/" },
      { name: "TechSini Mockup", url: "https://techsini.com/multi-mockup/index.php" },
    ],
  },
];

export default function Resources() {
  return (
    <>
      <section className="tools">
        <div className="container">
          <div className="mb-12 bg-gradient-to-r from-blue-900 to-gray-800 p-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Developer Resources Hub
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Curated collection of tools, platforms, and references to boost
              your development workflow
            </p>
            <div className="flex space-x-4">
              <a
                href="#resources"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
              >
                Explore Resources
              </a>
            </div>
          </div>
          <div className="main">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              id="resources"
            >
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-800 hover:bg-gray-800/70 p-6 rounded-lg border-[1.5px] border-gray-700 hover:border-primary transition-all duration-300"
                >
                  <h2 className={`${styles.tools_title}`}>
                    {resource.category}
                  </h2>
                  <ul className={`${styles.tools_content} `}>
                    {resource.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url} target="_">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="tips mt-14">
            <h2 className="text-blue-400 border-b border-blue-400 inline-block mb-6">
              Developer Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-neon">
                <h3 className="font-bold text-lg mb-3 text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#facc15"
                    width="18"
                    height="18"
                    viewBox="0 0 384 512"
                  >
                    <path d="M192 0C86 0 0 86 0 192c0 61.8 31.4 116.2 79.2 149.1.6 1.3 1.3 2.5 2 3.7l.2.3c.4.7.8 1.4 1.2 2.1l.1.1c2.3 4 4.7 7.7 7.1 11.3 4.7 6.8 9.1 13.2 12.7 20.5H281.5c3.6-7.3 8-13.7 12.7-20.5 2.4-3.5 4.8-7.2 7.1-11.3l.1-.1c.4-.7.8-1.4 1.2-2.1l.2-.3c.7-1.2 1.4-2.4 2-3.7C352.6 308.2 384 253.8 384 192 384 86 298 0 192 0zM256 464c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-16h128v16z" />
                  </svg>
                  &nbsp;&nbsp;Productivity Boosters
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span>Use VS Code shortcuts to speed up your workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span>Set up code snippets for repetitive tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span>Learn keyboard navigation for your IDE</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-bold text-lg mb-3 text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f87171"
                    width="18"
                    height="18"
                    viewBox="0 0 448 512"
                  >
                    <path d="M448 360v24c0 39.8-32.2 72-72 72H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h216c13.3 0 24-10.7 24-24v-8H128c-53 0-96 43-96 96 0 8.8 7.2 16 16 16h368c17.7 0 32-14.3 32-32V360zM96 0C78.3 0 64 14.3 64 32v288c17-10.2 36.8-16 58-16h262c8.5 0 16.7 1.2 24.5 3.3 1.1-5.3 1.5-10.8 1.5-16.3V32c0-17.7-14.3-32-32-32H96z" />
                  </svg>
                 &nbsp;&nbsp; Learning Resources
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span>Follow the official documentation first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span>Build projects to reinforce learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span>
                      Teach concepts to others to deepen understanding
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
