import styles from "../styles/Signature.module.css";
import Image from "next/image";

const Signature = () => {
  return(
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.titleText}>
          <h2 className={styles.heading}>HOMEMADE</h2>
          <h1 className={styles.title}>Signature Menu</h1>
          <p className={styles.content}>Embark on a tantalizing journey with our sushi restaurant's special menu, a symphony of innovative rolls and exquisite flavors meticulously crafted to elevate your sushi experience. </p>
      </div>
    </div>
  )
}


export default Signature;