import { CiLinkedin } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";

import style from "./Hero.module.css";
import Clock from "../About/Clock";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className={`${style.hero} p-0`}>
      <div className="container py-4 lg:py-0 lg:min-h-[calc(100vh-75px)] flex items-center">
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
