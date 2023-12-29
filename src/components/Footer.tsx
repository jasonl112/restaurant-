import styles from "./styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Kyoto</h1>
        <p className={styles.text}>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ut repellendus ipsa incidunt modi consectetur accusamus, consequuntur maxime sunt adipisci temporibus quo at odio fuga alias, aspernatur explicabo. Maiores, quaerat.
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Our Location</h1>
        <p className={styles.text}>
            1620 N Hardin Blvd Ste 1200
            <br /> Mckinney 75071, TX USA
            <br /> (469) 564 8588
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Quick Link</h1>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Menu</a>
          <a href="#">Testimonial</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Opening Hours</h1>
        <p className={styles.text}>
              MONDAY to FRIDAY
              <br /> Lunch: 11:00am - 2:30pm
              <br /> Dinner : 4:30pm - 10:00pm
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY
              <br /> 12:00pm – 11:00pm
          </p>
          <button>TABLE RESERVATIONS</button>
      </div>
    </div>
    </>
  )
}


export default Footer;