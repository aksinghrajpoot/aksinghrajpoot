import style from "./About.module.css";
import Clock from "./Clock";

export default function Aboutcomponent() {
  return (
    <>
      <section className="about_me" id="about-me">
        <div className="container">
          <h2 className="numberedHeading ">About Me</h2>

          <p className="font-poppins mt-6">
            Hello! My name is Ashok and I am a software developer located in
            India, I have a serious passion for web devlopment, designs and
            interactive user experiences. I also love writing blogs and creating
            amazing tech contents.
          </p>
          <p>
            I build websites and i also can build website for you, for any kind
            of project feel free to consult with me thru my social handles.I am
            specialized of creating websites with modern technologies like
            react, angular, nextjs and cloud technologies.
          </p>
          <p>
            Here are a few technologies I&lsquo;ve been working with recently:
          </p>
          <div>
            <ul
              className={` ${style.skillsList} grid grid-cols-2 relative font-mono text-sm leading-7`}
            >
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Wordpress</li>
              <li>Python</li>
              <li>Office 365</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
