import style from "./Experience.module.css";

export default function ExperienceHome() {
  return (
    <>
      <section className="experience " id="experience">
        <div className="container ">
          <h2 className="numberedHeading"> Experience</h2>
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
