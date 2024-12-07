import Image from "next/image";
import style from "./About.module.css";

function About() {
  return (
    <>
      <section className="about_me" id="about-me">
        <div className="container">
          <h2 className="numberedHeading ">About Me</h2>
          <div className="grid grid-cols-12">
            <div className="body font-poppins col-span-12 md:col-span-7">
              <p className="font-poppins mt-6">
                Hello! My name is Ashok and I am a software developer located in
                India, I have a serious passion for web devlopment, designs and
                interactive user experiences. I also love writing blogs and
                creating amazing tech contents.
              </p>
              <p>
                I build websites and i also can build website for you, for any
                kind of project feel free to consult with me thru my social
                handles.I am specialized of creating websites with modern
                technologies like react, angular, nextjs and cloud technologies.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <div>
                <ul className={` ${style.skillsList} grid grid-cols-2 relative font-mono text-sm leading-7`}>
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
            <div className="col-span-12 py-16 md:py-0 md:col-span-5 mx-auto p-0">
              <div
                className={`wrapper bg-primary rounded-md relative w-[250px] h-[250px] ${style.profileImg}`}
              >
                <Image
                  className="filter grayscale mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal rounded-md h-full"
                  src="/static/profile.png"
                  width={250}
                  height={250}
                  layout="responsive"
                  alt="A K Singh"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
