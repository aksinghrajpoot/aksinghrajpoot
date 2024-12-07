export const LinkinIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 34 34"
        fill="currentColor"
        className="inline"
      >
        <g>
          <rect
            x="0"
            y="0"
            width="34"
            height="34"
            rx="5"
            ry="5"
            fill="#0A66C2"
          />
          <path
            d="M10.089 13.501H5.917v13.667h4.172V13.501zM8.003 9.308a2.412 2.412 0 1 1 0-4.824 2.412 2.412 0 0 1 0 4.824zM28.083 27.168h-4.172v-7.383c0-1.761-.034-4.034-2.459-4.034-2.459 0-2.833 1.918-2.833 3.907v7.51h-4.172v-13.667h4.005v1.865h.055c.556-1.052 1.914-2.159 3.941-2.159 4.204 0 4.984 2.762 4.984 6.351v7.61z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </>
  );
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="container py-16 md:py-0">
        <div className="text-primary mb-3 font-fira text-lg">
          Hi, my name is
        </div>
        <h1 className="text-light text-5xl lg:text-6xl font-bold">A K Singh</h1>
        <h2 className="text-3xl lg:text-6xl font-bold mt-2">
          I build creative application.
        </h2>
        <p className="py-6 lg:w-[500px] text-lg">
          I&lsquo;m a software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&lsquo;m focused on building accessible products and applications as
          freelancer.
        </p>
        <a target="_" href="https://linkedin.com/in/aksinghrajpoot">
          <button className="py-3 px-7 font-fira border border-primary rounded-md text-primary mt-5">
            Let&lsquo;s connect on <LinkinIcon />
          </button>
        </a>
      </div>
    </section>
  );
}
