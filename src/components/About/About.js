import style from "./About.module.css";
import Clock from "./Clock";

export default function Aboutcomponent() {
  return (
    <>
      <section className="about_me" id="about-me">
        <div className="container">
          <h2 className="numberedHeading">About Me</h2>
          <p className="font-poppins mt-6">
            Hello! I&apos;m <span className="text-primary font-semibold">Ashok</span>, a passionate  
            <span className="text-primary font-semibold"> Software Developer & UI/UX Enthusiast</span> based in India.  
            I have a deep interest in web development, modern UI/UX design, and crafting seamless digital experiences.  
            I also enjoy writing tech blogs and sharing knowledge with the developer community.
          </p>

          <p className="mt-4">
            I specialize in designing and developing **high-performance, responsive, and interactive websites.  
            My expertise includes React.js, Next.js, Angular, and cloud technologies.  
            If you&apos;re looking for a modern and scalable solution, feel free to reach out to me!
          </p>

          <p className="mt-4">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <div>
            <ul className={` ${style.skillsList} grid grid-cols-2 relative font-mono text-sm leading-7`}>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>WordPress</li>
              <li>Office 365</li>
              <li>Cloud Technologies</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
