import styles from "../../components/styles/Product.module.css";
import Image from "next/image";
import { singleProduct } from "@/app/data";
import Price from "@/app/components/price";

const Product = () => {

  return (
      <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src= {`${singleProduct.img}`} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{singleProduct.title}</h1>
        <p className={styles.desc}>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.extraOptions!}/>
        
      </div>
    </div>
  );
};

export default Product;