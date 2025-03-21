export default function Projects() {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6 numberedHeading">
            Projects
          </h2>
          <p className=" mb-8">
            A collection of websites and applications I have developed, focusing
            on performance, user experience, and modern technologies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Green Mountain School Kalpi */}
            <div className="border p-4 rounded-lg shadow-sm">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgvs2c-EHZ1CLGw4Bmo7y3Yct3GWcSADs-tg7jWm8ffab8S8ljlW61l08BOouv_J-1yBU8ZQZ1_T2jM-yGq62gsOul6l_jxtCbk0K8tGpd0w55TtHfcSYeQr480j4Ow_HmpWObU2R6Fhihr7xOx4UgSDOKADRhP-B705qdx7mQbJl_3ell3AAV3O5PoSQvk"
                alt="Green Mountain School Kalpi"
                className="w-full h-48 object-contain rounded-md"
              />
              <h2 className="text-lg font-medium text-white">
                Green Mountain School Kalpi
              </h2>
              <p className="text-xs text-gray-400 italic mb-2">
                Primary School Website
              </p>
              <p className="text-sm">
                A modern educational website offering school information,
                academic resources, and result management.
              </p>
              <div className="mt-2 flex gap-2">
                <span className="text-xs px-2 py-1 border rounded">
                  WordPress
                </span>
                <span className="text-xs px-2 py-1 border rounded">Figma</span>
                <span className="text-xs px-2 py-1 border rounded">SEO</span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  target="_blank"
                  href="https://gmskalpi.in"
                  className="text-blue-500 text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* SNIC Lucknow */}
            <div className="border p-4 rounded-lg shadow-sm">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtftE0zZOrCFHKe93aGRj7evfNva9Nf09sZPckL4LzjNmVv0LYKRtRfIsjhD2MsXfWVsEB62D7gYHgu1IjTVtRlN1dwgAlBB_vMCB8WU1CE4wtqHpFeBg6bYdxCvSVJc0ZsOhBwyfMbpVi-xRVNLrbrR7KUTyu2fQK79T2LN6iBuN0JrGevdE0zn8Spcev/s1340/itslko_image.png" // Replace with actual image
                alt="SNIC Lucknow"
                className="w-full h-48 object-contain rounded-md"
              />
              <h2 className="text-lg font-medium text-white">
                ITS Paramedical Foundation
              </h2>
              <p className="text-xs text-gray-400 italic mb-2">
                Institutional Website
              </p>
              <p className="text-sm">
                A fully responsive website for an educational institution,
                featuring event updates and student resources.
              </p>
              <div className="mt-2 flex gap-2">
                <span className="text-xs px-2 py-1 border rounded">
                  WordPress
                </span>
                <span className="text-xs px-2 py-1 border rounded">SEO</span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  target="_blank"
                  href="https://itslko.org"
                  className="text-blue-500 text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* ITSLKO */}
            <div className="border p-4 rounded-lg shadow-sm">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_y9X7Z34Wtp3Ly30LAcR4e9fxCZrRNAy_wEAY7fvfKmSStINbBB79rGkKbDu4uQhPxW2cUfgwpaG2KX_GsSb3NponxG1Ksarcvq_sWTGqts9jqd_PbVQM59vKv3zOlXXIaOF2JZC-PYn19HufZfbfOv0FFslatet6Flg3we7OOCNY3tk1k4FvtXAKM2hC/s1334/eonelogistics_image.png`" // Replace with actual image
                alt="ITSLKO"
                className="w-full h-48 object-contain rounded-md"
              />
              <h2 className="text-lg font-medium text-white">
                E-One Logistics
              </h2>
              <p className="text-xs text-gray-400 italic mb-2">
                International Freight Website
              </p>
              <p className="text-sm">
                A modern logistics website designed for efficient shipment
                management, global freight services, and hassle-free tracking.{" "}
              </p>
              <div className="mt-2 flex gap-2">
                <span className="text-xs px-2 py-1 border rounded">
                  Next.Js
                </span>
                <span className="text-xs px-2 py-1 border rounded">
                  UI/UX Design
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  target="_blank"
                  href="https://eonelogistics.in"
                  className="text-blue-500 text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
