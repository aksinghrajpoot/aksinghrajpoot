import { LinkinIcon } from "./LinkedinIcon";

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
