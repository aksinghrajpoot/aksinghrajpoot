import style from "./Homepage.module.css";

import { CiLinkedin } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";

import Clock from "./Clock";
import Typewriter from "./Typewriter";

export function Hero() {
  return (
    <section className={`${style.hero} p-0`}>
      <div className="container py-4 lg:py-0 lg:min-h-[calc(100vh-75px)] 2xl:min-h-[calc(70vh-75px)] flex items-center">
        <div className="grid grid-cols-12">
          <div className="order-1 lg:order-0 col-span-12 lg:col-span-7 flex flex-col justify-center">
            <div className="text-primary mb-3 font-secondary text-lg animate-pulse">
              Hey, I&lsquo;m
            </div>
            <h1 className="text-light text-3xl lg:text-5xl font-medium font-primary">
              A K Singh Rajpoot
            </h1>
            <span className="lg:text-lg font-medium mt-2 text-secondary">
              <Typewriter />
            </span>
            <p className="py-3 font-secondary">
              I&lsquo;m a software engineer & creative developer passionate
              about building intuitive, accessible, and high-performance
              applications. Whether it&lsquo;s designing sleek interfaces or
              developing robust backend systems, I turn ideas into reality with
              precision & creativity.
            </p>
            <div className="flex">
              <a target="_" href="https://linkedin.com/in/aksinghrajpoot">
                <button className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                  <span
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
               bg-slate-900 px-3 backdrop-blur-3xl gap-2 py-2 text-primary"
                  >
                    Let&lsquo;s connect <CiLinkedin className="text-xl" />
                  </span>
                </button>
              </a>
              <a
                className="ms-3"
                target="_"
                href="https://drive.google.com/file/d/1t2gOsBEWutcJXB6kzygufHFFn4gp-Ob5/view?usp=sharing"
              >
                <button className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                  <span
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
               bg-slate-900 px-3  backdrop-blur-3xl gap-2 py-2 text-secondary"
                  >
                    Resume <FiDownload className="h-5" />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="order-0 lg:order-1 col-span-12 lg:col-span-5 flex justify-center items-center">
            <Clock />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Aboutcomponent() {
  return (
    <>
      <section className="about_me" id="about-me">
        <div className="container">
          <h2 className={`${style.title}`}>About Me</h2>
          <p className="font-poppins mt-6">
            Hello! I&apos;m{" "}
            <span className="text-primary font-semibold">Ashok</span>, a
            passionate
            <span className="text-primary font-semibold">
              {" "}
              Software Developer & UI/UX Enthusiast
            </span>{" "}
            based in India. I have a deep interest in web development, modern
            UI/UX design, and crafting seamless digital experiences. I also
            enjoy writing tech blogs and sharing knowledge with the developer
            community.
          </p>

          <p className="mt-4">
            I specialize in designing and developing **high-performance,
            responsive, and interactive websites. My expertise includes
            React.js, Next.js, Angular, and cloud technologies. If you&apos;re
            looking for a modern and scalable solution, feel free to reach out
            to me!
          </p>

          <p className="mt-4">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <div>
            <ul
              className={` ${style.skillsList} grid grid-cols-2 relative font-mono text-sm leading-7`}
            >
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

export function ExperienceHome() {
  return (
    <>
      <section className="experience " id="experience">
        <div className="container ">
          <h2 className={`${style.title}`}>Experience</h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 mt-6">
              <span className="font-fira  text-sm">2023 - Present </span>
              <a href="https://atos.net/en/" target="_">
                <div className={` ${style.experienceTitle}`}>
                  Senior Associate Engineer - Atos
                </div>
              </a>
              <p className="">
                As a Senior Associate Engineer with a year of experience in
                incident management, I have successfully handled high-pressure
                situations, ensuring smooth operations and rapid resolution of
                technical issues.
              </p>
              <p className="">Key contributions and achievements:</p>
              <ul className={` ${style.skillsList} mb-4`}>
                <li>
                  Managed and resolved critical incidents, minimizing downtime
                  and ensuring business continuity.
                </li>
                <li>
                  Automated reporting processes, significantly reducing manual
                  efforts and improving team efficiency.
                </li>
                <li>
                  Collaborated with cross-functional teams to identify and
                  implement process improvements.
                </li>
                <li>
                  Applied proactive problem-solving skills to enhance system
                  reliability and performance.
                </li>
              </ul>
              <div className={`${style.tags}`}>
                <span>Incident Management</span>
                <span>Automation</span>
                <span>Process Optimization</span>
                <span>Technical Support</span>
                <span>Problem Solving</span>
              </div>
            </div>

            <div className="col-span-12">
              <hr className="border-t-2 border-gray-100 border-opacity-10 w-full my-10 mx-auto" />
              <span className="font-fira  text-sm">2022 - 2023 </span>
              <a href="https://atos.net/en/" target="_">
                <div className={` ${style.experienceTitle}`}>
                  System Engineer - Atos
                </div>
              </a>
              <p className="">
                As a Trainee/System Engineer at Atos, I was responsible for
                server status monitoring and gained hands-on experience with
                Linux fundamentals and cloud computing.
              </p>
              <p className="">Key contributions and achievements:</p>
              <ul className={` ${style.skillsList} mb-4`}>
                <li>
                  Monitored and managed server health, uptime, and performance
                  to ensure system reliability.
                </li>
                <li>
                  Explored Linux system administration, including basic
                  commands, process management, and troubleshooting.
                </li>
                <li>
                  Gained expertise in cloud computing technologies, working with
                  Azure and AWS platforms.
                </li>
                <li>
                  Earned multiple Azure and AWS certifications, strengthening my
                  cloud infrastructure knowledge.
                </li>
                <li>
                  Collaborated with teams to analyze system issues and implement
                  solutions for improved efficiency.
                </li>
              </ul>
              <div className={`${style.tags}`}>
                <span>L1 Support</span>
                <span>Server Monitoring</span>
                <span>Cloud Computing</span>
                <span>Linux Administration</span>
                <span>Azure & AWS</span>
                <span>System Troubleshooting</span>
              </div>
            </div>
            <div className="col-span-12">
              <hr className="border-t-2 border-gray-100 border-opacity-10 w-full my-10 mx-auto" />
              <span className="font-fira  text-sm">2019 - 2022 </span>
              <a href="https://atos.net/en/" target="_">
                <div className={` ${style.experienceTitle}`}>
                  Software Development - Freelancing
                </div>
              </a>
              <p className="">
                As a freelance developer, I have worked with multiple clients on
                diverse projects, including:
              </p>
              <ul className={` ${style.skillsList}`}>
                <li>Custom website design and development</li>
                <li>Google Search Engine Optimization (SEO)</li>
                <li>UI/UX design for modern web applications</li>
                <li>Social media account management for clients</li>
                <li>School result management systems</li>
                <li>Personal portfolio branding</li>
              </ul>
              <p className="mt-3">
                I leverage the latest technologies such as Next.js, NoSQL, Git,
                Tailwind CSS, and modern UI design methodologies to deliver
                high-quality, scalable solutions.
              </p>
              <div className={`${style.tags}`}>
                <span>Next.Js</span>
                <span>Tailwind</span>
                <span>NoSQL</span>
                <span>Figma</span>
                <span>AWS-EC2</span>
                <span>Google SEO </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const projects = [
  {
    title: "Green Mountain School Kalpi",
    category: "Primary School Website",
    description:
      "A modern educational website offering school information, academic resources, and result management.",
    imageUrl:
      "https://blogger.googleusercontent.com/img/a/AVvXsEgvs2c-EHZ1CLGw4Bmo7y3Yct3GWcSADs-tg7jWm8ffab8S8ljlW61l08BOouv_J-1yBU8ZQZ1_T2jM-yGq62gsOul6l_jxtCbk0K8tGpd0w55TtHfcSYeQr480j4Ow_HmpWObU2R6Fhihr7xOx4UgSDOKADRhP-B705qdx7mQbJl_3ell3AAV3O5PoSQvk",
    technologies: ["WordPress", "Figma", "SEO"],
    liveDemo: "https://gmskalpi.in",
  },
  {
    title: "ITS Paramedical Foundation",
    category: "Institutional Website",
    description:
      "A fully responsive website for an educational institution, featuring event updates and student resources.",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtftE0zZOrCFHKe93aGRj7evfNva9Nf09sZPckL4LzjNmVv0LYKRtRfIsjhD2MsXfWVsEB62D7gYHgu1IjTVtRlN1dwgAlBB_vMCB8WU1CE4wtqHpFeBg6bYdxCvSVJc0ZsOhBwyfMbpVi-xRVNLrbrR7KUTyu2fQK79T2LN6iBuN0JrGevdE0zn8Spcev/s1340/itslko_image.png",
    technologies: ["WordPress", "SEO"],
    liveDemo: "https://itslko.org",
  },
  {
    title: "E-One Logistics",
    category: "International Freight Website",
    description:
      "A modern logistics website designed for efficient shipment management, global freight services, and hassle-free tracking.",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_y9X7Z34Wtp3Ly30LAcR4e9fxCZrRNAy_wEAY7fvfKmSStINbBB79rGkKbDu4uQhPxW2cUfgwpaG2KX_GsSb3NponxG1Ksarcvq_sWTGqts9jqd_PbVQM59vKv3zOlXXIaOF2JZC-PYn19HufZfbfOv0FFslatet6Flg3we7OOCNY3tk1k4FvtXAKM2hC/s1334/eonelogistics_image.png",
    technologies: ["Next.js", "UI/UX Design"],
    liveDemo: "https://eonelogistics.in",
  },
];

function ProjectCard({
  title,
  category,
  description,
  imageUrl,
  technologies,
  liveDemo,
}) {
  return (
    <div className="border border-gray-500 p-4 rounded-lg shadow-sm">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-contain rounded-md"
      />
      <h2 className="text-lg font-medium text-white mt-2">{title}</h2>
      <p className="text-xs text-gray-400 italic mb-2">{category}</p>
      <p className="text-sm">{description}</p>
      <div className="mt-2 flex gap-2 flex-wrap">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs px-2 py-1 border  rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a target="_blank" href={liveDemo} className="text-blue-400 text-sm">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <h2 className={`${style.title}`}>Projects</h2>
          <p className="mb-8">
            A collection of websites and applications I have developed, focusing
            on performance, user experience, and modern technologies.
          </p>

          {/* Render Projects Dynamically */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Explore More Button */}
          <div className="mt-8 text-center">
            <a
              href="/projects"
              className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-black transition"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  return (
    <>
      <section className="py-12" id="contact">
        <div className="container">
          <h2 className={`${style.title}`}>Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Whether you have a project idea, a job opportunity, or just want to
            say hi, feel free to reach out. I&apos;d love to connect!
          </p>
          {/* Contact Form */}
          <form className="max-w-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-primary"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-primary"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 mt-2 bg-primary text-black font-semibold rounded hover:bg-opacity-80 transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8">
            <p className="text-gray-400">Or connect with me on:</p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/aksinghrajpoot"
                target="_blank"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/aksinghrajpoot"
                target="_blank"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="mailto:mail@aksinghrajpoot.com"
                className="text-primary hover:underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Homepage() {
  return (
    <>
      <Hero />
      <Aboutcomponent />
      <ExperienceHome />
      <Projects />
      <Contact />
    </>
  );
}
