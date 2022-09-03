import Image from "next/image";
import style from "./About.module.css";

function About() {
  return (
    <>
      <section className="about_me">
        <div className="container">
          <h2 className="numberedHeading">About Me</h2>
          <div className="grid grid-cols-12">
            <div className="body font-poppins col-span-7">
              <p className="font-poppins">
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients. I also recently launched a
                course that covers everything you need to build a web app with
                the Spotify API using Node & React.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div className="col-span-5 mx-auto p-0">
              <div
                className={`wrapper bg-primary rounded-md relative w-[250px] h-[250px] ${style.profileImg}`}
              >
                <Image
                  className="filter grayscale mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal rounded-md h-full"
                  src="/static/profile.png"
                  width={250}
                  height={250}
                  layout="responsive"
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
