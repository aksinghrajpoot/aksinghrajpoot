import type { Metadata } from 'next';
import style from './About.module.css';


export const metadata: Metadata = {
  title: 'About',
};


const About = (): React.ReactElement => {
  return (
    <>
      <section className='page-header'>
        <div className="container min-h-fit">
          <h1 className="text-primary">About Me</h1>
          <hr className="border-t-2 border-primary w-[70px] mt-3" />
          <h5 className="text-light pageDescription">
            Know more about my journey, skills, and passion for web development.
          </h5>
          <main>
            <p className="mt-4">
              Hello! I&apos;m Ashok Singh, a passionate Front-end Developer,
              UI/UX Enthusiast, and Software Engineer from India. With a strong
              foundation in web development, modern UI/UX design, and digital
              product strategy, I craft seamless, high-performance experiences
              for the web.
            </p>
          </main>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-0 select-none">
        <div className="container">
          <h3 className="text-accent font-semibold">Technical Skills</h3>

          {/* Front End Skills */}
          <h5 className="text-light">Front End :</h5>
          <div className={`${style.skills}`}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React.Js</span>
            <span>Next.Js</span>
            <span>Bootstrap</span>
            <span>Tailwind CSS</span>
            <span>Figma</span>
          </div>

          {/* Back End Skills */}
          <h5 className="text-light">Back End :</h5>
          <div className={`${style.skills}`}>
            <span>Node.Js</span>
            <span>Express JS</span>
            <span>AWS</span>
            <span>Azure</span>
            <span>REST API</span>
            <span>No SQL</span>
            <span>Firebase</span>
          </div>

          {/* Cloud & DevOps Skills */}
          <h5 className="text-light">Cloud & Devops :</h5>
          <div className={`${style.skills}`}>
            <span>AWS (EC2, S3)</span>
            <span>Azure</span>
            <span>Docker</span>
            <span>Kubernetes </span>
            <span>Git</span>
            <span>Github</span>
            <span>CI/CD Pipelines</span>
          </div>

          {/* SEO & Performance Skills */}
          <h5 className="text-light">SEO & Performance Optimization :</h5>
          <div className={`${style.skills}`}>
            <span>Google SEO</span>
            <span>Core Web Vitals Optimization</span>
            <span>Structured Data</span>
            <span>Schema Markup </span>
          </div>

          {/* IT Operations Skills */}
          <h5 className="text-light"> IT Operations & Incident Management :</h5>
          <div className={`${style.skills}`}>
            <span>ITIL Framework</span>
            <span>Incident Management</span>
            <span>Monitoring</span>
            <span>Troubleshooting</span>
            <span>IT Automation</span>
          </div>

          {/* Tools & Productivity */}
          <h5 className="text-light"> Tools & Productivity :</h5>
          <div className={`${style.skills}`}>
            <span>Wordpress</span>
            <span>Elementor</span>
            <span>Postman API Testing</span>
            <span>VS Code</span>
            <span>Chrome Dev Tools</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
