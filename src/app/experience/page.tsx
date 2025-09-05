import type { Metadata } from 'next';
import { RiExternalLinkLine } from 'react-icons/ri';
import style from './Experience.module.css';

// Explicitly typing the metadata object for better type-safety.
export const metadata: Metadata = {
  title: 'Experience',
};


const Experience = (): React.ReactElement => {
  return (
    <>
      <section  className='page-header'>
        <div className="container">
          <h1 className="text-primary">Experience</h1>
          <hr className="border-t-2 border-primary w-[70px] mt-3 " />
          <h5 className="text-light pageDescription">
            My journey through professional roles and freelance projects.
          </h5>
          <div className="flex my-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1I2Z_UIVgi5CIhPl5pNe9FWz5OyQ5Ka2d/view?usp=sharing"
            >
              <button className="relative overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-900 px-3 backdrop-blur-3xl gap-2 py-2 text-primary">
                  View Resume <RiExternalLinkLine />
                </span>
              </button>
            </a>
          </div>

          {/* Work History Details */}
          <div className="space-y-16">
            {/* Senior Associate Engineer Role */}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Senior Associate Engineer -{' '}
                <span className="highlight">Atos</span>
              </h2>
              <p className="text-sm text-gray-400">2023 – Present</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li>
                  Handled high-pressure incidents ensuring smooth operations and
                  technical resolutions.
                </li>
                <li>
                  Reduced downtime with critical incident resolution & automated
                  workflows.
                </li>
                <li>
                  Collaborated with cross-functional teams to improve processes.
                </li>
                <li>
                  Applied problem-solving for system reliability and
                  performance.
                </li>
              </ul>
              <div className={`${style.tags} mt-4`}>
                <span>Incident Management</span>
                <span>Automation</span>
                <span>Technical Support</span>
              </div>
            </div>

            {/* System Engineer Role */}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                System Engineer – <span className="highlight">Atos</span>
              </h2>
              <p className="text-sm text-gray-400">2022 – 2023</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li>Monitored server uptime, performance & health.</li>
                <li>
                  Gained expertise with Azure, AWS, and Linux administration.
                </li>
                <li>
                  Worked with global teams to troubleshoot and streamline
                  systems.
                </li>
              </ul>
              <div className={`${style.tags} mt-4`}>
                <span>Cloud Computing</span>
                <span>Linux</span>
                <span>Azure & AWS</span>
              </div>
            </div>

            {/* Freelance Developer Role */}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Freelance Developer
              </h2>
              <p className="text-sm text-gray-400">2019 – 2022</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li>Built custom websites and web applications.</li>
                <li>Worked with clients on SEO, branding, and UI/UX design.</li>
                <li>
                  Used modern stacks like Next.js, Tailwind CSS, NoSQL, and Git.
                </li>
              </ul>
              <div className={`${style.tags} mt-4`}>
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>SEO</span>
                <span>UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
