import styles from "../styles/Gallery.module.css";
import Image from "next/image";

const Gallery = () => {
  return(
    <div className={styles.container}>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery1.jpg" layout="fill" alt="gallery"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery2.jpg" layout="fill" alt="gallery"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery3.jpg" layout="fill" alt="gallery"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery4.jpg" layout="fill" alt="gallery"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery5.jpg" layout="fill" alt="gallery"></Image>
      </div>
      <div className={styles.ImgContainer}>
        <Image src="/img/gallery6.jpg" layout="fill" alt="gallery"></Image>
      </div>
    </div>
  )
}


export default Gallery;