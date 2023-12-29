import styles from "../styles/Reservations.module.css";
import Image from "next/image";

const Reservations = () => {
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Reservation</h1>
      <p className={styles.content}>Reservations are required but are not needed! Please place the reservation at least one hour in advance of reservation time.</p>
      <button>BOOK A TABLE NOW</button>
      <h2 className={styles.subheader}>TELEPHONE RESERVATIONS</h2>
      <b className={styles.phone}>469 564 8588</b>
    </div>
  )
}


export default Reservations;