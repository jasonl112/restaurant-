import styles from "../styles/MenuImage.module.css";
import Image from "next/image";

const MenuImage = () => {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/menu1.jpg" layout="fill" alt="menu1"></Image>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img/menu2.jpg" layout="fill" alt="menu2"></Image>
      </div>
    </div>
    </>
  )
}


export default MenuImage;