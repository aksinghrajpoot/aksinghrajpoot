import Head from "next/head";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <section>
        <div className="container min-h-fit">
          <h1 className="text-primary">About Us</h1>
          <hr className="border-t-2 border-primary w-[70px] mt-3" />
          <p className="mt-4">
            Hello! I&apos;m Ashok Singh, a passionate Front-end Developer, UI/UX
            Enthusiast, and Software Engineer from India. With a strong
            foundation in web development, modern UI/UX design, and digital
            product strategy, I craft seamless, high-performance experiences for
            the web.
          </p>{" "}
        </div>
      </section>
    </>
  );
}
