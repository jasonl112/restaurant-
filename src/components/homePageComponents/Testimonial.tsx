import styles from "../styles/Testimonial.module.css";
import Image from "next/image";

const Testimonal = () => {
  return(
    <div className={styles.container}>
      <div className={styles.titleText}>
          <h2 className={styles.heading}>Testimonial</h2>
          <h1 className={styles.title}>What They Say</h1>
        </div>
      <div className={styles.overlay}></div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image src="/img/avatar1.png" width="64" height="64" className={styles.image} alt="avatar"></Image>
          <div className={styles.text}>
            <p>I have been looking for my next Favorite Hibachi Restaurant since my last favorite closed down almost eight years ago. This. Is. It! The food is wonderful! Best Fried Rice I have ever had. Their salmon is divine. Steak and chicken and good as well.
            </p>
            <h3 className={styles.name}>Jess Glotzbach</h3>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/avatar2.png" width="64" height="64" className={styles.image} alt="avatar"></Image>
          <div className={styles.text}>
            <p>I've eaten here for three days in a row, no joke. Great sushi and service.Great food and good service. I've had a lot of sushi in a lot of places, but this place has great rolls. The best roll is the Sunrise roll, absolutely delicious.
            </p>
            <h3 className={styles.name}>Lunchbox Studios</h3>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/img/avatar3.png" width="64" height="64" className={styles.image} alt="avatar"></Image>
          <div className={styles.text}>
            <p>The staff and chefs were amazing and very sweet! The place is nice and clean and the food is amazing too! This will be my new go to spot for Habachi for sure! It’s nice feeling like there’s now a new CLEAN spot to enjoy Habachi!
            </p>
            <h3 className={styles.name}>Chelsey Martinez</h3>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Testimonal;