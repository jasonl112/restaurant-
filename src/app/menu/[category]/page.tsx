import styles from "../../components/styles/Menu.module.css";
import { menu } from "@/app/data";
import { specialroll } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

export const CategoryPage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarHeaderTitle}>READY TO ORDER?</h2>
          <button className={styles.orderbtn}>ORDER NOW</button>
        </div>
        <div className={styles.sidebarMenus}>
          {menu.map((category) => (
            <Link href={`/menu/${category.slug}`} key={category.id}>{category.title}</Link>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainNavBar}>
          <div className={styles.search}>
            <input type="text" placeholder="Search"/>
            <button className={styles.searchbtn}>Search</button>
          </div>
        </div>
        <div className={styles.cardsWrapper}>
        {specialroll.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id}>
            <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image className={styles.categoryImage} src={`${item.img}`} layout="fill" alt="image"></Image>
              </div>
              <h1 className={styles.categoryTitle}>{item.title}</h1>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;