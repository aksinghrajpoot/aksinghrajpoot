import styles from "./Tools.module.css"

export const metadata = {
  title: 'Dev Resources',
}

export default function Resources() {
  return (
    <>
      <section className="tools">
        <div className="container">
          <h1 className="text-4xl font-bold text-white">Dev Resources</h1>
          <hr className="border-t-2 border-white w-[70px] mt-3" />
          <div className="main">
            <h2 className={`${styles.tools_title}`}>AI Chatbot Agents</h2> 
            <ul className={`${styles.tools_content} list-decimal list-inside`}>
                <li><a href="https://chatgpt.com/" target="_">Chat GPT</a></li>
                <li><a href="https://chat.deepseek.com/" target="_">DeepSeek AI</a></li>
                <li><a href="https://www.morphic.sh/" target="_">Morphic SH</a></li>
                <li><a href="https://lmarena.ai/" target="_">Chatbot Arena</a></li>
                <li><a href="https://fragments.e2b.dev/" target="_">Fragments E2B</a></li>
                <li><a href="https://www.perplexity.ai/" target="_">Perplexity</a></li>
            </ul>
            <h2 className={`${styles.tools_title}`}>Resume Builder</h2> 
            <ul className={`${styles.tools_content} list-decimal list-inside`}>
                <li><a href="https://www.resumedive.com/" target="_">Resume Dive</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
