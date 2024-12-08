import style from "./Experience.module.css";

export default function ExperienceHome() {
  return (
    <>
      <section className="experience " id="experience">
        <div className="container ">
          <h2 className="numberedHeading ">Experience</h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 mt-6">
              <span className="font-fira  text-sm">2023 - Present </span>
              <a href="https://atos.net/en/" target="_">
                <div className={` ${style.experienceTitle}`}>
                  Senior Associate Engineer - Atos
                </div>
              </a>
              <p className="">
                With a year in incident management and a robust background as a
                Senior Associate Engineer, I thrive in high-pressure
                environments, ensuring seamless operations and swift resolutions
                to technical issues. I{`'`}ve automated reporting processes,
                drastically reducing manual efforts and boosting team
                efficiency. My technical expertise and proactive problem-solving
                drive continuous improvement and deliver outstanding results.
              </p>
              <div className={`${style.tags}`}>
                <span>Incident Management</span>
                <span>Automation</span>
              </div>
            </div>
            <div className="col-span-12 mt-6">
              <span className="font-fira  text-sm">2022 - 2023 </span>
              <a href="https://atos.net/en/" target="_">
                <div className={` ${style.experienceTitle}`}>
                  System Enginner - Atos
                </div>
              </a>
              <p className="">
                As a Trainee/System Engineer for a year, I managed server status
                monitoring, explored Linux basics, and delved into cloud
                computing. I earned multiple Azure and AWS certifications,
                enhancing my technical expertise and paving the way for my
                current role.
              </p>
              <div className={`${style.tags}`}>
                <span>L1 Support</span>
                <span>Server monitoring</span>
                <span>Cloud computing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
