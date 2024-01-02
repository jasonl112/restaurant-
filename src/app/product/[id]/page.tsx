import styles from "@/components/styles/Product.module.css";
import Image from "next/image";
import { singleProduct } from "@/app/data";
import Price from "@/components/price";
import { ProductType } from "@/types/types";

const getData = async (id:string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {cache:"no-store"});

  if (!res.ok){
    throw new Error("Failed!");
  }

  return res.json();
}

const Product = async ({params}:{params:{id:string}}) => {

  const singleProduct:ProductType = await getData(params.id);
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
        <Price product={singleProduct}/>         
      </div>
    </div>
  );
};

export default Product;