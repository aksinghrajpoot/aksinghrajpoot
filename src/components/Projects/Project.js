const projects = [
    {
      title: "Green Mountain School Kalpi",
      category: "Primary School Website",
      description: "A modern educational website offering school information, academic resources, and result management.",
      imageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEgvs2c-EHZ1CLGw4Bmo7y3Yct3GWcSADs-tg7jWm8ffab8S8ljlW61l08BOouv_J-1yBU8ZQZ1_T2jM-yGq62gsOul6l_jxtCbk0K8tGpd0w55TtHfcSYeQr480j4Ow_HmpWObU2R6Fhihr7xOx4UgSDOKADRhP-B705qdx7mQbJl_3ell3AAV3O5PoSQvk",
      technologies: ["WordPress", "Figma", "SEO"],
      liveDemo: "https://gmskalpi.in",
    },
    {
      title: "ITS Paramedical Foundation",
      category: "Institutional Website",
      description: "A fully responsive website for an educational institution, featuring event updates and student resources.",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtftE0zZOrCFHKe93aGRj7evfNva9Nf09sZPckL4LzjNmVv0LYKRtRfIsjhD2MsXfWVsEB62D7gYHgu1IjTVtRlN1dwgAlBB_vMCB8WU1CE4wtqHpFeBg6bYdxCvSVJc0ZsOhBwyfMbpVi-xRVNLrbrR7KUTyu2fQK79T2LN6iBuN0JrGevdE0zn8Spcev/s1340/itslko_image.png",
      technologies: ["WordPress", "SEO"],
      liveDemo: "https://itslko.org",
    },
    {
      title: "E-One Logistics",
      category: "International Freight Website",
      description: "A modern logistics website designed for efficient shipment management, global freight services, and hassle-free tracking.",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_y9X7Z34Wtp3Ly30LAcR4e9fxCZrRNAy_wEAY7fvfKmSStINbBB79rGkKbDu4uQhPxW2cUfgwpaG2KX_GsSb3NponxG1Ksarcvq_sWTGqts9jqd_PbVQM59vKv3zOlXXIaOF2JZC-PYn19HufZfbfOv0FFslatet6Flg3we7OOCNY3tk1k4FvtXAKM2hC/s1334/eonelogistics_image.png",
      technologies: ["Next.js", "UI/UX Design"],
      liveDemo: "https://eonelogistics.in",
    }
  ];
  
  function ProjectCard({ title, category, description, imageUrl, technologies, liveDemo }) {
    return (
      <div className="border border-gray-500 p-4 rounded-lg shadow-sm">
        <img src={imageUrl} alt={title} className="w-full h-48 object-contain rounded-md" />
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
  
  export default function Projects() {
    return (
      <>
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-6 numberedHeading">Projects</h2>
            <p className="mb-8">
              A collection of websites and applications I have developed, focusing on performance, user experience, and modern technologies.
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
  