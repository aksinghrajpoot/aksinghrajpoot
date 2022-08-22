import FixedIcons from "./FixedIcons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.svgx}>
      <div className="container text-elight py-10">
        <FixedIcons/>
        <hr className="h-0.5 w-[200px] md:w-[300px] border-none bg-elight/30 my-5 mx-auto" />
        <p className="text-center font-fira text-sm">
          Made with ☕ by A K Singh
        </p>
      </div>
    </footer>
  );
}

export default Footer;
