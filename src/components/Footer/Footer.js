import FixedIcons from "./Fixedicons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.svgx} mt-auto`}>
      <div className="container text-elight py-10">
        <FixedIcons/>
        <hr className="h-[1.4px] w-[200px] md:w-[300px] border-none bg-gray-500 my-5 mx-auto" />
        <p className="text-center font-fira text-sm">
          Made with {/*☕*/}❤️ by <a className="text-primary" href="https://linkedin.com/in/aksinghrajpoot">A K Singh</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
