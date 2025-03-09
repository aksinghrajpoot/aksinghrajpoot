import styles from "./Tools.module.css";

export const metadata = {
  title: "Dev Resources",
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
    links: [{ name: "Resume Dive", url: "https://www.resumedive.com/" }],
  },
  {
    category: "Portfolio Inspiration",
    links: [{ name: "Aabraham James", url: "https://seera.framer.website/" }],
  },
];

export default function Resources() {
  return (
    <>
      <section className="tools">
        <div className="container">
          <h1 className="text-primary">Dev Resources</h1>
          <hr className="border-t-2 border-primary w-[70px] mt-3" />
          <div className="main">
            {resources.map((resource, index) => (
              <div key={index}>
                <h2 className={`${styles.tools_title}`}>{resource.category}</h2>
                <ul className={`${styles.tools_content} ${resource.category === "Resume Builder" ? "list-decimal list-inside" : ""}`}>
                  {resource.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} target="_">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
