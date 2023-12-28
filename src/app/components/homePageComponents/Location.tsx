import styles from "../styles/Location.module.css";
import Image from "next/image";

const Location = () => {
  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h1 className={styles.title}>WElCOME TO KYOTO HIBACHI SUSHI & BAR</h1>
          <p className={styles.content}>Welcome to Kyoto, where culinary artistry meets the soul of Japan. Nestled in the heart of McKinney, our restaurant is a homage to the timeless traditions and exquisite flavors of Japanese cuisine. With a passion for authenticity, our chefs skillfully blend traditional techniques with contemporary creativity, curating a menu that tantalizes the taste buds and transports you to the bustling streets of Tokyo or the serene landscapes of Kyoto. Immerse yourself in the warmth of our welcoming ambiance, where each dish tells a story of dedication to craftsmanship and a commitment to delivering an unparalleled dining experience. At Kyoto, we invite you to savor the essence of Japan, one delectable bite at a time.</p>
        </div>
        <div className={styles.item}>
          <Image width="382" height="510" src="/img/bar.jpg" className={styles.image} alt="bar"></Image>
          <div className={styles.text}>
            <b>Full Bar</b>
           <p>Sip, savor, and celebrate the art of indulgence at our bar, where crafted cocktails and vibrant vibes converge for an unforgettable experience.</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.item}>
          <Image width="520" height="350" src="/img/exterior.jpg" className={styles.image} alt="exterior"></Image>
          <div className={styles.text}>
            <b>Inviting Front</b>
            <p>Our restaurant beckons with a charming exterior, adorned with inviting lights and a touch of modern allure, promising a culinary adventure from the moment you lay eyes on it.</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image width="520" height="350" src="/img/host.jpg" className={styles.image} alt="host"></Image>
          <div className={styles.text}>
            <b>Cozy Place</b>
            <p>Immerse yourself in the captivating ambiance of our restaurant's interior, where contemporary elegance meets cozy charm, creating the perfect backdrop for culinary enchantment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Location;