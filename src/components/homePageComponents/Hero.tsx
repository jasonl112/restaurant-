import styles from "../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return(
    <div className={styles.hero}>
      <div className={styles.content}>
        <h3>New for 2023</h3>
        <h1>Kyoto Hibachi</h1>
        <h1>Sushi & Bar</h1>
        <h2>SUSHI, HIBACHI, BENTO BOXES, SOUPS</h2>
        <div className="buttons">
          <button>SEE MENU & ORDER</button>
          <button>TABLE RESERVATIONS</button>
        </div>
        
      </div>
    </div>
  )
}


export default Hero;