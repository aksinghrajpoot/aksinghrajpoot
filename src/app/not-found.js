import Link from "next/link";

export const metadata = {
  title: {
    absolute: "404 Not Found",
  },
};

export default function Custom404() {
  return (
    <>
       <div className="flex items-center justify-center  bg-gradient-to-r  text-light animate-fadeIn">
        <div className="text-center p-6 space-y-4">
          {/* Animated 404 Text */}
          <h1 className="mt-36 text-7xl lg:text-8xl font-bold text-primary animate-bounce text-shadow-glow">
            404
          </h1>

          {/* Description with zoom effect */}
          <p className="text-2xl font-light text-light animate-zoomIn">
            Whoops! Looks like you&apos;re lost in cyberspace.
          </p>

          {/* Additional Message */}
          <p className="mt-2 text-lg font-light text-light animate-zoomIn">
            The page you&apos;e looking for does not exist. Let&apos;s get you back on track.
          </p>

          {/* Call-to-Action Button */}
          <Link href="/"
            className="border-2 border-primary mt-14 inline-block px-8 py-4 text-lg font-semibold text-dark  rounded-full hover:bg-primary hover:bg-opacity-20  transition transform hover:scale-105"
          >
            Return to Homepage
            </Link>
        </div>
      </div>
    
    </>
  );
}
