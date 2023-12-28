import styles from "../styles/Map.module.css";
import Image from "next/image";

const Map = () => {
  return(
    <div className={styles.container}>
      <div className={styles.googlemap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.996455098574!2d-96.6639553237807!3d33.21418916151547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c134e9c30eecd%3A0xbe177ac04987236c!2sKyoto%20Hibachi%20Sushi%20%26%20Bar!5e0!3m2!1sen!2sus!4v1700022755418!5m2!1sen!2sus" width="100%" height="100%" loading="lazy" ></iframe>
    </div>
    </div>
  )
}


export default Map;