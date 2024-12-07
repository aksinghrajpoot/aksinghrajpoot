import Image from "next/image";
import style from "./Contact.module.css";


function Contact(){
return(
    <>
    <section className="comtactUs" id="contact-us"> 
    <div className="container">
    <h2 className={`numberedHeading ${style.numberedHeading} `}>Contact Us</h2>
    </div>

    </section>
    
    </>
)

}
export default Contact;